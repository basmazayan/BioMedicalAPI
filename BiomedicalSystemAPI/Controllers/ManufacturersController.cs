using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Exceptions;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManufacturersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ManufacturersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Manufacturers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Brand>>> GetManufacturers()
        {
            var m= await _context.Brands.ToListAsync();
            return m;
        }

        // GET: api/Manufacturers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Brand>> GetManufacturer(int id)
        {
            var manufacturer = await _context.Brands.FindAsync(id);

            if (manufacturer == null)
            {
                return NotFound();
            }

            return manufacturer;
        }

        // PUT: api/Manufacturers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutManufacturer(int id, Brand manufacturer)
        {
            if (id != manufacturer.Id)
            {
                return BadRequest();
            }
            //var manufacturers = _context.Manufacturers.Where(m=>m.Id!=id).ToList();
            //foreach(var maunfact in manufacturers)
            //{

            //    if (maunfact.Code == manufacturer.Code)
            //    {
            //        return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = manufacturer.Code + " code already exists before", MessageAr = "هذا الكود مسجل سابقاً" });
            //    }
            //    if (maunfact.ManufacturerName == manufacturer.ManufacturerName)
            //    {
            //        return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = manufacturer.ManufacturerName + " name already exists before", MessageAr = "هذا الاسم مسجل سابقاً" });
            //    }
            //    else if (maunfact.ManufacturerNameAr == manufacturer.ManufacturerNameAr)
            //    {
            //        return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = manufacturer.ManufacturerNameAr + " name already exists before", MessageAr = "هذا الاسم مسجل سابقاً" });
            //    }
            //}


            var lstBrandCodes = _context.Brands.Where(a => a.Code == manufacturer.Code && a.Id != id).ToList();
            if (lstBrandCodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Brand code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstBrandNames = _context.Brands.Where(a => a.Name == manufacturer.Name && a.Id != id).ToList();
            if (lstBrandNames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Brand name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }
            var lstBrandNamesAr = _context.Brands.Where(a => a.NameAr == manufacturer.NameAr && a.Id != id).ToList();
            if (lstBrandNamesAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "Brand arabic name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }

            else
            {

                try
                {
                    _context.Entry(manufacturer).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ManufacturerExists(id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = " error while updating item" });
                    }
                }
            }
            return NoContent();
        }

        // POST: api/Manufacturers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public ActionResult<Brand> PostManufacturer(Brand manufacturer)
        {
            var manufacturers = _context.Brands.ToList();
            //foreach (var maunfact in manufacturers)
            //{      
            //    if (maunfact.Code == manufacturer.Code)
            //    {
            //        return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = manufacturer.Code + "code already exists before", MessageAr = "هذا الكود مسجل سابقاً" });
            //    }
            //    if (maunfact.ManufacturerName == manufacturer.ManufacturerName)
            //    {
            //        return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = manufacturer.ManufacturerName+" name already exists before", MessageAr = "هذا الاسم مسجل سابقاً" });
            //    }
            //    else if (maunfact.ManufacturerNameAr == manufacturer.ManufacturerNameAr)
            //    {
            //        return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = manufacturer.ManufacturerNameAr + " name already exists before", MessageAr = "هذا الاسم مسجل سابقاً" });
            //    }
            //}


            var lstBrandCodes = _context.Brands.Where(a => a.Code == manufacturer.Code).ToList();
            if (lstBrandCodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Brand code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstBrandNames = _context.Brands.Where(a => a.Name == manufacturer.Name).ToList();
            if (lstBrandNames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Brand name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }
            var lstBrandNamesAr = _context.Brands.Where(a => a.NameAr == manufacturer.NameAr).ToList();
            if (lstBrandNamesAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "Brand arabic name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }

            else
            {



                try
                {
                    _context.Brands.Add(manufacturer);
                    _context.SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = " error while adding item" });
                }
            }
            return CreatedAtAction("GetManufacturer", new { id = manufacturer.Id }, manufacturer);
        }

        // DELETE: api/Manufacturers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Brand>> DeleteManufacturer(int id)
        {
            var manufacturer = await _context.Brands.FindAsync(id);
            if (manufacturer == null)
            {
                return NotFound();
            }

            _context.Brands.Remove(manufacturer);
            await _context.SaveChangesAsync();

            return manufacturer;
        }

        private bool ManufacturerExists(int id)
        {
            return _context.Brands.Any(e => e.Id == id);
        }
    }
}
