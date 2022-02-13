using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.VendorRepository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VendorController : ControllerBase
    {
        private readonly IVendorRepository _vendorRepository;
        public VendorController(IVendorRepository vendorRepository)
        {
            _vendorRepository = vendorRepository;
        }
        [HttpGet]
        public IEnumerable<Vendor> GetVendors()
        {
            return _vendorRepository.GetAll();
        }
    }
}
