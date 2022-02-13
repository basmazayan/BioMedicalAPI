using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class Contract
    {
        [Key]
        public int Id { get; set; }
        public string Subject { get; set; }
        public int Number { get; set; }
        public string Contents { get; set; }
        public DateTime ?StartDate { get; set; }
        public DateTime ?EndDate { get; set; }
        public int? HealthCareUnitId { get; set; }
        [ForeignKey("HealthCareUnitId")]
        public virtual HealthCareUnit HealthCareUnit { get; set; }
        public int SupplierId { get; set; }
        [ForeignKey("SupplierId")]
        public virtual Supplier Supplier { get; set; }
        public virtual ICollection<Equipment> equipment { get; set; }


    }
}
