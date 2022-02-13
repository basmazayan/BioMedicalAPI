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
        public async Task<ActionResult<IEnumerable<EquipmentSubCategory>>> GetEquipmentSubCategories()
        {
            return await _context.EquipmentSubCategories.ToListAsync();
        }
        [Route("AllSubCategoriesBycategoryId/{categoryId}")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EquipmentSubCategory>>> GetSubCategoriesByCategoryId(int categoryId)
        {
            var SubCategories = await _context.EquipmentSubCategories.Where(e => e.EquipmentCategoryId == categoryId)
                  .Include(e => e.EquipmentCategory)
                  .Select(e => new EquipmentSubCategory
                  {
                      Id = e.Id,
                      SubCategoryName = e.SubCategoryName,
                      SubCategoryNameAr = e.SubCategoryNameAr,
                      EquipmentCategoryId = e.EquipmentCategoryId,
                      Code= e.Code
                  }).ToListAsync();
            return SubCategories;
        }
        // GET: api/EquipmentSubCategories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EquipmentSubCategory>> GetEquipmentSubCategory(int id)
        {
            var equipmentSubCategory = await _context.EquipmentSubCategories.FindAsync(id);

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
        public async Task<IActionResult> PutEquipmentSubCategory(int id, EquipmentSubCategory equipmentSubCategory)
        {
            if (id != equipmentSubCategory.Id)
            {
                return BadRequest();
            }
            var lstCategoryCodes = _context.EquipmentSubCategories.Where(a => a.Code == equipmentSubCategory.Code && a.Id != id).ToList();
            if (lstCategoryCodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Sub Category code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstCategoryNames = _context.EquipmentSubCategories.Where(a => a.SubCategoryName == equipmentSubCategory.SubCategoryName && a.Id != id).ToList();
            if (lstCategoryNames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Sub Category name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }

            var lstCategoryNamesAr = _context.EquipmentSubCategories.Where(a => a.SubCategoryNameAr == equipmentSubCategory.SubCategoryNameAr && a.Id != id).ToList();
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
        public async Task<ActionResult<EquipmentSubCategory>> PostEquipmentSubCategory(EquipmentSubCategory equipmentSubCategory)
        {
            var subCategories = _context.EquipmentSubCategories.ToList();
            var lstCategoryCodes = _context.EquipmentSubCategories.Where(a => a.Code == equipmentSubCategory.Code).ToList();
            if (lstCategoryCodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Sub Category code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstCategoryNames = _context.EquipmentSubCategories.Where(a => a.SubCategoryName == equipmentSubCategory.SubCategoryName).ToList();
            if (lstCategoryNames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Sub Category name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }

            var lstCategoryNamesAr = _context.EquipmentSubCategories.Where(a => a.SubCategoryNameAr == equipmentSubCategory.SubCategoryNameAr ).ToList();
            if (lstCategoryNamesAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "Sub Category arabic name already exist", MessageAr = "هذا الاسم العربي مسجل سابقاً" });
            }


            else
            {
                try
                {
                    _context.EquipmentSubCategories.Add(equipmentSubCategory);
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
        public async Task<ActionResult<EquipmentSubCategory>> DeleteEquipmentSubCategory(int id)
        {
            var equipmentSubCategory = await _context.EquipmentSubCategories.FindAsync(id);
            if (equipmentSubCategory == null)
            {
                return NotFound();
            }

            _context.EquipmentSubCategories.Remove(equipmentSubCategory);
            await _context.SaveChangesAsync();

            return equipmentSubCategory;
        }

        private bool EquipmentSubCategoryExists(int id)
        {
            return _context.EquipmentSubCategories.Any(e => e.Id == id);
        }
    }

}
