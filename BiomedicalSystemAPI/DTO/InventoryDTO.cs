using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.DTO
{
    public class InventoryDTO
    {
        public int Id { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string Code { get; set; }
        public string UserId { get; set; }
        public string UserName { get; set; }
        public int EquipmentId { get; set; }
       
    }
}
