using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.DTO
{
    public class WorkOrdersDTO
    {
        public int Id { get; set; }
        public DateTime WorkOrderDate { get; set; }
        public int PriorityId { get; set; }
        public string PriorityLevel { get; set; }
        public string PriorityLevelAr { get; set; }
        public string? UserId { get; set; }
        public string UserName { get; set; }
        public string UserNameAr { get; set; }
        public int? VendorId { get; set; }
        public string VendorName { get; set; }
        public string VendorNameAr { get; set; }
        public int RequestStatusId { get; set; }
        public string StatusName { get; set; }
        public string StatusNameAr { get; set; }
        public string color { get; set; }
        public int EquipmentId { get; set; }
        public string EquipmentName { get; set; }
        public string EquipmentNameAr { get; set; }
        public int MaintenanceId { get; set; }
        public int SparePartId { get; set; }
        public string SparePartName { get; set; }
        public string SparePartNameAr { get; set; }
        public int ?ServiceRequestId { get; set; }
    }
}
