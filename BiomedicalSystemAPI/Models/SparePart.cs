using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class SparePart
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        //public int ManufacturerId { get; set; }
        //[ForeignKey("ManufacturerId")]
        //public virtual Manufacturer Manufacturer { get; set; }
    }
}
