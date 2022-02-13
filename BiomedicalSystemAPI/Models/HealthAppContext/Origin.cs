using System;
using System.Collections.Generic;

#nullable disable

namespace BiomedicalSystemAPI.Models.HealthAppContext
{
    public partial class Origin
    {
        public Origin()
        {
            EquipmentCatalogs = new HashSet<EquipmentCatalog>();
        }

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }

        public virtual ICollection<EquipmentCatalog> EquipmentCatalogs { get; set; }
    }
}
