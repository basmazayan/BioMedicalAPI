using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Exceptions
{
    public class NameCanNotBeNull:Exception
    {
        public NameCanNotBeNull() { }
        public NameCanNotBeNull(string name)
            : base(String.Format("Name can not be null{0}", name)) { }
    }
}
