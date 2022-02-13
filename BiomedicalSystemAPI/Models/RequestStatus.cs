using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class RequestStatus
    {
        //public enum status
        //  {
        //      pending,
        //      successful,
        //      failed
        //  }
        public int Id { get; set; }
        public string status { get; set; }
        public string statusAr { get; set; }
        public string color { get; set; }
        //public int ServiceRequestId { get; set; }
        //[ForeignKey("ServiceRequestId")]
        //public virtual ServiceRequest ServiceRequest { get; set; }
    }
}

