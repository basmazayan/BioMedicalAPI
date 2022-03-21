using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Models.AssetAppContext;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.ContractRepository
{
    public class Contract_Repository : IContractRepository
    {
         private readonly ApplicationDbContext _context;
         private readonly AssetDbContext _AssetContext;


        public Contract_Repository(ApplicationDbContext context, AssetDbContext AssetContext)
        {
            _context = context;
            _AssetContext = AssetContext;
        }
        public void Add(ContractDTO contractdto)
        {
            Contract contract = new Contract();
            contract.Contents = contractdto.Contents;
            contract.StartDate = contractdto.StartDate;
            contract.EndDate = contractdto.EndDate;
            contract.Subject = contractdto.Subject;
            contract.SupplierId = contractdto.SupplierId;
            contract.Number = contractdto.Number;
            _context.Add(contract);
            _context.SaveChanges();
            foreach (var equipId in contractdto.equipmentIDs)
            {
                var equip = _context.Assets.Where(e => e.Id == equipId).FirstOrDefault();
                equip.ContractId = contract.Id;
            }
            //foreach (var equipId in contractdto.equipmentIDs)
            //{
            //    var equip = _context.Equipments.Where(e => e.Id != equipId).FirstOrDefault();
            //    equip.ContractRequestId = null;
            //    equip.OrganizationRequestId = null;
            //}
            _context.SaveChanges();
        }
        public void Delete(int id)
        {
            Contract contract = Find(id);
            _context.Contracts.Remove(contract);
        }

        public Contract Find(int id)
        {
            return _context.Contracts.Find(id);

        }

        public ContractDTO GetById(int id)
        {
            var con = _context.Contracts.Include(c=>c.Supplier).FirstOrDefault(c => c.Id == id);
            var contract = new ContractDTO
            {
             Id = con.Id,
             Number = con.Number,
             SupplierId = con.SupplierId,
             HealthCareUnitId = con.HealthCareUnitId,
             StartDate = con.StartDate,
             EndDate = con.EndDate,
             Subject = con.Subject,
             SupplierName= con.Supplier.Name,
             SupplierNameAr= con.Supplier.NameAr
            };
            if (contract == null)
            {
                return null;
            }

            return contract;
        }
        public void Save()
        {
            _context.SaveChanges();
        }
        public void SaveChanges()
        {
            _context.SaveChanges();

        }
        public void Update(Contract contract)
        {
            var contractObj = new Contract();
            contractObj.Id = contract.Id;
            contractObj.Number = contract.Number;       
            contractObj.SupplierId = contract.SupplierId;
            contractObj.HealthCareUnitId = contract.HealthCareUnitId;
            contractObj.StartDate = contract.StartDate;
            contractObj.EndDate = contract.EndDate;
            contractObj.Subject = contract.Subject;
            _context.Entry(contractObj).State = EntityState.Modified;
        }
       public IEnumerable<ContractDTO> GetAll()
        {
            var contracts = _context.Contracts
              .Include(c => c.HealthCareUnit)
              .Include(c => c.Supplier)

              .Select(c => new ContractDTO
              {
                  Id = c.Id,
                  Number = c.Number,
                  HealthCareUnitId = c.HealthCareUnitId,
                  Subject = c.Subject,
                  EndDate = c.EndDate,
                  StartDate = c.StartDate,
                  HealthCareUnitName = c.HealthCareUnit.Name,
                  HealthCareUnitNameAr = c.HealthCareUnit.NameAr,
                  SupplierId = c.SupplierId,
                  SupplierName = c.Supplier.Name,
                  SupplierNameAr = c.Supplier.NameAr,
                
              }).ToList();

            return contracts;
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

        //Contract IContractRepository.GetById(int id)
        //{
        //    throw new NotImplementedException();
        //}
    }

      
     

     

        
    }

