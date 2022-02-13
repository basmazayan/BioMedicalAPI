using BiomedicalSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.VendorRepository
{
    public interface IVendorRepository: IDisposable
    {
        IEnumerable<Vendor> GetAll();
    }
}
