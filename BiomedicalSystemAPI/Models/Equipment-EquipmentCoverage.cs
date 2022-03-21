using BiomedicalSystemAPI.Models.AssetAppContext;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class Equipment_EquipmentCoverage
    {
        public int Id { get; set; }
        public int AssetId { get; set; }
        [ForeignKey("AssetId")]
        public Assets equipment { get; set; }
        public int EquipmentCoverageId { get; set; }
        [ForeignKey("EquipmentCoverageId")]
        public EquipmentCoverage equipmentCoverage { get; set; }

      
    }
}
