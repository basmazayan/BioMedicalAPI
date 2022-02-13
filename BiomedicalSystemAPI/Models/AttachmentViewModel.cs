using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class AttachmentViewModel
    {
        [NotMapped]
        public string FileName { get; set; }
        [NotMapped]
        public IFormFile Image { get; set; }
    }
}
