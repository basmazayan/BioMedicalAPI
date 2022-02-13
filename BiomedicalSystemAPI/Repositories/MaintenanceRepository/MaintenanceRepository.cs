using BiomedicalSystemAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.MaintenanceRepository
{
    public class MaintenanceRepository : IMaintenanceRepository
    {
        private readonly ApplicationDbContext _context;
        public MaintenanceRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public MaintenanceService Add(MaintenanceService maintenance)
        {
            _context.MaintenanceServices.Add(maintenance);
            return maintenance;
        }
        public MaintenanceService GetById(int id)
        {
            return _context.MaintenanceServices.FirstOrDefault(m => m.Id == id);
        }
        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(MaintenanceService maintenance)
        {
            MaintenanceService ma = new MaintenanceService();
            ma.Id = maintenance.Id;
            ma.LaborCost = maintenance.LaborCost;
            ma.PartCost = maintenance.PartCost;
            ma.problem = maintenance.problem;
            _context.Entry(ma).State = EntityState.Modified;
        }
    }
}
