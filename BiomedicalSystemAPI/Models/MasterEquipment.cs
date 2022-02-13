using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class MasterEquipment
    {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        public string MasterCode { get; set; }
        public int EquipmentCategoryId { get; set; }
        [ForeignKey("EquipmentCategoryId")]
        public virtual EquipmentCategory EquipmentCategory { get; set; }
        public int ?EquipmentSubCategoryId { get; set; }
        [ForeignKey("EquipmentSubCategoryId")]
         public virtual EquipmentSubCategory EquipmentSubCategory { get; set; }
        public int ManufacturerId { get; set; }
        [ForeignKey("ManufacturerId")]
        public virtual Manufacturer Manufacturer { get; set; }
        public int PriorityId { get; set; }
        [ForeignKey("PriorityId")]
        public virtual Priority Priority { get; set; }
        public string EquipmentDescription { get; set; }
        public string EquipmentDescriptionAr { get; set; }
        public int ExpectedLifeTime { get; set; }
        public string UpaCode { get; set; }
        public string ModelNumber { get; set; }
        public string VersionNumber { get; set; }
        public int OriginId { get; set; }
        [ForeignKey("OriginId")]
        public virtual Origin Origin { get; set; }
        public virtual ICollection<MasterEquipmentAttachment> masterequipmentAttachments { get; set; }
    }
}
