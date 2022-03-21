using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class Category
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "CategoryCode is required")]
        public string Code { get; set; }
        [Required(ErrorMessage = "CategoryName is required")]
        public string Name { get; set; }
        public string NameAr { get; set; }
      
        public string Description { get; set; }
        public string DescriptionAr { get; set; }
       
    }
}
