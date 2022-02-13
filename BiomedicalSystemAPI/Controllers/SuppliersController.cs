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
    public class SuppliersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SuppliersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Suppliers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Supplier>>> GetSuppliers()
        {
            return await _context.Suppliers.ToListAsync();
        }

        // GET: api/Suppliers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Supplier>> GetSupplier(int id)
        {
            var supplier = await _context.Suppliers.FindAsync(id);

            if (supplier == null)
            {
                return NotFound();
            }

            return supplier;
        }

        // PUT: api/Suppliers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSupplier(int id, Supplier supplierObj)
        {
            if (id != supplierObj.Id)
            {
                return BadRequest();
            }


            var lstSupplierCodes = _context.Suppliers.Where(a => a.SupplierCode == supplierObj.SupplierCode && a.Id != supplierObj.Id).ToList();
            if (lstSupplierCodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Supplier code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstSupplierNames = _context.Suppliers.Where(a => a.SupplierName == supplierObj.SupplierName && a.Id != supplierObj.Id).ToList();
            if (lstSupplierNames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Supplier name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }
  var lstSupplierNamesAr = _context.Suppliers.Where(a => a.SupplierNameAr == supplierObj.SupplierNameAr && a.Id != supplierObj.Id).ToList();
            if (lstSupplierNamesAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "Supplier arabic name already exist", MessageAr = "هذا الاسم العربي مسجل سابقاً" });
            }


            else
            {
                _context.Entry(supplierObj).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!SupplierExists(id))
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

        // POST: api/Suppliers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Supplier>> PostSupplier(Supplier supplierObj)
        {
            var lstSupplierCodes = _context.Suppliers.Where(a => a.SupplierCode == supplierObj.SupplierCode).ToList();
            if (lstSupplierCodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Supplier code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstSupplierNames = _context.Suppliers.Where(a => a.SupplierName == supplierObj.SupplierName).ToList();
            if (lstSupplierNames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Supplier name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }  
            var lstSupplierNamesAr = _context.Suppliers.Where(a => a.SupplierNameAr == supplierObj.SupplierNameAr).ToList();
            if (lstSupplierNamesAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "Supplier arabic name already exist", MessageAr = "هذا الاسم العربي مسجل سابقاً" });
            }
            else
            {
                _context.Suppliers.Add(supplierObj);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetSupplier", new { id = supplierObj.Id }, supplierObj);
            }
        }

        // DELETE: api/Suppliers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Supplier>> DeleteSupplier(int id)
        {
            var supplier = await _context.Suppliers.FindAsync(id);
            if (supplier == null)
            {
                return NotFound();
            }

            _context.Suppliers.Remove(supplier);
            await _context.SaveChangesAsync();

            return supplier;
        }

        private bool SupplierExists(int id)
        {
            return _context.Suppliers.Any(e => e.Id == id);
        }
    }
}
