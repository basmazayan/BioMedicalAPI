using BiomedicalSystemAPI.Models;
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
    public class HealthDirectoriesController : Controller
    {
        private readonly ApplicationDbContext _context;
        public HealthDirectoriesController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/HealthDirectories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HealthDirectory>>> GetHealthDirectories()
        {
            return await _context.HealthDirectories.ToListAsync();
        }

        // GET: api/HealthDirectories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HealthDirectory>> GetHealthDirectory(int id)
        {
            var HealthDirectory = await _context.HealthDirectories.FindAsync(id);

            if (HealthDirectory == null)
            {
                return NotFound();
            }

            return HealthDirectory;
        }
        [HttpGet("GetHealthDirectoryIdByName/{name}")]
        public async Task<ActionResult<int>> GetHealthDirectoryIdByName(string name)
        {
            var HealthDirectory = await _context.HealthDirectories.FirstOrDefaultAsync(d=>d.HealthDirectoryName==name || d.HealthDirectoryNameAr==name);

            if (HealthDirectory == null)
            {
                return NotFound();
            }
            return HealthDirectory.Id;
        }
        // PUT: api/HealthDirectories/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHealthDirectory(int id, HealthDirectory healthDirectory)
        {
            if (id != healthDirectory.Id)
            {
                return BadRequest();
            }

            _context.Entry(healthDirectory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HealthDirectoryExists(id))
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
        //[HttpGet]
        //[Route("directoryByhealthDistrictId/{districtId}")]
        //public async Task<ActionResult<IEnumerable<HealthDirectory>>> GetdirectoryByhealthDistrictId(int directoryId)
        //{

        //    var directory = await _context.HealthDirectories.Where(e => e.Id == districtId)
        //        .Include(e => e.HealthDistricts)
        //        .Select(e => new HealthDirectory
        //        {

        //        }).ToListAsync();
        //    return directory;
        //}
        // POST: api/HealthDirectories
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<HealthDirectory>> PosthealthDirectory(HealthDirectory healthDirectory)
        {
            _context.HealthDirectories.Add(healthDirectory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDepartment", new { id = healthDirectory.Id }, healthDirectory);
        }

        // DELETE: api/HealthDirectories/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<HealthDirectory>> DeletehealthDirectory(int id)
        {
            var healthDirectory = await _context.HealthDirectories.FindAsync(id);
            if (healthDirectory == null)
            {
                return NotFound();
            }

            _context.HealthDirectories.Remove(healthDirectory);
            await _context.SaveChangesAsync();

            return healthDirectory;
        }

        private bool HealthDirectoryExists(int id)
        {
            return _context.HealthDirectories.Any(e => e.Id == id);
        }
    }
}
