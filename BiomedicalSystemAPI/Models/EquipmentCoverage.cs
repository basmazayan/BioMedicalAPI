using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class EquipmentCoverage
    {
        public int Id { get; set; }
        public float ResponseTime { get; set; }
        public string Description { get; set; }
        public string DescriptionAr { get; set; }
        public int NumberOfVisits { get; set; }

        public int ?SparePartId { get; set; }
        [ForeignKey("SparePartId")]
        public virtual SparePart SparePart { get; set; }
        public int ContractId { get; set; }
        [ForeignKey("ContractId")]
        public virtual Contract Contract { get; set; }
        public virtual ICollection<Equipment_EquipmentCoverage> equipment_EquipmentCoverages { get; set; }
    
    }
}
