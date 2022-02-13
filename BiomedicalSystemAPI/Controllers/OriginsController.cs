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
    public class OriginsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public OriginsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Origins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Origin>>> GetOrigins()
        {
            return await _context.Origins.ToListAsync();
        }

        // GET: api/Origins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Origin>> GetOrigin(int id)
        {
            var origin = await _context.Origins.FindAsync(id);

            if (origin == null)
            {
                return NotFound();
            }

            return origin;
        }

        // PUT: api/Origins/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrigin(int id, Origin originObj)
        {
            if (id != originObj.Id)
            {
                return BadRequest();
            }
            else if (id == originObj.Id)
            {
                //  var origins = _context.Origins.Where(e => e.Id != originObj.Id).ToList();
                //  var checkcode = origins.Where(e => e.OriginCode == originObj.OriginCode).ToList();

                // var checkName = origins.Where(e => e.EnglishName == originObj.EnglishName).ToList();
                // var checkNameAr = origins.Where(e => e.ArabicName == originObj.ArabicName).ToList();
                // if (checkcode.Count > 0)
                // {

                //     return StatusCode(StatusCodes.Status500InternalServerError, new Response
                //     {
                //         Status = "Error",
                //         Message = "Origin code Already exists!"
                //     });

                // }
                //else if (checkName.Count > 0)
                // {

                //     return StatusCode(StatusCodes.Status500InternalServerError, new Response
                //     {
                //         Status = "Error",
                //         Message = "Origin Name Already exists!"
                //     });

                // }
                // else if (checkNameAr.Count > 0)
                // {

                //     return StatusCode(StatusCodes.Status500InternalServerError, new Response
                //     {
                //         Status = "Error",
                //         Message = "Origin NameAr Already exists!"
                //     });

                // }

                var lstOriginCodes = _context.Origins.Where(a => a.OriginCode == originObj.OriginCode && a.Id != id).ToList();
                if (lstOriginCodes.Count > 0)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Origin code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
                }
                var lstOriginNames = _context.Origins.Where(a => a.EnglishName == originObj.EnglishName && a.Id != id).ToList();
                if (lstOriginNames.Count > 0)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Origin name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
                }
                var lstOriginNamesAr = _context.Origins.Where(a => a.ArabicName == originObj.ArabicName && a.Id != id).ToList();
                if (lstOriginNamesAr.Count > 0)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "Origin arabic name already exist", MessageAr = "هذا الاسم العربي مسجل سابقاً" });
                }
                else
                {
                    _context.Entry(originObj).State = EntityState.Modified;

                    try
                    {
                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!OriginExists(id))
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
        // POST: api/Origins
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Origin>> PostOrigin(Origin originObj)
        {
            var lstOriginCodes = _context.Origins.Where(a => a.OriginCode == originObj.OriginCode).ToList();
            if (lstOriginCodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Origin code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstOriginNames = _context.Origins.Where(a => a.EnglishName == originObj.EnglishName).ToList();
            if (lstOriginNames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Origin name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }
            var lstOriginNamesAr = _context.Origins.Where(a => a.ArabicName == originObj.ArabicName).ToList();
            if (lstOriginNamesAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "Origin arabic name already exist", MessageAr = "هذا الاسم العربي مسجل سابقاً" });
            }
            else
            {
                _context.Origins.Add(originObj);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetOrigin", new { id = originObj.Id }, originObj);
            }
        }
        // DELETE: api/Origins/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Origin>> DeleteOrigin(int id)
        {
            var origin = await _context.Origins.FindAsync(id);
            if (origin == null)
            {
                return NotFound();
            }

            _context.Origins.Remove(origin);
            await _context.SaveChangesAsync();

            return origin;
        }

        private bool OriginExists(int id)
        {
            return _context.Origins.Any(e => e.Id == id);
        }
    }
}
