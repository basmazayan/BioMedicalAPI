using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.HealthCareUnitRepositories;
using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Repositories.PagingRepository;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HealthCareUnitsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IHealthCareUnitRepository _healthCareUnitRepository;
        private readonly IPagingRepository _pagingRepository;

        public HealthCareUnitsController(ApplicationDbContext context, IHealthCareUnitRepository healthCareUnitRepository,
            IPagingRepository pagingRepository)
        {
            _context = context;
            _healthCareUnitRepository = healthCareUnitRepository;
            _pagingRepository = pagingRepository;
        }
        [HttpPut]
        [Route("GetHospitalsWithPaging")]
        public IEnumerable<HealthCareUnitDTO> GetHospitalsWithPaging(PagingParameter page)
        {
            var hosLst = _healthCareUnitRepository.GetAll().ToList();
            return _pagingRepository.GetAll<HealthCareUnitDTO>(page, hosLst);
        }
        [HttpGet]
        [Route("getcount")]
        public int count()
        {
            return _pagingRepository.Count<Hospital>();
        }
        // GET: api/HealthCareUnits
        [HttpGet]
        public IEnumerable<HealthCareUnitDTO> GetHealthCareUnits()
        {
            var units= _healthCareUnitRepository.GetAll();
            return units;
        }
        [HttpGet]
        [Route("GetHealthCareUnitsByDistrictId/{districtId}")]
        public async Task<ActionResult<IEnumerable<Hospital>>> GetHealthCareUnitsByDistrictId(int districtId)
        {

            var HealthDistricts = await _context.Hospitals.Where(e => e.Id == districtId)
                .Include(e => e.City)
                .Select(e => new Hospital
                {
                    Id = e.Id,
                    Code = e.Code,
                    Name = e.Name,
                    NameAr = e.NameAr,
                    CityId = e.CityId,
                }).ToListAsync();
            return HealthDistricts;
        }

        // GET: api/HealthCareUnits/5
        [HttpGet("{id}")]
        public ActionResult< HealthCareUnitDTO> GetHealthCareUnit(int id)
        {
            if (id != 0)
            {
                return _healthCareUnitRepository.GetById(id);
            }
            return NotFound();
        }

        // PUT: api/HealthCareUnits/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public IActionResult PutHealthCareUnit(int id, HealthCareUnitDTO healthCareUnit)
        {
            if (id != healthCareUnit.Id)
            {
                return BadRequest();
            }
            else
            {
                //var healthUnits = _context.HealthCareUnits.Where(e => e.Id != id).ToList();
                var CheckCode = _context.Hospitals.Where(e => e.Code == healthCareUnit.HealthCareUnitCode && e.Id != id).ToList();
                var checkName = _context.Hospitals.Where(e => e.Name == healthCareUnit.HealthCareUnitName && e.Id != id).ToList();
                var checkNameAr = _context.Hospitals.Where(e => e.NameAr == healthCareUnit.HealthCareUnitNameAr && e.Id != id).ToList();
                if (CheckCode.Count > 0)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Department code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
                }
                if (checkName.Count > 0)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response
                    {
                        Status = "name",
                        Message = "Hospital Name Already exists!",
                        MessageAr = "هذا الاسم مسجل سابقاً"
                    });
                }
                else if (checkNameAr.Count > 0)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response
                    {
                        Status = "nameAr",
                        Message = "Hospital NameAr Already exists!",
                        MessageAr = "هذا الاسم مسجل سابقاً"
                    });
                }
                else
                {
                    _healthCareUnitRepository.Update(healthCareUnit);

                    try
                    {
                        _healthCareUnitRepository.Save();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!HealthCareUnitExists(id))
                        {
                            return NotFound();
                        }
                        else
                        {
                            throw;
                        }
                    }
                }
            }
            return Ok();
        }

        // POST: api/HealthCareUnits
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public ActionResult<Hospital> PostHealthCareUnit(HealthCareUnitDTO healthCareUnit)
        {
            var CheckCode = _context.Hospitals.Where(e => e.Code == healthCareUnit.HealthCareUnitCode).ToList();

            var healthCareUnits = _context.Hospitals.Where(e => e.Name == healthCareUnit.HealthCareUnitName).ToList();
            var healthCareUnitsAr = _context.Hospitals.Where(e => e.NameAr == healthCareUnit.HealthCareUnitNameAr).ToList();
            if (CheckCode.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Health care unit code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            if (healthCareUnits.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response
                {
                    Status = "name",
                    Message = "Hospital Name Already exists!",MessageAr = "هذا الاسم مسجل سابقاً"
                });
            }
           else if (healthCareUnitsAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response
                {
                    Status = "nameAr",
                    Message = "Hospital NameAr Already exists!",
                    MessageAr = "هذا الاسم مسجل سابقاً"
                });
            }
            else
            {
                _healthCareUnitRepository.Add(healthCareUnit);
                _healthCareUnitRepository.Save();
                return CreatedAtAction("GetHealthCareUnit", new { id = healthCareUnit.Id }, healthCareUnit);
            }
        }
        // DELETE: api/HealthCareUnits/5
        [HttpDelete("{id}")]
        public IActionResult DeleteHealthCareUnit(int id)
        {        
            if (id == 0)
            {
                return NotFound();
            }

            _healthCareUnitRepository.Delete(id);
            _healthCareUnitRepository.Save();
            return NoContent();
        }
        private bool HealthCareUnitExists(int id)
        {
            return _context.Hospitals.Any(e => e.Id == id);
        }

    }
}
