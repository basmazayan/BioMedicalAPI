using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.MasterEquipmentRepository
{
    public interface IMasterEquipmentRepository:IDisposable
    {
        void AddNewMasterEquipment(MasterEquipmentDTO masterEquipment);
        void SaveChanges();
        IEnumerable<MasterEquipmentDTO> GetAll();
        IEnumerable<MasterEquipmentDTO> GetAllWithPaging(PagingParameter paging);
        MasterEquipmentDTO GetById(int id);
        void Update(int id, MasterEquipmentDTO masterEquipment);
        void Delete(int id);
        string GetMasterCode(string Name);
        ActionResult<List<BrandVM>> GetMasterEquipmentsByBrand(List<EquipmentDTO> equipmentModel);
        int getCount();
    }
}
