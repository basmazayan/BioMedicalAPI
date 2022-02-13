using System;
using System.Collections.Generic;

#nullable disable

namespace BiomedicalSystemAPI.Models.HealthAppContext
{
    public partial class Status
    {
        public Status()
        {
            HealthCareUnitEquipments = new HashSet<HealthCareUnitEquipment>();
        }

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }

        public virtual ICollection<HealthCareUnitEquipment> HealthCareUnitEquipments { get; set; }
    }
}
