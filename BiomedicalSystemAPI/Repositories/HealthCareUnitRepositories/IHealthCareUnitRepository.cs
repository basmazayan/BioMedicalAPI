using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.HealthCareUnitRepositories
{
    public interface IHealthCareUnitRepository
    {
        IEnumerable<HealthCareUnitDTO> GetAll();
        HealthCareUnitDTO GetById(int id);
        Hospital Find(int id);
        void Add(HealthCareUnitDTO healthUnit);
        void Update(HealthCareUnitDTO healthUnit);
        void Delete(int id);
        void Save();
        //get heathDistrictId by healthCareUnit Id
        int GetHealthDistrictByCareUnit(int CareUnitId);
        //get HealthDirectory by heathDistrict Id
        int GetHealthDirectoryByDistrict(int DistrictId);
    }
}
