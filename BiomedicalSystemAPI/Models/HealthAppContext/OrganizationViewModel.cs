using System.Collections.Generic;

namespace BiomedicalSystemAPI.Models.HealthAppContext
{
    public class OrganizationViewModel
    {
      
        public string Name { get; set; }
        public string NameAr { get; set; }
        public string HospitalId { get; set; }
        public int Id { get; set; }
        public List<Hospital> healthcareunits { get; set; }
    }
}
