using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.DTO
{
    public class OrganizationRequestDTO
    {
        public int Id { get; set; }
        public int Number { get; set; }
        public DateTime Date { get; set; }
        public int? OrganizationId { get; set; }
        public List<int> equipmentIDs { get; set; }
    }
}
