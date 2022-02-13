using BiomedicalSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.ViewModels
{
    public class UserVm
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
        public string token { get; set; }
        public DateTime expiration { get; set; }
     
        public int ?HealthCareUnitId { get; set; }
        [ForeignKey("HealthCareUnitId")]
        public virtual HealthCareUnit HealthCareUnit { get; set; }
        public int? HealthdirId { get; set; }
        [ForeignKey("HealthdirId")]
        public virtual HealthDirectory HealthDirectories { get; set; }
        public int? HealthDistrictId { get; set; }
        [ForeignKey("HealthDistrictId")]
        public virtual HealthDistrict HealthDistricts { get; set; }
        [ForeignKey("OrganizationId")]
        public int ? OrganizationId { get; set; }
        public string OrganizationName { get; set; }
        public virtual Organization Organization { get; set; }

        [ForeignKey("SubOrganizationId")]
        public int? SubOrganizationId { get; set; }
        public virtual SubOrganization SubOrganization { get; set; }
        public int? SupplierId { get; set; }
        [ForeignKey("SupplierId")]
        public virtual Supplier Supplier { get; set; }
    }
}
