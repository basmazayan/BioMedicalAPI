using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.WorkOrdersRepositories
{
  public interface IWorkOrderRepository:IDisposable
    {
        IEnumerable<WorkOrdersDTO> GetAll();
        IEnumerable<WorkOrdersDTO> GetAllOrdersWithoutRequest();
        WorkOrdersDTO GetById(int id);
        WorkOrdersDTO Find(int id);
        void Add(WorkOrdersDTO workOrder);
        void AddWithoutRequest(WorkOrdersDTO workOrder);
        void Update(WorkOrdersDTO workOrder);
        void Delete(int id);
        void Save();
        void CloseOrder(int id);
        IEnumerable<RequestStatus> GetAllRequestStatus();
        WorkOrdersDTO GetWorkOrderByRequestId(int id);
    }
}
