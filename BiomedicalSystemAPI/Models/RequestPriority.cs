using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class RequestPriority
    {
        //public enum priority
        //{
        //medium,
        //high,
        //low

        //}
        public int Id { get; set; }
       public string priority { get; set; }
        public string priorityAr { get; set; }
    }
}
