using BiomedicalSystemAPI.Models.AssetAppContext;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class EquipmentAttachments
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public int? AssetsId { get; set; }
        [ForeignKey("AssetsId")]
        public virtual Assets Asset { get; set; }

    }
}
