using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.ServiceRequestRepository
{
  public interface IServiceRequestRepository : IDisposable
    {
        public IEnumerable<ServiceRequest> GetAll();
        ServiceRequestDTO GetById(int id);
        ServiceRequest Find(int id);
        void Add(ServiceRequestDTO serviceRequestDTO);
        void Update(ServiceRequestDTO serviceRequestDTO);
        void Delete(int id);
        void Save();
        void SaveChanges();
        Task<ActionResult<IEnumerable<ServiceRequest>>> ToList();
        IEnumerable<ServiceRequest> GetAllRequestsByEmp(string empId);
        IEnumerable<ServiceRequest> GetAllRequestsByUserEmail(string empEmail);
        IEnumerable<ServiceRequest> GetAllRequestsByDirectory(int districtId);
        void CreateStatus();
    }
}
