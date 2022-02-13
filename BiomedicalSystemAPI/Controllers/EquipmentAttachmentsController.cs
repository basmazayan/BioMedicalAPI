using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BiomedicalSystemAPI.Models;
using System.Net.Http.Headers;
using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Repositories.AttachmentRepositories;
using BiomedicalSystemAPI.Repositories;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EquipmentAttachmentsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IAttachmentRepository _attachmentrepository;

        public EquipmentAttachmentsController(ApplicationDbContext context, IAttachmentRepository attachmentRepository)
        {
            _attachmentrepository = attachmentRepository;
            _context = context;
        }

       
        // GET: api/Attachments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EquipmentAttachments>>> GetAttachments()
        {
            return await _context.Attachments.ToListAsync();
        }
        [HttpPost]
        [Route("SaveAttachment")]
        public void PostAttachment(List<EquipmentAttachments> attachment)
        {
            foreach(var item in attachment)
            {
              //  string dpPath = Upload().ToString();
                _attachmentrepository.Add(item);
                _attachmentrepository.SaveChanges();
            }         
            //return CreatedAtAction("GetEquipment", new { id = attachment. }, attachment);
        }
        // GET: api/Attachments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EquipmentAttachments>> GetAttachment(int id)
        {
            var attachment = await _context.Attachments.FindAsync(id);

            if (attachment == null)
            {
                return NotFound();
            }

            return attachment;
        }

        // PUT: api/Attachments/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAttachment(int id, EquipmentAttachments attachment)
        {
            if (id != attachment.Id)
            {
                return BadRequest();
            }

            _context.Entry(attachment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AttachmentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        [HttpGet]
        [Route("getEquipAttachmentsWithNoEquipment")]
        public async Task<ActionResult<IEnumerable<EquipmentAttachments>>> getEquipAttachmentsWithNoEquipment()
        {
            return await _context.equipmentAttachments.Where(e => e.EquipmentId == null).ToListAsync();
        }
        [HttpGet]
        [Route("getEquipAttachmentsForEquipment/{equipId}")]
        public async Task<ActionResult<IEnumerable<EquipmentAttachments>>> getEquipAttachmentsForEquipment(int equipId)
        {
            return await _context.equipmentAttachments.Where(e => e.EquipmentId == equipId).ToListAsync();
        }
        [HttpGet]
        [Route("getPathOfImage/{ImgName}")]
        public string getPathOfImage(string ImgName)
        {
            var folderName = Path.Combine("Resources", "Images");
            var pathToSave = "http://biomedicalupd-001-site1.itempurl.com\\"+folderName;// Path.Combine(Directory.GetCurrentDirectory(), folderName);
            var fullPath = Path.Combine(pathToSave, ImgName);
            return fullPath;
            //return await _context.equipmentAttachments.Where(e => e.EquipmentId == equipId).ToListAsync();
        }
        // POST: api/Attachments
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.

        [HttpPost,DisableRequestSizeLimit]
        [Route("upload/{id}")]
        //[RequestFormLimits(MultipartBodyLengthLimit = 209715200)]
        public string Upload(int id)
        {
           // List<int> IDs=new List<int>();
            try
            {
                var files = Request.Form.Files;
                var folderName = Path.Combine("Resources", "Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                //if (files.Any(f => f.Length == 0))
                //{
                //    return IDs;
                //}
                var fullPath="";
                foreach (var file in files)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);
                    //you can add this path to a list and then return all dbPaths to the client if require
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        //stream.
                        file.CopyTo(stream);
                    }                   
                 //   return Ok(new { dbPath });
                    var attach = new EquipmentAttachments();
                    attach.FileName = dbPath;
                    attach.EquipmentId = id;
                    _attachmentrepository.Add(attach);
                    _attachmentrepository.Save();
                  //  IDs.Add(attach.Id);
                }
                return fullPath;
            }
            catch (Exception ex)
            {
                //StatusCode(StatusCodes.Status500InternalServerError, new Response
                //{
                //    Status = "Error",
                //    Message = ex.Message
                //});
                 return ex.Message;
            }
        }
        // DELETE: api/Attachments/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EquipmentAttachments>> DeleteAttachment(int id)
        {
            var attachment = await _context.equipmentAttachments.FindAsync(id);
            if (attachment == null)
            {
                return NotFound();
            }

            _context.equipmentAttachments.Remove(attachment);
            await _context.SaveChangesAsync();

            return attachment;
        }

        private bool AttachmentExists(int id)
        {
            return _context.Attachments.Any(e => e.Id == id);
        }


    }
    
}

