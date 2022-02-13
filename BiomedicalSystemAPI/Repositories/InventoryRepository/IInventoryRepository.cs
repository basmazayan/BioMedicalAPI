using BiomedicalSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.InventoryRepository
{
    public interface IInventoryRepository
    {
        Inventory GetInventory(int id); 
    }
}
