using System.ComponentModel.DataAnnotations.Schema;

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
