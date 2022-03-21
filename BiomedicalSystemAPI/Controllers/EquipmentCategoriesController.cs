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
    public class EquipmentCategoriesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EquipmentCategoriesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/EquipmentCategories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetEquipmentCategories()
        {
            return await _context.Categories.ToListAsync();
        }

        // GET: api/EquipmentCategories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetEquipmentCategory(int id)
        {
            var equipmentCategory = await _context.Categories.FindAsync(id);

            if (equipmentCategory == null)
            {
                return NotFound();
            }

            return equipmentCategory;
        }

        // PUT: api/EquipmentCategories/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEquipmentCategory(int id, Category equipmentCategory)
        {
            if (id != equipmentCategory.Id)
            {
                return BadRequest();
            }
           else if (id == equipmentCategory.Id )
            {
                              var lstCategoryCodes = _context.Categories.Where(a => a.Code == equipmentCategory.Code && a.Id != id).ToList();
                if (lstCategoryCodes.Count > 0)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Category code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
                }
                var lstCategoryNames = _context.Categories.Where(a => a.Name == equipmentCategory.Name && a.Id != id).ToList();
                if (lstCategoryNames.Count > 0)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Category name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
                }

                var lstCategoryNamesAr = _context.Categories.Where(a => a.NameAr == equipmentCategory.NameAr && a.Id != id).ToList();
                if (lstCategoryNamesAr.Count > 0)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "Category arabic name already exist", MessageAr = "هذا الاسم العربي مسجل سابقاً" });
                }


                else
                {

                    _context.Entry(equipmentCategory).State = EntityState.Modified;

                    try
                    {
                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!EquipmentCategoryExists(id))
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

        // POST: api/EquipmentCategories
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Category>> PostEquipmentCategory(Category equipmentCategory)
        {
            var lstCategoryCodes = _context.Categories.Where(a => a.Code == equipmentCategory.Code).ToList();
            if (lstCategoryCodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Category code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstCategoryNames = _context.Categories.Where(a => a.Name == equipmentCategory.Name).ToList();
            if (lstCategoryNames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Category name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }

            var lstCategoryNamesAr = _context.Categories.Where(a => a.NameAr == equipmentCategory.NameAr).ToList();
            if (lstCategoryNamesAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "Category arabic name already exist", MessageAr = "هذا الاسم العربي مسجل سابقاً" });
            }


            else
            {
            _context.Categories.Add(equipmentCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEquipmentCategory", new { id = equipmentCategory.Id }, equipmentCategory);

            }
        }

        // DELETE: api/EquipmentCategories/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Category>> DeleteEquipmentCategory(int id)
        {
            var equipmentCategory = await _context.Categories.FindAsync(id);
            if (equipmentCategory == null)
            {
                return NotFound();
            }

            _context.Categories.Remove(equipmentCategory);
            await _context.SaveChangesAsync();

            return equipmentCategory;
        }

        private bool EquipmentCategoryExists(int id)
        {
            return _context.Categories.Any(e => e.Id == id);
        }
    }
}
