using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.DTO
{
    public class EquipmentCoverageDTO
    {
        public int equipmentCoverageId { get; set; }
        public float ResponseTime { get; set; }
        public string Description { get; set; }
        public string DescriptionAr { get; set; }
        public int NumberOfVisits { get; set; }

        public int? SparePartId { get; set; }
      
     
        public int ContractId { get; set; }

        public virtual List<int> EquipmentsIDs { get; set; }

    }
}
