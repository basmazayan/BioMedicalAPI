using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Mail;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.EmailConfirmation;
using BiomedicalSystemAPI.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Office.Interop.Excel;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext _context;
        private readonly IEmailRepository _emailRepository;
        public AuthenticateController(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, 
            IConfiguration configuration, ApplicationDbContext context,
            IEmailRepository emailRepository)
        {
            _userManager = userManager;
            this.roleManager = roleManager;
            _configuration = configuration;
            _context = context;
            _emailRepository = emailRepository;
        }

        public object DateTimeFormatter { get; private set; }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var user = await _userManager.FindByEmailAsync(model.Email);
            if(user==null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User doesn't exist" });
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                var userRoles = await _userManager.GetRolesAsync(user);

                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }

                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddMinutes(30),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                    
                    ) ;
                var userId = User.FindFirstValue(ClaimTypes.Email);
                //var usrId = user.Id;
                var x = user.Email;
         
               // var lstEmployees = _context.Employees.Where(a => a.Email == user.Email).ToList();
                //if (lstEmployees.Count > 0)
                //{
                //    Employee employeeObj = lstEmployees[0];
                //    usrId = employeeObj.Id;
                //    dirId = employeeObj.HealthDirectoryId;
                //    distId = employeeObj.HealthDistrictId;
                //}
                var name = user.UserName;
                var Useremail = user.Email;
                return Ok(new UserVm
                {
                    UserName=name,
                    Id=user.Id,
                   // empId= usrId,                    
                    Email =user.Email,
                    RoleName=userRoles[0],
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo,  
                    Code=user.Code,
                    HealthDistrictId = user.HealthDistrictId,
                    HealthdirId = user.HealthdirId,
                    HealthCareUnitId = user.HealthCareUnitId,
                    OrganizationId = user.OrganizationId,
                    OrganizationName = _context.Organizations.Where(org => org.Id == user.OrganizationId).Select(org => org.Name).FirstOrDefault(),
                    SubOrganizationId=user.SubOrganizationId,
                    SupplierId=user.SupplierId
                    
                });
            }
            return Unauthorized();
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] UserVm model)
        {
            var AllUsers = _context.Users.ToList();
            if(AllUsers.Count!=0)
            {

                if (model.RoleName == null || model.RoleName == "")
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response
                    {
                        Status = "Error",
                        Message = "role can't be equal null!"
                    });
                }
                var userExists = await _userManager.FindByEmailAsync(model.Email);
                if (userExists != null)
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response {
                        Status = "Error", Message = "User already exists!" });
                ApplicationUser user = new ApplicationUser()
                {
                    Email = model.Email,
                    SecurityStamp = Guid.NewGuid().ToString(),
                    UserName = model.UserName,
                    NameAr = model.UserNameAr,
                    Phone=model.Phone,
                    Mobile=model.Mobile,
                    Code=model.Code,
                    HealthDistrictId = model.HealthDistrictId,
                    HealthdirId=model.HealthdirId,
                    HealthCareUnitId=model.HealthCareUnitId,
                    OrganizationId=model.OrganizationId,
                    SubOrganizationId=model.SubOrganizationId,
                    SupplierId=model.SupplierId
                    
                    //EuipmentId=model.EquipmentId
                };              
                var result = await _userManager.CreateAsync(user, model.Password);
                if (!result.Succeeded)
                    return StatusCode(StatusCodes.Status500InternalServerError,
                    new Response { Status = "Error"+ result.Errors.ToList()[0].Code, Message =result.Errors.ToList()[0].Description });


                //else
                //{
                    if (model.RoleName == "Admin")
                {
                    if (!await roleManager.RoleExistsAsync(Roles.Admin))
                        await roleManager.CreateAsync(new IdentityRole(Roles.Admin));
                    await _userManager.AddToRoleAsync(user, Roles.Admin);
                }
                else if (model.RoleName == "Technician")
                {
                    if (!await roleManager.RoleExistsAsync(Roles.Technician))
                        await roleManager.CreateAsync(new IdentityRole(Roles.Technician));
                    await _userManager.AddToRoleAsync(user, Roles.Technician);
                }
                else if (model.RoleName == "Governorate")
                {
                    if (!await roleManager.RoleExistsAsync(Roles.Governorate))
                        await roleManager.CreateAsync(new IdentityRole(Roles.Governorate));
                    await _userManager.AddToRoleAsync(user, Roles.Governorate);
                }
                else if (model.RoleName == "City")
                {
                    if (!await roleManager.RoleExistsAsync(Roles.City))
                        await roleManager.CreateAsync(new IdentityRole(Roles.City));
                    await _userManager.AddToRoleAsync(user, Roles.City);
                }
                else if (model.RoleName == "Hospital")
                {
                    if (!await roleManager.RoleExistsAsync(Roles.Hospital))
                        await roleManager.CreateAsync(new IdentityRole(Roles.Hospital));
                    await _userManager.AddToRoleAsync(user, Roles.Hospital);
                }
                else if (model.RoleName == "HeadQuarter")
                {
                    if (!await roleManager.RoleExistsAsync(Roles.HeadQuarter))
                        await roleManager.CreateAsync(new IdentityRole(Roles.HeadQuarter));
                    await _userManager.AddToRoleAsync(user, Roles.HeadQuarter);
                }
                else if (model.RoleName == "Organization")
                {
                    if (!await roleManager.RoleExistsAsync(Roles.Organization))
                        await roleManager.CreateAsync(new IdentityRole(Roles.Organization));
                    await _userManager.AddToRoleAsync(user, Roles.Organization);
                }
                else if (model.RoleName == "Supplier")
                {
                    if (!await roleManager.RoleExistsAsync(Roles.Supplier))
                        await roleManager.CreateAsync(new IdentityRole(Roles.Supplier));
                    await _userManager.AddToRoleAsync(user, Roles.Supplier);
                }

               


                    //     _context.Users.Remove(user);
                    //    _context.SaveChanges();
                    //    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "UserRole cannot be empty " });

                    //}
                    // string url = "http://localhost:4200/login";
                    string confirmationToken = _userManager.GenerateEmailConfirmationTokenAsync(user).Result;
                    string confirmationLink = Url.Action("ConfirmEmail", "Authenticate", new { userId = user.Id, token = confirmationToken }, protocol: HttpContext.Request.Scheme);
                    var message = new Message(new string[] { $"{model.Email}" }, "Confirmation Email",
                    $"Dear {model.UserName}\r\n Hope this email finds you well \r\n This is Al-Mostakba Technology.As per your registration, please note that your Email: { model.Email }'" +
                    $" By clicking on the following link, you are confirming your email address <a href='{confirmationLink}' type='button'>Confirm Email Address</a>");
                    _emailRepository.Send(message);

                    return Ok(new Response { Status = "Success", Message = "User created successfully!" });
                }
               // }
            ApplicationUser firstuser = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.UserName,
                NameAr = model.UserNameAr,
                Code=model.Code,
                Phone=model.Phone,
                Mobile=model.Mobile,
                HealthdirId=model.HealthdirId,
                HealthCareUnitId=model.HealthCareUnitId,
                HealthDistrictId=model.HealthDistrictId,
                OrganizationId=model.OrganizationId,
                SubOrganizationId=model.SubOrganizationId
                
                //EuipmentId=model.EquipmentId
            };
            var checkpassword = await _userManager.CreateAsync(firstuser, model.Password);
            if (!checkpassword.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Password is invalid,cannot be less than 10,must contain numbers,lowercase and uppercase" });
            if (!await roleManager.RoleExistsAsync(Roles.Admin))
                await roleManager.CreateAsync(new IdentityRole(Roles.Admin));
            await _userManager.AddToRoleAsync(firstuser, Roles.Admin);
            
            return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }

        [HttpPost]
        [Route("register-admin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] RegisterModel model)
        {
            var userExists = await _userManager.FindByNameAsync(model.Username);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });

            if (!await roleManager.RoleExistsAsync(Roles.Admin))
                await roleManager.CreateAsync(new IdentityRole(Roles.Admin));
            if (!await roleManager.RoleExistsAsync(Roles.Technician))
                await roleManager.CreateAsync(new IdentityRole(Roles.Technician));

            if (await roleManager.RoleExistsAsync(Roles.Admin))
            {
                await _userManager.AddToRoleAsync(user, Roles.Admin);
            }

            return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }

        [HttpPut]
        [Route("ChangeRole")]
        public async Task<IActionResult> ChangeRole([FromBody] UserVm model)
        {
            var userExists = await _userManager.FindByNameAsync(model.UserName);
            //var claims = _userManager.GetClaimsAsync(userExists);
            var role = _userManager.GetRolesAsync(userExists);

            //    //Filter specific claim    
            if (userExists != null)
            {
                //        //_userManager.RemoveClaimAsync(userExists,claims);
                  await _userManager.RemoveFromRoleAsync(userExists, role.ToString());
                if (!await roleManager.RoleExistsAsync(Roles.Technician))
                {
                    await roleManager.CreateAsync(new IdentityRole(Roles.Technician));
                    await _userManager.AddToRoleAsync(userExists, Roles.Technician);
                }
                //        //if (!await roleManager.RoleExistsAsync(Roles.Admin))
                //        //{
                //        //    await roleManager.CreateAsync(new IdentityRole(Roles.Admin));
                //        //    await _userManager.AddToRoleAsync(userExists, Roles.Admin);
                //        //}

                 }
                ApplicationUser user = new ApplicationUser()
        {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.UserName,
                NameAr = model.UserNameAr
            //EuipmentId=model.EquipmentId               
        };
        var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });

        //    //if (!await roleManager.RoleExistsAsync(Roles.Admin))
        //    //{
        //    //    await roleManager.CreateAsync(new IdentityRole(Roles.Admin));
        //    //    await _userManager.AddToRoleAsync(user, Roles.Admin);
        //    //}
        //    //if (!await roleManager.RoleExistsAsync(Roles.Technician))
        //    //{
        //    //    await roleManager.CreateAsync(new IdentityRole(Roles.Technician));
        //    //    await _userManager.AddToRoleAsync(user, Roles.Technician);
        //    //}

        //    //if (await roleManager.RoleExistsAsync(Roles.Admin))
        //    //{
        //    //    await _userManager.AddToRoleAsync(user, Roles.Admin);
        //    //}
        //    //if (await roleManager.RoleExistsAsync(Roles.Technician))
        //    //{
        //    //    await _userManager.AddToRoleAsync(user, Roles.Technician);
        //    //}
          return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }
        [Route("ConfirmEmail")]
        public void ConfirmEmail(string userId, string token)
        {
            ApplicationUser user = _userManager.FindByIdAsync(userId).Result;
            IdentityResult result = _userManager.ConfirmEmailAsync(user, token).Result;
            if(result.Succeeded)
            {
                string loginUrl = "http://10.10.0.111:4050/#/";
                Response.Redirect(loginUrl);
             //  return Ok(new Response { Status = "Success", Message = "Email confirmed successfully!" });
            }
            else
            {
                string registerUrl = "http://10.10.0.111:4050/#/Register";
                Response.Redirect(registerUrl);
            }
        }
        [HttpPost]
        [Route("forgetPassword/{email}")]
        public async Task<ActionResult> forgetPassword(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if(user==null)
            {
             //   return null;
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "this email was not fount please enter a correct mail" });
            }
            var token = await _userManager.GeneratePasswordResetTokenAsync(user);
            var link = Url.Action("reset", "Authenticate", new { token, email = user.Email }, Request.Scheme);
            var message = new Message(new string[] { $"{email}" }, "Reset Password",              
                $" By clicking on the following link, you are reset your password <a href='{link}' type='button'>Reset Password</a>");
            _emailRepository.Send(message);
            //return user;
            return Ok(new Response { Status = "Success", Message = "Email send successfully!" });
        }
        [Route("reset")]
        public void reset(string email,string token)
        {
            //return RedirectToAction("ResetPassword", "Authenticate", new { token, email = email }, Request.Scheme);
            string resetUrl = "http://10.10.0.111:4050/#/resetPassword?email=" + $"{email}" + "&token=" + $"{ token}";
            Response.Redirect(resetUrl);
        }
        [HttpPost]
        [Route("ResetPassword")]
        public ResetPassword ResetPassword(ResetPassword resetPassword)
        {
            var resetResult = getUser(resetPassword);
            if (resetResult.Result.Succeeded)
            {
                //   string loginUrl = "http://localhost:4200/login";
                //  Response.Redirect("http://localhost:4200/login");
                //return Ok(new Response { Status = "Success", Message = "Password changed successfully!" });
                return resetPassword;
                //Uri url = new Uri("http://localhost:4200", UriKind.Absolute);
                //return Redirect(url.ToString());
                // return RedirectToAction("login", "Authenticate");
            }
            else
            {
                // string resetUrl = "http://localhost:4200/forgetPassword";
                // Response.Redirect("http://localhost:4200/forgetPassword" + $"{resetPassword.Email}" + "&token=" + $"{ resetPassword.Token}");
                //  return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Password changed failed! Please check your email and try again." });
                return null;
                // return Redirect(resetUrl);
                //  Response.Redirect(resetUrl);
            }
        }
        public async Task<IdentityResult> getUser(ResetPassword resetPassword)
        {
            var token = resetPassword.Token.Replace(' ', '+');
            var user = await _userManager.FindByEmailAsync(resetPassword.Email);
            return await _userManager.ResetPasswordAsync(user, token, resetPassword.Password);
        }
    }
    
}
