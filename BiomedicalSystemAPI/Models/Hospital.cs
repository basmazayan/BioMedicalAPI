using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class Hospital
    {
        //[DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        public string Address { get; set; }
        public string Director { get; set; }
        public string Phone { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public double ?Long { get; set; }
        public double ?Lat { get; set; }
        public int CityId { get; set; }
        [ForeignKey("CityId")]
        public virtual City City { get; set; }

        public int GovernorateId { get; set; }
        [ForeignKey("GovernorateId")]
        public virtual Governorate Governorate { get; set; }
        public int SuborganizationId { get; set; }
        [ForeignKey("SuborganizationId")]
        public virtual SubOrganization Suborganization { get; set; }
    }
}
