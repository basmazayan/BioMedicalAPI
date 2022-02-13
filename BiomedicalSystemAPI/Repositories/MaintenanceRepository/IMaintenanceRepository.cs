using BiomedicalSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.MaintenanceRepository
{
    public interface IMaintenanceRepository
    {
        MaintenanceService Add(MaintenanceService maintenance);
        MaintenanceService GetById(int id);
        void Update(MaintenanceService maintenance);
        void Save();
    }
}
