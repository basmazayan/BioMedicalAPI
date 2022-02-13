using BiomedicalSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.InventoryRepository
{
    public class InventoryRepository : IInventoryRepository
    {
        private readonly ApplicationDbContext _context;


        //private readonly IEquipmentRepository _equipmentRepository;
        public InventoryRepository(ApplicationDbContext context)


        {
            _context = context;

            // _equipmentRepository = equipmentRepository;
        }
        public Inventory GetInventory(int id)
        {


            var Inventory = _context.inventories.Find(id);



            return Inventory;

        }







    }
}
