using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.MasterEquipmentRepository;
using BiomedicalSystemAPI.Repositories.PagingRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MasterEquipmentController : ControllerBase
    {
        private IMasterEquipmentRepository _masterEquipmentRepository;
        private IPagingRepository _pagingRepository;
        public MasterEquipmentController(IMasterEquipmentRepository masterEquipmentRepository,IPagingRepository pagingRepository)
        {
            _masterEquipmentRepository = masterEquipmentRepository;
            _pagingRepository = pagingRepository;
        }

        [HttpPost]
        public ActionResult<MasterEquipmentDTO> PostMasterEquipment(MasterEquipmentDTO masterEquipmentObj)
        {
            var lstMasterCodes = _masterEquipmentRepository.GetAll().Where(a => a.MasterCode == masterEquipmentObj.MasterCode).ToList();
            if (lstMasterCodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Master Equipment code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstMasterNames = _masterEquipmentRepository.GetAll().Where(a => a.Name == masterEquipmentObj.Name).ToList();
            if (lstMasterNames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Master Equipment name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }
            else
            {
                try
                {
                    _masterEquipmentRepository.AddNewMasterEquipment(masterEquipmentObj);
                    _masterEquipmentRepository.SaveChanges();
                    return CreatedAtAction("GetMasterEquipments", new { id = masterEquipmentObj.Id }, masterEquipmentObj);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }
        }
        [HttpGet]
        public IEnumerable<MasterEquipmentDTO>GetMasterEquipments()
        {

            return _masterEquipmentRepository.GetAll();
        }
        [HttpPut]
        [Route("GetMasterEquipmentsWithPaging")]
        public IEnumerable<MasterEquipmentDTO> GetMasterEquipmentsWithPaging(PagingParameter page)
        {
            var masterLst = _masterEquipmentRepository.GetAll().ToList();
            return _pagingRepository.GetAll<MasterEquipmentDTO>(page, masterLst);
        }
        [HttpGet]
        [Route("getcount")]
        public int count()
        {
            return _pagingRepository.Count<MasterAsset>();
        }
        [HttpPut("{id}")]
        public  IActionResult PuttMasterEquipment(int id,MasterEquipmentDTO masterEquipmentObj)
        {
            var lstMasterCodes = _masterEquipmentRepository.GetAll().Where(a => a.MasterCode == masterEquipmentObj.MasterCode && a.Id != id).ToList();
            if (lstMasterCodes.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "code", Message = "Master Equipment code already exist", MessageAr = "هذا الكود مسجل سابقاً" });
            }
            var lstMasterNames = _masterEquipmentRepository.GetAll().Where(a => a.Name == masterEquipmentObj.Name && a.Id != id).ToList();
            if (lstMasterNames.Count > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "name", Message = "Master Equipment name already exist", MessageAr = "هذا الاسم مسجل سابقاً" });
            }
            else
            {
                _masterEquipmentRepository.Update(id, masterEquipmentObj);
                _masterEquipmentRepository.SaveChanges();
                return Ok();
            }
           // return Ok();
        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _masterEquipmentRepository.Delete(id);
            _masterEquipmentRepository.SaveChanges();
        }
        [HttpGet("{id}")]
        public MasterEquipmentDTO GetById(int id)
        {
          return _masterEquipmentRepository.GetById(id);
        }
        [HttpPost]
        [Route("GetMasterByBrands")]
        public ActionResult<List<BrandVM>> GetMasterByBrandId(List<EquipmentDTO> equipmentModel)
        {
            return _masterEquipmentRepository.GetMasterEquipmentsByBrand(equipmentModel);
        }
    }
}
