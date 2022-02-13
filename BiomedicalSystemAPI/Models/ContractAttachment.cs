using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class ContractAttachment
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public int ContractId { get; set; }
        [ForeignKey("ContractId")]
        public virtual Contract contract { get; set; }
    }
}
