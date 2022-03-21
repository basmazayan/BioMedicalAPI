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
    public class EquipmentSubCategoriesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EquipmentSubCategoriesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/EquipmentSubCategories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SubCategory>>> GetEquipmentSubCategories()
        {
            return await _context.SubCategories.ToListAsync();
        }
        [Route("AllSubCategoriesBycategoryId/{categoryId}")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SubCategory>>> GetSubCategoriesByCategoryId(int categoryId)
        {
            var SubCategories = await _context.SubCategories.Where(e => e.CategoryId == categoryId)
                  .Include(e => e.Category)
                  .Select(e => new SubCategory
                  {
                      Id = e.Id,
                      Name = e.Name,
                      NameAr = e.NameAr,
                      CategoryId = e.CategoryId,
                      Code= e.Code
                  }).ToListAsync();
            return SubCategories;
        }
        // GET: api/EquipmentSubCategories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SubCategory>> GetEquipmentSubCategory(int id)
        {
            var equipmentSubCategory = await _context.SubCategories.FindAsync(id);

            if (equipmentSubCategory == null)
            {
                return NotFound();
            }

            return equipmentSubCategory;
        }

        // PUT: api/EquipmentSubCategories/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEquipmentSubCategory(int id, SubCategory equipmentSubCategory)
        {
            if (id != equipmentSubCategory.Id)
            {
                return BadRequest();
            }
            var lstCategoryCodes = _context.SubCategories.Where(a => a.Code == equipmentSubCategory.Code && a.Id != id).ToList();
            if (lstCategoryCodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Sub Category code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstCategoryNames = _context.SubCategories.Where(a => a.Name == equipmentSubCategory.Name && a.Id != id).ToList();
            if (lstCategoryNames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Sub Category name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }

            var lstCategoryNamesAr = _context.SubCategories.Where(a => a.NameAr == equipmentSubCategory.NameAr && a.Id != id).ToList();
            if (lstCategoryNamesAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "Sub Category arabic name already exist", MessageAr = "هذا الاسم العربي مسجل سابقاً" });
            }


            else
            {

                try
                {
                    _context.Entry(equipmentSubCategory).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!EquipmentSubCategoryExists(id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = " error while updating item" });
                    }
                }
            }
            return Ok();
        }
        // POST: api/EquipmentSubCategories
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<SubCategory>> PostEquipmentSubCategory(SubCategory equipmentSubCategory)
        {
            var subCategories = _context.SubCategories.ToList();
            var lstCategoryCodes = _context.SubCategories.Where(a => a.Code == equipmentSubCategory.Code).ToList();
            if (lstCategoryCodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Sub Category code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstCategoryNames = _context.SubCategories.Where(a => a.Name == equipmentSubCategory.Name).ToList();
            if (lstCategoryNames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Sub Category name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }

            var lstCategoryNamesAr = _context.SubCategories.Where(a => a.NameAr == equipmentSubCategory.NameAr ).ToList();
            if (lstCategoryNamesAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "Sub Category arabic name already exist", MessageAr = "هذا الاسم العربي مسجل سابقاً" });
            }


            else
            {
                try
                {
                    _context.SubCategories.Add(equipmentSubCategory);
                    await _context.SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = " error while adding item" });
                }

                return CreatedAtAction("GetEquipmentSubCategory", new { id = equipmentSubCategory.Id }, equipmentSubCategory);
            }
        }


        // DELETE: api/EquipmentSubCategories/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SubCategory>> DeleteEquipmentSubCategory(int id)
        {
            var equipmentSubCategory = await _context.SubCategories.FindAsync(id);
            if (equipmentSubCategory == null)
            {
                return NotFound();
            }

            _context.SubCategories.Remove(equipmentSubCategory);
            await _context.SaveChangesAsync();

            return equipmentSubCategory;
        }

        private bool EquipmentSubCategoryExists(int id)
        {
            return _context.SubCategories.Any(e => e.Id == id);
        }
    }

}
