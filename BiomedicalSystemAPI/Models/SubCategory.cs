using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class SubCategory
    {
        public int Id { get; set; }
        [StringLength(5)]
        public string Code { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        public int CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public virtual Category Category { get; set; }

    }
}
