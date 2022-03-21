using BiomedicalSystemAPI.Models.AssetAppContext;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class EquipmentEmployees
    {
        public int Id { get; set; }
        public int AssetId { get; set; }
        [ForeignKey("AssetId")]
        public Assets Assets { get; set; }
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser users { get; set; }
    }
}
