using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.EquipmentCoverageRepository
{
   public interface IEquipmentCoverageRepository :IDisposable
    {
        IEnumerable<EquipmentCoverage> GetAll();
        //IEnumerable<EquipmentDTO> GetAllEquimentsByEmp(string email);
        EquipmentCoverage GetById(int id);
        EquipmentCoverage Find(int id);
        void Add(EquipmentCoverageDTO equipmentCoverage);
        void Update(EquipmentCoverage equipmentCoverage);
        void Delete(int id);
        void Save();
        void SaveChanges();

    }
}
