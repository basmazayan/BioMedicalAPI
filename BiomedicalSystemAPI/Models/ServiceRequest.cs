using BiomedicalSystemAPI.Models.AssetAppContext;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class ServiceRequest
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Title { get; set; }
        public string TitleAr { get; set; }
        public string ProblemDescription { get; set; }
        public string ProblemDescriptionAr { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Time { get; set; }
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual ApplicationUser User { get; set; }
        public string UserEmail { get; set; }
        public string UserName { get; set; }
        public string Type { get; set; }
        public string TypeAr { get; set; }
        public int AssetId { get; set; }
        [ForeignKey("AssetId")]
        public virtual Assets Asset { get; set; }
        public string AssetCode { get; set; }
        public string AssetName { get; set; }
        public int ModeId { get; set; }
        [ForeignKey("ModeId")]
        public virtual Mode Mode { get; set; }
        public string RequestMode { get; set; }
        public int PriorityId { get; set; }
        [ForeignKey("PriorityId")]
        public virtual Priority Priority { get; set; }
        public string PriorityLevel { get; set; }
        public int? GovernorateId { get; set; }
        [ForeignKey("GovernorateId")]
        public virtual Governorate Governorate { get; set; }
          public int? CityId { get; set; }
        [ForeignKey("CityId")]
        public virtual City City { get; set; }

    }
}
