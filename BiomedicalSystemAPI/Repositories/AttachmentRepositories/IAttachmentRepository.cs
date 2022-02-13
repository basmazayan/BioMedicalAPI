using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using Microsoft.AspNetCore.Mvc;
namespace BiomedicalSystemAPI.Repositories.AttachmentRepositories
{
    public interface IAttachmentRepository:IDisposable
    {
        IEnumerable<EquipmentAttachments> GetAll();
        EquipmentAttachments GetById(int id);
        EquipmentAttachments Find(int id);
        void Add(EquipmentAttachments Attachment);//, string dpPath);
        void Update(List<EquipmentAttachments> attachment);
        void Delete(int id);
        void Save();
        void SaveChanges();
        Task<ActionResult<IEnumerable<EquipmentAttachments>>> ToList();
    }
}
