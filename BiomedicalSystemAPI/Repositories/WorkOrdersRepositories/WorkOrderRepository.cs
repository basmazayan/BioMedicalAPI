using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.WorkOrdersRepositories
{
    public class WorkOrderRepository : IWorkOrderRepository
    {
        private readonly ApplicationDbContext _context;
        public WorkOrderRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public void Add(WorkOrdersDTO workorder)
        {
            WorkOrders wo = new WorkOrders();
            int eqId = _context.ServiceRequest.Find(workorder.ServiceRequestId).AssetId;
            if(workorder.UserId==null)
            {
                workorder.UserId =null ;
            }
            if (workorder.VendorId == 0)
            {
                workorder.VendorId = null;
            }
            wo.UserId = workorder.UserId;
            wo.VendorId = workorder.VendorId;
            wo.Date = workorder.WorkOrderDate;
            wo.PriorityId = workorder.PriorityId;
            wo.RequestStatusId = workorder.RequestStatusId;
            wo.AssetId = eqId;
            wo.MaintenanceId = workorder.MaintenanceId;
            wo.ServiceRequestId = workorder.ServiceRequestId;
            wo.SparePartId = workorder.SparePartId;
            _context.WorkOrders.Add(wo);
        }

        public void Delete(int id)
        {
            WorkOrders workOrder = _context.WorkOrders.Find(id);
            SparePart sparePart = _context.spareParts.Find(workOrder.SparePartId);
            MaintenanceService maintenanceService = _context.MaintenanceServices.Find(workOrder.MaintenanceId);
            _context.MaintenanceServices.Remove(maintenanceService);
            _context.spareParts.Remove(sparePart);
            _context.WorkOrders.Remove(workOrder);
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

        public WorkOrdersDTO Find(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<WorkOrdersDTO> GetAll()
        {
            var Worder=_context.WorkOrders
                .Where(w=>w.ServiceRequestId!=null)
                .Include(w=>w.Asset).ThenInclude(e=>e.MasterAsset)
                .Select(
                w => new WorkOrdersDTO
                {
                    Id = w.Id,
                    WorkOrderDate =w.Date,
                    PriorityId = w.PriorityId,
                    UserId = w.UserId,
                    VendorId = w.VendorId,
                    RequestStatusId = w.RequestStatusId,
                    StatusName = w.RequestStatus.status,
                    StatusNameAr = w.RequestStatus.statusAr,
                    color=w.RequestStatus.color,
                    MaintenanceId = w.MaintenanceId,
                    EquipmentId=w.AssetId,
                    EquipmentName=w.Asset.MasterAsset.Name,
                    EquipmentNameAr=w.Asset.MasterAsset.NameAr,
                    SparePartId=w.SparePartId,
                    ServiceRequestId=w.ServiceRequestId
                }).ToList();
            return Worder;
        }

        public IEnumerable<RequestStatus> GetAllRequestStatus()
        {
            return _context.requestStatuses.ToList();
        }
       
        public WorkOrdersDTO GetById(int id)
        {
            var workOrder = _context.WorkOrders
                //.Include(w=>w.Employee)
                //.Include(w=>w.SparePart)
                //.Include(w=>w.Vendor)
                //.Include(w=>w.MaintenanceService)
                //.Include(w=>w.RequestStatus)
                .FirstOrDefault(w => w.Id == id);
            var wo = new WorkOrdersDTO
            {
                Id = workOrder.Id,
                WorkOrderDate = workOrder.Date,
                PriorityId = workOrder.PriorityId,
                UserId = workOrder.UserId,
                VendorId = workOrder.VendorId,
                RequestStatusId = workOrder.RequestStatusId,
                EquipmentId = workOrder.AssetId,
                MaintenanceId = workOrder.MaintenanceId,
                SparePartId = workOrder.SparePartId,
                ServiceRequestId = workOrder.ServiceRequestId,
               // StatusName=workOrder.RequestStatus.status,
               // StatusNameAr=workOrder.RequestStatus.statusAr
            };
            return wo;
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(WorkOrdersDTO workorder)
        {
            WorkOrders wo = new WorkOrders();
            wo.Id = workorder.Id;
            wo.MaintenanceId = workorder.MaintenanceId;
            wo.RequestStatusId = workorder.RequestStatusId;
            wo.PriorityId = workorder.PriorityId;
            wo.UserId = workorder.UserId;
            wo.AssetId = workorder.EquipmentId;
            wo.SparePartId = workorder.SparePartId;
            wo.Date = workorder.WorkOrderDate;
            if(workorder.ServiceRequestId==0)
            {
                wo.ServiceRequestId = null;
            }    
            else
            {
                wo.ServiceRequestId = workorder.ServiceRequestId;
            }
            _context.Entry(wo).State = EntityState.Modified;
        }

        public WorkOrdersDTO GetWorkOrderByRequestId(int id)
        {
            var Worder = _context.WorkOrders.FirstOrDefault(w => w.ServiceRequestId == id);
            var wo = new WorkOrdersDTO();
            if (Worder == null)
                return null;
            wo.Id = Worder.Id;
            wo.WorkOrderDate = Worder.Date;
            wo.PriorityId = Worder.PriorityId;
            wo.UserId = Worder.UserId;
            wo.VendorId = Worder.VendorId;
            wo.RequestStatusId = Worder.RequestStatusId;
            wo.MaintenanceId = Worder.MaintenanceId;
            wo.EquipmentId = Worder.AssetId;
            wo.SparePartId = Worder.SparePartId;
            wo.ServiceRequestId = Worder.ServiceRequestId;
            return wo;
        }

        public void AddWithoutRequest(WorkOrdersDTO workorder)
        {
            WorkOrders wo = new WorkOrders();
            if (workorder.UserId == null)
            {
                workorder.UserId = null;
            }
            if (workorder.VendorId == 0)
            {
                workorder.VendorId = null;
            }
            wo.UserId = workorder.UserId;
            wo.VendorId = workorder.VendorId;
            wo.Date = workorder.WorkOrderDate;
            wo.PriorityId = workorder.PriorityId;
            wo.RequestStatusId = workorder.RequestStatusId;
            wo.AssetId = workorder.EquipmentId;
            wo.MaintenanceId = workorder.MaintenanceId;
            wo.SparePartId = workorder.SparePartId;
            _context.WorkOrders.Add(wo);
        }

        public IEnumerable<WorkOrdersDTO> GetAllOrdersWithoutRequest()
        {
            var Worder = _context.WorkOrders
                .Where(w=>w.ServiceRequestId==null)
               .Include(w => w.Asset).ThenInclude(e=>e.MasterAsset)
               .Include(w=>w.User)
               .Include(w=>w.Vendor)
               
               .Select(
               w => new WorkOrdersDTO
               {
                   Id = w.Id,
                   WorkOrderDate = w.Date,
                   PriorityId = w.PriorityId,
                   UserId = w.UserId,
                   UserName=w.User.UserName,
                   UserNameAr=w.User.UserName,
                   VendorId = w.VendorId,
                   VendorName=w.Vendor.Name,
                   VendorNameAr=w.Vendor.NameAr,
                   RequestStatusId = w.RequestStatusId,
                   StatusName = w.RequestStatus.status,
                   StatusNameAr = w.RequestStatus.statusAr,
                   color=w.RequestStatus.color,
                   MaintenanceId = w.MaintenanceId,
                   EquipmentId = w.AssetId,
                   EquipmentName = w.Asset.MasterAsset.Name,
                   EquipmentNameAr = w.Asset.MasterAsset.NameAr,
                   SparePartId = w.SparePartId,
                   SparePartName=w.SparePart.Name,
                   SparePartNameAr=w.SparePart.NameAr
               }).ToList();
            return Worder;
        }

        public void CloseOrder(int id)
        {
            WorkOrders workOrder = _context.WorkOrders.Find(id);
            var stId = _context.requestStatuses.FirstOrDefault(s => s.status == ServiceRequestStatus.Closed).Id;
            workOrder.RequestStatusId= stId;
        }
    }
}
