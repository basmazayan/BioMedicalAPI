using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class EquipmentRecall
    {
        public int Id { get; set; }
        public int MasterEquipmentId { get; set; }
        [ForeignKey("MasterEquipmentId")]
        public virtual MasterEquipment MasterEquipment { get; set; }
        public DateTime RecallDate { get; set; }
        public int RecallNumber { get; set; }
        public string RecallSubject { get; set; }
        public string Description { get; set; }
        public int ModelNumber { get; set; }
        public int VersionNumber { get; set; }
        public int SupplierId { get; set; }
        [ForeignKey("SupplierId")]
        public virtual Supplier Supplier { get; set; }
        public ICollection<Equipment> Equipments{ get; set; }

}
}
