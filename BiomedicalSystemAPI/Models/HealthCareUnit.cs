using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class HealthCareUnit
    {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string HealthCareUnitCode { get; set; }
        public string HealthCareUnitName { get; set; }
        public string HealthCareUnitNameAr { get; set; }
        public string Address { get; set; }
        public string Director { get; set; }
        public string Phone { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public double ?Long { get; set; }
        public double ?Lat { get; set; }
        public int HealthDistrictId { get; set; }
        [ForeignKey("HealthDistrictId")]
        public virtual HealthDistrict HealthDistricts { get; set; }

        public int HealthDirectoryId { get; set; }
        [ForeignKey("HealthDirectoryId")]
        public virtual HealthDirectory HealthDirectories { get; set; }
        public int organizationId { get; set; }
        [ForeignKey("organizationId")]
        public virtual Organization organization { get; set; }
    }
}
