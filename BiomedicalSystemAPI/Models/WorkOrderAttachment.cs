using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class WorkOrderAttachment
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public int WorkOrderId { get; set; }
        [ForeignKey("WorkOrderId")]
        public virtual WorkOrders workOrders { get; set; }
    }
}
