using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.ContractRepository;
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
    public class ContractController : ControllerBase
    {
        private IContractRepository _contractRepository;
        public ContractController(IContractRepository contractRepository)
        {
            _contractRepository = contractRepository;
        }

        // GET: api/Contracts
        [HttpGet]
        public IEnumerable<ContractDTO> GetContracts()
         {
            return  _contractRepository.GetAll();

        }

        [HttpGet("{id}")]
        public ActionResult<ContractDTO> GetContract(int id)
        {
            var contract = _contractRepository.GetById(id);

            if (contract == null)
            {
                return NotFound();
            }

            return contract;
        }

        // PUT: api/Contracts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public ActionResult PutContract(int id, Contract contract)
        {
            if (id != contract.Id)
            {
                return BadRequest();
            }

            _contractRepository.Update(contract);

            try
            {
                _contractRepository.Save();
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
        public ActionResult<Contract> PostContract(ContractDTO contractdto)
        {
            try
            {
                _contractRepository.Add(contractdto);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "contarct", Message = "Contract created successfully", MessageAr = "تم انشاء العقد بنجاح" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE: api/Contracts/5
        [HttpDelete("{id}")]
        public ActionResult<Contract> DeleteContract(int id)
        {
            var contract = _contractRepository.Find(id);
            if (contract == null)
            {
                return NotFound();
            }

            _contractRepository.Delete(id);
            _contractRepository.SaveChanges();

            return contract;
        }
       


    }
}
