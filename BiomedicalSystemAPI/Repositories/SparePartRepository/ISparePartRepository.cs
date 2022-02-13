using BiomedicalSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.SparePartRepository
{
    public interface ISparePartRepository
    {
        SparePart Add(SparePart sparePart);
        SparePart GetById(int id);
        void Update(SparePart sparePart);
        void Save();
        IEnumerable<SparePart> GetAll();
    }
}
