using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Repositories.EquipmentReposatories;
using BiomedicalSystemAPI.Repositories.HealthCareUnitRepositories;
using BiomedicalSystemAPI.Repositories.AttachmentRepositories;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using BiomedicalSystemAPI.Repositories.EmailConfirmation;
using System.Text;
using BiomedicalSystemAPI.Repositories.PagingRepository;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EquipmentsController : ControllerBase
    {
        // private BiomedicalSystemAPI.Controllers.ImgUploadController _imgUploadController;

        private IEquipmentRepository _equipmentRepository;
        private IAttachmentRepository _attachmentRepository;
        private QRCoderController _qRCoderController;
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;
        private readonly IEmailRepository _emailRepository;
        private readonly IPagingRepository _pagingRepository;
        //private readonly AssetDbContext _AssetContext;

        // private IHealthCareUnitRepository _healthCareUnitRepository;
        public EquipmentsController(IEquipmentRepository equipmentRepository,
            IAttachmentRepository attachmentRepository,
            ApplicationDbContext context,
            QRCoderController qRCoderController,
            UserManager<ApplicationUser> userManager,
             IConfiguration configuration,
            IEmailRepository emailRepository,
            RoleManager<IdentityRole> roleManager, IPagingRepository pagingRepository)
        {
            _equipmentRepository = equipmentRepository;
            _attachmentRepository = attachmentRepository;
            _qRCoderController = qRCoderController;
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
            _emailRepository = emailRepository;
            _pagingRepository = pagingRepository;
            //_AssetContext = AssetContext;
        }
        // GET: api/Equipments
        [HttpGet]
        public  IEnumerable<EquipmentDTO> GetEquiments()//(PagingParameter paging)
        {
            return _equipmentRepository.GetAll();//(paging);
        }
        [HttpPut]
        [Route("GetEquipmentsWithPaging")]
        public IEnumerable<EquipmentDTO> GetEquipmentsWithPaging(PagingParameter page)
        {
            var eqLst = _equipmentRepository.GetAll().ToList();
            return _pagingRepository.GetAll(page, eqLst);
        }
        [HttpGet]
        [Route("getcount")]
        public int count()
        {
            return _pagingRepository.Count<Assets>();
        }
        [HttpGet]
        [Route("recalledEqs")]
        public IEnumerable<EquipmentDTO> GetAllRecalledEquipments()
        {
            return _equipmentRepository.GetAllRecalledEquipments();
        }
        [HttpGet]
        [Route("Group")]
        public IEnumerable<scanningDateVM> GetEquimentswithgrouping()
        {
            return _equipmentRepository.GetAllwithgrouping();
        }
        [HttpGet]
        [Route("inventories")]
        public IEnumerable<EquipmentDTO> GetAllforInventory()
        {
            return _equipmentRepository.GetAllforInventory();
        }
        //[HttpGet]
        //[Route("GetAllEquimentsByEmp/{email}")]
        //public IEnumerable<EquipmentDTO> GetAllEquiments(string email)
        //{
        //    return _equipmentRepository.GetAllEquimentsByEmp(email);
        //}

        // GET: api/Equipments/5
        [HttpGet("{id}")]
        public ActionResult<EquipmentDTO> GetEquipment(int id)

        {
            var equipment = _equipmentRepository.GetById(id);
            if (equipment == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response
                {
                    Status = "Error",
                    Message = "equiment dosn't exist "
                });
            }
            else
            {
                return equipment;
            }        
        }

        //[HttpGet("{serialNumber}")]
        //[Route("serial/{serialNumber}")]
        //public ActionResult<EquipmentDTO> GetEquipmentBySerial(string serialNumber)
        //{
        //    var equipment = _equipmentRepository.GetEquipmentBySerial(serialNumber);

        //    if (equipment == null)
        //    {
        //        return NotFound();
        //    }

        //    return equipment;
        //}

        // PUT: api/Equipments/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public ActionResult PutEquipment(int id, EquipmentDTO equipment)
        {
            if (id != equipment.Id)
            {
                return BadRequest();
            }

            _equipmentRepository.Update(equipment);

            try
            {
                _equipmentRepository.Save();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                string msg = ex.Message;
            }

            return NoContent();
        }

        // POST: api/Equipments
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        // [ProducesResponseType(StatusCodes.Status201Created)]
        public ActionResult<EquipmentDTO> PostEquipment(EquipmentDTO equipment)
        {
            //foreach(var item in equipment.attachments)
            //{
            //    _attachmentRepository.Add(item,item.FileName);
            //}          
            _equipmentRepository.Add(equipment);
            _qRCoderController.Index(equipment.Id);
            //  _equipmentRepository.SaveChanges();
            //return equipment;
            // _qRCoderController.Index(equipment.Id);
            return CreatedAtAction("GetEquipment", new { id = equipment.Id }, equipment);
            //   return RedirectToAction("Index", "QRCoder", new { eqId = equipment.Id });
        }

        // DELETE: api/Equipments/5
        [HttpDelete("{id}")]
        public ActionResult<Assets> DeleteEquipment(int id)
        {
            var equipment = _equipmentRepository.Find(id);
            if (equipment == null)
            {
                return NotFound();
            }

            _equipmentRepository.Delete(id);
            _equipmentRepository.SaveChanges();

            return equipment;
        }
        //[HttpGet]
        //[Route("GetAllEquimentsByEmp/{email}")]
        //public ActionResult<IEnumerable<Equipment>> GetAllEquimentsByEmp(string email)
        //{
        //    return _equipmentRepository.GetAllEquimentsByEmp(email);
        //}
        [HttpGet]
        [Route("GetEquipmentCoverageEquipments/{eqCoverageId}")]
        public ActionResult<List<Assets>> GetEquipmentCoverageEquipments(int eqCoverageId)
        {
            return _equipmentRepository.GetAllEquimentsByeqCoverage(eqCoverageId);
        }
        [Route("GetmasterEquipment/{masterId}")]
        [HttpGet]
        public ActionResult<List<Assets>> GetmasterEquipment(int masterId)
        {
            List<Assets> Equip = new List<Assets>();
            var newEquip = _equipmentRepository.GetoneEquipmentBymaster(masterId);

            if (newEquip != null)
            {
                return newEquip;
            }
            return null;
        }
        [Route("GetEquipmentByHospital")]
        [HttpPost]
        public ActionResult<List<HospitalVM>> GetEquipByHospital(List<EquipmentDTO> equipmentModel)
        {
            return _equipmentRepository.GetEquipmentByHospital(equipmentModel);
        }
        [Route("GetEquipByGovernorate")]
        [HttpPost]
        public ActionResult<List<GovernorateVM>> GetEquipByGovernorate(List<EquipmentDTO> equipmentmodel)
        {
            return _equipmentRepository.GetEquipmentLstByGovernorate(equipmentmodel);
        }
        [Route("GetEquipByDistrict")]
        [HttpPost]
        public ActionResult<List<CityVM>> GetEquipByDistrict(List<EquipmentDTO> equipmentModel)
        {
            return _equipmentRepository.GetEquipmentLstByDistrict(equipmentModel);
        }
        [Route("GetEquipByOrganization")]
        [HttpPost]
        public ActionResult<List<OrganizationVM>> GetEquipByOrganization(List<EquipmentDTO> equipmentModel)
        {
            return _equipmentRepository.GetEquipmentLstByOrganization(equipmentModel);
        }
        [Route("GetEquipBySupplier")]
        [HttpPost]
        public ActionResult<List<SupplierVM>> GetEquipBySupplier(List<EquipmentDTO> equipmentModel)
        {
            return _equipmentRepository.GetEquipmentLstBySupplier(equipmentModel);
        }
        [Route("FilterEquipment")]
        [HttpPost]
        public ActionResult<List<EquipmentDTO>> FilterEquipment(filterDto data)
        {
            return _equipmentRepository.FilterEquipment(data);
        }
        [Route("GetEquipmentInHospital/{hospitalId}")]
        [HttpGet]
        public ActionResult<List<EquipmentDTO>> GetEquipmentInHospital(int hospitalId)
        {
            return _equipmentRepository.GetEquipmentInHospital(hospitalId);
        }
        [Route("getEquipmentInHospitalToEdit/{hosId}")]
        [HttpPut]
        public ActionResult<List<EquipmentDTO>> getEquipmentInHospitalToEdit(List<EquipmentDTO> equip, int hosId)
        {
            return _equipmentRepository.GetEquipmentInHospitalToEdit(equip,hosId);
        }
        [HttpPut("getEquipmentInContract")]
        public ActionResult<List<EquipmentDTO>> getEquipmentInContract(List<int> Ids)
        {
            if (Ids.Count == 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "contarct", Message = "equipment can't be empty", MessageAr = "يجب اختيار آله" });
            }
            return _equipmentRepository.getEquipmentInContract(Ids);
        }
        [Route("EquipmentInContract/{cId}")]
        [HttpGet]
        public List<EquipmentDTO> EquipmentInContract(int cId)
        {
            return _equipmentRepository.EquipmentInContract(cId);
        }

        [Route("getEquipmentsInContract/{contractId}")]
        [HttpGet]
        public async Task<IEnumerable<EquipmentDTO>> getEquipmentInContract(int contractId)
        {
            List<Hospital> healthUnits = new List<Hospital>();
            List<EquipmentDTO> equips = new List<EquipmentDTO>();
            var equipment = _context.Assets
               .Include(e => e.Department)
               .Include(e => e.Status)
               .Include(e => e.Supplier)
               .Include(e => e.MasterAsset)
               .Include(e => e.Contract)
               .Include(e => e.Hospital).ThenInclude(h=>h.City).ThenInclude(d=>d.Governorate)
               .Include(e => e.equipmentEmployees).Where(e => e.ContractId == contractId).ToList();
            if (equipment == null)
            {
                return null;
            }
            foreach (var e in equipment)
            {
                var eq = new EquipmentDTO
                {
                    Id = e.Id,
                    EquipmentCode = e.Code,
                    EquipmentName = e.MasterAsset.Name,
                    EquipmentType = e.Type,
                    InstallationDate = e.InstallationDate,
                    HealthCareUnitId = e.HospitalId,
                    SerialNumber = e.SerialNumber,
                    InternalCode = e.Barcode,
                    Barcode = e.Barcode,
                    PurchaseDate = e.PurchaseDate,
                    ManufacturerId = e.MasterAsset.BrandId,
                    ManufacturerName = _context.Brands.Where(m => m.Id == e.MasterAsset.BrandId).FirstOrDefault().Name,
                    ManufacturerNameAr = _context.Brands.Where(m => m.Id == e.MasterAsset.BrandId).FirstOrDefault().NameAr,
                    OrganizationName = _context.Organizations.Where(o => o.Id == e.Hospital.organizationId).FirstOrDefault().Name,
                    OrganizationNameAr = _context.Organizations.Where(o => o.Id == e.Hospital.organizationId).FirstOrDefault().NameAr,
                    HealthCareUnitName = e.Hospital.Name,
                    HealthCareUnitNameAr = e.Hospital.NameAr,
                    SupplierId = e.SupplierId,
                    SupplierName = e.Supplier.Name,
                    SupplierNameAr = e.Supplier.NameAr,
                    HealthDirectoryId = e.Hospital.Governorate.Id,
                    HealthDirectoryName = e.Hospital.Governorate.Name,
                    HealthDistrictId = e.Hospital.City.Id,
                    HealthDistrictName = e.Hospital.City.Name,
                    EmployeeIDs = _context.Employees.Where(a => a.AssetId == e.Id).Select(a => a.UserId).ToList(),
                    ContractId = e.ContractId
                };
                StringBuilder table = new StringBuilder();
                table.Append("<tr><td>").Append("EquipmentName").Append("</td><td>").Append("contractSubject").Append("</td></tr>");

                for (int i = 0; i < equipment.Count; i++)
                {

                    table.Append("<tr><td>").Append(equipment[i].MasterAsset.Name).Append("</td><td>").Append(equipment[i].Contract.Subject).Append("</td></tr>");
                    // try e instead of equipment[i]  //  table.Append("<tr><td>").Append(e.EquipmentName).Append("</td><td>").Append(equipment[i].Contract.Subject).Append("</td></tr>");

                }

                bool isFound = false;
                var healthunit = _context.Hospitals.Where(h => h.Id == eq.HealthCareUnitId).FirstOrDefault();
                for (int i = 0; i < healthUnits.Count; i++)
                {
                    if (healthUnits[i].Id == healthunit.Id)
                    {
                        isFound = true;
                       
                    }
   
                }
                if (isFound == true)
                {
                    break;
                }
                isFound = false;
                if(isFound==false)
                {
                    healthUnits.Add(healthunit);
                }
                equips.Add(eq);
            }
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
                foreach (var h in healthUnits)
                {

                    if (h.Id == AssignedUser.HealthCareUnitId && AssignedUser.RoleName == "Hospital")
                    {
                        var contract = _context.Contracts.Where(c => c.Id == contractId).FirstOrDefault();

                        // string confirmationToken = _userManager.GenerateEmailConfirmationTokenAsync(user).Result;
                        string confirmationLink = Url.Action("ConfirmEmail", "ContractRequest", new { userId = AssignedUser.Id }, protocol: HttpContext.Request.Scheme);
                        var message = new Message(new string[] { $"{AssignedUser.Email}" }, "Confirmation Email",
                        $"Dear {AssignedUser.UserName}\r\n Hope this email finds you well \r\n This is Al-Mostakba Technology" +
                        $".it is a notification of new contractRequest, please note that your Email: { AssignedUser.Email }'" +
                        $" By clicking on the following link, you are confirming your email address { $"{contractId}" }");
                        //<table>" +
                        //$"<tr><th>equipmentName</th><th>OrganizationName</th><th>HealthCareUnitName</th></tr><tr><td>{$"{ eq.EquipmentName}"}</td><td>{$"{eq.OrganizationName}"}</td><td>{$"{eq.HealthCareUnitName}"}</td></tr></table>");

                        _emailRepository.Send(message);
                    }
                }
            }
            return equips;
        }
    }
}
