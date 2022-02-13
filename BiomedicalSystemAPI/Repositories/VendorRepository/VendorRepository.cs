using BiomedicalSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.VendorRepository
{
    public class VendorRepository : IVendorRepository
    {
        private readonly ApplicationDbContext _context;
        public VendorRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        private bool disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }
        public void Dispose()
        {
            Dispose(true);
        }

        public IEnumerable<Vendor> GetAll()
        {
            return _context.Vendors.ToList();
        }
    }
}
