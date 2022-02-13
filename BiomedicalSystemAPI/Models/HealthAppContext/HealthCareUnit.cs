using System;
using System.Collections.Generic;

#nullable disable

namespace BiomedicalSystemAPI.Models.HealthAppContext
{
    public partial class HealthCareUnit
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        public int? HealthDistrictId { get; set; }
        public int? SubOrganizationId { get; set; }
        public string Address { get; set; }
        public string Telephone { get; set; }
        public string DirectorName { get; set; }

        public virtual HealthDistrict HealthDistrict { get; set; }
        public virtual SubOrganization SubOrganization { get; set; }
    }
}
