using System;
using System.Collections.Generic;

#nullable disable

namespace BiomedicalSystemAPI.Models.HealthAppContext
{
    public partial class Supplier
    {
        public Supplier()
        {
            HealthCareUnitEquipments = new HashSet<HealthCareUnitEquipment>();
        }

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Telephone { get; set; }
        public string ContactPerson { get; set; }

        public virtual ICollection<HealthCareUnitEquipment> HealthCareUnitEquipments { get; set; }
    }
}
