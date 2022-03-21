using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string EmployeeName { get; set; }
        public string EmployeeNameAr { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string Phone { get; set; }
        public string EmployeeCode { get; set; }

        //public int LangId { get; set; }
        //[ForeignKey("LangId")]
        //public virtual Language Language { get; set; }
        public int HealthCareUnitId { get; set; }
        [ForeignKey("HealthCareUnitId")]
        public virtual Hospital HealthCareUnit { get; set; }
        public int HealthDirectoryId { get; set; }
        [ForeignKey("HealthDirectoryId")]
        public virtual Governorate HealthDirectories { get; set; }
        public int HealthDistrictId { get; set; }
        [ForeignKey("HealthDistrictId")]
        public virtual City HealthDistricts { get; set; }
    }
}
