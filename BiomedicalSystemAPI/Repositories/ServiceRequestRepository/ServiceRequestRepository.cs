using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.ServiceRequestRepository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.ServiceRequestRepository
{
    public class ServiceRequestRepository : IServiceRequestRepository
    {
        private readonly ApplicationDbContext _context;
        public ServiceRequestRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public void Add(ServiceRequestDTO serviceRequest)
           
        {
            //string date= DateTime.UtcNow.ToString("MM-dd-yyyy");
            //serviceRequest.ServiceRequestDate = DateTime.Now.Date;
            string timeS= serviceRequest.ServiceRequestDate.ToString("tt", CultureInfo.InvariantCulture);
           // string strTime = serviceRequest.ServiceRequestTime = DateTime.Now.ToString("h:mm");
            string strTime = DateTime.Parse(serviceRequest.ServiceRequestTime).ToString("HH:mm:ss");
            var req = new ServiceRequest();
            // eq.Id = equipment.Id;
            Random random = new Random();
            int num = random.Next(10000);
            var names = (serviceRequest.ServiceRequestTitle).Split(" ");
            req.Code = (names[0] + ' ' + num.ToString());
            req.Title = serviceRequest.ServiceRequestTitle;
            req.TitleAr = serviceRequest.ServiceRequestTitleAr;
            req.Type = serviceRequest.RequestType;
            req.Date = (serviceRequest.ServiceRequestDate).Date; //DateTime.Parse(date);
            req.Time =  TimeSpan.Parse(strTime);
            req.ProblemDescription = serviceRequest.ProblemDescription;
            req.ProblemDescriptionAr = serviceRequest.ProblemDescriptionAr;
            req.AssetId = serviceRequest.EquipmentId;
            req.UserId = serviceRequest.UserId;
            req.ModeId = serviceRequest.ModeId;
            req.PriorityId = serviceRequest.PriorityId;
            req.GovernorateId = serviceRequest.HealthDirectoryId;
            req.CityId = serviceRequest.HealthDistrictId;
            _context.ServiceRequest.Add(req);
        }

        public void Delete(int id)
        {
            ServiceRequest serviceRequest = Find(id);
            _context.ServiceRequest.Remove(serviceRequest);
        }

        private bool disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public ServiceRequest Find(int id)
        {
            return _context.ServiceRequest.Find(id);
        }

        public IEnumerable<ServiceRequest> GetAll()
        {
            var requests = _context.ServiceRequest
                .Include(e => e.User)
                .Include(e => e.Asset)
                .Include(e => e.Mode)
                .Include(e => e.Priority)
                .Select(e => new ServiceRequest
                {
                    Id = e.Id,
                    Title = e.Title,
                    TitleAr = e.TitleAr,
                    Code = e.Code,
                    ProblemDescription = e.ProblemDescription,
                    ProblemDescriptionAr = e.ProblemDescriptionAr,
                    Date = e.Date,
                    Time = e.Time, //TimeSpan.Parse(e.ServiceRequestTime.ToString()),
                    Type = e.Type,
                    UserId = e.UserId,
                    UserName = e.User.UserName,
                    UserEmail = e.User.Email,
                    ModeId = e.ModeId,
                    RequestMode = e.Mode.Name,
                    AssetId = e.AssetId,
                    //EquipmentName = e.Equipment.EquipmentName,
                    AssetCode=e.AssetCode,
                    PriorityId = e.PriorityId,
                    PriorityLevel = e.Priority.Level,
                    CityId = e.CityId,
                    GovernorateId = e.GovernorateId,
                }).ToList();
            return requests;
        }

        public IEnumerable<ServiceRequest> GetAllRequestsByEmp(string userId)
        {
            var requests = _context.ServiceRequest.Where(e=>e.UserId==userId)
                .Include(e => e.User)
                .Include(e => e.Asset)
                .Include(e => e.Mode)
                .Include(e => e.Priority)
                .Select(e => new ServiceRequest
                {
                    Id = e.Id,
                    Title = e.Title,
                    Code = e.Code,
                    ProblemDescription = e.ProblemDescription,
                    Date = e.Date,
                    Time = e.Time, //TimeSpan.Parse(e.ServiceRequestTime.ToString()),
                    Type = e.Type,
                    UserId = e.UserId,
                    UserEmail = e.UserEmail,
                    UserName = e.User.UserName,
                    ModeId = e.ModeId,
                    RequestMode = e.Mode.Name,
                    AssetId = e.AssetId,
                    AssetCode = e.Asset.Code,
                    PriorityId = e.PriorityId,
                    PriorityLevel = e.Priority.Level

                }).ToList();
            return requests;
        }
        public IEnumerable<ServiceRequest> GetAllRequestsByUserEmail(string email)
        {
            var requests = _context.ServiceRequest.Where(e => e.UserEmail == email)
                .Include(e => e.User)
                .Include(e => e.Asset)
                .Include(e => e.Mode)
                .Include(e => e.Priority)
               
                .Select(e => new ServiceRequest
                {
                    Id = e.Id,
                    Title = e.Title,
                    Code = e.Code,
                    ProblemDescription = e.ProblemDescription,
                    Date = e.Date,
                    Time = e.Time, //TimeSpan.Parse(e.ServiceRequestTime.ToString()),
                    Type = e.Type,
                    UserId = e.UserId,
                    UserName = e.User.UserName,
                    UserEmail = e.UserEmail,
                    ModeId = e.ModeId,
                    RequestMode = e.Mode.Name,
                    AssetId = e.AssetId,
                    AssetCode = e.Asset.Code,
                    PriorityId = e.PriorityId,
                    PriorityLevel = e.Priority.Level,
                    

                }).ToList();
            return requests;
        }

        public IEnumerable<ServiceRequest> GetAllRequestsByDistrict(int districtId)
        {
            var requests = _context.ServiceRequest.Where(e => e.Asset.Hospital.City.Id == districtId)
                .Include(e => e.Asset)
                .Include(e => e.Mode)
                .Include(e => e.Priority)
                .Include(e=>e.City)
                .Select(e => new ServiceRequest
                {
                    Id = e.Id,
                    Title = e.Title,
                    Code = e.Code,
                    ProblemDescription = e.ProblemDescription,
                    Date = e.Date,
                    Time = e.Time, //TimeSpan.Parse(e.ServiceRequestTime.ToString()),
                    Type = e.Type,
                    UserId = e.UserId,
                    UserName = e.User.UserName,
                    UserEmail = e.UserEmail,
                    ModeId = e.ModeId,
                    RequestMode = e.Mode.Name,
                    AssetId = e.AssetId,
                    AssetCode = e.Asset.Code,
                    PriorityId = e.PriorityId,
                    PriorityLevel = e.Priority.Level,
                    CityId=e.City.Id

                }).ToList();
            return requests;
        }
        public IEnumerable<ServiceRequest> GetAllRequestsByDirectory(int directoryId)
        {
            var requests = _context.ServiceRequest.Where(e => e.Asset.Hospital.Governorate.Id == directoryId)
                .Include(e => e.Asset)
                .Include(e => e.Mode)
                .Include(e => e.Priority)
                .Include(e => e.Governorate)
                .Include(e=>e.User)
                .Select(e => new ServiceRequest
                {
                    Id = e.Id,
                    Title = e.Title,
                    Code = e.Code,
                    ProblemDescription = e.ProblemDescription,
                    Date = e.Date,
                    Time = e.Time, //TimeSpan.Parse(e.ServiceRequestTime.ToString()),
                    Type = e.Type,
                    UserId = e.UserId,
                    UserName = e.User.UserName,
                    UserEmail = e.UserEmail,
                    ModeId = e.ModeId,
                    RequestMode = e.Mode.Name,
                    AssetId = e.AssetId,
                    AssetCode = e.Asset.Code,
                    PriorityId = e.PriorityId,
                    PriorityLevel = e.Priority.Level,
                    CityId = e.User.CityId,
                    GovernorateId=e.User.GovernorateId,

                }).ToList();
            return requests;
        }
        public ServiceRequestDTO GetById(int id)
        {
                var e = _context.ServiceRequest.FirstOrDefault(e => e.Id == id);
                var req = new ServiceRequestDTO
                {
                    Id = e.Id,
                    ServiceRequestCode = e.Code,
                    ProblemDescription = e.ProblemDescription,
                    ServiceRequestTitle = e.Title,
                    ServiceRequestDate = e.Date,
                    RequestType = e.Type,
                    EquipmentId = e.AssetId,
                    UserId = e.UserId,
                };
                if (req == null)
                {
                    return null;
                }

                return req;
            }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public Task<ActionResult<IEnumerable<ServiceRequest>>> ToList()
        {
            throw new NotImplementedException();
        }

        public void Update(ServiceRequestDTO serviceRequest)
        {
            var req = new ServiceRequest();
            req.Id = serviceRequest.Id;
            req.Code = serviceRequest.ServiceRequestCode;
            req.ProblemDescription = serviceRequest.ProblemDescription;
            req.ProblemDescriptionAr = serviceRequest.ProblemDescriptionAr;
            req.Title = serviceRequest.ServiceRequestTitle;
            req.TitleAr = serviceRequest.ServiceRequestTitleAr;
            req.Date = serviceRequest.ServiceRequestDate;
            req.Type = serviceRequest.RequestType;
            req.UserId = serviceRequest.UserId;
            req.AssetId = serviceRequest.EquipmentId;
            req.GovernorateId = serviceRequest.HealthDirectoryId;
            req.CityId = serviceRequest.HealthDistrictId;
            req.ModeId = serviceRequest.ModeId;
            req.PriorityId = serviceRequest.PriorityId;
            req.PriorityLevel = serviceRequest.PriorityLevel;
            string strTime = serviceRequest.ServiceRequestTime;//.ToString("h:mm:ss");
            //TimeSpan.Parse(serviceRequest.ServiceRequestTime.ToString("h:mm:ss")); 
            req.Time = TimeSpan.Parse(strTime);
            _context.Entry(req).State = EntityState.Modified;
          //  _context.SaveChanges();
        }
        public void CreateStatus()
        {
            List<RequestStatus> re = _context.requestStatuses.ToList();
            if(re.Count==0)
            {
                RequestStatus requestStatus1 = new RequestStatus();
                RequestStatus requestStatus2 = new RequestStatus();
                RequestStatus requestStatus3 = new RequestStatus();
                requestStatus1.status = ServiceRequestStatus.Open;
                requestStatus1.statusAr = ServiceRequestStatus.OpenAr;
                requestStatus1.color = "green";
                requestStatus2.status = ServiceRequestStatus.Closed;
                requestStatus2.statusAr = ServiceRequestStatus.ClosedAr;
                requestStatus2.color = "blue";
                requestStatus3.status = ServiceRequestStatus.InProgress;
                requestStatus3.statusAr = ServiceRequestStatus.InProgressAr;
                requestStatus3.color = "orange";
                _context.requestStatuses.Add(requestStatus1);
                _context.requestStatuses.Add(requestStatus2);
                _context.requestStatuses.Add(requestStatus3);
            }
            
        }
    }
}
