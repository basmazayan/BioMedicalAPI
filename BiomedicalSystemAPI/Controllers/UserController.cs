using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Models.AssetAppContext;
using BiomedicalSystemAPI.Repositories.PagingRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext _context;
        private readonly IPagingRepository _pagingRepository;
        private readonly AssetDbContext _AssetContext;

        public UserController(UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager, IConfiguration configuration
            , ApplicationDbContext context, IPagingRepository pagingRepository,
            AssetDbContext AssetContext)
        {
            this.userManager = userManager;
            _roleManager = roleManager;
            _context = context;
            _configuration = configuration;
            _pagingRepository = pagingRepository;
            _AssetContext = AssetContext;
        }
        // GET: api/<UsersController>
        [HttpGet]
        public async Task<IEnumerable<AssignedUserDTO>> GetAllUsersAsync()
        {
            List<AssignedUserDTO> assignedUsers = new List<AssignedUserDTO>();
            AssignedUserDTO assignedUsersDTO;
            var users = userManager.Users.ToList();
            var roles = _roleManager.Roles.ToList();
            foreach (var User in users)
            {
                foreach (var role in roles)
                {
                    if (await userManager.IsInRoleAsync(User, role.Name))
                    {
                        assignedUsersDTO = new AssignedUserDTO()
                        {
                            Id = User.Id,
                            Email = User.Email,
                            RoleName = role.Name,
                            UserName = User.UserName,
                            UserNameAr = User.NameAr,
                            Code = User.Code,
                            Phone = User.Phone,
                            Mobile = User.Mobile,
                            HealthdirId = User.GovernorateId,
                            HealthCareUnitId = User.HospitalId,
                            HealthDistrictId = User.CityId,
                            OrganizationId = User.OrganizationId,
                            SubOrganizationId = User.SubOrganizationId
                            //EquipmentId=User.EuipmentId
                        };
                        assignedUsers.Add(assignedUsersDTO);
                    }
                }
            }
            //return View(model);
            return assignedUsers;
        }
        [HttpPut]
        [Route("GetUsersWithPaging")]
        public async Task<IEnumerable<AssignedUserDTO>> GetUsersWithPaging(PagingParameter page)
        {
            var userLst = await GetAllUsersAsync();
            return _pagingRepository.GetAll(page,userLst.ToList());
        }
        [HttpGet]
        [Route("getcount")]
        public int count()
        {
            return _pagingRepository.Count<AssignedUserDTO>();
        }
        [HttpGet]
        [Route("AllUsersByhealthDirectoryId/{DirectoryId}")]
        public async Task<IEnumerable<AssignedUserDTO>> AllUsersByhealthDirectoryId(int DirectoryId)
        {

            var assignedUserDTO = await _context.Users.Where(d => d.GovernorateId == DirectoryId).Select(
                  e => new AssignedUserDTO
                  {
                      Id = e.Id,
                      Email = e.Email,
                      UserName = e.UserName,
                      UserNameAr = e.NameAr,
                      Code = e.Code,
                      Mobile = e.Mobile,
                      Phone = e.Phone,
                      HealthdirId = e.GovernorateId,
                      HealthDistrictId = e.CityId,
                      OrganizationId = e.OrganizationId,
                      HealthCareUnitId = e.HospitalId,

                  }).ToListAsync();
            return assignedUserDTO;


        }


        [HttpGet]
        [Route("AllUsersByhealthDistrictId/{DistrictId}")]
        public async Task<IEnumerable<AssignedUserDTO>> AllUsersByhealthDistrictId(int DistrictId)
        {

            var assignedUserDTO = await _context.Users.Where(d => d.CityId == DistrictId).Select(
                  e => new AssignedUserDTO
                  {
                      Id = e.Id,
                      Email = e.Email,
                      UserName = e.UserName,
                      UserNameAr = e.NameAr,
                      Code = e.Code,
                      Mobile = e.Mobile,
                      Phone = e.Phone,
                      HealthdirId = e.GovernorateId,
                      HealthDistrictId = e.CityId,
                      OrganizationId = e.OrganizationId,
                      HealthCareUnitId = e.HospitalId
                  }).ToListAsync();
            return assignedUserDTO;


        }

        [HttpGet]
        [Route("AllUsersByHealthcareunitId/{HealthcareunitId}")]
        public async Task<IEnumerable<AssignedUserDTO>> AllUsersByhealthcareunitId(int HealthcareunitId)
        {

            var assignedUserDTO = await _context.Users.Where(d => d.HospitalId == HealthcareunitId).Select(
                  e => new AssignedUserDTO
                  {
                      Id = e.Id,
                      Email = e.Email,
                      UserName = e.UserName,
                      UserNameAr = e.NameAr,
                      Code = e.Code,
                      Mobile = e.Mobile,
                      Phone = e.Phone,
                      HealthdirId = e.GovernorateId,
                      HealthDistrictId = e.CityId,
                      OrganizationId = e.OrganizationId,
                      HealthCareUnitId = e.HospitalId
                  }).ToListAsync();
            return assignedUserDTO;

        }
        [HttpGet]
        [Route("AllUsersByOrganizationId/{OrganizationId}")]
        public async Task<IEnumerable<AssignedUserDTO>> AllUsersByOrganizationId(int OrganizationId)
        {

            var assignedUserDTO = await _context.Users.Where(d => d.OrganizationId == OrganizationId).Select(
                  e => new AssignedUserDTO
                  {
                      Id = e.Id,
                      Email = e.Email,
                      UserName = e.UserName,
                      UserNameAr = e.NameAr,
                      Code = e.Code,
                      Mobile = e.Mobile,
                      Phone = e.Phone,
                      HealthdirId = e.GovernorateId,
                      HealthDistrictId = e.CityId,
                      OrganizationId = e.OrganizationId,
                      HealthCareUnitId = e.HospitalId,
                      SubOrganizationId = e.SubOrganizationId
                  }).ToListAsync();
            return assignedUserDTO;

        }


        //[HttpGet]
        //[Route("GetUnregisteredUsers")]
        //public IEnumerable<Employee> GetUnregisteredUsers()
        //{
        //List<Employee> emps = new List<Employee>();
        //var users = userManager.Users.ToList();
        //var employees = _context.Employees.ToList();
        //var emps = _context.Employees.ToList();
        //foreach (var employee in employees)
        //{
        //    foreach (var user in users)
        //    {
        //        if (employee.Email == user.Email)
        //            emps.Remove(employee);
        //    }
        //    }
        //    return emps;
        //}
        [HttpGet]
        [Route("GetEquipments")]
        public IEnumerable<Models.AssetAppContext.AssetDetail> GetEquipmentsByuserId()
        {
            var users = userManager.Users.ToList();
            var equipments = _AssetContext.AssetDetails.ToList();
            foreach (var eq in equipments)
            {
                foreach (var user in users)
                {
                    //if (eq.Employee.EmployeeName == user.UserName)
                    //    equipments.Add(eq);
                }
            }
            return equipments;
        }
        [HttpGet("{equipId}")]
        [Route("GetEquipmentemployees/{equipId}")]
        public ActionResult<List<ApplicationUser>> GetEquipmentemployees(int equipId)
        {
            List<ApplicationUser> emps = new List<ApplicationUser>();
            var employeeIds = _context.Employees.Where(e => e.AssetId == equipId)
                .Select(e => new ApplicationUser
                {
                    Id = e.UserId,
                    UserName = e.users.UserName
                }).ToList();
          
            return employeeIds;
        }

        //public ActionResult<List<empequip>> GetEquipmentemployees(int equipId)
        //{
        //    List<empequip> emps = new List<empequip>();
        //    var employeeIds = _context.equipmentEmployees.Where(e => e.EquipmentId == equipId).ToList();
        //    foreach (var empId in employeeIds)
        //    {
        //        var emp = new empequip();
        //        emp.id = _context.Users.Where(e => e.Id == empId.UserId).Select(e => e.Id).FirstOrDefault();
        //        emp.userName = _context.Users.Where(e => e.Id == empId.UserId).Select(e => e.UserName).FirstOrDefault();
        //        emps.Add(emp);
        //    }
        //    return emps;
        //}
        [HttpGet]
        [Route("GetUserById/{id}")]

        public async Task<ApplicationUser> Get(string id)
        {
            var user = await userManager.FindByIdAsync(id);
            return user;

        }

        // PUT api/<UsersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UsersController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var user = userManager.FindByIdAsync(id).Result;

            var userRoles = await userManager.GetRolesAsync(user);

            if (userRoles.Count > 0)
            {

                var result = await userManager.RemoveFromRolesAsync(user, userRoles.ToArray());

                if (result.Succeeded)
                {
                    result = await userManager.DeleteAsync(user);
                    if (result.Succeeded)
                        return Ok(new Response { Status = "Success", Message = "User deleted successfully!" });
                    else
                        return BadRequest(new Response { Status = "failure", Message = "User not Found " });
                }
            }

            return Ok();
        }


        [HttpGet]
        [Route("GetAllRoles")]
        public List<IdentityRole> GetAllRoles()
        {
            var Roles = _roleManager.Roles.ToList();
            return Roles;
        }

        [HttpGet]
        [Route("GetRoleById/{id}")]

        public async Task<string> GetRole(string id)
        {
            var user = await userManager.FindByIdAsync(id);
            var userRoles = await userManager.GetRolesAsync(user);
            if (userRoles.Count > 0)
            {
                return userRoles[0];
            }
            return "";
        }
        [Route("CreateRoles")]
        public async Task<IActionResult> CreateRoles()
        {
            try
            {
                await _roleManager.CreateAsync(new IdentityRole(Roles.Admin));
                await _roleManager.CreateAsync(new IdentityRole(Roles.Technician));
                await _roleManager.CreateAsync(new IdentityRole(Roles.Governorate));
                await _roleManager.CreateAsync(new IdentityRole(Roles.City));
                await _roleManager.CreateAsync(new IdentityRole(Roles.Organization));
                await _roleManager.CreateAsync(new IdentityRole(Roles.HeadQuarter));
                await _roleManager.CreateAsync(new IdentityRole(Roles.DataEntry));
                await _roleManager.CreateAsync(new IdentityRole(Roles.Hospital));
                await _roleManager.CreateAsync(new IdentityRole(Roles.Supplier));

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "can't create role" });
            }
            return Ok(new Response { Status = "Success", Message = "role created successfully!" });

        }
    }

    //[HttpGet]
    //[Route("GetRequestsById/{id}")]

    //public async Task<string> GetRequests(string id)
    //{
    //    var user = await userManager.FindByIdAsync(id);
    //    var userRoles = await userManager.GetRolesAsync(user);
    //    if (userRoles.Count > 0)
    //    {
    //        return userRoles[0];
    //    }
    //    return "";
    //}
}

