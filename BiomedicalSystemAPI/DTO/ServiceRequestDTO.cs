using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.DTO
{
    public class ServiceRequestDTO
    {
        public int Id { get; set; }
        public string ServiceRequestCode { get; set; }
        public string RequestType { get; set; }
        public string ServiceRequestTitle { get; set; }
        public string ServiceRequestTitleAr { get; set; }
        public string ProblemDescription { get; set; }
        public string ProblemDescriptionAr { get; set; }
        public DateTime ServiceRequestDate { get; set; }
        public string ServiceRequestTime { get; set; }
        public string UserId { get; set; }
        public string UserName { get; set; }
        public int EquipmentId { get; set; }
        public string EquipmentCode { get; set; }
        public int ModeId { get; set; }
        public string RequestMode { get; set; }
        public int PriorityId { get; set; }
        public string PriorityLevel { get; set; }
        public int HealthDirectoryId { get; set; }
        public int HealthDistrictId { get; set; }
    }
}
