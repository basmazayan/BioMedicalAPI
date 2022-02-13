using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class EquipmentCategory
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "CategoryCode is required")]
        public string CategoryCode { get; set; }
        [Required(ErrorMessage = "CategoryName is required")]
        public string CategoryName { get; set; }
        public string CategoryNameAr { get; set; }
      
        public string CategoryDescription { get; set; }
        public string CategoryDescriptionAr { get; set; }
       
    }
}
