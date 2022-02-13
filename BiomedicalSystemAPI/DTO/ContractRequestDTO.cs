using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.DTO
{
    public class ContractRequestDTO
    {
        public int Id { get; set; }
        public int Number { get; set; }
        public DateTime Date { get; set; }
        //public DateTime OrganizationRequestDate { get; set; }
        public string Comments { get; set; }
        public int HospitalId { get; set; }
        public Status Status { get; set; }

        //public int? OrganizationId { get; set; }
        public List<EquipmentDTO> equipments { get; set; }
    }
}
