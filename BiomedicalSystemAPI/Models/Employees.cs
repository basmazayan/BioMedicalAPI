using BiomedicalSystemAPI.Models.AssetAppContext;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class Employees
    {
        public int Id { get; set; }
        public int EquipmentId { get; set; }
        [ForeignKey("EquipmentId")]
        public AssetAppContext.AssetDetail equipment { get; set; }
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser users { get; set; }
    }
}
