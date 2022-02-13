using System;
using System.Collections.Generic;

#nullable disable

namespace BiomedicalSystemAPI.Models.HealthAppContext
{
    public partial class HealthDirectorate
    {
        public HealthDirectorate()
        {
            HealthDistricts = new HashSet<HealthDistrict>();
        }

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }

        public virtual ICollection<HealthDistrict> HealthDistricts { get; set; }
    }
}
