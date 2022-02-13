using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.DTO
{
    public class equipmentRecallDTO
    {
        public int Id { get; set; }
        public int MasterEquipmentId { get; set; }
        public DateTime RecallDate { get; set; }
        public int RecallNumber { get; set; }
        public string RecallSubject { get; set; }
        public string Description { get; set; }
        public List<int> equipmentsIDs { get; set; }
        public int ModelNumber { get; set; }
        public int VersionNumber { get; set; }
        public int SupplierId { get; set; }
    
    }
}
