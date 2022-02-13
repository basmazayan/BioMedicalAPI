using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class ApplicationUser : IdentityUser
    {
        //[Required(ErrorMessage = "Email is required")]
        public string NameAr { get; set; }
        public string Mobile { get; set; }
        public string Phone { get; set; }
        public string Code { get; set; }
        public int ? HealthCareUnitId { get; set; }
        [ForeignKey("HealthCareUnitId")]
        public virtual HealthCareUnit HealthCareUnit { get; set; }
        public int? OrganizationId { get; set; }
        [ForeignKey("OrganizationId")]
        public virtual Organization Organization { get; set; }
        public int? HealthdirId { get; set; }
        [ForeignKey("HealthdirId")]
        public virtual HealthDirectory HealthDirectories { get; set; }
        public int? HealthDistrictId { get; set; }
        [ForeignKey("HealthDistrictId")]
        public virtual HealthDistrict HealthDistricts { get; set; }

        public int? SubOrganizationId { get; set; }
        [ForeignKey("SubOrganizationId")]
        public virtual SubOrganization SubOrganizations { get; set; }
        public int? SupplierId { get; set; }
        [ForeignKey("SupplierId")]
        public virtual Supplier Supplier { get; set; }

    }
}
