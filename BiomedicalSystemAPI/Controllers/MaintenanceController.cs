using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.MaintenanceRepository;
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
    public class MaintenanceController : ControllerBase
    {
        private readonly IMaintenanceRepository _maintenanceRepository;
        public MaintenanceController(IMaintenanceRepository maintenanceRepository)
        {
            _maintenanceRepository = maintenanceRepository;
        }
        [HttpPost]
        public MaintenanceService PostMaintenance(MaintenanceService maintenance)
        {
            _maintenanceRepository.Add(maintenance);
            _maintenanceRepository.Save();
            return maintenance;
        }
        [HttpGet("{id}")]
        public MaintenanceService GetById(int id)
        {
           var m= _maintenanceRepository.GetById(id);
            return m;
        }
        [HttpPut("{id}")]
        public ActionResult putMaintenance(int id,MaintenanceService maintenance)
        {
            if(id!=maintenance.Id)
            {
                return BadRequest();
            }
            _maintenanceRepository.Update(maintenance);
            try
            {
                _maintenanceRepository.Save();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                string msg = ex.Message;
            }
            return NoContent();
        }
    }
}
