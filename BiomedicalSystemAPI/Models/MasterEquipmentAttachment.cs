using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class MasterEquipmentAttachment
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public int? MasterEquipmentId { get; set; }
        [ForeignKey("MasterEquipmentId")]
        public virtual MasterEquipment masterEquipment { get; set; }
    }
}
