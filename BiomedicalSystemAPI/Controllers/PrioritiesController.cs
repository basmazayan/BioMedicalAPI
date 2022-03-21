using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BiomedicalSystemAPI.Models;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PrioritiesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PrioritiesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Priorities
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Priority>>> GetAssets()
        {
            return await _context.priorities.ToListAsync();
        }

        // GET: api/Priorities/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Priority>> GetPriority(int id)
        {
            var priority = await _context.priorities.FindAsync(id);

            if (priority == null)
            {
                return NotFound();
            }

            return priority;
        }

 
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPriority(int id, Priority priorityObj)
        {
            if (id != priorityObj.Id)
            {
                return BadRequest();
            }
            var lstpriorityCodes = _context.Priorities.Where(a => a.Code == priorityObj.Code && a.Id != id).ToList();
            if (lstpriorityCodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Periority code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstpriorityNames = _context.Priorities.Where(a => a.PriorityLevel == priorityObj.PriorityLevel && a.Id != id).ToList();
            if (lstpriorityNames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Periority name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }

            var lstpriorityNamesAr = _context.Priorities.Where(a => a.PriorityLevelAr == priorityObj.PriorityLevelAr && a.Id != id).ToList();
            if (lstpriorityNamesAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "Periority arabic name already exist", MessageAr = "هذا الاسم العربي  مسجل سابقاً" });
            }




            else
            {


                _context.Entry(priorityObj).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PriorityExists(id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }

            return Ok();
        }


        [HttpPost]
        public async Task<ActionResult<Priority>> PostPriority(Priority priorityObj)
        {
            var lstpriorityCodes = _context.Priorities.Where(a => a.Code == priorityObj.Code).ToList();
            if (lstpriorityCodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Periority code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstpriorityNames = _context.Priorities.Where(a => a.PriorityLevel == priorityObj.PriorityLevel).ToList();
            if (lstpriorityNames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Periority name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });

            }

            var lstpriorityNamesAr = _context.Priorities.Where(a => a.PriorityLevelAr == priorityObj.PriorityLevelAr).ToList();
            if (lstpriorityNamesAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "Periority arabic name already exist", MessageAr = "هذا الاسم العربي  مسجل سابقاً" });
            }


            else
            {

                _context.priorities.Add(priorityObj);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetPriority", new { id = priorityObj.Id }, priorityObj);
            }
        }

        // DELETE: api/Priorities/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Priority>> DeletePriority(int id)
        {
            var priority = await _context.priorities.FindAsync(id);
            if (priority == null)
            {
                return NotFound();
            }

            _context.priorities.Remove(priority);
            await _context.SaveChangesAsync();

            return priority;
        }

        private bool PriorityExists(int id)
        {
            return _context.Assets.Any(e => e.Id == id);
        }
    }
}
