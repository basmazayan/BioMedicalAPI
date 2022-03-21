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

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MasterEquipmentAttachmentController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
       // private readonly IAttachmentRepository _attachmentrepository;
        public MasterEquipmentAttachmentController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        [Route("SaveAttachment")]
        public void PostAttachment(List<MasterEquipmentAttachment> attachment)
        {
            foreach (var item in attachment)
            {
                //  string dpPath = Upload().ToString();
                _context.MasterEquipmentAttachments.Add(item);
                _context.SaveChanges();
            }
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<MasterEquipmentAttachment>> GetAttachment(int id)
        {
            var attachment = await _context.MasterEquipmentAttachments.FindAsync(id);

            if (attachment == null)
            {
                return NotFound();
            }

            return attachment;
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAttachment(int id, MasterEquipmentAttachment attachment)
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
        [Route("getAttachmentsWithNoMasterEquipment")]
        public async Task<ActionResult<IEnumerable<MasterEquipmentAttachment>>> getAttachmentsWithNoMasterEquipment()
        {
            var mA= await _context.MasterEquipmentAttachments.Where(e => e.MasterAssetId == null).ToListAsync();
            return mA;
        }
        [HttpGet]
        [Route("getAttachmentsForMasterEquipment/{MasterequipId}")]
        public async Task<ActionResult<IEnumerable<MasterEquipmentAttachment>>> getAttachmentsForMasterEquipment(int MasterequipId)
        {
            return await _context.MasterEquipmentAttachments.Where(e => e.MasterAssetId == MasterequipId).ToListAsync();
        }
        [HttpPost,DisableRequestSizeLimit]
        [Route("Masterupload")]
        //[RequestFormLimits(MultipartBodyLengthLimit = 209715200)]
        public List<int> Masterupload()
        {
            List<int> IDs = new List<int>();
            try
            {
                var files = Request.Form.Files;
                var folderName = Path.Combine("Resources", "Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (files.Any(f => f.Length == 0))
                {
                    return IDs;
                }
                foreach (var file in files)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);
                    //you can add this path to a list and then return all dbPaths to the client if require
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    var attach = new MasterEquipmentAttachment();
                    attach.FileName = dbPath;
                    _context.MasterEquipmentAttachments.Add(attach);
                    _context.SaveChanges();
                    IDs.Add(attach.Id);
                }
                return IDs;
            }
            catch (Exception)
            {
                return IDs;
            }
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<MasterEquipmentAttachment>> DeleteAttachment(int id)
        {
            var attachment = await _context.MasterEquipmentAttachments.FindAsync(id);
            if (attachment == null)
            {
                return NotFound();
            }

            _context.MasterEquipmentAttachments.Remove(attachment);
            await _context.SaveChangesAsync();

            return attachment;
        }
        private bool AttachmentExists(int id)
        {
            return _context.MasterEquipmentAttachments.Any(e => e.Id == id);
        }
    }
}
