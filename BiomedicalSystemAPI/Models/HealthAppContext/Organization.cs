using System;
using System.Collections.Generic;

#nullable disable

namespace BiomedicalSystemAPI.Models.HealthAppContext
{
    public partial class Organization
    {
        public Organization()
        {
            SubOrganizations = new HashSet<SubOrganization>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }

        public virtual ICollection<SubOrganization> SubOrganizations { get; set; }
    }
}
