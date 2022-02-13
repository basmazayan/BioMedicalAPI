using BiomedicalSystemAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HealthDistrictsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public HealthDistrictsController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/HealthDistricts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HealthDistrict>>> GetHealthDistricts()
        {
            var HealthDistricts = await _context.HealthDistricts.ToListAsync();
            return HealthDistricts;
        }

        [HttpGet]
        [Route("getHealthDirectoryBydirId/{directoryId}")]
        public async Task<ActionResult<IEnumerable<HealthDirectory>>> getHealthDistrictsByempDistrictId(int directoryId)
        {

            var HealthDirectory = await _context.HealthDirectories.Where(e => e.Id == directoryId)
                .Select(e => new HealthDirectory
                {
                    Id = e.Id,
                    HealthDirectoryCode = e.HealthDirectoryCode,
                     HealthDirectoryName= e.HealthDirectoryName,
                    HealthDirectoryNameAr = e.HealthDirectoryNameAr,
                    
                }).ToListAsync();
            return HealthDirectory;
        }

        // GET: api/HealthDistricts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HealthDistrict>> GetHealthDistrict(int id)
        {
            var HealthDistrict = await _context.HealthDistricts.FindAsync(id);

            if (HealthDistrict == null)
            {
                return NotFound();
            }
            return HealthDistrict;
        }
        [HttpGet]
        [Route("AllHealthDistrictsByhealthDirectoryId/{DirectoryId}")]
        public async Task<ActionResult<IEnumerable<HealthDistrict>>> AllHealthDistrictsByhealthDirectoryId(int DirectoryId)
        {
            if (DirectoryId != 0)
            {
                return await _context.HealthDistricts.Where(d => d.HealthDirectoryId == DirectoryId).ToListAsync();
            }
            return BadRequest();
        }
        [HttpGet]
        [Route("AllHealthDistrictsByhealthDirectoryName/{DirectoryName}")]
        public async Task<ActionResult<IEnumerable<HealthDistrict>>> AllHealthDistrictsByhealthDirectoryName(string DirectoryName)
        {
            if (DirectoryName != null)
            {
                var dists = await _context.HealthDistricts.Where(d => d.HealthDistrictName == DirectoryName || d.HealthDistrictNameAr== DirectoryName).ToListAsync();

                return dists;
            }
            return BadRequest();
        }
        [HttpGet("GetHealthDistrictsIdbyName/{name}")]
        public async Task<ActionResult<int>> GetHealthDistrictsIdbyName(string name)
        {
            var HealthDistrict = await _context.HealthDistricts.FirstOrDefaultAsync(d => d.HealthDistrictName == name || d.HealthDistrictNameAr == name);

            if (HealthDistrict == null)
            {
                return NotFound();
            }
            return HealthDistrict.Id;
        }
        //[HttpGet("GetHealthDistrictIdByName/{name}")]
        //public async Task<ActionResult<int>> GetHealthDistrictIdByName(string name)
        //{
        //    var HealthDistrict = await _context.HealthDistricts.FirstOrDefaultAsync(d => d.HealthDistrictName == name || d.HealthDistrictNameAr == name);

        //    if (HealthDistrict == null)
        //    {
        //        return NotFound();
        //    }
        //    return HealthDistrict.Id;
        //}


        // PUT: api/HealthDistricts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHealthDistricts(int id, HealthDistrict HealthDistrict)
        {
            if (id != HealthDistrict.Id)
            {
                return BadRequest();
            }

            _context.Entry(HealthDistrict).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HealthDistrictExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
       
        // POST: api/HealthDistricts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<HealthDistrict>> PostHealthDistrict(HealthDistrict healthDistrict)
        {
            _context.HealthDistricts.Add(healthDistrict);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHealthDistrict", new { id = healthDistrict.Id }, healthDistrict);
        }
        
        // DELETE: api/HealthDistricts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<HealthDistrict>> DeletehealthDistrict(int id)
        {
            var healthDistrict = await _context.HealthDistricts.FindAsync(id);
            if (healthDistrict == null)
            {
                return NotFound();
            }

            _context.HealthDistricts.Remove(healthDistrict);
            await _context.SaveChangesAsync();

            return healthDistrict;
        }

        private bool HealthDistrictExists(int id)
        {
            return _context.HealthDistricts.Any(e => e.Id == id);
        }
    }
}

