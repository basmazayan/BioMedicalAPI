using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class EquipmentStatus
    {
        public int Id { get; set; }

        [StringLength(5)]
        public string Code { get; set; }
        public string Status { get; set; }
        public string StatusAr { get; set; }
    }
}
