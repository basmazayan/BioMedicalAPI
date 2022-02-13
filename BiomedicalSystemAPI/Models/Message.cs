using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class Message
    {
        public List<Address> To{ get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
        public Message(IEnumerable<string>to,string subject,string content)
        {
            To = new List<Address>();
            To.AddRange(to.Select(x => new Address(x)));
            Subject = subject;
            Content = content;
        }
    }
}
