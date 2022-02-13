using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class EquipmentSubCategory
    {
        public int Id { get; set; }
        [StringLength(5)]
        public string Code { get; set; }
        public string SubCategoryName { get; set; }
        public string SubCategoryNameAr { get; set; }
        public int EquipmentCategoryId { get; set; }
        [ForeignKey("EquipmentCategoryId")]
        public virtual EquipmentCategory EquipmentCategory { get; set; }

    }
}
