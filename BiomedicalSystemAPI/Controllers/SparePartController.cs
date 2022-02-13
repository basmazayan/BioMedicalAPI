using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.SparePartRepository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SparePartController : ControllerBase
    {
        private readonly ISparePartRepository _ISparePartRepository;
        public SparePartController(ISparePartRepository ISparePartRepository)
        {
            _ISparePartRepository = ISparePartRepository;
        }
        [HttpPost]
        public SparePart PostSparePart(SparePart sparePart)
        {
            _ISparePartRepository.Add(sparePart);
            _ISparePartRepository.Save();
            return sparePart;
        }
        [HttpGet]
        public IEnumerable<SparePart> GetSpareParts()
        { 
            return _ISparePartRepository.GetAll();
        }
        [HttpGet("{id}")]
        public SparePart GetById(int id)
        {
            return _ISparePartRepository.GetById(id);
        }
        [HttpPut("{id}")]
        public ActionResult PutSparePart(int id,SparePart sparePart)
        {
            if(id!=sparePart.Id)
            {
                return BadRequest();
            }
            _ISparePartRepository.Update(sparePart);
            try
            {
                _ISparePartRepository.Save();
            }
            catch(Exception ex)
            {
                string msg = ex.Message;
            }
            return NoContent();
        }
    }
}
