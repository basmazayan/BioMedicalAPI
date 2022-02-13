using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Exceptions
{
    public class CodeException:Exception
    {
        public CodeException() { }
        public CodeException(string code):
            base(String.Format("Code must be uniqu{0}", code))
        { }
    }
}
