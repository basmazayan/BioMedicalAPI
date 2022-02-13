using BiomedicalSystemAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LanguageController : Controller
    {
        private readonly ApplicationDbContext _context;
        public LanguageController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/Language
        [HttpGet]
        [Route("GetAllLanguages")]
        public async Task<IEnumerable<Language>> getAllLanguages()
        {
            return await _context.Languages.ToListAsync();
        }
        // GET: api/Language/5
        [HttpGet("{Id}")]
        [Route("GetLanguageById/{id}")]
        public async Task<Language> getLanguage(int Id)
        {
            return await _context.Languages.Where(L=>L.Id==Id).FirstOrDefaultAsync();
        }
    }
}
