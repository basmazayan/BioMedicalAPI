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
    public class EquipmentStatusController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EquipmentStatusController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/EquipmentStatus
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EquipmentStatus>>> GetEquipmentStatus()
        {
            return await _context.EquipmentStatus.ToListAsync();
        }

        // GET: api/EquipmentStatus/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EquipmentStatus>> GetEquipmentStatus(int id)
        {
            var equipmentStatus = await _context.EquipmentStatus.FindAsync(id);

            if (equipmentStatus == null)
            {
                return NotFound();
            }

            return equipmentStatus;
        }

        // PUT: api/EquipmentStatus/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEquipmentStatus(int id, EquipmentStatus equipmentStatusObj)
        {
            if (id != equipmentStatusObj.Id)
            {
                return BadRequest();
            }

            var lstStatusCodes = _context.EquipmentStatus.Where(a => a.Code == equipmentStatusObj.Code && a.Id != id).ToList();
            if (lstStatusCodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Status code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstStatusNames = _context.EquipmentStatus.Where(a => a.Status == equipmentStatusObj.Status && a.Id != id).ToList();
            if (lstStatusNames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Status name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }

            var lstStatusNamesAr = _context.EquipmentStatus.Where(a => a.StatusAr == equipmentStatusObj.StatusAr && a.Id != id).ToList();
            if (lstStatusNamesAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "Status arabic name already exist", MessageAr = "هذا الاسم العربي مسجل سابقاً" });
            }

            else
            {

                _context.Entry(equipmentStatusObj).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!EquipmentStatusExists(id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }

            return NoContent();
        }

        // POST: api/EquipmentStatus
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<EquipmentStatus>> PostEquipmentStatus(EquipmentStatus equipmentStatusObj)
        {

            var lstStatusCodes = _context.EquipmentStatus.Where(a => a.Code == equipmentStatusObj.Code).ToList();
            if (lstStatusCodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Status code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstStatusNames = _context.EquipmentStatus.Where(a => a.Status == equipmentStatusObj.Status).ToList();
            if (lstStatusNames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Status name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }
            var lstStatusNamesAr = _context.EquipmentStatus.Where(a => a.StatusAr == equipmentStatusObj.StatusAr).ToList();
            if (lstStatusNamesAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "Status arabic name already exist", MessageAr = "هذا الاسم العربي مسجل سابقاً" });
            }

            else
            {

                _context.EquipmentStatus.Add(equipmentStatusObj);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetEquipmentStatus", new { id = equipmentStatusObj.Id }, equipmentStatusObj);
            }
        }

        // DELETE: api/EquipmentStatus/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EquipmentStatus>> DeleteEquipmentStatus(int id)
        {
            var equipmentStatus = await _context.EquipmentStatus.FindAsync(id);
            if (equipmentStatus == null)
            {
                return NotFound();
            }

            _context.EquipmentStatus.Remove(equipmentStatus);
            await _context.SaveChangesAsync();

            return equipmentStatus;
        }

        private bool EquipmentStatusExists(int id)
        {
            return _context.EquipmentStatus.Any(e => e.Id == id);
        }
    }
}
