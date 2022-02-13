using System;
using System.Collections.Generic;

#nullable disable

namespace BiomedicalSystemAPI.Models.HealthAppContext
{
    public partial class HealthCareUnitEquipment
    {
        public int Id { get; set; }
        public string HospitalInternalCode { get; set; }
        public int? EquipmentCatalogId { get; set; }
        public int HealthCareUnitId { get; set; }
        public int? DepartmentId { get; set; }
        public int? SupplierId { get; set; }
        public DateTime InstallationDate { get; set; }
        public DateTime PurchaseDate { get; set; }
        public decimal? Price { get; set; }
        public int? Room { get; set; }
        public int? Floor { get; set; }
        public string SerialNumber { get; set; }
        public string Remarks { get; set; }
        public int? StatusId { get; set; }

        public virtual Department Department { get; set; }
        public virtual EquipmentCatalog EquipmentCatalog { get; set; }
        public virtual Status Status { get; set; }
        public virtual Supplier Supplier { get; set; }
    }
}
