using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.DTO
{
    public class HealthCareUnitDTO
    {
        public int Id { get; set; }
        public string HealthCareUnitCode { get; set; }
        public string HealthCareUnitName { get; set; }
        public string HealthCareUnitNameAr { get; set; }
        public int HealthDistrictId { get; set; }
        public string HealthDistrictName { get; set; }
        public string HealthDistrictNameAr { get; set; }
        public int HealthDirectoryId { get; set; }
        public string HealthDirectoryName { get; set; }
        public string HealthDirectoryNameAr { get; set; }
        public int  organizationId { get; set; }
        public string  organizationName { get; set; }
        public string  organizationNameAr { get; set; }
        public string Address { get; set; }
        public string Director { get; set; }
        public string Phone { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public double? Long { get; set; }
        public double? Lat { get; set; }
    }
}
