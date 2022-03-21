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
            sp.Code = sparePart.Code;
            sp.Name = sparePart.Name;
            sp.NameAr = sparePart.NameAr;
            _context.Entry(sp).State = EntityState.Modified;
        }
        public IEnumerable<SparePart> GetAll()
        {
            var sparePartsList = _context.spareParts

                 .Select(e => new SparePart
                 {
                     Id = e.Id,
                     Code = e.Code,
                     Name = e.Name,
                     NameAr = e.NameAr,
                    
                 }).ToList();
            return sparePartsList;
        }

    }
}
