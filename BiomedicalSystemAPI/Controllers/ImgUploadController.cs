using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.AttachmentRepositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImgUploadController : ControllerBase
    {
      //  private IAttachmentRepository _attachmentRepository;

        //public ImgUploadController(IAttachmentRepository attachmentRepository)
        //{
        //    _attachmentRepository = attachmentRepository;
        //}

        [HttpPost]
        [DisableRequestSizeLimit]
        //[RequestFormLimits(MultipartBodyLengthLimit = 209715200)]
        public IActionResult Upload()
        {
            try
            {
                var files = Request.Form.Files;
                var folderName = Path.Combine("Resources", "Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (files.Any(f => f.Length == 0))
                {
                    return BadRequest();
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
                    //_attachmentRepository.Add();
                    //_attachmentRepository.SaveChanges();
                    
            return Ok(dbPath) ;
                }
                return Ok("All the files are successfully uploaded.");
            }
            catch (Exception)
            {
                return StatusCode(500,"Internal server error:");
            }

            
        }
    }
}

