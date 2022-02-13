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
    public class EcriController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public EcriController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ecri
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ecri>>> GetEcris()
        {
            return await _context.Ecris.ToListAsync();
        }

        // GET: api/Ecris/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ecri>> GetEcri(int id)
        {
            var Ecri = await _context.Ecris.FindAsync(id);

            if (Ecri == null)
            {
                return NotFound();
            }

            return Ecri;
        }

        // PUT: api/Ecris/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEcri(int id, Ecri ecriObj)
        {
            if (id != ecriObj.Id)
            {
                return BadRequest();
            }

            var lstECRICodes = _context.Ecris.Where(a => a.ecri_code == ecriObj.ecri_code && a.Id != id).ToList();
            if (lstECRICodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "ECRI code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstECRINames = _context.Ecris.Where(a => a.Name == ecriObj.Name && a.Id != id).ToList();
            if (lstECRINames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "ECRI name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }

            var lstECRINamesAr = _context.Ecris.Where(a => a.NameAr == ecriObj.NameAr && a.Id != id).ToList();
            if (lstECRINamesAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "ECRI arabic name already exist", MessageAr = "هذا الاسم العربي مسجل سابقاً" });
            }

            else
            {
                _context.Entry(ecriObj).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!EcriExists(id))
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

        // POST: api/Ecris
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Ecri>> PostEcri(Ecri ecriObj)
        {

            //    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User doesn't exist" });

            var lstECRICodes = _context.Ecris.Where(a => a.ecri_code == ecriObj.ecri_code).ToList();
            if (lstECRICodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "ECRI code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstECRINames = _context.Ecris.Where(a => a.Name == ecriObj.Name).ToList();
            if (lstECRINames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "ECRI name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }

            var lstECRINamesAr = _context.Ecris.Where(a => a.NameAr == ecriObj.NameAr).ToList();
            if (lstECRINamesAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "ECRI arabic name already exist", MessageAr = "هذا الاسم العربي مسجل سابقاً" });
            }
            else
            {
                _context.Ecris.Add(ecriObj);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetEcri", new { id = ecriObj.Id }, ecriObj);
            }

            //return ecriObj;
        }

        // DELETE: api/Ecris/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Ecri>> DeleteEcri(int id)
        {
         
            var Ecri = await _context.Ecris.FindAsync(id);
            if (Ecri == null)
            {
                return NotFound();
            }

            _context.Ecris.Remove(Ecri);
            await _context.SaveChangesAsync();

            return Ecri;
        }

        private bool EcriExists(int id)
        {
            return _context.Ecris.Any(e => e.Id == id);
        }

    }
}

