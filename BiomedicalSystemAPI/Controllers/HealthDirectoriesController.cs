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
        public async Task<ActionResult<IEnumerable<Governorate>>> GetHealthDirectories()
        {
            return await _context.Governorates.ToListAsync();
        }

        // GET: api/HealthDirectories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Governorate>> GetHealthDirectory(int id)
        {
            var HealthDirectory = await _context.Governorates.FindAsync(id);

            if (HealthDirectory == null)
            {
                return NotFound();
            }

            return HealthDirectory;
        }
        [HttpGet("GetHealthDirectoryIdByName/{name}")]
        public async Task<ActionResult<int>> GetHealthDirectoryIdByName(string name)
        {
            var HealthDirectory = await _context.Governorates.FirstOrDefaultAsync(d=>d.Name==name || d.NameAr==name);

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
        public async Task<IActionResult> PutHealthDirectory(int id, Governorate healthDirectory)
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
        public async Task<ActionResult<Governorate>> PosthealthDirectory(Governorate healthDirectory)
        {
            _context.Governorates.Add(healthDirectory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDepartment", new { id = healthDirectory.Id }, healthDirectory);
        }

        // DELETE: api/HealthDirectories/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Governorate>> DeletehealthDirectory(int id)
        {
            var healthDirectory = await _context.Governorates.FindAsync(id);
            if (healthDirectory == null)
            {
                return NotFound();
            }

            _context.Governorates.Remove(healthDirectory);
            await _context.SaveChangesAsync();

            return healthDirectory;
        }

        private bool HealthDirectoryExists(int id)
        {
            return _context.Governorates.Any(e => e.Id == id);
        }
    }
}
