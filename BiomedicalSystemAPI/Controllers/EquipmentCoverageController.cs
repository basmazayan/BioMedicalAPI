using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.EquipmentCoverageRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EquipmentCoverageController : ControllerBase
    {

        private IEquipmentCoverageRepository _equipmentCoverageRepository;
        public EquipmentCoverageController(IEquipmentCoverageRepository equipmentCoverageRepository)
        {
            _equipmentCoverageRepository = equipmentCoverageRepository;
        }

        // GET: api/Contracts
        [HttpGet]
        public IEnumerable<EquipmentCoverage> GetEquipmentCoverages()
        {
            return _equipmentCoverageRepository.GetAll();

        }

        [HttpGet("{id}")]
        public ActionResult<EquipmentCoverage> GetEquipmentCoverage(int id)
        {
            var equipmentCoverage = _equipmentCoverageRepository.Find(id);

            if (equipmentCoverage == null)
            {
                return NotFound();
            }

            return equipmentCoverage;
        }

        // PUT: api/Contracts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public ActionResult PutContract(int id, EquipmentCoverage equipmentCoverage)
        {
            if (id != equipmentCoverage.equipmentCoverageId)
            {
                return BadRequest();
            }

            _equipmentCoverageRepository.Update(equipmentCoverage);

            try
            {
                _equipmentCoverageRepository.Save();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                string msg = ex.Message;
            }

            return NoContent();
        }

        // POST: api/Contracts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public ActionResult<EquipmentCoverageDTO> PostEquipmentCoverage(EquipmentCoverageDTO equipmentCoverage)
        {
            _equipmentCoverageRepository.Add(equipmentCoverage);
            _equipmentCoverageRepository.SaveChanges();

            return CreatedAtAction("GetEquipmentCoverage", new { id = equipmentCoverage.equipmentCoverageId }, equipmentCoverage);
        }

        // DELETE: api/Contracts/5
        [HttpDelete("{id}")]
        public ActionResult<EquipmentCoverage> DeleteEquipmentCoverage(int id)
        {
            var equipmentCoverage = _equipmentCoverageRepository.Find(id);
            if (equipmentCoverage == null)
            {
                return NotFound();
            }

            _equipmentCoverageRepository.Delete(id);
            _equipmentCoverageRepository.SaveChanges();

            return equipmentCoverage;
        }



    }
}

