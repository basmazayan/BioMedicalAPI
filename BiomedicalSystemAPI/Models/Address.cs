using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class Address
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string address { get; set; }
        public Address(string address)
        {
            this.address = address;
        }
    }
}
