using System;
using System.Collections.Generic;

#nullable disable

namespace BiomedicalSystemAPI.Models.HealthAppContext
{
    public partial class EquipmentCategory
    {
        public EquipmentCategory()
        {
            EquipmentCatalogs = new HashSet<EquipmentCatalog>();
            EquipmentSubCategories = new HashSet<EquipmentSubCategory>();
        }

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }

        public virtual ICollection<EquipmentCatalog> EquipmentCatalogs { get; set; }
        public virtual ICollection<EquipmentSubCategory> EquipmentSubCategories { get; set; }
    }
}
