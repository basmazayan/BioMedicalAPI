using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.DTO
{
    public class HealthCareUnitDTO
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        public int CityId { get; set; }
        public string CityName { get; set; }
        public string CityNameAr { get; set; }
        public int GovernorateId { get; set; }
        public string GovernorateName { get; set; }
        public string GovernorateNameAr { get; set; }
        public int  OrganizationId { get; set; }
        public string  OrganizationName { get; set; }
        public string  OrganizationNameAr { get; set; }
        public string Address { get; set; }
        public string Director { get; set; }
        public string Phone { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public double? Long { get; set; }
        public double? Lat { get; set; }
    }
}
