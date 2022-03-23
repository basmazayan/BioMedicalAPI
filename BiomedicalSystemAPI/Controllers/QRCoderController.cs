using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Drawing;
using System.IO;
using QRCoder;
using BiomedicalSystemAPI.Repositories.EquipmentReposatories;
using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QRCoderController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly ApplicationDbContext _context;
        private IEquipmentRepository _equipmentRepository;
        //private readonly AssetDbContext _AssetContext;
        public QRCoderController(IEquipmentRepository equipmentRepository, 
            ApplicationDbContext context,
            UserManager<ApplicationUser> userManager)
        {
            _equipmentRepository = equipmentRepository;
            _context = context;
            //_AssetContext = AssetContext;
            this.userManager = userManager;
            // _healthCareUnitRepository = healthCareUnitRepository;
        }
        // GET: api/<QRCoderController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<QRCoderController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<QRCoderController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<QRCoderController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<QRCoderController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        [HttpPost]
        [DisableRequestSizeLimit]
        [Route("Index/{eqId}")]
        public IActionResult Index(int eqId)
        {
            int equipmentId = eqId=1879;
            //int qrText = invent.EquipmentId;
            //string UserId = invent.UserId;
            string url2 = "http://biomedicalupd-001-site1.itempurl.com/#/home/EquipmentDetails/"+ equipmentId;
            // string url2= "http://10.10.0.147:4050/#/home/EquipmentDetails/" + equipmentId; 
            QRCodeGenerator qrGenerator = new QRCodeGenerator();
            QRCodeData qrCodeData = qrGenerator.CreateQrCode(url2, QRCodeGenerator.ECCLevel.Q);
            QRCode qrCode = new QRCode(qrCodeData);
            Bitmap qrCodeImage = qrCode.GetGraphic(15);
            var bitmapFiles = BitmapToBytes(qrCodeImage);
            var equipment = _context.Assets.Where(e=>e.Id== equipmentId).FirstOrDefault();
            equipment.QrImgPath = url2;
            _context.Entry(equipment).State = EntityState.Modified;
            _context.SaveChanges();
            //var inventory = new Inventory();         
            //inventory.UserId = UserId;
            //inventory.EquipmentId = qrText;
            //inventory.CreatedAt = DateTime.Today.Date;
            //_context.inventories.Add(inventory);
            //_context.SaveChanges();
          //  return File(bitmapFiles, "image/jpeg");
            //List<ApplicationUser> users = _context.Users.ToList();
            //if(users.Count!= null)
            //{
            //foreach (var user in users)
            //{
            //        var unformattedKey = await userManager.GetAuthenticatorKeyAsync(user);
            //        if (string.IsNullOrEmpty(unformattedKey))
            //        {
            //            await user.ResetAuthenticatorKeyAsync(user.Id);
            //            unformattedKey = await _userService.GetAuthenticatorKeyAsync(user.Id);
            //        }
            //        return File(bitmapFiles, "image/jpeg");
            //}
            //}
            //else
            //{
            //    return Redirect("http://biomedicalupd-001-site1.itempurl.com/#/");
            //}
            return Ok(url2);
        }

        private static Byte[] BitmapToBytes(Bitmap img)
        {
            //var eq= _context.Equipments.Where(e => e.Id == qrText).FirstOrDefault();
            using (MemoryStream stream = new MemoryStream())
            {      
                img.Save(stream, System.Drawing.Imaging.ImageFormat.Png);
                img.Save(Directory.GetCurrentDirectory() + "/Resources/qrr/filez-" + Guid.NewGuid().ToString().Substring(0, 4) + ".png", System.Drawing.Imaging.ImageFormat.Png);

                return stream.ToArray();
            }
        }

       

        [HttpPost]
        [Route("GenerateFile")]
        public IActionResult GenerateFile(string qrText)
        {        
            QRCodeGenerator qrGenerator = new QRCodeGenerator();
            QRCodeData qrCodeData = qrGenerator.CreateQrCode(qrText, QRCodeGenerator.ECCLevel.Q);
            string fileGuid = Guid.NewGuid().ToString().Substring(0, 4);
            qrCodeData.SaveRawData(Directory.GetCurrentDirectory() + "/Resources/qrr/file-" + fileGuid + ".qrr", QRCodeData.Compression.Uncompressed);
            QRCodeData qrCodeData1 = new QRCodeData(Directory.GetCurrentDirectory() + "/Resources/qrr/file-" + fileGuid + ".qrr", QRCodeData.Compression.Uncompressed);
            QRCode qrCode = new QRCode(qrCodeData1);
            Bitmap qrCodeImage = qrCode.GetGraphic(20);           
            var bitmapFiles = BitmapToBytes(qrCodeImage);          
            return File(bitmapFiles, "image/jpeg");
        }

        //public IActionResult ViewFile()
        //{
        //    List<KeyValuePair<string, Byte[]>> fileData = new List<KeyValuePair<string, byte[]>>();
        //    KeyValuePair<string, Byte[]> data;

        //    string[] files = Directory.GetFiles("Resources/qrr");
        //    foreach (string file in files)
        //    {
        //        QRCodeData qrCodeData = new QRCodeData(file, QRCodeData.Compression.Uncompressed);
        //        QRCode qrCode = new QRCode(qrCodeData);
        //        Bitmap qrCodeImage = qrCode.GetGraphic(20);
        //        Byte[] byteData = BitmapToBytes(qrCodeImage);
        //        data = new KeyValuePair<string, Byte[]>(Path.GetFileName(file), byteData);
        //        fileData.Add(data);
        //    }
        //    return View(fileData);
        //}
    }
}

//public class Invent
//{
//    public int EquipmentId { get; set; }
//    public string UserId { get; set; }
//}
