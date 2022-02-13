using BiomedicalSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.DTO
{
    public class AttachmentDTO
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public string File_Path { get; set; }
       
    }
}
