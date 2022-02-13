using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Exceptions
{
    public class FieldalreadyExist:Exception
    {
        public FieldalreadyExist() { }
        public FieldalreadyExist(string name):
            base(String.Format("Name already exist{0}", name))
        { }
    }
}
