using System.Collections.Generic;

namespace BiomedicalSystemAPI.Models.HealthAppContext
{
    public class SubOrganizationViewModel
    {
        public string Name { get; set; }
        public string NameAr { get; set; }
        public int OrganizationId { get; set; }
        public List<string> HospitaCodes { get; set; }
        public int Id { get; set; }
    }
}
