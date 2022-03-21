using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiomedicalSystemAPI.Models
{
    public class WorkOrders
    {
        public int Id  { get; set; }
        public DateTime Date { get; set; }
        public int PriorityId { get; set; }
        [ForeignKey("PriorityId")]
        public virtual Priority Priority { get; set; }
        //public string AssignedTo { get; set; }
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual ApplicationUser User { get; set; }
        public int ?VendorId { get; set; }
        [ForeignKey("VendorId")]
        public virtual Vendor Vendor { get; set; }
        public int RequestStatusId { get; set; }
        [ForeignKey("RequestStatusId")]
        public virtual RequestStatus RequestStatus { get; set; }
        public int AssetId { get; set; }
        [ForeignKey("AssetId")]
        public virtual Assets Asset { get; set; }
        public int ?ServiceRequestId { get; set; }
        [ForeignKey("ServiceRequestId")]
        public virtual ServiceRequest ServiceRequest { get; set; }
        public int MaintenanceId { get; set; }
        [ForeignKey("MaintenanceId")]
        public virtual MaintenanceService MaintenanceService { get; set; }
        public int SparePartId { get; set; }
        [ForeignKey("SparePartId")]
        public virtual SparePart SparePart { get; set; }
    }
}
