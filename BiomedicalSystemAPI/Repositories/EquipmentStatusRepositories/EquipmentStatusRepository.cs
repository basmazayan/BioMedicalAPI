using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.EquipmentStatusRepositories
{
    public class EquipmentStatusRepository : IEquipmentStatusRepopsitory
    {
        private readonly ApplicationDbContext _context;
        public EquipmentStatusRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public void Add(StatusDTO statusDTO)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public EquipmentStatus Find(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<StatusDTO> GetAll()
        {
            throw new NotImplementedException();
        }

        public StatusDTO GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Save()
        {
            throw new NotImplementedException();
        }

        public void SaveChanges()
        {
            throw new NotImplementedException();
        }

        public Task<ActionResult<IEnumerable<EquipmentStatus>>> ToList()
        {
            throw new NotImplementedException();
        }

        public void Update(StatusDTO statusDTO)
        {
            throw new NotImplementedException();
        }
    }
}
