using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class HealthDistrict
    {
	   public int Id { get; set; }
	   public string HealthDistrictCode { get; set; }
	   public string HealthDistrictName { get; set; }
	   public string HealthDistrictNameAr { get; set; }
		public int HealthDirectoryId { get; set; }
		[ForeignKey("HealthDirectoryId")]
		public virtual HealthDirectory HealthDirectories { get; set; }
	}
}
