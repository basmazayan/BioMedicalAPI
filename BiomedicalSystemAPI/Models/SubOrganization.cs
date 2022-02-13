using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class SubOrganization
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        public int organizationId { get; set; }
        [ForeignKey("organizationId")]
        public virtual Organization organization { get; set; }
    }
}
