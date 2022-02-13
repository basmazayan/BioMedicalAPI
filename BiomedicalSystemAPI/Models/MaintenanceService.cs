using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class MaintenanceService
    {
        public int Id { get; set; }
        public string problem { get; set; }
        public double PartCost { get; set; }
        public double LaborCost { get; set; }

    }
}
