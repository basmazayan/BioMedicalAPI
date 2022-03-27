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
            Hospital healthCareUnit = new Hospital();
            //healthCareUnit.Id = healthUnit.Id;
            healthCareUnit.Name = healthUnit.Name;
            healthCareUnit.NameAr = healthUnit.NameAr;
            healthCareUnit.Code = healthUnit.Code;
            healthCareUnit.GovernorateId = healthUnit.GovernorateId;
            healthCareUnit.CityId = healthUnit.CityId;
            healthCareUnit.SuborganizationId = healthUnit.SubOrganizationId;
            healthCareUnit.Address = healthUnit.Address;
            healthCareUnit.Phone = healthUnit.Phone;
            healthCareUnit.Director = healthUnit.Director;
            healthCareUnit.Email = healthUnit.Email;
            healthCareUnit.Lat = healthUnit.Lat;
            healthCareUnit.Long = healthUnit.Long;
            healthCareUnit.Mobile = healthUnit.Mobile;
            _context.Hospitals.Add(healthCareUnit);

        }

        public void Delete(int id)
        {
            Hospital healthCareUnit = _context.Hospitals.Find(id);
            _context.Hospitals.Remove(healthCareUnit);
        }

        public Hospital Find(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<HealthCareUnitDTO> GetAll()
        {
            var units = _context.Hospitals
                .Include(e => e.Governorate)
                .Include(e => e.City)
                .Include(e => e.Suborganization)
                .Select(e => new HealthCareUnitDTO
                {
                    Id = e.Id,
                    Code = e.Code,
                    Name = e.Name,
                    NameAr = e.NameAr,
                    CityId = e.CityId,
                    CityName = e.City.Name,
                    CityNameAr = e.City.NameAr,
                    GovernorateId = e.GovernorateId,
                    GovernorateName = e.Governorate.Name,
                    GovernorateNameAr = e.Governorate.NameAr,
                    SubOrganizationId = e.SuborganizationId,
                    SubOrganizationName = e.Suborganization.Name,
                    SubOrganizationNameAr = e.Suborganization.NameAr,
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
            var e = _context.Hospitals
                .Include(e => e.Governorate)
                .Include(e => e.City)
                .Include(e => e.Suborganization).FirstOrDefault(e => e.Id == id);

            var unit = new HealthCareUnitDTO
            {
                Code = e.Code,
                Name = e.Name,
                NameAr = e.NameAr,
                CityId = e.CityId,
                CityName = e.City.Name,
                CityNameAr = e.City.NameAr,
                GovernorateId = e.GovernorateId,
                GovernorateName = e.Governorate.Name,
                GovernorateNameAr = e.Governorate.NameAr,
                SubOrganizationId = e.SuborganizationId,
                SubOrganizationName = e.Suborganization.Name,
                SubOrganizationNameAr = e.Suborganization.NameAr,
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
            return _context.Cities.FirstOrDefault(d => d.Id == DistrictId).Id;
        }

        public int GetHealthDistrictByCareUnit(int CareUnitId)
        {
            return _context.Hospitals.FirstOrDefault(c => c.Id == CareUnitId).CityId;
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(HealthCareUnitDTO healthUnit)
        {
            Hospital healthCareUnit = new Hospital();
            healthCareUnit.Id = healthUnit.Id;
            healthCareUnit.Name = healthUnit.Name;
            healthCareUnit.NameAr = healthUnit.NameAr;
            healthCareUnit.Code = healthUnit.Code;
            healthCareUnit.GovernorateId = healthUnit.GovernorateId;
            healthCareUnit.CityId = healthUnit.CityId;
            healthCareUnit.SuborganizationId = healthUnit.SubOrganizationId;
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

