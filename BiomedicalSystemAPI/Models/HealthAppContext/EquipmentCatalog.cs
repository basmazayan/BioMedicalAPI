using System;
using System.Collections.Generic;

#nullable disable

namespace BiomedicalSystemAPI.Models.HealthAppContext
{
    public partial class EquipmentCatalog
    {
        public EquipmentCatalog()
        {
            HealthCareUnitEquipments = new HashSet<HealthCareUnitEquipment>();
        }

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        public int? OriginId { get; set; }
        public int? ManufacturerId { get; set; }
        public string Model { get; set; }
        public string Version { get; set; }
        public string Description { get; set; }
        public int? CategoryId { get; set; }
        public int? SubCategoryId { get; set; }
        public int? Ecricode { get; set; }

        public virtual EquipmentCategory Category { get; set; }
        public virtual Manufacturer Manufacturer { get; set; }
        public virtual Origin Origin { get; set; }
        public virtual ICollection<HealthCareUnitEquipment> HealthCareUnitEquipments { get; set; }
    }
}
