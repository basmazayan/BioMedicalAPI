using System;
using System.Collections.Generic;

#nullable disable

namespace BiomedicalSystemAPI.Models.HealthAppContext
{
    public partial class HealthDistrict
    {
        //public HealthDistrict()
        //{
        //    HealthCareUnits = new HashSet<HealthCareUnit>();
        //}

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        public int? DirectorateId { get; set; }

        public virtual HealthDirectorate Directorate { get; set; }
        public virtual ICollection<HealthCareUnit> HealthCareUnits { get; set; }
    }
}
