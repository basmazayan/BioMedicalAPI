using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.ContractRepository
{
   public interface IContractRepository: IDisposable
    {
        IEnumerable<ContractDTO> GetAll();
        //IEnumerable<EquipmentDTO> GetAllEquimentsByEmp(string email);
        ContractDTO GetById(int id);
        Contract Find(int id);
        void Add(ContractDTO contract);
        void Update(Contract Contract);
        void Delete(int id);
        void Save();
        void SaveChanges();
   
        
    }
}
