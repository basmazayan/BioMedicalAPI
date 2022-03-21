using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Models.AssetAppContext;
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
    public class EquipmentRecallController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly AssetDbContext _AssetContext;
        public EquipmentRecallController(ApplicationDbContext context, AssetDbContext AssetContext)
        {
            _context = context;
            _AssetContext = AssetContext;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EquipmentRecall>>> GetEquipmentRecalls()
        {
            return await _context.EquipmentRecalls.ToListAsync();
        }
        [HttpPost]
        public ActionResult<equipmentRecallDTO> PostEquipmentRecall(equipmentRecallDTO equipmentRecallObj)
        {
            EquipmentRecall eqRecall = new EquipmentRecall();
            eqRecall.Id = equipmentRecallObj.Id;
            eqRecall.MasterAssetId = equipmentRecallObj.MasterEquipmentId;
            eqRecall.Description = equipmentRecallObj.Description;
            eqRecall.RecallDate = equipmentRecallObj.RecallDate;
            eqRecall.ModelNumber = equipmentRecallObj.ModelNumber;
            eqRecall.VersionNumber = equipmentRecallObj.VersionNumber;
            eqRecall.SupplierId = equipmentRecallObj.SupplierId;
            eqRecall.RecallSubject = equipmentRecallObj.RecallSubject;
            _context.EquipmentRecalls.Add(eqRecall);
            _context.SaveChanges();
            //equipmentRecallObj.Id = eqRecall.Id;
            foreach (var eq in equipmentRecallObj.equipmentsIDs)
            { 
                var equipment = _context.Assets.Where(e => e.Id == eq).FirstOrDefault();
                equipment.EquipmentRecallId = eqRecall.Id;
                _context.Entry(equipment).State = EntityState.Modified;
                _context.SaveChanges();
            }
               
            return CreatedAtAction("PostEquipmentRecall", new { id = equipmentRecallObj.Id }, equipmentRecallObj);

        }
        // DELETE: api/EquipmentRecalls/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EquipmentRecall>> DeleteEquipmentRecall(int id)
        {
            var eqRecall = await _context.EquipmentRecalls.FindAsync(id);
            if (eqRecall == null)
            {
                return NotFound();
            }

            _context.EquipmentRecalls.Remove(eqRecall);
            await _context.SaveChangesAsync();

            return eqRecall;
        }

        private bool EquipmentRecallExists(int id)
        {
            return _context.EquipmentRecalls.Any(e => e.Id == id);
        }
    }
}
