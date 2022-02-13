using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.HealthCareUnitRepositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.HealthCareUnitRepositories
{
    public class HealthCareUnitRepository : IHealthCareUnitRepository
    {
        private readonly ApplicationDbContext _context;
        public HealthCareUnitRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public void Add(HealthCareUnitDTO healthUnit)
        {
            HealthCareUnit healthCareUnit = new HealthCareUnit();
            //healthCareUnit.Id = healthUnit.Id;
            healthCareUnit.HealthCareUnitName = healthUnit.HealthCareUnitName;
            healthCareUnit.HealthCareUnitNameAr = healthUnit.HealthCareUnitNameAr;
            healthCareUnit.HealthCareUnitCode = healthUnit.HealthCareUnitCode;
            healthCareUnit.HealthDirectoryId = healthUnit.HealthDirectoryId;
            healthCareUnit.HealthDistrictId = healthUnit.HealthDistrictId;
            healthCareUnit.organizationId = healthUnit.organizationId;
            healthCareUnit.Address = healthUnit.Address;
            healthCareUnit.Phone = healthUnit.Phone;
            healthCareUnit.Director = healthUnit.Director;
            healthCareUnit.Email = healthUnit.Email;
            healthCareUnit.Lat = healthUnit.Lat;
            healthCareUnit.Long = healthUnit.Long;
            healthCareUnit.Mobile = healthUnit.Mobile;
            _context.HealthCareUnits.Add(healthCareUnit);

        }

        public void Delete(int id)
        {
            HealthCareUnit healthCareUnit = _context.HealthCareUnits.Find(id);
            _context.HealthCareUnits.Remove(healthCareUnit);
        }

        public HealthCareUnit Find(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<HealthCareUnitDTO> GetAll()
        {
            var units = _context.HealthCareUnits
                .Include(e => e.HealthDirectories)
                .Include(e => e.HealthDistricts)
                .Include(e => e.organization)
                .Select(e => new HealthCareUnitDTO
                {
                    Id = e.Id,
                    HealthCareUnitCode = e.HealthCareUnitCode,
                    HealthCareUnitName = e.HealthCareUnitName,
                    HealthCareUnitNameAr = e.HealthCareUnitNameAr,
                    HealthDistrictId = e.HealthDistrictId,
                    HealthDistrictName = e.HealthDistricts.HealthDistrictName,
                    HealthDistrictNameAr = e.HealthDistricts.HealthDistrictNameAr,
                    HealthDirectoryId = e.HealthDirectoryId,
                    HealthDirectoryName = e.HealthDirectories.HealthDirectoryName,
                    HealthDirectoryNameAr = e.HealthDirectories.HealthDirectoryNameAr,
                    organizationId = e.organizationId,
                    organizationName = e.organization.Name,
                    organizationNameAr = e.organization.NameAr,
                    Address = e.Address,
                    Director = e.Director,
                    Mobile = e.Mobile,
                    Phone = e.Phone,
                    Lat = e.Lat,
                    Long = e.Long,
                    Email = e.Email
                });
            return units;
        }

        public HealthCareUnitDTO GetById(int id)
        {
            var e = _context.HealthCareUnits
                .Include(e => e.HealthDirectories)
                .Include(e => e.HealthDistricts)
                .Include(e => e.organization).FirstOrDefault(e => e.Id == id);

            var unit = new HealthCareUnitDTO
            {
                HealthCareUnitCode = e.HealthCareUnitCode,
                HealthCareUnitName = e.HealthCareUnitName,
                HealthCareUnitNameAr = e.HealthCareUnitNameAr,
                HealthDistrictId = e.HealthDistrictId,
                HealthDistrictName = e.HealthDistricts.HealthDistrictName,
                HealthDistrictNameAr = e.HealthDistricts.HealthDistrictNameAr,
                HealthDirectoryId = e.HealthDirectoryId,
                HealthDirectoryName = e.HealthDirectories.HealthDirectoryName,
                HealthDirectoryNameAr = e.HealthDirectories.HealthDirectoryNameAr,
                organizationId = e.organizationId,
                organizationName = e.organization.Name,
                organizationNameAr = e.organization.NameAr,
                Address = e.Address,
                Director = e.Director,
                Mobile = e.Mobile,
                Phone = e.Phone,
                Lat = e.Lat,
                Long = e.Long,
                Email = e.Email
            };
            return unit;
        }

        public int GetHealthDirectoryByDistrict(int DistrictId)
        {
            return _context.HealthDistricts.FirstOrDefault(d => d.Id == DistrictId).HealthDirectoryId;
        }

        public int GetHealthDistrictByCareUnit(int CareUnitId)
        {
            return _context.HealthCareUnits.FirstOrDefault(c => c.Id == CareUnitId).HealthDistrictId;
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(HealthCareUnitDTO healthUnit)
        {
            HealthCareUnit healthCareUnit = new HealthCareUnit();
            healthCareUnit.Id = healthUnit.Id;
            healthCareUnit.HealthCareUnitName = healthUnit.HealthCareUnitName;
            healthCareUnit.HealthCareUnitNameAr = healthUnit.HealthCareUnitNameAr;
            healthCareUnit.HealthCareUnitCode = healthUnit.HealthCareUnitCode;
            healthCareUnit.HealthDirectoryId = healthUnit.HealthDirectoryId;
            healthCareUnit.HealthDistrictId = healthUnit.HealthDistrictId;
            healthCareUnit.organizationId = healthUnit.organizationId;
            healthCareUnit.Address = healthUnit.Address;
            healthCareUnit.Phone = healthUnit.Phone;
            healthCareUnit.Director = healthUnit.Director;
            healthCareUnit.Email = healthUnit.Email;
            healthCareUnit.Lat = healthUnit.Lat;
            healthCareUnit.Long = healthUnit.Long;
            healthCareUnit.Mobile = healthUnit.Mobile;
            _context.Entry(healthCareUnit).State = EntityState.Modified;
        }

    }


}

