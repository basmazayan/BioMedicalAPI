using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.DTO
{
    public class MasterEquipmentDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        public string MasterCode { get; set; }
        public string UpaCode { get; set; }
        public int OriginId { get; set; }
        public string OriginCode { get; set; }
        public string CategoryCode { get; set; }
      
        public int ManufacturerId { get; set; }
        public string ManufacturerName { get; set; }
        public string ManufacturerNameAr { get; set; }
        public int PriorityId { get; set; }
        public string SubCategoryCode { get; set; }
        public string EquipmentDescriptionAr { get; set; }
        public string ModelNumber { get; set; }
        public string VersionNumber { get; set; }
        public int ExpectedLifeTime { get; set; }
        
        public int EquipmentCategoryId { get; set; }
        public int ?EquipmentSubCategoryId { get; set; }
        public List<int> AttachmentIDs { get; set; }

    }
}
