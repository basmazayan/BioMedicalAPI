using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class ServiceRequestAttachment
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public int ServiceRequestId { get; set; }
        [ForeignKey("ServiceRequestId")]
        public virtual ServiceRequest serviceRequest { get; set; }
    }
}
