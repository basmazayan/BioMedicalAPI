using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.EmployeeRepository;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        //private readonly ApplicationDbContext _context;
        //private IEmployeeRepository _employeeRepository;
        //public EmployeesController(ApplicationDbContext context, IEmployeeRepository employeeRepository)
        //{
        //    _context = context;
        //    _employeeRepository = employeeRepository;
        //}

        //// GET: api/Employees
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        //{
        //    return await _context.Employees.ToListAsync();
        //}

        //// GET: api/Employees/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Employee>> GetEmployee(int id)
        //{
        //    var employee = await _context.Employees.FindAsync(id);

        //    if (employee == null)
        //    {
        //        return NotFound();
        //    }

        //    return employee;
        //}
        //[HttpGet("{mail}")]
        //[Route("GetEmployeeNyMail/{mail}")]
        //public ActionResult<Employee>GetEmployeeNyMail(string mail)
        //{
        //    return _employeeRepository.GetByMail(mail);
        //}
        //// [HttpGet("{equipId}")]
        //[Route("GetEquipmentemployees/{equipId}")]
        //public ActionResult<List<Employee>> GetEquipmentemployees(int equipId)
        //{
        //    List<Employee> emps = new List<Employee>();
        //    var employeeIds= _context.equipmentEmployees.Where(e => e.EquipmentId == equipId).ToList();
        //    foreach (var empId in employeeIds)
        //    {
        //        var emp= _context.Employees.Where(e => e.Id == empId.EmployeeId).FirstOrDefault();
        //        emps.Add(emp);
        //    }
        //    return emps;
        //}
        //// PUT: api/Employees/5
        //// To protect from overposting attacks, enable the specific properties you want to bind to, for
        //// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutEmployee(int id, Employee employee)
        //{
        //    if (id != employee.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(employee).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!EmployeeExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return Ok(employee);
        //}

        //[HttpGet]
        //[Route("getHealthDistrictsByempDistrictId/{districtId}")]
        //public async Task<ActionResult<HealthDistrict>> getHealthDistrictsByempDistrictId(int districtId)
        //{
        //    var HealthDistrict =await _context.HealthDistricts.FindAsync(districtId);
                
        //    return HealthDistrict;
        //}

        //// POST: api/Employees
        //// To protect from overposting attacks, enable the specific properties you want to bind to, for
        //// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPost]
        //public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        //{
        //    _context.Employees.Add(employee);
        //    //try
        //    //{
        //        await _context.SaveChangesAsync();
        //    //}
        //    //catch(Exception ex)
        //    //{
        //    //    Console.WriteLine("msg" + ex.Message);
        //    //}
        //    return CreatedAtAction("GetEmployee", new { id = employee.Id }, employee);
        //}

        //// DELETE: api/Employees/5
        //[HttpDelete("{id}")]
        //public async Task<ActionResult<Employee>> DeleteEmployee(int id)
        //{
        //    var employee = await _context.Employees.FindAsync(id);
        //    if (employee == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Employees.Remove(employee);
        //    await _context.SaveChangesAsync();

        //    return employee;
        //}

        //private bool EmployeeExists(int id)
        //{
        //    return _context.Employees.Any(e => e.Id == id);
        //}
    }
}
