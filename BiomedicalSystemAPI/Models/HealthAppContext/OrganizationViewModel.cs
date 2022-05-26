using System.Collections.Generic;

namespace BiomedicalSystemAPI.Models.HealthAppContext
{
    public class OrganizationViewModel
    {

        public string Name { get; set; }
        public string NameAr { get; set; }
        public string HospitalCode { get; set; }
        public int Id { get; set; }
        public int subOrganizationId{get;set;}
        public string code{get;set; }
        public List<Hospital> healthcareunits { get; set; }
    }
}
