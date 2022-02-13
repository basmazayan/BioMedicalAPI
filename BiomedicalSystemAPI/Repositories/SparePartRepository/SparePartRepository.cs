using BiomedicalSystemAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.SparePartRepository
{
    public class SparePartRepository : ISparePartRepository
    {
        private readonly ApplicationDbContext _context;
        public SparePartRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public SparePart Add(SparePart sparePart)
        {
            _context.Add(sparePart);
            return sparePart;
        }

        public SparePart GetById(int id)
        {
            return _context.spareParts.FirstOrDefault(s => s.Id == id);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(SparePart sparePart)
        {
            SparePart sp = new SparePart();
            sp.Id = sparePart.Id;
            sp.SparePartCode = sparePart.SparePartCode;
            sp.SparePartName = sparePart.SparePartName;
            sp.SparePartNameAr = sparePart.SparePartNameAr;
            _context.Entry(sp).State = EntityState.Modified;
        }
        public IEnumerable<SparePart> GetAll()
        {
            var sparePartsList = _context.spareParts

                 .Select(e => new SparePart
                 {
                     Id = e.Id,
                     SparePartCode = e.SparePartCode,
                     SparePartName = e.SparePartName,
                     SparePartNameAr = e.SparePartNameAr,
                    
                 }).ToList();
            return sparePartsList;
        }

    }
}
