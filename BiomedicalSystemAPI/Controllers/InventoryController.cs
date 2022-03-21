using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.EquipmentReposatories;
using BiomedicalSystemAPI.Repositories.InventoryRepository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController : ControllerBase
    {
        // GET: api/<InventoryController>
        private readonly ApplicationDbContext _context;
        private readonly IEquipmentRepository _equipmentRepository;
        private readonly IInventoryRepository _inventoryRepository;
        public InventoryController(ApplicationDbContext context, 
            IEquipmentRepository equipmentRepository, 
            IInventoryRepository inventoryRepository )
        {
            _context = context;
            _equipmentRepository = equipmentRepository;
            _inventoryRepository = inventoryRepository;
        }

        // GET: api/inventories
        [HttpGet]
        public ActionResult<IEnumerable<InventoryDTO>> Getinventories()
        {
            // MasterEquipmentDTO mequipment = _masterEquipmentRepository.GetById(equipment.MasterEquipmentId);
        
            var inventories =  _context.Inventories.Include(e => e.Assets)
                .Include(e=>e.users)
                .Select(e => new InventoryDTO
                {
                    Id = e.Id,
                    EquipmentId=e.AssetId,                  
                    UserId=e.UserId,
                    UserName = e.users.UserName,
                    CreatedAt=e.CreatedAt,
                 
                    
                }).ToList();

            return inventories;
        }

        // GET: api/inventories/5
        [HttpGet("{id}")]
        public  ActionResult<Inventory> GetInventory(int id)
        {
            return _inventoryRepository.GetInventory(id);
        }

        // PUT: api/inventories/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInventory(int id, Inventory InventoryObj)
        {
            if (id != InventoryObj.Id)
            {
                return BadRequest();
            }

            //  var inventories = _context.inventories.Where(e => e.Id != InventoryObj.Id).ToList();
            //  var checkcode = inventories.Where(e => e.InventoryCode == InventoryObj.InventoryCode).ToList();

            // var checkName = inventories.Where(e => e.EnglishName == InventoryObj.EnglishName).ToList();
            // var checkNameAr = inventories.Where(e => e.ArabicName == InventoryObj.ArabicName).ToList();
            // if (checkcode.Count > 0)
            // {

            //     return StatusCode(StatusCodes.Status500InternalServerError, new Response
            //     {
            //         Status = "Error",
            //         Message = "Inventory code Already exists!"
            //     });

            // }
            //else if (checkName.Count > 0)
            // {

            //     return StatusCode(StatusCodes.Status500InternalServerError, new Response
            //     {
            //         Status = "Error",
            //         Message = "Inventory Name Already exists!"
            //     });

            // }
            // else if (checkNameAr.Count > 0)
            // {

            //     return StatusCode(StatusCodes.Status500InternalServerError, new Response
            //     {
            //         Status = "Error",
            //         Message = "Inventory NameAr Already exists!"
            //     });

            // }


            _context.Entry(InventoryObj).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InventoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }




            }
            return NoContent();
        }
        // POST: api/inventories
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Inventory>> PostInventory(Inventory InventoryObj)
        {

            Inventory invent = new Inventory();
            invent.Id = InventoryObj.Id;
            invent.UserId = InventoryObj.UserId;
            invent.AssetId = InventoryObj.AssetId;
            invent.Code = InventoryObj.Code;
            invent.CreatedAt =  DateTime.Now;
            _context.Inventories.Add(invent);
            _context.SaveChanges();
            return CreatedAtAction("GetInventory", new { id = InventoryObj.Id }, InventoryObj);

        }
        // DELETE: api/inventories/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Inventory>> DeleteInventory(int id)
        {
            var Inventory = await _context.Inventories.FindAsync(id);
            if (Inventory == null)
            {
                return NotFound();
            }

            _context.Inventories.Remove(Inventory);
            await _context.SaveChangesAsync();

            return Inventory;
        }

        private bool InventoryExists(int id)
        {
            return _context.Inventories.Any(e => e.Id == id);
        }

    }

}
