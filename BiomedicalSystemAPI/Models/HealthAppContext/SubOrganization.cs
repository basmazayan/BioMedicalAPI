using System;
using System.Collections.Generic;

#nullable disable

namespace BiomedicalSystemAPI.Models.HealthAppContext
{
    public partial class SubOrganization
    {
        //public SubOrganization()
        //{
        //    HealthCareUnits = new HashSet<HealthCareUnit>();
        //}

        public int Id { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        public int OrganizationId { get; set; }

        public virtual Organization Organization { get; set; }
        public virtual ICollection<HealthCareUnit> HealthCareUnits { get; set; }
    }
}
