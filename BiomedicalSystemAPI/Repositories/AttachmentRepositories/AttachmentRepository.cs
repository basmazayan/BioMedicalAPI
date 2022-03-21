using BiomedicalSystemAPI.Controllers;
using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.AttachmentRepositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories
{
    public class AttachmentRepository: IAttachmentRepository
    {
        private readonly ApplicationDbContext _context;
       // private readonly AttachmentsController _attachmentsController;

        public AttachmentRepository(ApplicationDbContext context)
        {
            _context = context;
          //  _attachmentsController = attachmentsController;
        }
        
        public void Add(EquipmentAttachments attachment)//,string dpPath)
        {
           // dpPath= _attachmentsController.Upload().ToString();

            //foreach (var item in attachment)
            //    {
                   // Attachment Attach = new Attachment();
                  //  Attach.Id = attachment.Id;
                 //   Attach.FileName = attachment.FileName;
                    _context.EquipmentAttachments.Add(attachment);
           // return _context.equipmentAttachments.Select(eA => eA.Id).ToList();
           // }
 
        }

        public void Delete(int id)
        {
            EquipmentAttachments attachment = Find(id);
            _context.Attachments.Remove(attachment);
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


        public EquipmentAttachments Find(int id)
        {
            return _context.Attachments.Find(id);
        }

        public IEnumerable<EquipmentAttachments> GetAll()
        {
            var attachments = _context.Attachments.Select(e => new EquipmentAttachments
            {
                Id=e.Id,
                FileName=e.FileName,
           
              
            }).ToList();
            return attachments;
        }

        public EquipmentAttachments GetById(int id)
        {
            var a = _context.Attachments.FirstOrDefault(a => a.Id == id);
            var attachment = new EquipmentAttachments
            {
                Id = a.Id,
               FileName=a.FileName,
               
            };  
            return attachment;
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(List<EquipmentAttachments> attachment)
        {

            foreach (var item in attachment)
            {
                EquipmentAttachments Attach = new EquipmentAttachments();
                Attach.Id = item.Id;
              
                Attach.FileName = item.FileName;

                
            _context.Entry(Attach).State = EntityState.Modified;
            }
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public Task<ActionResult<IEnumerable<EquipmentAttachments>>> ToList()
        {
            throw new NotImplementedException();
        }

  
    
    }
}

