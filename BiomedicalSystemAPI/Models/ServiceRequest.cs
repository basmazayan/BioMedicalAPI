using BiomedicalSystemAPI.Models.AssetAppContext;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class ServiceRequest
    {
        public int Id { get; set; }
        public string ServiceRequestCode { get; set; }
        public string ServiceRequestTitle { get; set; }
        public string ServiceRequestTitleAr { get; set; }
        public string ProblemDescription { get; set; }
        public string ProblemDescriptionAr { get; set; }
        public DateTime ServiceRequestDate { get; set; }
        public TimeSpan ServiceRequestTime { get; set; }
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual ApplicationUser User { get; set; }
        public string UserEmail { get; set; }
        public string UserName { get; set; }
        public string RequestType { get; set; }
        public string RequestTypeAr { get; set; }
        public int EquipmentId { get; set; }
        [ForeignKey("EquipmentId")]
        public virtual Assets Equipment { get; set; }
        public string EquipmentCode { get; set; }
        public string EquipmentName { get; set; }
        public int ModeId { get; set; }
        [ForeignKey("ModeId")]
        public virtual Mode Mode { get; set; }
        public string RequestMode { get; set; }
        public int PriorityId { get; set; }
        [ForeignKey("PriorityId")]
        public virtual Priority Priority { get; set; }
        public string PriorityLevel { get; set; }
        public int? HealthDirectoryId { get; set; }
        [ForeignKey("HealthDirectoryId")]
        public virtual Governorate HealthDirectories { get; set; }
          public int? HealthDistrictId { get; set; }
        [ForeignKey("HealthDistrictId")]
        public virtual City HealthDistrict { get; set; }

    }
}
