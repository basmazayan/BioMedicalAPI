using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.WorkOrdersRepositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkOrderController : ControllerBase
    {
        private readonly IWorkOrderRepository _workOrderRepository;
        public WorkOrderController(IWorkOrderRepository workOrderRepository)
        {
            _workOrderRepository = workOrderRepository;
        }
        [HttpPost]
        public void postworkOrder(WorkOrdersDTO workorder)
        {
            _workOrderRepository.Add(workorder);
            _workOrderRepository.Save();
        }
        [HttpPost]
        [Route("AddWorkOrderWithoutRequest")]
        public void AddWorkOrderWithoutRequest(WorkOrdersDTO workorder)
        {
            _workOrderRepository.AddWithoutRequest(workorder);
            _workOrderRepository.Save();
        }
        [HttpGet]
        [Route("GetAllRequestStatus")]
        public IEnumerable<RequestStatus>GetAllRequestStatus()
        {
            return _workOrderRepository.GetAllRequestStatus();
        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _workOrderRepository.Delete(id);
            _workOrderRepository.Save();
        }
        [HttpGet]
        public IEnumerable<WorkOrdersDTO>GetAll()
        {
            return _workOrderRepository.GetAll();            
        }
        [HttpGet]
        [Route("GetAllOrdersWithoutRequest")]
        public IEnumerable<WorkOrdersDTO> GetAllOrdersWithoutRequest()
        {
            return _workOrderRepository.GetAllOrdersWithoutRequest();
        }
        [HttpGet("{id}")]
        public WorkOrdersDTO GetById(int id)
        {
            return _workOrderRepository.GetById(id);
        }
        [HttpPut("{id}")]
        public ActionResult PutWorkOrder(int id,WorkOrdersDTO workOrder)
        {
            if (id != workOrder.Id)
            {
                return BadRequest();
            }
            _workOrderRepository.Update(workOrder);

            try
            {
                _workOrderRepository.Save();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                string msg = ex.Message;
            }
            return NoContent();
        }
      //  [HttpGet("{id}")]
        [Route("CloseWorkOrder/{id}")]
        public void CloseWorkOrder(int id)
        {
            _workOrderRepository.CloseOrder(id);
            _workOrderRepository.Save();
        }
    }
}
