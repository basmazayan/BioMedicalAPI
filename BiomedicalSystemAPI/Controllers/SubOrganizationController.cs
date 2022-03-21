using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.PagingRepository;
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
    public class SubOrganizationController : ControllerBase
    {
        // GET: SubOrganizationController


      
            private readonly ApplicationDbContext _context;
            private readonly IPagingRepository _pagingRepository;

        public SubOrganizationController(ApplicationDbContext context, IPagingRepository pagingRepository)
        {
            _context = context;
            _pagingRepository = pagingRepository;
        }

        // GET: api/subOrganizations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SubOrganization>>> GetsubOrganizations()
        {
            return await _context.SubOrganizations.ToListAsync();
        }
        [HttpPut]
        [Route("GetSubOrgsWithPaging")]
        public IEnumerable<SubOrganization> GetSubOrgsWithPaging(PagingParameter page)
        {
            var subLst = _context.SubOrganizations.ToList();
            return _pagingRepository.GetAll(page, subLst);
        }
        [HttpGet]
        [Route("getcount")]
        public int count()
        {
            return _pagingRepository.Count<SubOrganization>();
        }
        [Route("AllSubOrganizationByOrganizationId/{orgId}")]
            [HttpGet]
            public async Task<ActionResult<IEnumerable<SubOrganization>>> GetSubOrganizationByOrganizationId(int orgId)
            {
                var SubCategories = await _context.SubOrganizations.Where(e => e.Id == orgId)
                      .Include(e => e.organization)
                      .Select(e => new SubOrganization
                      {
                          Id = e.Id,
                          Name = e.Name,
                         NameAr  = e.NameAr,
                          organizationId = e.organizationId
                      }).ToListAsync();
                return SubCategories;
            }
            // GET: api/subOrganizations/5
            [HttpGet("{id}")]
            public async Task<ActionResult<SubOrganization>> GetSubOrganization(int id)
            {
                var SubOrganization = await _context.SubOrganizations.FindAsync(id);

                if (SubOrganization == null)
                {
                    return NotFound();
                }

                return SubOrganization;
            }

        // PUT: api/subOrganizations/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSubOrganization(int id, SubOrganization SubOrganization)
        {
            if (id != SubOrganization.Id)
            {
                return BadRequest();
            }
            else if (id == SubOrganization.Id)
            {

                var SubOrganizations = _context.SubOrganizations.Where(e => e.Id != SubOrganization.Id).ToList();
                var checkName = SubOrganizations.Where(e => e.Name == SubOrganization.Name).ToList();
                var SubOrganizationsAr = SubOrganizations.Where(e => e.NameAr == SubOrganization.NameAr).ToList();

                if (checkName.Count > 0)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response
                    {
                        Status = "Error",
                        Message = "SubOrganization Already exists!",
                        MessageAr = "هذا الاسم مسجل سابقاً"
                    });
                }
                else if (SubOrganizationsAr.Count > 0)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response
                    {
                        Status = "Error",
                        Message = "SubOrganizationAr Already exists!",
                        MessageAr = "هذا الاسم مسجل سابقاً"
                    });
                }
                else
                {
                    _context.Entry(SubOrganization).State = EntityState.Modified;

                    try
                    {
                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!SubOrganizationExists(id))
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
            return NoContent();
        }
            // POST: api/subOrganizations
            // To protect from overposting attacks, enable the specific properties you want to bind to, for
            // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
            [HttpPost]
            public async Task<ActionResult<SubOrganization>> PostSubOrganization(SubOrganization SubOrganization)
            {
            var subOrganizations = _context.SubOrganizations.Where(e => e.Name == SubOrganization.Name).ToList();
            var subOrganizationsAr = _context.SubOrganizations.Where(e => e.NameAr == SubOrganization.NameAr).ToList();

            if (subOrganizations.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response
                {
                    Status = "Error",
                    Message = "SubOrganuzation Already exists!",
                    MessageAr = "هذا الاسم مسجل سابقاً"
                });
            }
            else if (subOrganizationsAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response
                {
                    Status = "Error",
                    Message = "SubOrganuzationAr Already exists!",
                    MessageAr = "هذا الاسم مسجل سابقاً"
                });
            }
            else
            {
                _context.SubOrganizations.Add(SubOrganization);
                try
                {
                    await _context.SaveChangesAsync();
                }
                catch(Exception ex)
                {
                    string str = ex.Message;
                }

                return CreatedAtAction("GetSubOrganization", new { id = SubOrganization.Id }, SubOrganization);
            }
            }

            // DELETE: api/subOrganizations/5
            [HttpDelete("{id}")]
            public async Task<ActionResult<SubOrganization>> DeleteSubOrganization(int id)
            {
                var SubOrganization = await _context.SubOrganizations.FindAsync(id);
                if (SubOrganization == null)
                {
                    return NotFound();
                }

                _context.SubOrganizations.Remove(SubOrganization);
                await _context.SaveChangesAsync();

                return SubOrganization;
            }

            private bool SubOrganizationExists(int id)
            {
                return _context.SubOrganizations.Any(e => e.Id == id);
            }
        }
    }
