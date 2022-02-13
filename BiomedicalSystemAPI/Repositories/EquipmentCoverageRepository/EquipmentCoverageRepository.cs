using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.EquipmentCoverageRepository
{
    public class EquipmentCoverageRepository : IEquipmentCoverageRepository
    {
        private readonly ApplicationDbContext _context;
        public EquipmentCoverageRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public void Add(EquipmentCoverageDTO equipmentCoverage)
        {
            var eqCoverage = new EquipmentCoverage();
            eqCoverage.equipmentCoverageId = equipmentCoverage.equipmentCoverageId;
            eqCoverage.NumberOfVisits = equipmentCoverage.NumberOfVisits;
            eqCoverage.ResponseTime = equipmentCoverage.ResponseTime;
            eqCoverage.SparePartId = equipmentCoverage.SparePartId;
            eqCoverage.Description = equipmentCoverage.Description;
            eqCoverage.DescriptionAr = equipmentCoverage.DescriptionAr;
            eqCoverage.ContractId = equipmentCoverage.ContractId;
            eqCoverage.equipment_EquipmentCoverages = new List<Equipment_EquipmentCoverage>();
            foreach (var equipId in equipmentCoverage.EquipmentsIDs)
            {
                eqCoverage.equipment_EquipmentCoverages.Add(new Equipment_EquipmentCoverage
                {
                    EquipmentId = equipId,
                    EquipmentCoverageId=equipmentCoverage.equipmentCoverageId
                });
                         
            }
            _context.Add(eqCoverage);
        }

        public void Delete(int id)
        {
            EquipmentCoverage eqCoverage = Find(id);
            _context.EquipmentCoverages.Remove(eqCoverage);
        }

        private bool disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public EquipmentCoverage Find(int id)
        {
           return _context.EquipmentCoverages.Find(id);
        }

        public IEnumerable<EquipmentCoverage> GetAll()
        {
            var eqCoverages = _context.EquipmentCoverages
               
                 .Select(e => new EquipmentCoverage
                 {
            equipmentCoverageId = e.equipmentCoverageId,
            NumberOfVisits = e.NumberOfVisits,
            ResponseTime = e.ResponseTime,
            Description = e.Description,
            DescriptionAr = e.DescriptionAr,
            ContractId = e.ContractId,
            SparePartId = e.SparePartId,
        }).ToList();
            return eqCoverages;
        }

        public EquipmentCoverage GetById(int id)
        {
            var e = _context.EquipmentCoverages.FirstOrDefault(e => e.equipmentCoverageId == id);
            var eq = new EquipmentCoverage
            {
                equipmentCoverageId = e.equipmentCoverageId,
            NumberOfVisits = e.NumberOfVisits,
            ResponseTime = e.ResponseTime,
           Description = e.Description,
            DescriptionAr = e.DescriptionAr,
            ContractId = e.ContractId,
            SparePartId = e.SparePartId,



        };
            if (eq == null)
            {
                return null;
            }

            return eq;
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public void Update(EquipmentCoverage equipmentCoverage)
        {
            var eqCoverageObj = new EquipmentCoverageDTO();
            eqCoverageObj.equipmentCoverageId = equipmentCoverage.equipmentCoverageId;
            eqCoverageObj.NumberOfVisits = equipmentCoverage.NumberOfVisits;
            eqCoverageObj.ResponseTime = equipmentCoverage.ResponseTime;
            eqCoverageObj.Description = equipmentCoverage.Description;
            eqCoverageObj.DescriptionAr = equipmentCoverage.DescriptionAr;
            eqCoverageObj.ContractId = equipmentCoverage.ContractId;
            eqCoverageObj.SparePartId = equipmentCoverage.SparePartId;
          
            _context.Entry(eqCoverageObj).State = EntityState.Modified;
        }



       
    }
}
