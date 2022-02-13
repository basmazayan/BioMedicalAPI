using System;
using System.Collections.Generic;
using System.Linq;
using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BiomedicalSystemAPI.Repositories.EquipmentStatusRepositories
{
    public interface IEquipmentStatusRepopsitory:IDisposable
    {
        IEnumerable<StatusDTO> GetAll();
        StatusDTO GetById(int id);
        EquipmentStatus Find(int id);
        void Add(StatusDTO statusDTO);
        void Update(StatusDTO statusDTO);
        void Delete(int id);
        void Save();
        void SaveChanges();
        Task<ActionResult<IEnumerable<EquipmentStatus>>> ToList();

    }
}
