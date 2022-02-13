using System;
using System.Collections.Generic;

#nullable disable

namespace BiomedicalSystemAPI.Models.HealthAppContext
{
    public partial class Manufacturer
    {
        public Manufacturer()
        {
            EquipmentCatalogs = new HashSet<EquipmentCatalog>();
        }

        public int Id { get; set; }
        public int Code { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }

        public virtual ICollection<EquipmentCatalog> EquipmentCatalogs { get; set; }
    }
}
