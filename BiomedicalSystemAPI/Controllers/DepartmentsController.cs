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
    public class DepartmentsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DepartmentsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Departments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Department>>> GetDepartments()
        {
            return await _context.Departments.ToListAsync();
        }

        // GET: api/Departments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Department>> GetDepartment(int id)
        {
            var department = await _context.Departments.FindAsync(id);

            if (department == null)
            {
                return NotFound();
            }

            return department;
        }

        // PUT: api/Departments/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDepartment(int id, Department departmentObj)
        {
            if (id != departmentObj.Id)
            {
                return BadRequest();
            }



            var lstDepartmentCodes = _context.Departments.Where(a => a.Code == departmentObj.Code && a.Id != id).ToList();
            if (lstDepartmentCodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Department code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstDepartmentNames = _context.Departments.Where(a => a.Name == departmentObj.Name && a.Id != id).ToList();
            if (lstDepartmentNames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Department name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }
            var lstDepartmentNamesAr = _context.Departments.Where(a => a.NameAr == departmentObj.NameAr && a.Id != id).ToList();
            if (lstDepartmentNamesAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "Department arabic name already exist", MessageAr = "هذا الاسم العربي مسجل سابقاً" });
            }

            else
            {

                _context.Entry(departmentObj).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!DepartmentExists(id))
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

        // POST: api/Departments
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Department>> PostDepartment(Department departmentObj)
        {

            var lstDepartmentCodes = _context.Departments.Where(a => a.Code == departmentObj.Code).ToList();
            if (lstDepartmentCodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Department code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstDepartmentNames = _context.Departments.Where(a => a.Name == departmentObj.Name).ToList();
            if (lstDepartmentNames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Department name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }
            var lstDepartmentNamesAr = _context.Departments.Where(a => a.NameAr == departmentObj.NameAr).ToList();
            if (lstDepartmentNamesAr.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "nameAr", Message = "Department arabic name already exist", MessageAr = "هذا الاسم العربي مسجل سابقاً" });
            }
            else
            {
                _context.Departments.Add(departmentObj);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetDepartment", new { id = departmentObj.Id }, departmentObj);
            }
        }

        // DELETE: api/Departments/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Department>> DeleteDepartment(int id)
        {
            var department = await _context.Departments.FindAsync(id);
            if (department == null)
            {
                return NotFound();
            }

            _context.Departments.Remove(department);
            await _context.SaveChangesAsync();

            return department;
        }

        private bool DepartmentExists(int id)
        {
            return _context.Departments.Any(e => e.Id == id);
        }
    }
}
