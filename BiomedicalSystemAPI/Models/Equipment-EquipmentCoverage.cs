using System.ComponentModel.DataAnnotations.Schema;

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
