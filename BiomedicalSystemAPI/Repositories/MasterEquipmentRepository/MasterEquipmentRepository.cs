using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Exceptions;
using BiomedicalSystemAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.MasterEquipmentRepository
{
    public class MasterEquipmentRepository : IMasterEquipmentRepository
    {
        private readonly ApplicationDbContext _context;
        public readonly ILogger _logger;
        public MasterEquipmentRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public void AddNewMasterEquipment(MasterEquipmentDTO masterEquipment)
        {
            MasterEquipment meq = new MasterEquipment();
            List<MasterEquipment> master = new List<MasterEquipment>();
            foreach (var item in master)
            {
                if (item.Name == masterEquipment.Name)
                {
                    throw new FieldalreadyExist(masterEquipment.Name);
                }
                if (item.NameAr == masterEquipment.NameAr)
                {
                    throw new FieldalreadyExist(masterEquipment.NameAr);
                }
                if (item.MasterCode == masterEquipment.MasterCode)
                {
                    throw new FieldalreadyExist(masterEquipment.MasterCode);
                }
            }
            try
            {
                meq.Id = masterEquipment.Id;
                meq.Name = masterEquipment.Name;
                meq.NameAr = masterEquipment.NameAr;
                meq.MasterCode = masterEquipment.MasterCode;
                meq.EquipmentDescriptionAr = masterEquipment.EquipmentDescriptionAr;
                meq.ModelNumber = masterEquipment.ModelNumber;
                meq.VersionNumber = masterEquipment.VersionNumber;
                meq.ExpectedLifeTime = masterEquipment.ExpectedLifeTime;
                meq.PriorityId = masterEquipment.PriorityId;
                meq.EquipmentCategoryId = masterEquipment.EquipmentCategoryId;
                meq.EquipmentSubCategoryId = masterEquipment.EquipmentSubCategoryId;
                if (masterEquipment.EquipmentSubCategoryId == 0)
                {
                    meq.EquipmentSubCategoryId = null;
                }
                meq.ManufacturerId = masterEquipment.ManufacturerId;
                meq.OriginId = masterEquipment.OriginId;
                meq.UpaCode = masterEquipment.UpaCode;
                _context.masterEquipments.Add(meq);
                meq.masterequipmentAttachments = new List<MasterEquipmentAttachment>();
                foreach (var AttachId in masterEquipment.AttachmentIDs)
                {
                    var attachment = _context.masterEquipmentAttachments.FirstOrDefault(e => e.Id == AttachId);
                    meq.masterequipmentAttachments.Add(attachment);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }
        private bool disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        public void SaveChanges()
        {
            _context.SaveChanges();
        }
        
        public IEnumerable<MasterEquipmentDTO> GetAllWithPaging(PagingParameter paging)
        {
            try
            {
                var masterEquip = _context.masterEquipments
                    .Include(mE => mE.Manufacturer)
                    .Include(mE => mE.Origin)
                    .OrderBy(e => e.Name)
                    .Skip((paging.PageNumber - 1) * paging.PageSize)
                    .Take(paging.PageSize)
                    .Select(mE => new MasterEquipmentDTO
                    {
                        Id = mE.Id,
                        Name = mE.Name,
                        NameAr = mE.NameAr,
                        MasterCode = mE.MasterCode,
                        EquipmentDescriptionAr = mE.EquipmentDescriptionAr,
                        ModelNumber = mE.ModelNumber,
                        VersionNumber = mE.VersionNumber,
                        ExpectedLifeTime = mE.ExpectedLifeTime,
                        PriorityId = mE.PriorityId,
                        EquipmentCategoryId = mE.EquipmentCategoryId,
                        EquipmentSubCategoryId = mE.EquipmentSubCategoryId,
                        ManufacturerId = mE.ManufacturerId,
                        ManufacturerName = mE.Manufacturer.ManufacturerName,
                        ManufacturerNameAr = mE.Manufacturer.ManufacturerNameAr,
                        OriginId = mE.OriginId,
                        OriginCode = mE.Origin.OriginCode,
                        UpaCode = mE.UpaCode
                    }).ToList();
                return masterEquip;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw;
            }
        }
        public int getCount()
        {
            return _context.masterEquipments.Count();
        }
        public IEnumerable<MasterEquipmentDTO> GetAll()
        {
            try
            {
                var masterEquip = _context.masterEquipments
                    .Include(mE => mE.Manufacturer)
                    .Include(mE => mE.Origin)
                    .Select(mE => new MasterEquipmentDTO
                    {
                        Id = mE.Id,
                        Name = mE.Name,
                        NameAr = mE.NameAr,
                        MasterCode = mE.MasterCode,
                        EquipmentDescriptionAr = mE.EquipmentDescriptionAr,
                        ModelNumber = mE.ModelNumber,
                        VersionNumber = mE.VersionNumber,
                        ExpectedLifeTime = mE.ExpectedLifeTime,
                        PriorityId = mE.PriorityId,
                        EquipmentCategoryId = mE.EquipmentCategoryId,
                        EquipmentSubCategoryId = mE.EquipmentSubCategoryId,
                        ManufacturerId = mE.ManufacturerId,
                        ManufacturerName = mE.Manufacturer.ManufacturerName,
                        ManufacturerNameAr = mE.Manufacturer.ManufacturerNameAr,
                        OriginId = mE.OriginId,
                        OriginCode = mE.Origin.OriginCode,
                        UpaCode = mE.UpaCode
                    }).ToList();
                return masterEquip;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw;
            }
        }

        public void Update(int id, MasterEquipmentDTO masterEquipment)
        {
            MasterEquipment mEquipment = _context.masterEquipments.FirstOrDefault(me => me.Id == id);
            List<MasterEquipment> master = new List<MasterEquipment>();
            foreach (var item in master)
            {
                if (item.Name == masterEquipment.Name)
                {
                    throw new FieldalreadyExist(masterEquipment.Name);
                }
                if (item.NameAr == masterEquipment.NameAr)
                {
                    throw new FieldalreadyExist(masterEquipment.NameAr);
                }
                if (item.MasterCode == masterEquipment.MasterCode)
                {
                    throw new FieldalreadyExist(masterEquipment.MasterCode);
                }
            }
            mEquipment.Name = masterEquipment.Name;
            mEquipment.NameAr = masterEquipment.NameAr;
            mEquipment.MasterCode = masterEquipment.MasterCode;
            mEquipment.EquipmentDescriptionAr = masterEquipment.EquipmentDescriptionAr;
            mEquipment.ModelNumber = masterEquipment.ModelNumber;
            mEquipment.VersionNumber = masterEquipment.VersionNumber;
            mEquipment.ExpectedLifeTime = masterEquipment.ExpectedLifeTime;
            mEquipment.PriorityId = masterEquipment.PriorityId;
            mEquipment.EquipmentCategoryId = masterEquipment.EquipmentCategoryId;
            mEquipment.EquipmentSubCategoryId = masterEquipment.EquipmentSubCategoryId;
            if (masterEquipment.EquipmentSubCategoryId == 0)
            {
                mEquipment.EquipmentSubCategoryId = null;
            }
            mEquipment.ManufacturerId = masterEquipment.ManufacturerId;
            mEquipment.OriginId = masterEquipment.OriginId;
            mEquipment.UpaCode = masterEquipment.UpaCode;
            mEquipment.masterequipmentAttachments = new List<MasterEquipmentAttachment>();
            foreach (var AttachId in masterEquipment.AttachmentIDs)
            {
                var attachment = _context.masterEquipmentAttachments.FirstOrDefault(e => e.Id == AttachId);
                mEquipment.masterequipmentAttachments.Add(attachment);
            }
            _context.Entry(mEquipment).State = EntityState.Modified;
        }

        public void Delete(int id)
        {
            if (id == 0)
            {
                throw new NullReferenceException();

            }
            var masterEquipment = _context.masterEquipments.FirstOrDefault(mE => mE.Id == id);
            _context.masterEquipments.Remove(masterEquipment);

        }

        public string GetMasterCode(string Name)
        {
            var mastereq = _context.masterEquipments.FirstOrDefault(me => me.Name == Name);
            return mastereq.MasterCode;
        }

        public MasterEquipmentDTO GetById(int id)
        {
            try
            {
                var masterEquip = _context.masterEquipments
                    .Include(mE => mE.Manufacturer)
                    .Include(mE => mE.Origin)
                    .Select(mE => new MasterEquipmentDTO
                    {
                        Id = mE.Id,
                        Name = mE.Name,
                        NameAr = mE.NameAr,
                        MasterCode = mE.MasterCode,
                        EquipmentDescriptionAr = mE.EquipmentDescriptionAr,
                        ModelNumber = mE.ModelNumber,
                        VersionNumber = mE.VersionNumber,
                        ExpectedLifeTime = mE.ExpectedLifeTime,
                        PriorityId = mE.PriorityId,
                        EquipmentCategoryId = mE.EquipmentCategoryId,
                        EquipmentSubCategoryId = mE.EquipmentSubCategoryId,
                        ManufacturerId = mE.ManufacturerId,
                        ManufacturerName = mE.Manufacturer.ManufacturerName,
                        ManufacturerNameAr = mE.Manufacturer.ManufacturerNameAr,
                        OriginId = mE.OriginId,
                        OriginCode = mE.Origin.OriginCode,
                        UpaCode = mE.UpaCode
                    }).FirstOrDefault(e => e.Id == id);
                return masterEquip;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw;
            }
            // return _context.masterEquipments.Find(id);
        }

        public ActionResult<List<BrandVM>> GetMasterEquipmentsByBrand(List<EquipmentDTO> equipmentModel)
        {
            List<BrandVM> lstBrandEquipment = new List<BrandVM>();
            var lstBrands = (from brnd in _context.Manufacturers
                             select brnd).ToList()
                            .GroupBy(a => a.Id).ToList();
            if (lstBrands.Count > 0)
            {
                foreach (var item in lstBrands)
                {
                    BrandVM brandEquipmentObj = new BrandVM();
                    brandEquipmentObj.Id = item.FirstOrDefault().Id;
                    brandEquipmentObj.BrandName = item.FirstOrDefault().ManufacturerName;
                    brandEquipmentObj.BrandNameAr = item.FirstOrDefault().ManufacturerNameAr;
                    brandEquipmentObj.ListEquipment = equipmentModel.ToList().Where(e => e.ManufacturerId == brandEquipmentObj.Id)


                        .Select(equip => new EquipmentDTO
                        {
                            Id = equip.Id,
                            EquipmentName = equip.EquipmentName,
                            EquipmentNameAr = equip.EquipmentNameAr,
                            ManufacturerName = equip.ManufacturerName, //_context.Manufacturers.Where(m => m.Id == equip.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerName,
                            ManufacturerNameAr = equip.ManufacturerNameAr, //_context.Manufacturers.Where(m => m.Id == equip.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerNameAr,
                            HealthDirectoryName = equip.HealthDirectoryName,
                            HealthDirectoryNameAr = equip.HealthDirectoryNameAr,
                            HealthDistrictName = equip.HealthDistrictName,
                            HealthDistrictNameAr = equip.HealthDistrictNameAr,
                            HealthCareUnitName = equip.HealthCareUnitName,
                            HealthCareUnitNameAr = equip.HealthCareUnitNameAr,
                            SupplierName = equip.SupplierName,
                            SupplierNameAr = equip.SupplierNameAr,
                            OrganizationName = equip.OrganizationName,//_context.organizations.Where(h => h.Id == equip.HealthCareUnit.organizationId).FirstOrDefault().Name,
                            OrganizationNameAr = equip.OrganizationNameAr,//_context.organizations.Where(h => h.Id == equip.HealthCareUnit.organizationId).FirstOrDefault().NameAr,
                            PurchaseDate = equip.PurchaseDate,
                            ManufacturerId = equip.ManufacturerId
                        }).ToList();



                    lstBrandEquipment.Add(brandEquipmentObj);
                }
            }
            return lstBrandEquipment;
        }
    }
}
