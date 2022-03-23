using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiomedicalSystemAPI.Models
{
    public class Inventory
    {
        public int Id { get; set; }
        public DateTime ?CreatedAt { get; set; }
        public string Code { get; set; }
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual ApplicationUser users { get; set; }
        public int AssetId { get; set; }
        [ForeignKey("AssetId")]
        public virtual Assets Assets { get; set; }
    }
}
