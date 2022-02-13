using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class Priority
    {
        public int Id { get; set; }

        [StringLength(5)]
        public string Code { get; set; }

        public string PriorityLevel { get; set; }
        public string PriorityLevelAr { get; set; }
        public string Description { get; set; }
        public string DescriptionAr { get; set; }
    }
}
