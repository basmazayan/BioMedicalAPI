using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class Origin
    {
        public int Id { get; set; }
        public string OriginCode{ get; set; }
        public string EnglishName { get; set; }
        public string ArabicName { get; set; }

    }
}
