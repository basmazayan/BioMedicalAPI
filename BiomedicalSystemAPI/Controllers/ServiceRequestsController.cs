using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.ServiceRequestRepository;
using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Repositories.WorkOrdersRepositories;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceRequestsController : ControllerBase
    {
        private IServiceRequestRepository _serviceRequestRepository;
        private IWorkOrderRepository _workOrderRepository;

        public ServiceRequestsController(IServiceRequestRepository serviceRequestRepository, IWorkOrderRepository workOrderRepository)
        {
            _serviceRequestRepository = serviceRequestRepository;
            _workOrderRepository = workOrderRepository;
        }
        

        // GET: api/ServiceRequests
        [HttpGet]
      //[Route("All")]
        public IEnumerable<ServiceRequest> GetServiceRequest()
        {
            return _serviceRequestRepository.GetAll();
        }

        [HttpGet]
        [Route("AllRequestsByEmployeeId/{empId}")]
        public IEnumerable<ServiceRequest> GetServiceRequestByEmp(string empId)
        {
            return _serviceRequestRepository.GetAllRequestsByEmp(empId);
        }
        

        [HttpGet]
        [Route("GetAllRequestsByEmpEmail/{empEmail}")]
        public IEnumerable<ServiceRequest> GetAllRequestsByEmpEmail(string empEmail)
        {
            return _serviceRequestRepository.GetAllRequestsByUserEmail(empEmail);
        }
        // GET: api/ServiceRequests/5

        [HttpGet]
        [Route("GetAllRequestsByDistrict/{districtId}")]
        public IEnumerable<ServiceRequest> GetAllRequestsByDistrict(int districtId)
        {
            return _serviceRequestRepository.GetAllRequestsByDirectory(districtId);
        }  [HttpGet]
        [Route("GetAllRequestsByDirectory/{directoryId}")]
        public IEnumerable<ServiceRequest> GetAllRequestsByDirectory(int directoryId)
        {
            return _serviceRequestRepository.GetAllRequestsByDirectory(directoryId);
        }
        
        [HttpGet("{id}")]
        public ActionResult<ServiceRequest> GetServiceRequest(int id)
        {
            var serviceRequest =  _serviceRequestRepository.Find(id);

            if (serviceRequest == null)
            {
                return NotFound();
            }

            return serviceRequest;
        }

        // PUT: api/ServiceRequests/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public IActionResult PutServiceRequest(int id, ServiceRequestDTO serviceRequest)
        {
            if (id != serviceRequest.Id)
            {
                return BadRequest();
            }

            _serviceRequestRepository.Update(serviceRequest);
            _serviceRequestRepository.SaveChanges();

         
            return NoContent();
        }

        // POST: api/ServiceRequests
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        //[Route("CreateRequest")]
        public ActionResult<ServiceRequestDTO> PostServiceRequest(ServiceRequestDTO serviceRequest)
        {
            _serviceRequestRepository.Add(serviceRequest);
            _serviceRequestRepository.SaveChanges();

            return CreatedAtAction("GetServiceRequest", new { id = serviceRequest.Id }, serviceRequest);
        }

        // DELETE: api/ServiceRequests/5
        [HttpDelete("{id}")]
        public ActionResult<ServiceRequest> DeleteServiceRequest(int id)
        {
            var serviceRequest = _serviceRequestRepository.Find(id);
            var workOrder = _workOrderRepository.GetWorkOrderByRequestId(id);
            if(workOrder!=null)
            {
                _workOrderRepository.Delete(workOrder.Id);
            }
            else
            {
                if (serviceRequest == null)
                {
                    return NotFound();
                }
                _serviceRequestRepository.Delete(id);
                _serviceRequestRepository.SaveChanges();
            }
            

            return serviceRequest;
        }
        [Route("createRequestStatus")]
        public void createRequestStatus()
        {
            _serviceRequestRepository.CreateStatus();
            _serviceRequestRepository.SaveChanges();
        }
        
    }
}
