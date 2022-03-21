using BiomedicalSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.DTO
{
    public class AssignedUserDTO
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string UserNameAr { get; set; }
        public string Mobile { get; set; }
        public string Phone { get; set; }
        public string Code { get; set; }
        public string Email { get; set; }
        public string RoleName { get; set; }
        public string Password { get; set; }
        public int ?HealthCareUnitId { get; set; }
        [ForeignKey("HealthCareUnitId")]
        public virtual Hospital HealthCareUnit { get; set; }
        public int? HealthdirId { get; set; }
        [ForeignKey("HealthdirId")]
        public virtual Governorate HealthDirectories { get; set; }
        public int? HealthDistrictId { get; set; }
        [ForeignKey("HealthDistrictId")]
        public virtual City HealthDistricts { get; set; }
        public int? OrganizationId { get; set; }
        [ForeignKey("OrganizationId")]
        public virtual Organization Organization { get; set; }
        public int? SubOrganizationId { get; set; }
        [ForeignKey("SubOrganizationId")]
        public virtual SubOrganization SubOrganization { get; set; }

        public int? SupplierId { get; set; }
        [ForeignKey("SupplierId")]
        public virtual Supplier Supplier { get; set; }
    }
}
