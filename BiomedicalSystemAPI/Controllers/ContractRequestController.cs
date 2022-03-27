using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.ContractRequestRepositories;
using BiomedicalSystemAPI.Repositories.EmailConfirmation;
using BiomedicalSystemAPI.Repositories.PagingRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContractRequestController : ControllerBase
    {
        private readonly IContractRequestRepository _contractRequestRepository;
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;
        private readonly IEmailRepository _emailRepository;
        private readonly IPagingRepository _pagingRepository;

        public ContractRequestController( IContractRequestRepository contractRequestRepository, 
            ApplicationDbContext context,
            UserManager<ApplicationUser> userManager,
             IConfiguration configuration,
            IEmailRepository emailRepository,
            IPagingRepository pagingRepository,
            RoleManager<IdentityRole> roleManager)
        {
            _contractRequestRepository = contractRequestRepository;
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
            _emailRepository = emailRepository;
            _pagingRepository = pagingRepository;
        }
        [HttpPost]
        public async Task<IActionResult> PostContractRequest(ContractRequestDTO request)
        {
            try
            {
                if (request.equipments.Count == 0)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "contarct", Message = "equipment can't be null", MessageAr = "يجب اختيار آله" });
                }
                _contractRequestRepository.Add(request);
                var healthUnit = _context.Hospitals.Where(h => h.Id == request.HospitalId).FirstOrDefault();
                var Suborg = _context.SubOrganizations.Where(s => s.Id == healthUnit.SuborganizationId).FirstOrDefault();
                List<AssignedUserDTO> assignedUsers = new List<AssignedUserDTO>();
                AssignedUserDTO assignedUsersDTO;
                var users = _userManager.Users.ToList();
                var roles = _roleManager.Roles.ToList();
                foreach (var User in users)
                {
                    foreach (var role in roles)
                    {
                        if (await _userManager.IsInRoleAsync(User, role.Name))
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
                foreach(var AssignedUser in assignedUsers)
                {
                    if (AssignedUser.OrganizationId == Suborg.organizationId &&  AssignedUser.RoleName== "Organization")
                    {
                       // string confirmationToken = _userManager.GenerateEmailConfirmationTokenAsync(user).Result;
                        string confirmationLink = Url.Action("ConfirmEmail", "ContractRequest", new { userId = AssignedUser.Id }, protocol: HttpContext.Request.Scheme);
                        var message = new Message(new string[] { $"{AssignedUser.Email}" }, "Confirmation Email",
                        $"Dear {AssignedUser.UserName}\r\n Hope this email finds you well \r\n This is Al-Mostakba Technology.it is a notification of new contractRequest, please note that your Email: { AssignedUser.Email }'" +
                        $" By clicking on the following link, you are confirming your email address" );
                        _emailRepository.Send(message);
                    }
                }


                return StatusCode(StatusCodes.Status200OK, new Response { Status = "contarct", Message = "request created successfully", MessageAr = "تم انشاء الطلب بنجاح" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("PutContractRequest")]
        public IActionResult PutContractRequest(ContractRequestDTO request)
        {
            try
            {
                if (request.equipments.Count == 0)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "contarct", Message = "equipment can't be null", MessageAr = "يجب اختيار آله" });
                }
                _contractRequestRepository.Update(request);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return StatusCode(StatusCodes.Status200OK, new Response { Status = "contarct", Message = "request created successfully", MessageAr = "تم انشاء الطلب بنجاح" });
        }
        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _contractRequestRepository.Delete(id);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "Hospital Request", Message = "request deleted successfully", MessageAr = "تم مسح الطلب بنجاح" });
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("GethospitalsInOrganization/{orgId}")]
        public ActionResult<List<ContractVM>> GethospitalsInOrganization(int orgId)
        {
            try
            {
                return _contractRequestRepository.getRequestForOrganizations(orgId);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        [Route("AddOrganizationRequest")]
        public async Task<IActionResult> AddOrganizationRequest(OrganizationRequestDTO orgrequest)
        {
            try
            {
                if (orgrequest.equipmentIDs.Count == 0)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "contarct", Message = "equipment can't be null", MessageAr = "يجب اختيار آله" });
                }
                _contractRequestRepository.AddRequestForOrganization(orgrequest);

                List<AssignedUserDTO> assignedUsers = new List<AssignedUserDTO>();
                AssignedUserDTO assignedUsersDTO;
                var users = _userManager.Users.ToList();
                var roles = _roleManager.Roles.ToList();
                foreach (var User in users)
                {
                    foreach (var role in roles)
                    {
                        if (await _userManager.IsInRoleAsync(User, role.Name))
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
                foreach (var AssignedUser in assignedUsers)
                {
                    if ( AssignedUser.RoleName == "Admin")
                    {
                        // string confirmationToken = _userManager.GenerateEmailConfirmationTokenAsync(user).Result;
                        string confirmationLink = Url.Action("ConfirmEmail", "ContractRequest", new { userId = AssignedUser.Id }, protocol: HttpContext.Request.Scheme);
                        var message = new Message(new string[] { $"{AssignedUser.Email}" }, "Confirmation Email",
                        $"Dear {AssignedUser.UserName}\r\n Hope this email finds you well \r\n This is Al-Mostakba Technology.it is a notification of new contractRequest, please note that your Email: { AssignedUser.Email }'" +
                        $" By clicking on the following link, you are confirming your email address <a href='{confirmationLink}' type='button'>Confirm Email Address</a>");
                        _emailRepository.Send(message);
                    }
                }

                return StatusCode(StatusCodes.Status200OK, new Response { Status = "contarct", Message = "request created successfully", MessageAr = "تم انشاء الطلب بنجاح" });
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("getRequestBetweenDates/{orgId}")]
        public ActionResult<List<ContractVM>> getRequestBetweenDates(int orgId,dateVM d)
        {
            try
            {
                return _contractRequestRepository.getRequestBetweenDates(orgId,d);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("getRequestForUPA")]
        public ActionResult<List<OrganizationRequestsVM>> getRequestForUPA()
        {
            try
            {
                return _contractRequestRepository.getRequestForUPA();
               // return StatusCode(StatusCodes.Status200OK, new Response { Status = "contarct", Message = "Requst created successfully", MessageAr = "تم انشاء الطلب بنجاح" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("ConfirmEmail")]
        public void ConfirmEmail(string userId, string token)
        {
            ApplicationUser user = _userManager.FindByIdAsync(userId).Result;
            IdentityResult result = _userManager.ConfirmEmailAsync(user, token).Result;
            if (result.Succeeded)
            {
                string loginUrl = "http://10.10.0.147:4050/#/";
                Response.Redirect(loginUrl);
                //  return Ok(new Response { Status = "Success", Message = "Email confirmed successfully!" });
            }
            else
            {
                string registerUrl = "http://10.10.0.111:4050/#/Register";
                Response.Redirect(registerUrl);
            }
        }

        [HttpPut("GetRequestInHospital/{hosId}")]
        public ActionResult<List<ContractRequestVM>> GetRequestInHospital(PagingParameter paging,int hosId)
        {
            return _contractRequestRepository.GetRequestInHospital(paging, hosId);
        }
        [HttpGet]
        [Route("getcount")]
        public int count()
        {
            return _pagingRepository.Count<Assets>();
        }
        [HttpGet("UpdateRequestStatus/{reqId}")]
        public ActionResult UpdateRequestStatus(int reqId)
        {
            try
            {
                _contractRequestRepository.UpdateStatusOfContractRequest(reqId);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "request", Message = "request sent successfully", MessageAr = "تم ارسال الطلب بنجاح" });
            }
            catch(Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "request", Message = ex.Message, MessageAr = ex.Message });
            }
        }
        [HttpGet("GetRequest/{reqId}")]
        public ActionResult<ContractRequestVM> GetRequest(int reqId)
        {
            try
            {
                return _contractRequestRepository.GetRequest(reqId);
               // return StatusCode(StatusCodes.Status200OK, new Response { Status = "request", Message = "get successfully"});
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "request", Message = ex.Message});
            }
        }
    }
}
