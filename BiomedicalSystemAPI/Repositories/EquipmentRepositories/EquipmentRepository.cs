using BiomedicalSystemAPI.Controllers;
using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Exceptions;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.EmployeeRepository;
using BiomedicalSystemAPI.Repositories.HealthCareUnitRepositories;
using BiomedicalSystemAPI.Repositories.InventoryRepository;
using BiomedicalSystemAPI.Repositories.MasterEquipmentRepository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace BiomedicalSystemAPI.Repositories.EquipmentReposatories
{
    public class EquipmentRepository : IEquipmentRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly IMasterEquipmentRepository _masterEquipmentRepository;
        private readonly IHealthCareUnitRepository _healthCareUnitRepository;
        private readonly IInventoryRepository _inventoryRepository;

        //private readonly IEquipmentRepository _equipmentRepository;
        public EquipmentRepository(ApplicationDbContext context, IMasterEquipmentRepository masterEquipmentRepository,
            IHealthCareUnitRepository healthCareUnitRepository,
            IInventoryRepository inventoryRepository
           )
        {
            _context = context;
            _masterEquipmentRepository = masterEquipmentRepository;
            _healthCareUnitRepository = healthCareUnitRepository;
            _inventoryRepository = inventoryRepository;
            // _equipmentRepository = equipmentRepository;
        }
        public void Add(EquipmentDTO equipment)
        {

            List<Equipment> equip = new List<Equipment>();
            equip = _context.Equipments.ToList();
            MasterEquipmentDTO mequipment = _masterEquipmentRepository.GetById(equipment.MasterEquipmentId);
            int DistrictId = _healthCareUnitRepository.GetHealthDistrictByCareUnit(equipment.HealthCareUnitId);
            int DirectoryId = _healthCareUnitRepository.GetHealthDirectoryByDistrict(DistrictId);
            Equipment eq = new Equipment();
            var masterCode = _masterEquipmentRepository.GetMasterCode(mequipment.Name);
            Random random = new Random();
            int num = random.Next(10000);
            var names = (equipment.EquipmentName).Split(" ");
            eq.EquipmentCode = (names[0] + ' ' + num.ToString());
            eq.EquipmentMasterCode = masterCode;
            eq.EquipmentName = mequipment.Name;
            eq.EquipmentNameAr = equipment.EquipmentNameAr;
            eq.EquipmentType = equipment.EquipmentType;
            eq.InstallationDate = equipment.InstallationDate;
            //eq.EquipmentDescriptionAr = equipment.EquipmentDescriptionAr;
            eq.Remarks = equipment.Remarks;
            //eq.ModelNumber = equipment.ModelNumber;
            //eq.VersionNumber = equipment.VersionNumber;
            eq.SerialNumber = equipment.SerialNumber;
            eq.InternalCode = masterCode + ' ' + eq.EquipmentCode;
            eq.Barcode = equipment.Barcode;
            eq.PurchaseDate = equipment.PurchaseDate;
            eq.Price = equipment.Price;
            eq.WarrantyExpires = equipment.WarrantyExpires;
            //eq.ExpectedLifeTime = equipment.ExpectedLifeTime;
            eq.Length = equipment.Length;
            eq.Height = equipment.Height;
            eq.Weight = equipment.Weight;
            eq.ColorAr = equipment.ColorAr;
            eq.DepartmentId = equipment.DepartmentId;
            //eq.PriorityId = equipment.PriorityId;
            //eq.EquipmentCategoryId = equipment.EquipmentCategoryId;
            //eq.EquipmentSubCategoryId = equipment.EquipmentSubCategoryId;
            eq.EquipmentStatuSId = equipment.EquipmentStatuSId;
            //eq.ManufacturerId = equipment.ManufacturerId;
            //eq.OriginId = equipment.OriginId;
            eq.HealthCareUnitId = equipment.HealthCareUnitId;
            eq.SupplierId = equipment.SupplierId;
            eq.HealthDirectoryId = DirectoryId;
            eq.HealthDistrictId = DistrictId;
            eq.MasterEquipmentId = equipment.MasterEquipmentId;
            eq.QrImgPath = equipment.QrImgPath;
            eq.equipmentEmployees = new List<EquipmentEmployees>();
            //foreach(var attach in equipment.attachments)
            //{
            //    eq.AttachmentId = attach.Id;
            //}           
            foreach (var empId in equipment.EmployeeIDs)
            {
                eq.equipmentEmployees.Add(new EquipmentEmployees
                {
                    UserId = empId,
                    EquipmentId = equipment.Id
                });
                //  var employee = _context.Employees.FirstOrDefault(e => e.Id == empId);              
            }
            eq.equipmentAttachments = new List<EquipmentAttachments>();

            //  equipments.Add(eq);
            _context.Equipments.Add(eq);
            _context.SaveChanges();
            equipment.Id = eq.Id;

            //foreach (var AttachId in equipment.AttachmentIDs)
            //{
            //    var attachment = _context.equipmentAttachments.FirstOrDefault(e => e.Id == AttachId);
            //    eq.equipmentAttachments.Add(attachment);
            //}
            //return eq;
        }

        public void Delete(int id)
        {
            Equipment equipment = Find(id);
            equipment.equipmentEmployees = _context.equipmentEmployees.Where(e => e.EquipmentId == id).ToList();
            if (equipment.equipmentEmployees.Count != 0)
            {
                foreach (var item in equipment.equipmentEmployees)
                {
                    _context.equipmentEmployees.Remove(item);
                }
            }
            _context.Equipments.Remove(equipment);
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


        public Equipment Find(int id)
        {
            return _context.Equipments.Find(id);
        }

        public IEnumerable<EquipmentDTO> GetAll()//(PagingParameter paging)
        {
            var inventories = _context.inventories.ToList();

            var equips = _context.Equipments
                .Include(e => e.Department)
                .Include(e => e.HealthDirectories)
                .Include(e => e.HealthDistricts)
                //.Include(e => e.Manufacturer)
                .Include(e => e.Supplier)
                .Include(e => e.MasterEquipment)
                .Include(e => e.equipmentEmployees)
                .Include(e => e.HealthCareUnit)
                .Include(e => e.equipmentAttachments)
                .Include(e => e.ContractRequest)
                .Include(e => e.OrganizationContract)
                .Include(e => e.Contract)
                //.OrderBy(e => e.EquipmentName)
                //.Skip((paging.PageNumber - 1) * paging.PageSize)
                //.Take(paging.PageSize)
                .Select(e => new EquipmentDTO
                 {
                     Id = e.Id,
                     EquipmentCode = e.EquipmentCode,
                     UpaCode = e.MasterEquipment.UpaCode,
                     EquipmentName = e.EquipmentName,
                     EquipmentNameAr = e.EquipmentNameAr,
                     EquipmentType = e.EquipmentType,
                     InstallationDate = e.InstallationDate,
                     HealthCareUnitId = e.HealthCareUnitId,
                     HealthCareUnitName = e.HealthCareUnit.HealthCareUnitName,
                     HealthCareUnitNameAr = e.HealthCareUnit.HealthCareUnitNameAr,
                     Remarks = e.Remarks,
                     ModelNumber = e.MasterEquipment.ModelNumber,
                     VersionNumber = e.MasterEquipment.VersionNumber,
                     SerialNumber = e.SerialNumber,
                     InternalCode = e.InternalCode,
                     Barcode = e.Barcode,
                     PurchaseDate = e.PurchaseDate,
                     Price = e.Price,
                     WarrantyExpires = e.WarrantyExpires,
                     Length = e.Length,
                     Height = e.Height,
                     Weight = e.Weight,
                     Color = e.Color,
                     ColorAr = e.ColorAr,
                     Floor = e.Floor,
                     Room = e.Room,
                     DepartmentId = e.DepartmentId,
                     MasterEquipmentId = e.MasterEquipmentId,
                     DepartmentName = e.Department.DepartmentName,
                     DepartmentNameAr = e.Department.DepartmentNameAr,
                     EquipmentStatuSId = e.EquipmentStatuSId,
                     ManufacturerId = e.MasterEquipment.ManufacturerId,
                     SupplierId = e.SupplierId,
                     SupplierName = e.Supplier.SupplierName,
                     SupplierNameAr = e.Supplier.SupplierNameAr,
                     ManufacturerName = e.MasterEquipment.Manufacturer.ManufacturerName,
                     ManufacturerNameAr = e.MasterEquipment.Manufacturer.ManufacturerNameAr,
                     HealthDirectoryId = e.HealthDirectoryId,
                     HealthDirectoryName = e.HealthDirectories.HealthDirectoryName,
                     HealthDirectoryNameAr = e.HealthDirectories.HealthDirectoryNameAr,
                     HealthDistrictId = e.HealthDistrictId,
                     HealthDistrictName = e.HealthDistricts.HealthDistrictName,
                     HealthDistrictNameAr = e.HealthDistricts.HealthDistrictNameAr,
                     CustomizedField = e.CustomizedField,
                     ContractRequestId = e.ContractRequest.Id,
                     OrganizationRequestId = e.OrganizationContract.Id,
                     EmployeeIDs = _context.equipmentEmployees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                     //AttachmentIDs = _context.equipmentAttachments.Where(a => a.EquipmentId == e.Id).Select(a => a.Id).ToList(),
                     QrImgPath = e.QrImgPath,
                     OrganizationName = _context.organizations.Where(org => org.Id == e.HealthCareUnit.organizationId).Select(org => org.Name).FirstOrDefault(),
                     OrganizationNameAr = _context.organizations.Where(org => org.Id == e.HealthCareUnit.organizationId).Select(org => org.NameAr).FirstOrDefault(),
                     OrganizationId = e.HealthCareUnit.organizationId,
                     ContractId = e.ContractId
                 })
                
                .ToList();
            foreach (var inventory in inventories)
            {
                foreach (var eq in equips)
                {
                    if (inventory.EquipmentId == eq.Id)
                    {
                        eq.CreatedAt = inventory.CreatedAt;
                    }
                }
            }
            return equips;
        }
        public IEnumerable<EquipmentDTO> GetAllRecalledEquipments()
        {
            List<EquipmentDTO> recalledEqs = new List<EquipmentDTO>();

            var equips = _context.Equipments
                .Include(e => e.Department)
                .Include(e => e.HealthDirectories)
                .Include(e => e.HealthDistricts)
                //.Include(e => e.Manufacturer)
                .Include(e => e.Supplier)
                .Include(e => e.MasterEquipment)
                .Include(e => e.equipmentEmployees)
                .Include(e => e.HealthCareUnit)
                .Include(e => e.equipmentAttachments)
                .Include(e => e.EquipmentRecall)
                //.Where(e => e.EquipmentRecallId == e.EquipmentRecall.Id)
                .Select(e => new EquipmentDTO
                {
                    Id = e.Id,
                    EquipmentCode = e.EquipmentCode,
                    UpaCode = e.MasterEquipment.UpaCode,
                    EquipmentName = e.EquipmentName,
                    EquipmentNameAr = e.EquipmentNameAr,
                    EquipmentType = e.EquipmentType,
                    InstallationDate = e.InstallationDate,
                    HealthCareUnitId = e.HealthCareUnitId,
                    HealthCareUnitName = e.HealthCareUnit.HealthCareUnitName,
                    HealthCareUnitNameAr = e.HealthCareUnit.HealthCareUnitNameAr,
                    //EquipmentDescription = e.EquipmentDescription,
                    //EquipmentDescriptionAr = e.EquipmentDescriptionAr,
                    Remarks = e.Remarks,
                    ModelNumber = e.MasterEquipment.ModelNumber,
                    VersionNumber = e.MasterEquipment.VersionNumber,
                    SerialNumber = e.SerialNumber,
                    InternalCode = e.InternalCode,
                    Barcode = e.Barcode,
                    PurchaseDate = e.PurchaseDate,
                    Price = e.Price,
                    WarrantyExpires = e.WarrantyExpires,
                    //ExpectedLifeTime=e.ExpectedLifeTime,
                    Length = e.Length,
                    Height = e.Height,
                    Weight = e.Weight,
                    Color = e.Color,
                    ColorAr = e.ColorAr,
                    Floor = e.Floor,
                    Room = e.Room,
                    //PriorityId = e.PriorityId,
                    //EquipmentCategoryId = e.EquipmentCategoryId,
                    //EquipmentSubCategoryId = e.EquipmentSubCategoryId,
                    DepartmentId = e.DepartmentId,
                    MasterEquipmentId = e.MasterEquipmentId,
                    DepartmentName = e.Department.DepartmentName,
                    DepartmentNameAr = e.Department.DepartmentNameAr,
                    EquipmentStatuSId = e.EquipmentStatuSId,
                    ManufacturerId = e.MasterEquipment.ManufacturerId,
                    //ManufacturerName = e.Manufacturer.ManufacturerName,
                    //ManufacturerNameAr = e.Manufacturer.ManufacturerNameAr,
                    //OriginId = e.OriginId,
                    SupplierId = e.SupplierId,
                    SupplierName = e.Supplier.SupplierName,
                    SupplierNameAr = e.Supplier.SupplierNameAr,
                    ManufacturerName = e.MasterEquipment.Manufacturer.ManufacturerName,
                    ManufacturerNameAr = e.MasterEquipment.Manufacturer.ManufacturerNameAr,
                    //EmployeeId = e.EmployeeId,
                    HealthDirectoryId = e.HealthDirectoryId,
                    HealthDirectoryName = e.HealthDirectories.HealthDirectoryName,
                    HealthDirectoryNameAr = e.HealthDirectories.HealthDirectoryNameAr,
                    HealthDistrictId = e.HealthDistrictId,
                    HealthDistrictName = e.HealthDistricts.HealthDistrictName,
                    HealthDistrictNameAr = e.HealthDistricts.HealthDistrictNameAr,
                    CustomizedField = e.CustomizedField,
                    //AttachmentId=e.AttachmentId,
                    EmployeeIDs = _context.equipmentEmployees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                    //AttachmentIDs = _context.equipmentAttachments.Where(a => a.EquipmentId == e.Id).Select(a => a.Id).ToList(),
                    QrImgPath = e.QrImgPath,
                    OrganizationName = _context.organizations.Where(org => org.Id == e.HealthCareUnit.organizationId).Select(org => org.Name).FirstOrDefault(),
                    OrganizationNameAr = _context.organizations.Where(org => org.Id == e.HealthCareUnit.organizationId).Select(org => org.NameAr).FirstOrDefault(),
                    OrganizationId = e.HealthCareUnit.organizationId,
                    EquipmentRecallId = e.EquipmentRecall.Id,
                    RecallDate = _context.EquipmentRecalls.Where(eqrcall => eqrcall.Id == e.EquipmentRecallId).Select(eqrcall => eqrcall.RecallDate).FirstOrDefault(),
                    RecallNumber = _context.EquipmentRecalls.Where(eqrcall => eqrcall.Id == e.EquipmentRecallId).Select(eqrcall => eqrcall.RecallNumber).FirstOrDefault()
                }).ToList();
            foreach (var recalledeq in equips)
            {
                if (recalledeq.EquipmentRecallId != null)
                {
                    recalledEqs.Add(recalledeq);
                }
            }
            return recalledEqs;
        }


        //public IEnumerable<EquipmentDTO> GetAllforInventory()
        //{
        //    var inventories = _context.inventories.ToList();
        //    List<EquipmentDTO> equipments = new List<EquipmentDTO>();

        //    var equips = _context.Equipments
        //    .Include(e => e.Department)
        //    .Include(e => e.HealthDirectories)
        //    .Include(e => e.HealthDistricts)
        //    //.Include(e => e.Manufacturer)
        //    .Include(e => e.Supplier)
        //    .Include(e => e.MasterEquipment)
        //    .Include(e => e.equipmentEmployees)
        //    .Include(e => e.HealthCareUnit)
        //    .Include(e => e.equipmentAttachments)
        //    .Select(e => new EquipmentDTO

        //    {
        //        Id = e.Id,
        //        EquipmentCode = e.EquipmentCode,
        //        UpaCode = e.MasterEquipment.UpaCode,
        //        EquipmentName = e.EquipmentName,
        //        EquipmentNameAr = e.EquipmentNameAr,
        //        EquipmentType = e.EquipmentType,
        //        InstallationDate = e.InstallationDate,
        //        HealthCareUnitId = e.HealthCareUnitId,
        //        HealthCareUnitName = e.HealthCareUnit.HealthCareUnitName,
        //        HealthCareUnitNameAr = e.HealthCareUnit.HealthCareUnitNameAr,
        //        //EquipmentDescription = e.EquipmentDescription,
        //        //EquipmentDescriptionAr = e.EquipmentDescriptionAr,
        //        Remarks = e.Remarks,
        //        //ModelNumber=e.ModelNumber,
        //        //VersionNumber=e.VersionNumber,
        //        SerialNumber = e.SerialNumber,
        //        InternalCode = e.InternalCode,
        //        Barcode = e.Barcode,
        //        PurchaseDate = e.PurchaseDate,
        //        Price = e.Price,
        //        WarrantyExpires = e.WarrantyExpires,
        //        //ExpectedLifeTime=e.ExpectedLifeTime,
        //        Length = e.Length,
        //        Height = e.Height,
        //        Weight = e.Weight,
        //        Color = e.Color,
        //        ColorAr = e.ColorAr,
        //        Floor = e.Floor,
        //        Room = e.Room,
        //        //PriorityId = e.PriorityId,
        //        //EquipmentCategoryId = e.EquipmentCategoryId,
        //        //EquipmentSubCategoryId = e.EquipmentSubCategoryId,
        //        DepartmentId = e.DepartmentId,
        //        MasterEquipmentId = e.MasterEquipmentId,
        //        DepartmentName = e.Department.DepartmentName,
        //        DepartmentNameAr = e.Department.DepartmentNameAr,
        //        EquipmentStatuSId = e.EquipmentStatuSId,
        //        ManufacturerId = e.MasterEquipment.ManufacturerId,
        //        //ManufacturerName = e.Manufacturer.ManufacturerName,
        //        //ManufacturerNameAr = e.Manufacturer.ManufacturerNameAr,
        //        //OriginId = e.OriginId,
        //        SupplierId = e.SupplierId,
        //        SupplierName = e.Supplier.SupplierName,
        //        SupplierNameAr = e.Supplier.SupplierNameAr,
        //        ManufacturerName = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerName,
        //        ManufacturerNameAr = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerNameAr,                                    //EmployeeId = e.EmployeeId,
        //        HealthDirectoryId = e.HealthDirectoryId,
        //        HealthDirectoryName = e.HealthDirectories.HealthDirectoryName,
        //        HealthDirectoryNameAr = e.HealthDirectories.HealthDirectoryNameAr,
        //        HealthDistrictId = e.HealthDistrictId,
        //        HealthDistrictName = e.HealthDistricts.HealthDistrictName,
        //        HealthDistrictNameAr = e.HealthDistricts.HealthDistrictNameAr,
        //        CustomizedField = e.CustomizedField,
        //        //AttachmentId=e.AttachmentId,
        //        EmployeeIDs = _context.equipmentEmployees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
        //        AttachmentIDs = _context.equipmentAttachments.Where(a => a.EquipmentId == e.Id).Select(a => a.Id).ToList(),
        //        QrImgPath = e.QrImgPath,
        //        OrganizationName = _context.organizations.Where(org => org.Id == e.HealthCareUnit.organizationId).Select(org => org.Name).FirstOrDefault(),
        //        OrganizationNameAr = _context.organizations.Where(org => org.Id == e.HealthCareUnit.organizationId).Select(org => org.NameAr).FirstOrDefault(),

        //    }).ToList();
        //    foreach (var equipment in equips)
        //    {
        //        if (equipment.CreatedAt == null)
        //        {
        //            equipments.Add(equipment);
        //        }
        //    }
        //    int i = 0;
        //    //foreach (var inventory in inventories)
        //    for (; i < inventories.Count;)
        //    {
        //        foreach (var eq in equips)
        //        {
        //            if (eq.Id == inventories[i].EquipmentId)
        //            {
        //                Inventory inv = _inventoryRepository.GetInventory(inventories[i].Id);
        //                //if(i>0 && inventories[i].Id!=inventories[i-1].Id)
        //                //{
        //                    for(int j=0;j<equipments.Count;j++)
        //                    {
        //                        if(equipments[j].Id==eq.Id)
        //                        {
        //                            eq.CreatedAt = inv.CreatedAt;
        //                            equipments.Add(equipments[j]);
        //                        }
        //                    }
        //                    eq.CreatedAt = inv.CreatedAt;
        //                    bool checkDay = (eq.CreatedAt.Value.Month == inventories[i].CreatedAt.Value.Month && eq.CreatedAt.Value.Day == inventories[i].CreatedAt.Value.Day);
        //                    //if (eq.CreatedAt.Value.Month == inventory.CreatedAt.Value.Month && eq.CreatedAt.Value.Day == inventory.CreatedAt.Value.Day)
        //                    if (!checkDay)
        //                    {
        //                        equipments.Add(eq);
        //                    }
        //               // }


        //            }
        //        }
        //            i++;
        //    }
        //    //var inve = _context.inventories.ToList();
        //    //int i = 0;
        //    //foreach (var eq in equips)
        //    //{
        //    //    for (; i < inve.Count;)
        //    //    {
        //    //        if(eq.Id==inve[i].EquipmentId )
        //    //        {
        //    //        eq.CreatedAt = inve[i].CreatedAt;
        //    //        eq.time = (eq.CreatedAt.Value.Hour + eq.CreatedAt.Value.Minute + eq.CreatedAt.Value.Second).ToString();
        //    //        break;

        //    //        }
        //    //    }
        //    //    i++;
        //    //}
        //    ////////////////////////////////////////////////
        //    //for (int i=0; i < inventories.Count;i++)
        //    //        {
        //    //          for (int j=0;j<equips.Count;j++)
        //    //          {
        //    //            if (inventories[i].EquipmentId == equips[j].Id
        //    //            && inventories[i].CreatedAt.Value.Day!=equips[j].CreatedAt.Value.Day)
        //    //            {

        //    //            equips.Add(equips[j]);
        //    //            }
        //    //           // eq.time = (eq.CreatedAt.Value.Hour + eq.CreatedAt.Value.Minute + eq.CreatedAt.Value.Second).ToString();
        //    //        }



        //    //    }



        //    return equipments;
        //}
        public List<EquipmentDTO> GetAllforInventory()
        {
            List<scanningequipmentVM> scanVM = new List<scanningequipmentVM>();
            List<EquipmentDTO> eqqs = new List<EquipmentDTO>();
            var inventories = _context.inventories.ToList()
                .GroupBy(e => e.EquipmentId).ToList();
            if (inventories.Count > 0)

            {
                foreach (var item in inventories)
                {
                    scanningequipmentVM equipmentsids = new scanningequipmentVM();
                    equipmentsids.EquipmentId = item.FirstOrDefault().EquipmentId;
                    equipmentsids.Id = item.FirstOrDefault().Id;
                    equipmentsids.ListEquipment = (from inventory in _context.inventories
                                                   join eq in _context.Equipments
                                                   on inventory.EquipmentId equals eq.Id
                                                   where inventory.EquipmentId == item.First().EquipmentId
                                                   select eq).Include(e => e.Department)
                                    .Include(e => e.HealthDirectories)
                                    .Include(e => e.HealthDistricts)
                                    .Include(e => e.Supplier)
                                    .Include(e => e.MasterEquipment)
                                    .Include(e => e.equipmentEmployees)
                                    .Include(e => e.HealthCareUnit)
                                    .Include(e => e.equipmentAttachments)
                                .ToList().Select(e => new EquipmentDTO
                                {
                                    Id = e.Id,
                                    EquipmentCode = e.EquipmentCode,
                                    UpaCode = e.MasterEquipment.UpaCode,
                                    EquipmentName = e.EquipmentName,
                                    EquipmentNameAr = e.EquipmentNameAr,
                                    EquipmentType = e.EquipmentType,
                                    InstallationDate = e.InstallationDate,
                                    HealthCareUnitId = e.HealthCareUnitId,
                                    HealthCareUnitName = e.HealthCareUnit.HealthCareUnitName,
                                    HealthCareUnitNameAr = e.HealthCareUnit.HealthCareUnitNameAr,
                                    Remarks = e.Remarks,
                                    SerialNumber = e.SerialNumber,
                                    InternalCode = e.InternalCode,
                                    Barcode = e.Barcode,
                                    PurchaseDate = e.PurchaseDate,
                                    Price = e.Price,
                                    WarrantyExpires = e.WarrantyExpires,
                                    Length = e.Length,
                                    Height = e.Height,
                                    Weight = e.Weight,
                                    Color = e.Color,
                                    ColorAr = e.ColorAr,
                                    Floor = e.Floor,
                                    Room = e.Room,
                                    DepartmentId = e.DepartmentId,
                                    MasterEquipmentId = e.MasterEquipmentId,
                                    DepartmentName = e.Department.DepartmentName,
                                    DepartmentNameAr = e.Department.DepartmentNameAr,
                                    EquipmentStatuSId = e.EquipmentStatuSId,
                                    SupplierId = e.SupplierId,
                                    SupplierName = e.Supplier.SupplierName,
                                    SupplierNameAr = e.Supplier.SupplierNameAr,
                                    ManufacturerName = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerName,
                                    ManufacturerNameAr = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerNameAr,                                    //EmployeeId = e.EmployeeId,
                                    HealthDirectoryId = e.HealthDirectoryId,
                                    HealthDirectoryName = e.HealthDirectories.HealthDirectoryName,
                                    HealthDirectoryNameAr = e.HealthDirectories.HealthDirectoryNameAr,
                                    HealthDistrictId = e.HealthDistrictId,
                                    HealthDistrictName = e.HealthDistricts.HealthDistrictName,
                                    HealthDistrictNameAr = e.HealthDistricts.HealthDistrictNameAr,
                                    CustomizedField = e.CustomizedField,
                                    EmployeeIDs = _context.equipmentEmployees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                                    //AttachmentIDs = _context.equipmentAttachments.Where(a => a.EquipmentId == e.Id).Select(a => a.Id).ToList(),
                                    QrImgPath = e.QrImgPath,
                                    OrganizationName = _context.organizations.Where(org => org.Id == e.HealthCareUnit.organizationId).Select(org => org.Name).FirstOrDefault(),
                                    OrganizationNameAr = _context.organizations.Where(org => org.Id == e.HealthCareUnit.organizationId).Select(org => org.NameAr).FirstOrDefault()

                                }).ToList();
                    scanVM.Add(equipmentsids);
                
                    var inve = _context.inventories.Where(i => i.EquipmentId == equipmentsids.EquipmentId).ToList();
                    int i = 0;
                    foreach (var eq in equipmentsids.ListEquipment)
                    {
                        for (; i < inve.Count; i++)
                        {
                            eq.CreatedAt = inve[i].CreatedAt;
                            eqqs.Add(eq);
                            break;
                        }
                        i++;
                    }
                    for (int j = 0; j < eqqs.Count; j++)
                    {
                        if (eqqs[j].CreatedAt != null)
                        {
                            for (int k = 0; k < eqqs.Count; k++)
                            {
                                //var eqNo = eqqs.Where(e => e.Id == eqqs[k].Id && eqqs[k].Id== eqqs[j].Id).ToList();
                                if (eqqs[k].CreatedAt != null)
                                {
                                    if (eqqs[k].CreatedAt.Value.Day == eqqs[j].CreatedAt.Value.Day)
                                    {
                                        if (eqqs[k].CreatedAt.Value.Hour == eqqs[j].CreatedAt.Value.Hour
                                        && eqqs[k].CreatedAt.Value.Minute != eqqs[j].CreatedAt.Value.Minute
                                         && eqqs[k].CreatedAt.Value.Second != eqqs[j].CreatedAt.Value.Second
                                        && eqqs[k].Id == eqqs[j].Id)
                                        {
                                            eqqs.Remove(eqqs[k]);
                                            break;
                                        }
                                        else if (eqqs[k].CreatedAt.Value.Hour != eqqs[j].CreatedAt.Value.Hour
                                          && eqqs[k].CreatedAt.Value.Minute != eqqs[j].CreatedAt.Value.Minute
                                           && eqqs[k].CreatedAt.Value.Second != eqqs[j].CreatedAt.Value.Second
                                          && eqqs[k].Id == eqqs[j].Id)
                                        {
                                            eqqs.Remove(eqqs[k]);
                                            break;
                                        }
                                        else if (eqqs[k].CreatedAt.Value.Hour == eqqs[j].CreatedAt.Value.Hour
                                       && eqqs[k].CreatedAt.Value.Minute == eqqs[j].CreatedAt.Value.Minute
                                        && eqqs[k].CreatedAt.Value.Second != eqqs[j].CreatedAt.Value.Second
                                       && eqqs[k].Id == eqqs[j].Id)
                                        {
                                            eqqs.Remove(eqqs[k]);
                                            break;
                                        }
                                    }
                                }
                                //else
                                //{
                                //    eqqs.Remove(eqqs[k]);
                                //}

                            }
                        }

                    }


                   
                    //     isFound = false;       
                       
                    //}
                }
                var equips = _context.Equipments
                     .Include(e => e.Department)
                     .Include(e => e.HealthDirectories)
                     .Include(e => e.HealthDistricts)
                     .Include(e => e.Supplier)
                     .Include(e => e.MasterEquipment)
                     .Include(e => e.equipmentEmployees)
                     .Include(e => e.HealthCareUnit)
                     .Include(e => e.equipmentAttachments)
                     .Select(e => new EquipmentDTO

                     {
                         Id = e.Id,
                         EquipmentCode = e.EquipmentCode,
                         UpaCode = e.MasterEquipment.UpaCode,
                         EquipmentName = e.EquipmentName,
                         EquipmentNameAr = e.EquipmentNameAr,
                         EquipmentType = e.EquipmentType,
                         InstallationDate = e.InstallationDate,
                         HealthCareUnitId = e.HealthCareUnitId,
                         HealthCareUnitName = e.HealthCareUnit.HealthCareUnitName,
                         HealthCareUnitNameAr = e.HealthCareUnit.HealthCareUnitNameAr,
                         Remarks = e.Remarks,
                         SerialNumber = e.SerialNumber,
                         InternalCode = e.InternalCode,
                         Barcode = e.Barcode,
                         PurchaseDate = e.PurchaseDate,
                         Price = e.Price,
                         WarrantyExpires = e.WarrantyExpires,
                         Length = e.Length,
                         Height = e.Height,
                         Weight = e.Weight,
                         Color = e.Color,
                         ColorAr = e.ColorAr,
                         Floor = e.Floor,
                         Room = e.Room,
                         DepartmentId = e.DepartmentId,
                         MasterEquipmentId = e.MasterEquipmentId,
                         DepartmentName = e.Department.DepartmentName,
                         DepartmentNameAr = e.Department.DepartmentNameAr,
                         EquipmentStatuSId = e.EquipmentStatuSId,
                         ManufacturerId = e.MasterEquipment.ManufacturerId,
                         SupplierId = e.SupplierId,
                         SupplierName = e.Supplier.SupplierName,
                         SupplierNameAr = e.Supplier.SupplierNameAr,
                         ManufacturerName = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerName,
                         ManufacturerNameAr = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerNameAr,                                    //EmployeeId = e.EmployeeId,
                          HealthDirectoryId = e.HealthDirectoryId,
                         HealthDirectoryName = e.HealthDirectories.HealthDirectoryName,
                         HealthDirectoryNameAr = e.HealthDirectories.HealthDirectoryNameAr,
                         HealthDistrictId = e.HealthDistrictId,
                         HealthDistrictName = e.HealthDistricts.HealthDistrictName,
                         HealthDistrictNameAr = e.HealthDistricts.HealthDistrictNameAr,
                         CustomizedField = e.CustomizedField,
                         EmployeeIDs = _context.equipmentEmployees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                         //AttachmentIDs = _context.equipmentAttachments.Where(a => a.EquipmentId == e.Id).Select(a => a.Id).ToList(),
                         QrImgPath = e.QrImgPath,
                         OrganizationName = _context.organizations.Where(org => org.Id == e.HealthCareUnit.organizationId).Select(org => org.Name).FirstOrDefault(),
                         OrganizationNameAr = _context.organizations.Where(org => org.Id == e.HealthCareUnit.organizationId).Select(org => org.NameAr).FirstOrDefault(),
                     }).ToList();
                bool isFound = false;
                for (int uns = 0; uns < equips.Count; uns++)
                {
                    for (int k = 0; k < eqqs.Count; k++)
                    {
                        if (equips[uns].CreatedAt == null)
                        {
                            if (eqqs[k].Id == equips[uns].Id)
                            {
                                isFound = true;
                                break;
                            }
                        }
                    }
                    if (isFound == false)
                    {
                        eqqs.Add(equips[uns]);
                    }
                    isFound = false;
                }
            }
            else
            {

                var equips = _context.Equipments
               .Include(e => e.Department)
               .Include(e => e.HealthDirectories)
               .Include(e => e.HealthDistricts)
               //.Include(e => e.Manufacturer)
               .Include(e => e.Supplier)
               .Include(e => e.MasterEquipment)
               .Include(e => e.equipmentEmployees)
               .Include(e => e.HealthCareUnit)
                   .Include(e => e.equipmentAttachments)
                   .Select(e => new EquipmentDTO
                   {
                       Id = e.Id,
                       EquipmentCode = e.EquipmentCode,
                       UpaCode = e.MasterEquipment.UpaCode,
                       EquipmentName = e.EquipmentName,
                       EquipmentNameAr = e.EquipmentNameAr,
                       EquipmentType = e.EquipmentType,
                       InstallationDate = e.InstallationDate,
                       HealthCareUnitId = e.HealthCareUnitId,
                       HealthCareUnitName = e.HealthCareUnit.HealthCareUnitName,
                       HealthCareUnitNameAr = e.HealthCareUnit.HealthCareUnitNameAr,
                       //EquipmentDescription = e.EquipmentDescription,
                       //EquipmentDescriptionAr = e.EquipmentDescriptionAr,
                       Remarks = e.Remarks,
                       //ModelNumber=e.ModelNumber,
                       //VersionNumber=e.VersionNumber,
                       SerialNumber = e.SerialNumber,
                       InternalCode = e.InternalCode,
                       Barcode = e.Barcode,
                       PurchaseDate = e.PurchaseDate,
                       Price = e.Price,
                       WarrantyExpires = e.WarrantyExpires,
                       //ExpectedLifeTime=e.ExpectedLifeTime,
                       Length = e.Length,
                       Height = e.Height,
                       Weight = e.Weight,
                       Color = e.Color,
                       ColorAr = e.ColorAr,
                       Floor = e.Floor,
                       Room = e.Room,
                       //PriorityId = e.PriorityId,
                       //EquipmentCategoryId = e.EquipmentCategoryId,
                       //EquipmentSubCategoryId = e.EquipmentSubCategoryId,
                       DepartmentId = e.DepartmentId,
                       MasterEquipmentId = e.MasterEquipmentId,
                       DepartmentName = e.Department.DepartmentName,
                       DepartmentNameAr = e.Department.DepartmentNameAr,
                       EquipmentStatuSId = e.EquipmentStatuSId,
                       ManufacturerId = e.MasterEquipment.ManufacturerId,
                       //ManufacturerName = e.Manufacturer.ManufacturerName,
                       //ManufacturerNameAr = e.Manufacturer.ManufacturerNameAr,
                       //OriginId = e.OriginId,
                       SupplierId = e.SupplierId,
                       SupplierName = e.Supplier.SupplierName,
                       SupplierNameAr = e.Supplier.SupplierNameAr,
                       ManufacturerName = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerName,
                       ManufacturerNameAr = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerNameAr,                                    //EmployeeId = e.EmployeeId,
                       HealthDirectoryId = e.HealthDirectoryId,
                       HealthDirectoryName = e.HealthDirectories.HealthDirectoryName,
                       HealthDirectoryNameAr = e.HealthDirectories.HealthDirectoryNameAr,
                       HealthDistrictId = e.HealthDistrictId,
                       HealthDistrictName = e.HealthDistricts.HealthDistrictName,
                       HealthDistrictNameAr = e.HealthDistricts.HealthDistrictNameAr,
                       CustomizedField = e.CustomizedField,
                       //AttachmentId=e.AttachmentId,
                       EmployeeIDs = _context.equipmentEmployees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                     //  AttachmentIDs = _context.equipmentAttachments.Where(a => a.EquipmentId == e.Id).Select(a => a.Id).ToList(),
                       QrImgPath = e.QrImgPath,
                       OrganizationName = _context.organizations.Where(org => org.Id == e.HealthCareUnit.organizationId).Select(org => org.Name).FirstOrDefault(),
                       OrganizationNameAr = _context.organizations.Where(org => org.Id == e.HealthCareUnit.organizationId).Select(org => org.NameAr).FirstOrDefault(),

                   }).ToList();
                foreach (var unscanned in equips)
                {
                    eqqs.Add(unscanned);
                }
            }

            return eqqs;
        }
        public List<scanningDateVM> GetAllwithgrouping()
        {
            //var inventories2 = _context.inventories.ToList();
            //foreach(var inv in inventories2)
            //{
            //    var date = DbFunctions.( inv.CreatedAt);

            //    created = DbFunctions.TruncateTime(c.createdDate)
            //    date = DateTime.Now.ToShortDateString();  
            //}

            List<scanningDateVM> snanns = new List<scanningDateVM>();

            var inventories = _context.inventories.ToList().GroupBy(
                e => new
                {
                    day = e.CreatedAt.Value.Day,
                    month = e.CreatedAt.Value.Month,
                    year = e.CreatedAt.Value.Year
                }
            ).Distinct().ToList();
            foreach (var item in inventories)
            {

                scanningDateVM dates = new scanningDateVM();
                dates.CreatedAt = item.FirstOrDefault().CreatedAt;
                dates.Id = item.FirstOrDefault().Id;
                dates.ListEquipment = (from inventory in _context.inventories
                                       join eq in _context.Equipments
                                       on inventory.EquipmentId equals eq.Id
                                       where inventory.CreatedAt.Value.Day == item.First().CreatedAt.Value.Day
                                       && inventory.CreatedAt.Value.Month == item.First().CreatedAt.Value.Month
                                       && inventory.CreatedAt.Value.Year == item.First().CreatedAt.Value.Year
                                       select eq).Include(e => e.Department)
                                .Include(e => e.HealthDirectories)
                                .Include(e => e.HealthDistricts)
                                .Include(e => e.Supplier)
                                .Include(e => e.MasterEquipment)
                                .Include(e => e.equipmentEmployees)
                                .Include(e => e.HealthCareUnit)
                                .Include(e => e.equipmentAttachments)
                            .ToList().Select(e => new EquipmentDTO
                            {
                                Id = e.Id,
                                EquipmentCode = e.EquipmentCode,
                                UpaCode = e.MasterEquipment.UpaCode,
                                EquipmentName = e.EquipmentName,
                                EquipmentNameAr = e.EquipmentNameAr,
                                EquipmentType = e.EquipmentType,
                                InstallationDate = e.InstallationDate,
                                HealthCareUnitId = e.HealthCareUnitId,
                                HealthCareUnitName = e.HealthCareUnit.HealthCareUnitName,
                                HealthCareUnitNameAr = e.HealthCareUnit.HealthCareUnitNameAr,
                                Remarks = e.Remarks,
                                SerialNumber = e.SerialNumber,
                                InternalCode = e.InternalCode,
                                Barcode = e.Barcode,
                                PurchaseDate = e.PurchaseDate,
                                Price = e.Price,
                                WarrantyExpires = e.WarrantyExpires,
                                Length = e.Length,
                                Height = e.Height,
                                Weight = e.Weight,
                                Color = e.Color,
                                ColorAr = e.ColorAr,
                                Floor = e.Floor,
                                Room = e.Room,
                                DepartmentId = e.DepartmentId,
                                MasterEquipmentId = e.MasterEquipmentId,
                                DepartmentName = e.Department.DepartmentName,
                                DepartmentNameAr = e.Department.DepartmentNameAr,
                                EquipmentStatuSId = e.EquipmentStatuSId,
                                SupplierId = e.SupplierId,
                                SupplierName = e.Supplier.SupplierName,
                                SupplierNameAr = e.Supplier.SupplierNameAr,
                                ManufacturerName = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerName,
                                ManufacturerNameAr = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerNameAr,                                    //EmployeeId = e.EmployeeId,
                                HealthDirectoryId = e.HealthDirectoryId,
                                HealthDirectoryName = e.HealthDirectories.HealthDirectoryName,
                                HealthDirectoryNameAr = e.HealthDirectories.HealthDirectoryNameAr,
                                HealthDistrictId = e.HealthDistrictId,
                                HealthDistrictName = e.HealthDistricts.HealthDistrictName,
                                HealthDistrictNameAr = e.HealthDistricts.HealthDistrictNameAr,
                                CustomizedField = e.CustomizedField,
                                EmployeeIDs = _context.equipmentEmployees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                                //AttachmentIDs = _context.equipmentAttachments.Where(a => a.EquipmentId == e.Id).Select(a => a.Id).ToList(),
                                QrImgPath = e.QrImgPath,
                                OrganizationName = _context.organizations.Where(org => org.Id == e.HealthCareUnit.organizationId).Select(org => org.Name).FirstOrDefault(),
                                OrganizationNameAr = _context.organizations.Where(org => org.Id == e.HealthCareUnit.organizationId).Select(org => org.NameAr).FirstOrDefault()
                                //  CreatedAt=
                                //    CreatedAt = _context.inventories.Where(i => i.EquipmentId == e.Id && i.Id==dates.Id).Select(i => i.CreatedAt).FirstOrDefault()

                            }).ToList();
                var inve = _context.inventories.Where(i => i.CreatedAt.Value.Day == dates.CreatedAt.Value.Day).ToList();
                int i = 0;
                foreach (var eq in dates.ListEquipment)
                {
                    for (; i < inve.Count; i++)
                    {
                        eq.CreatedAt = inve[i].CreatedAt;
                        eq.time = (eq.CreatedAt.Value.Hour + eq.CreatedAt.Value.Minute + eq.CreatedAt.Value.Second).ToString();
                        break;
                    }
                    i++;
                }
                //    foreach(var inv in invent
                //    ories)
                //    {
                //foreach (var eq in dates.ListEquipment)
                //{
                //        if(eq.Id==inv.FirstOrDefault().EquipmentId &&dates.Id==inv.FirstOrDefault().Id )
                //        {
                //            eq.CreatedAt = inv.FirstOrDefault().CreatedAt;
                //        }
                //   // eq.CreatedAt = _context.inventories.Where(i => i.EquipmentId == eq.Id && i.Id == dates.Id).Select(i => i.CreatedAt).FirstOrDefault();
                //    }
                //if (item.FirstOrDefault().EquipmentId == eq.Id && item.FirstOrDefault().Id ==dates.Id && item.FirstOrDefault().CreatedAt !=dates.CreatedAt)
                //{
                //    dates.ListEquipment.Add(eq);  
                // item.FirstOrDefault().CreatedAt;
                //}
                snanns.Add(dates);
            }



            //foreach(var invent in inventories)
            //{
            //    scanningDateVM dates = new scanningDateVM();
            //    dates.CreatedAt = invent.FirstOrDefault().CreatedAt;
            //    dates.Id = invent.FirstOrDefault().Id;

            //    dates.ListEquipment = (from inventory in _context.inventories
            //                         join eq in _context.Equipments
            //                         on inventory.EquipmentId equals eq.Id
            //                         where inventory.CreatedAt == dates.CreatedAt
            //                         select eq).Include(e => e.Department)
            //                        .Include(e => e.HealthDirectories)
            //                        .Include(e => e.HealthDistricts)
            //                        .Include(e => e.Supplier)
            //                        .Include(e => e.MasterEquipment)
            //                        .Include(e => e.equipmentEmployees)
            //                        .Include(e => e.HealthCareUnit)
            //                        .Include(e => e.equipmentAttachments)
            //                    .ToList().Select(e => new EquipmentDTO
            //                    {
            //                        Id = e.Id,
            //                        EquipmentCode = e.EquipmentCode,
            //                        UpaCode = e.MasterEquipment.UpaCode,
            //                        EquipmentName = e.EquipmentName,
            //                        EquipmentNameAr = e.EquipmentNameAr,
            //                        EquipmentType = e.EquipmentType,
            //                        InstallationDate = e.InstallationDate,
            //                        HealthCareUnitId = e.HealthCareUnitId,
            //                        HealthCareUnitName = e.HealthCareUnit.HealthCareUnitName,
            //                        HealthCareUnitNameAr = e.HealthCareUnit.HealthCareUnitNameAr,
            //                        //EquipmentDescription = e.EquipmentDescription,
            //                        //EquipmentDescriptionAr = e.EquipmentDescriptionAr,
            //                        Remarks = e.Remarks,
            //                        //ModelNumber=e.ModelNumber,
            //                        //VersionNumber=e.VersionNumber,
            //                        SerialNumber = e.SerialNumber,
            //                        InternalCode = e.InternalCode,
            //                        Barcode = e.Barcode,
            //                        PurchaseDate = e.PurchaseDate,
            //                        Price = e.Price,
            //                        WarrantyExpires = e.WarrantyExpires,
            //                        //ExpectedLifeTime=e.ExpectedLifeTime,
            //                        Length = e.Length,
            //                        Height = e.Height,
            //                        Weight = e.Weight,
            //                        Color = e.Color,
            //                        ColorAr = e.ColorAr,
            //                        Floor = e.Floor,
            //                        Room = e.Room,
            //                        //PriorityId = e.PriorityId,
            //                        //EquipmentCategoryId = e.EquipmentCategoryId,
            //                        //EquipmentSubCategoryId = e.EquipmentSubCategoryId,
            //                        DepartmentId = e.DepartmentId,
            //                        MasterEquipmentId = e.MasterEquipmentId,
            //                        DepartmentName = e.Department.DepartmentName,
            //                        DepartmentNameAr = e.Department.DepartmentNameAr,
            //                        EquipmentStatuSId = e.EquipmentStatuSId,
            //                        //ManufacturerId = e.ManufacturerId,
            //                        //ManufacturerName = e.Manufacturer.ManufacturerName,
            //                        //ManufacturerNameAr = e.Manufacturer.ManufacturerNameAr,
            //                        //OriginId = e.OriginId,
            //                        SupplierId = e.SupplierId,
            //                        SupplierName = e.Supplier.SupplierName,
            //                        SupplierNameAr = e.Supplier.SupplierNameAr,                     
            //                        ManufacturerName = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerName,
            //                        ManufacturerNameAr = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerNameAr,                                    //EmployeeId = e.EmployeeId,
            //                        HealthDirectoryId = e.HealthDirectoryId,
            //                        HealthDirectoryName = e.HealthDirectories.HealthDirectoryName,
            //                        HealthDirectoryNameAr = e.HealthDirectories.HealthDirectoryNameAr,
            //                        HealthDistrictId = e.HealthDistrictId,
            //                        HealthDistrictName = e.HealthDistricts.HealthDistrictName,
            //                        HealthDistrictNameAr = e.HealthDistricts.HealthDistrictNameAr,
            //                        CustomizedField = e.CustomizedField,
            //                        //AttachmentId=e.AttachmentId,
            //                        EmployeeIDs = _context.equipmentEmployees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
            //                        AttachmentIDs = _context.equipmentAttachments.Where(a => a.EquipmentId == e.Id).Select(a => a.Id).ToList(),
            //                        QrImgPath = e.QrImgPath,
            //                        OrganizationName = _context.organizations.Where(org => org.Id == e.HealthCareUnit.organizationId).Select(org => org.Name).FirstOrDefault(),
            //                        OrganizationNameAr = _context.organizations.Where(org => org.Id == e.HealthCareUnit.organizationId).Select(org => org.NameAr).FirstOrDefault(),

            //                    }).ToList();
            //    foreach(var eq in dates.ListEquipment)
            //    {

            //        {
            //            if (invent.FirstOrDefault().EquipmentId == eq.Id)
            //            {
            //                eq.CreatedAt = invent.FirstOrDefault().CreatedAt;
            //            }
            //        }
            //    }
            //    snanns.Add(dates);
            //}




            return snanns;
        }
        public EquipmentDTO GetById(int id)
        {
            var e = _context.Equipments
                .Include(e => e.Department)
                .Include(e => e.HealthDirectories)
                .Include(e => e.HealthDistricts)
                .Include(e => e.EquipmentStatus)
                .Include(e => e.Supplier)
                .Include(e => e.MasterEquipment)
                .Include(e => e.equipmentEmployees).FirstOrDefault(e => e.Id == id);
            if (e == null)
            {
                return null;
            }
            var eq = new EquipmentDTO
            {
                Id = e.Id,
                EquipmentCode = e.EquipmentCode,
                EquipmentName = e.EquipmentName,
                EquipmentType = e.EquipmentType,
                InstallationDate = e.InstallationDate,
                HealthCareUnitId = e.HealthCareUnitId,
                Remarks = e.Remarks,
                SerialNumber = e.SerialNumber,
                InternalCode = e.InternalCode,
                UpaCode = e.MasterEquipment.UpaCode,
                ModelNumber=e.MasterEquipment.ModelNumber,
                Barcode = e.Barcode,
                PurchaseDate = e.PurchaseDate,
                Price = e.Price,
                WarrantyExpires = e.WarrantyExpires,
                Length = e.Length,
                Height = e.Height,
                Weight = e.Weight,
                Color = e.Color,
                EquipmentStatuSId = e.EquipmentStatuSId,
                StatusName = e.EquipmentStatus.Status,
                StatusNameAr = e.EquipmentStatus.StatusAr,
                ManufacturerId = e.MasterEquipment.ManufacturerId,
                DepartmentId = e.DepartmentId,
                ManufacturerName=_context.Manufacturers.Where(m=>m.Id==e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerName,
                ManufacturerNameAr=_context.Manufacturers.Where(m=>m.Id==e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerNameAr,
                SupplierId = e.SupplierId,
                SupplierName = e.Supplier.SupplierName,
                SupplierNameAr = e.Supplier.SupplierNameAr,
                HealthDirectoryId = e.HealthDirectoryId,
                HealthDirectoryName = e.HealthDirectories.HealthDirectoryName,
                HealthDistrictId = e.HealthDistrictId,
                HealthDistrictName = e.HealthDistricts.HealthDistrictName,
                CustomizedField = e.CustomizedField,
                Floor = e.Floor,
                Room = e.Room,
                EmployeeIDs = _context.equipmentEmployees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                QrImgPath = e.QrImgPath
            };
            return eq;
        }



        //public EquipmentDTO GetEquipmentBySerial(string serialNumber)
        //{
        //    var e = _context.Equipments
        //         .Include(e => e.Department)
        //        .Include(e => e.HealthDirectories)
        //        .Include(e => e.HealthDistricts)
        //        .Include(e => e.EquipmentStatus)
        //        //.Include(e => e.Manufacturer)
        //        .Include(e => e.Supplier)
        //        .Include(e => e.MasterEquipment)
        //        .Include(e => e.equipmentEmployees).FirstOrDefault(e => e.SerialNumber == serialNumber);


        //    var eq = new EquipmentDTO
        //    {
        //        Id = e.Id,
        //        EquipmentCode = e.EquipmentCode,
        //        EquipmentName = e.EquipmentName,
        //        EquipmentType = e.EquipmentType,
        //        InstallationDate = e.InstallationDate,
        //        HealthCareUnitId = e.HealthCareUnitId,
        //        //EquipmentDescription = e.EquipmentDescription,
        //        Remarks = e.Remarks,

        //        //ModelNumber = e.ModelNumber,
        //        //VersionNumber = e.VersionNumber,
        //        SerialNumber = e.SerialNumber,
        //        InternalCode = e.InternalCode,
        //        Barcode = e.Barcode,
        //        PurchaseDate = e.PurchaseDate,
        //        Price = e.Price,
        //        WarrantyExpires = e.WarrantyExpires,
        //        //ExpectedLifeTime = e.ExpectedLifeTime,
        //        Length = e.Length,
        //        Height = e.Height,
        //        Weight = e.Weight,
        //        Color = e.Color,
        //        //PriorityId = e.PriorityId,
        //        //EquipmentCategoryId = e.EquipmentCategoryId,
        //        //EquipmentSubCategoryId = e.EquipmentSubCategoryId,
        //        EquipmentStatuSId = e.EquipmentStatuSId,
        //        StatusName = e.EquipmentStatus.Status,
        //        StatusNameAr = e.EquipmentStatus.StatusAr,
        //        //ManufacturerId = e.ManufacturerId,
        //        DepartmentId = e.DepartmentId,
        //        //OriginId = e.OriginId,
        //        SupplierId = e.SupplierId,
        //        SupplierName = e.Supplier.SupplierName,
        //        //EmployeeId = e.EmployeeId,
        //        HealthDirectoryId = e.HealthDirectoryId,
        //        HealthDirectoryName = e.HealthDirectories.HealthDirectoryName,
        //        HealthDistrictId = e.HealthDistrictId,
        //        HealthDistrictName = e.HealthDistricts.HealthDistrictName,
        //        CustomizedField = e.CustomizedField,
        //        Floor = e.Floor,
        //        Room = e.Room,
        //        //AttachmentId=e.AttachmentId,
        //        //EquipmentEmployeesIDs = e.equipmentEmployees.Where(a=>a.EquipmentId == id).ToList()
        //        //.Select(item=> new EquipmentEmployees { 
        //        //    EmployeeId= item.EmployeeId
        //        //}).ToList(),

        //        EmployeeIDs = _context.equipmentEmployees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList()
        //    };

        //    if (eq == null)
        //    {
        //        return null;
        //    }

        //    return eq;
        //}

        public void Save()
        {
            _context.SaveChanges();
        }

        //public IEnumerable<EquipmentDTO> GetAllEquimentsByEmp(string empEmail)
        //{
        //    var equips = _context.Equiments.Where(e => e.Employee.Email == empEmail)
        //     .Include(e => e.Department)
        //        .Include(e => e.HealthDirectories)
        //        .Include(e => e.HealthDistricts)
        //        .Include(e => e.Manufacturer)
        //        .Include(e => e.Supplier)
        //        .Include(e => e.Employee)
        //        .Select(e => new EquipmentDTO
        //        {
        //            Id = e.Id,
        //            EquipmentCode = e.EquipmentCode,
        //            EquipmentName = e.EquipmentName,
        //            EquipmentType = e.EquipmentType,
        //            InstallationDate = e.InstallationDate,
        //            HealthCareUnitId = e.HealthCareUnitId,
        //            EquipmentDescription = e.EquipmentDescription,
        //            Remarks = e.Remarks,
        //            ModelNumber = e.ModelNumber,
        //            VersionNumber = e.VersionNumber,
        //            SerialNumber = e.SerialNumber,
        //            InternalCode = e.InternalCode,
        //            Barcode = e.Barcode,
        //            PurchaseDate = e.PurchaseDate,
        //            Price = e.Price,
        //            WarrantyExpires = e.WarrantyExpires,
        //            ExpectedLifeTime = e.ExpectedLifeTime,
        //            Length = e.Length,
        //            Height = e.Height,
        //            Weight = e.Weight,
        //            Color = e.Color,
        //            PriorityId = e.PriorityId,
        //            EquipmentCategoryId = e.EquipmentCategoryId,
        //            EquipmentSubCategoryId = e.EquipmentSubCategoryId,
        //            DepartmentId = e.DepartmentId,
        //            DepartmentName = e.Department.DepartmentName,
        //            EquipmentStatuSId = e.EquipmentStatuSId,
        //            ManufacturerId = e.ManufacturerId,
        //            ManufacturerName = e.Manufacturer.ManufacturerName,
        //            OriginId = e.OriginId,
        //            SupplierId = e.SupplierId,
        //            SupplierName = e.Supplier.SupplierName,
        //            EmployeeId = e.EmployeeId,
        //            EmployeeName=e.Employee.EmployeeName,
        //            EmplopyeeEmail = e.Employee.Email,
        //            HealthDirectoryId = e.HealthDirectoryId,
        //            HealthDirectoryName = e.HealthDirectories.HealthDirectoryName,
        //            HealthDistrictId = e.HealthDistrictId,
        //            HealthDistrictName = e.HealthDistricts.HealthDistrictName,
        //            CustomizedField = e.CustomizedField
        //        }).ToList();
        //    return equips;
        //}


        public void Update(EquipmentDTO equipment)

        {
            var eq = new Equipment();
            int DistrictId = _healthCareUnitRepository.GetHealthDistrictByCareUnit(equipment.HealthCareUnitId);
            int DirectoryId = _healthCareUnitRepository.GetHealthDirectoryByDistrict(DistrictId);
            eq.Id = equipment.Id;
            eq.EquipmentCode = equipment.EquipmentCode;
            eq.EquipmentName = equipment.EquipmentName;
            eq.EquipmentNameAr = equipment.EquipmentNameAr;
            eq.EquipmentType = equipment.EquipmentType;
            eq.InstallationDate = equipment.InstallationDate;
            eq.HealthCareUnitId = equipment.HealthCareUnitId;
            //eq.EquipmentDescription = equipment.EquipmentDescription;
            eq.Remarks = equipment.Remarks;
            //eq.ModelNumber = equipment.ModelNumber;
            //eq.VersionNumber = equipment.VersionNumber;
            eq.SerialNumber = equipment.SerialNumber;
            eq.InternalCode = equipment.InternalCode;
            eq.Barcode = equipment.Barcode;
            eq.PurchaseDate = equipment.PurchaseDate;
            eq.Price = equipment.Price;
            eq.WarrantyExpires = equipment.WarrantyExpires;
            //eq.ExpectedLifeTime = equipment.ExpectedLifeTime;
            eq.Length = equipment.Length;
            eq.Height = equipment.Height;
            eq.Weight = equipment.Weight;
            eq.Color = equipment.Color;
            //  eq.PriorityId = equipment.PriorityId;
            // eq.EquipmentCategoryId = equipment.EquipmentCategoryId;
            // eq.EquipmentSubCategoryId = equipment.EquipmentSubCategoryId;
            eq.EquipmentStatuSId = equipment.EquipmentStatuSId;
            // eq.ManufacturerId = equipment.ManufacturerId;
            eq.DepartmentId = equipment.DepartmentId;
            //  eq.OriginId = equipment.OriginId;
            eq.SupplierId = equipment.SupplierId;
            eq.HealthDirectoryId = DirectoryId;
            eq.HealthDistrictId = DistrictId;
            eq.CustomizedField = equipment.CustomizedField;
            eq.MasterEquipmentId = equipment.MasterEquipmentId;
            eq.EquipmentRecallId = equipment.EquipmentRecallId;
            //eq.QrImgPath = equipment.QrImgPath;
            //   eq.AttachmentId = equipment.AttachmentId;
            eq.equipmentEmployees = _context.equipmentEmployees.Where(e => e.EquipmentId == equipment.Id).ToList();
            if (eq.equipmentEmployees.Count != 0)
            {
                foreach (var item in eq.equipmentEmployees)
                {
                    _context.equipmentEmployees.Remove(item);
                }
            }

            eq.equipmentEmployees = new List<EquipmentEmployees>();
            foreach (var empId in equipment.EmployeeIDs)
            {
                eq.equipmentEmployees.Add(new EquipmentEmployees
                {
                    UserId = empId,
                    EquipmentId = eq.Id
                });
            }
            _context.Equipments.Add(eq);
            eq.equipmentAttachments = new List<EquipmentAttachments>();
            //foreach (var AttachId in equipment.AttachmentIDs)
            //{
            //    var attachment = _context.equipmentAttachments.FirstOrDefault(e => e.Id == AttachId);
            //    eq.equipmentAttachments.Add(attachment);
            //}
            _context.Entry(eq).State = EntityState.Modified;
        }
        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public Task<ActionResult<IEnumerable<Equipment>>> ToList()
        {
            throw new NotImplementedException();
        }


        //public ActionResult<IEnumerable<Equipment>> GetAllEquimentsByEmp(string email)
        //{
        //    List<Equipment> equipments = new List<Equipment>();
        //if (email != null)
        //{
        //try
        //{                  
        // int employeeid = _context.Employees.FirstOrDefault(e => e.Email == email).Id;
        //var equipmentEmployee = _context.equipmentEmployees.Where(qe => qe.EmployeeId == employeeid).ToList();
        //if (equipmentEmployee.Count != 0)
        //{
        //    foreach (var equip in equipmentEmployee)
        //    {
        //        Equipment eq = new Equipment();
        //        var equipment = _context.Equiments.FirstOrDefault(q => q.Id == equip.EquipmentId);
        //        Random random = new Random();
        //        int num = random.Next(10000);
        //        var names = (equipment.EquipmentName).Split(" ");
        //        eq.EquipmentCode = (names[0] + ' ' + num.ToString());
        //        eq.Id = equipment.Id;
        //eq.EquipmentName = equipment.EquipmentName;
        //eq.EquipmentNameAr = equipment.EquipmentNameAr;
        //eq.EquipmentType = equipment.EquipmentType;
        //eq.InstallationDate = equipment.InstallationDate;
        //  eq.EquipmentDescriptionAr = equipment.EquipmentDescriptionAr;
        //eq.Remarks = equipment.Remarks;
        //eq.ModelNumber = equipment.ModelNumber;
        //eq.VersionNumber = equipment.VersionNumber;
        //eq.SerialNumber = equipment.SerialNumber;
        //eq.InternalCode = equipment.InternalCode;
        //eq.Barcode = equipment.Barcode;
        //eq.PurchaseDate = equipment.PurchaseDate;
        //eq.Price = equipment.Price;
        //eq.WarrantyExpires = equipment.WarrantyExpires;
        //eq.ExpectedLifeTime = equipment.ExpectedLifeTime;
        //eq.Length = equipment.Length;
        //eq.Height = equipment.Height;
        //eq.Weight = equipment.Weight;
        //eq.ColorAr = equipment.ColorAr;
        //eq.DepartmentId = equipment.DepartmentId;
        //  eq.PriorityId = equipment.PriorityId;
        //eq.EquipmentCategoryId = equipment.EquipmentCategoryId;
        //eq.EquipmentSubCategoryId = equipment.EquipmentSubCategoryId;
        //eq.EquipmentStatuSId = equipment.EquipmentStatuSId;
        //eq.ManufacturerId = equipment.ManufacturerId;
        //eq.OriginId = equipment.OriginId;
        //eq.HealthCareUnitId = equipment.HealthCareUnitId;
        //eq.SupplierId = equipment.SupplierId;
        //eq.HealthDirectoryId = equipment.HealthDirectoryId;
        //eq.HealthDistrictId = equipment.HealthDistrictId;
        //eq.AttachmentId = equipment.AttachmentId;
        //equipments.Add(eq);
        //            }

        //            return equipments;
        //        }

        //return null;
        //    }

        public ActionResult<List<Equipment>> GetAllEquimentsByeqCoverage(int eqCoverageId)
        {
            throw new NotImplementedException();
        }
        public ActionResult<List<Equipment>> GetoneEquipmentBymaster(int masterId)
        {
            var equipments = _context.Equipments.Where(e => e.MasterEquipmentId == masterId).ToList();
            if (equipments.Count != 0)
            {
                return equipments;
            }
            return null;
        }
        public ActionResult<List<HospitalVM>> GetEquipmentByHospital(List<EquipmentDTO> equipmentModel)
        {
            List<HospitalVM> lstHospitalEquipment = new List<HospitalVM>();
            var lstHosps = (from hos in _context.HealthCareUnits
                            select hos).ToList()
                            .GroupBy(a => a.Id).ToList();

            if (lstHosps.Count > 0)
            {
                foreach (var item in lstHosps)
                {
                    HospitalVM EquipmentHospitalObj = new HospitalVM();
                    EquipmentHospitalObj.Id = item.FirstOrDefault().Id;
                    EquipmentHospitalObj.Name = item.FirstOrDefault().HealthCareUnitName;
                    EquipmentHospitalObj.NameAr = item.FirstOrDefault().HealthCareUnitNameAr;

                    EquipmentHospitalObj.ListEquipment = equipmentModel.ToList().Where(e => e.HealthCareUnitId == EquipmentHospitalObj.Id)
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
                            PurchaseDate = equip.PurchaseDate
                        }).ToList();
                    lstHospitalEquipment.Add(EquipmentHospitalObj);
                }
            }
            return lstHospitalEquipment;
        }
        public ActionResult<List<GovernorateVM>> GetEquipmentLstByGovernorate(List<EquipmentDTO> equipmentmodel)
        {
            List<GovernorateVM> lstGovEquipment = new List<GovernorateVM>();
            //var equipment = new List<EquipmentDTO>();
            var govEquipDTO = new List<EquipmentDTO>();
            var GovLst = _context.HealthDirectories.ToList().GroupBy(g => g.Id).ToList();
            if (GovLst.Count > 0)
            {
                foreach (var g in GovLst)
                {
                    GovernorateVM gov = new GovernorateVM();

                    gov.Id = g.FirstOrDefault().Id;
                    gov.Name = g.FirstOrDefault().HealthDirectoryName;
                    gov.NameAr = g.FirstOrDefault().HealthDirectoryNameAr;
                    gov.ListEquipment = equipmentmodel.ToList().Where(e => e.HealthDirectoryId == gov.Id)
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
                                             PurchaseDate = equip.PurchaseDate
                                         }).ToList();
                    lstGovEquipment.Add(gov);
                }

            }
            return lstGovEquipment;
        }
        public ActionResult<List<CityVM>> GetEquipmentLstByDistrict(List<EquipmentDTO> equipmentModel)
        {
            List<CityVM> lstCityEquipment = new List<CityVM>();
            //var equipment = new List<EquipmentDTO>();
            var govEquipDTO = new List<EquipmentDTO>();
            var CityLst = _context.HealthDistricts.ToList().GroupBy(g => g.Id).ToList();
            if (CityLst.Count > 0)
            {
                foreach (var g in CityLst)
                {
                    CityVM c = new CityVM();

                    c.Id = g.FirstOrDefault().Id;
                    c.Name = g.FirstOrDefault().HealthDistrictName;
                    c.NameAr = g.FirstOrDefault().HealthDistrictNameAr;
                    //  gov.ListEquipment = equipment;
                    c.ListEquipment = equipmentModel.ToList().Where(e => e.HealthDistrictId == c.Id).ToList()
                                         .Select(equip => new EquipmentDTO
                                         {
                                             Id = equip.Id,
                                             EquipmentName = equip.EquipmentName,
                                             EquipmentNameAr = equip.EquipmentNameAr,
                                             ManufacturerName = equip.ManufacturerName,// _context.Manufacturers.Where(m => m.Id == equip.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerName,
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
                                             PurchaseDate = equip.PurchaseDate
                                         }).ToList();
                    lstCityEquipment.Add(c);
                }

            }
            return lstCityEquipment;
        }
        public ActionResult<List<OrganizationVM>> GetEquipmentLstByOrganization(List<EquipmentDTO> equipmentModel)
        {
            List<OrganizationVM> lstOrgEquipment = new List<OrganizationVM>();
            var equipment = new List<EquipmentDTO>();
            var govEquipDTO = new List<EquipmentDTO>();
            //    equipment.ToList().GroupBy(q => q.HealthDistrictId);
            var OrganizationLst = _context.organizations.ToList().GroupBy(g => g.Id).ToList();
            if (OrganizationLst.Count > 0)
            {
                foreach (var g in OrganizationLst)
                {
                    OrganizationVM Org = new OrganizationVM();

                    Org.Id = g.FirstOrDefault().Id;
                    Org.Name = g.FirstOrDefault().Name;
                    Org.NameAr = g.FirstOrDefault().NameAr;
                    //  gov.ListEquipment = equipment;
                    Org.ListEquipment = equipmentModel.ToList().Where(o => o.OrganizationId == Org.Id)
                                         .Select(equip => new EquipmentDTO
                                         {
                                             Id = equip.Id,
                                             EquipmentName = equip.EquipmentName,
                                             EquipmentNameAr = equip.EquipmentNameAr,
                                             ManufacturerName = equip.ManufacturerName,//_context.Manufacturers.Where(m => m.Id == equip.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerName,
                                             ManufacturerNameAr = equip.ManufacturerNameAr,//_context.Manufacturers.Where(m => m.Id == equip.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerNameAr,
                                             HealthDirectoryName = equip.HealthDirectoryName,
                                             HealthDirectoryNameAr = equip.HealthDirectoryNameAr,
                                             HealthDistrictName = equip.HealthDistrictName,
                                             HealthDistrictNameAr = equip.HealthDistrictNameAr,
                                             HealthCareUnitName = equip.HealthCareUnitName,
                                             HealthCareUnitNameAr = equip.HealthCareUnitNameAr,
                                             SupplierName = equip.SupplierName,
                                             SupplierNameAr = equip.SupplierNameAr,
                                             OrganizationName = equip.OrganizationName,// _context.HealthCareUnits.Where(h => h.Id == equip.HealthCareUnit.organizationId).FirstOrDefault().HealthCareUnitName,
                                             OrganizationNameAr = equip.OrganizationNameAr,// _context.HealthCareUnits.Where(h => h.Id == equip.HealthCareUnit.organizationId).FirstOrDefault().HealthCareUnitNameAr,
                                             PurchaseDate = equip.PurchaseDate
                                         }).ToList();
                    lstOrgEquipment.Add(Org);
                }

            }
            return lstOrgEquipment;
        }
        public ActionResult<List<SupplierVM>> GetEquipmentLstBySupplier(List<EquipmentDTO> equipmentModel)
        {
            List<SupplierVM> lstSupplierEquipment = new List<SupplierVM>();
            var equipment = new List<EquipmentDTO>();
            var govEquipDTO = new List<EquipmentDTO>();
            //    equipment.ToList().GroupBy(q => q.HealthDistrictId);
            var SupplierLst = _context.Suppliers.ToList().GroupBy(g => g.Id).ToList();
            if (SupplierLst.Count > 0)
            {
                foreach (var g in SupplierLst)
                {
                    SupplierVM sup = new SupplierVM();

                    sup.Id = g.FirstOrDefault().Id;
                    sup.Name = g.FirstOrDefault().SupplierName;
                    sup.NameAr = g.FirstOrDefault().SupplierNameAr;
                    sup.ListEquipment = equipmentModel.ToList().Where(e => e.SupplierId == sup.Id).ToList()
                                         .Select(equip => new EquipmentDTO
                                         {
                                             Id = equip.Id,
                                             EquipmentName = equip.EquipmentName,
                                             EquipmentNameAr = equip.EquipmentNameAr,
                                             ManufacturerName = equip.ManufacturerName,// _context.Manufacturers.Where(m => m.Id == equip.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerName,
                                             ManufacturerNameAr = equip.ManufacturerNameAr,// _context.Manufacturers.Where(m => m.Id == equip.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerNameAr,
                                             HealthDirectoryName = equip.HealthDirectoryName,
                                             HealthDirectoryNameAr = equip.HealthDirectoryNameAr,
                                             HealthDistrictName = equip.HealthDistrictName,
                                             HealthDistrictNameAr = equip.HealthDistrictNameAr,
                                             HealthCareUnitName = equip.HealthCareUnitName,
                                             HealthCareUnitNameAr = equip.HealthCareUnitNameAr,
                                             SupplierName = equip.SupplierName,
                                             SupplierNameAr = equip.SupplierNameAr,
                                             OrganizationName = equip.OrganizationName,// _context.organizations.Where(h => h.Id == equip.HealthCareUnit.organizationId).FirstOrDefault().Name,
                                             OrganizationNameAr = equip.OrganizationNameAr,// _context.organizations.Where(h => h.Id == equip.HealthCareUnit.organizationId).FirstOrDefault().NameAr,
                                             PurchaseDate = equip.PurchaseDate
                                         }).ToList();
                    lstSupplierEquipment.Add(sup);
                }

            }
            return lstSupplierEquipment;
        }
        public List<EquipmentDTO> FilterEquipment(filterDto data)
        {
            List<EquipmentDTO> equip = new List<EquipmentDTO>();
            var equipment = new List<Equipment>();
            equipment = _context.Equipments.Include(e => e.HealthCareUnit)
                                          .Include(e => e.HealthDistricts)
                                          .Include(e => e.HealthDirectories)
                                          .Include(e => e.MasterEquipment)
                                          .Include(e => e.Supplier).ToList();

            if (data.name != null && data.name != "")
            {
                equipment = equipment.Where(e => e.EquipmentName == data.name || e.EquipmentNameAr == data.name).ToList();
            }
            else
            {
                equipment = equipment.ToList();
            }
            if (data.brandName != null && data.brandName != "")
            {
                equipment = equipment.Where(e => (_context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId)
                                               .FirstOrDefault().ManufacturerName == data.brandName || _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId)
                                               .FirstOrDefault().ManufacturerNameAr == data.brandName)).ToList();
            }
            else
            {
                equipment = equipment.ToList();
            }
            if (data.govName != null && data.govName != "")
            {
                equipment = equipment.Where(e => e.HealthDirectories.HealthDirectoryName == data.govName || e.HealthDirectories.HealthDirectoryNameAr == data.govName).ToList();
            }
            else
            {
                equipment = equipment.ToList();
            }
            if (data.cityName != null && data.cityName != "")
            {
                equipment = equipment.Where(e => e.HealthDistricts.HealthDistrictName == data.cityName || e.HealthDistricts.HealthDistrictNameAr == data.cityName).ToList();
            }
            if (data.hosName != null && data.hosName != "")
            {
                equipment = equipment.Where(e => e.HealthCareUnit.HealthCareUnitName == data.hosName || e.HealthCareUnit.HealthCareUnitNameAr == data.hosName).ToList();
            }
            else
            {
                equipment = equipment.ToList();
            }
            if (data.SupplierName != null && data.SupplierName != "")
            {
                equipment = equipment.Where(e => e.Supplier.SupplierName == data.SupplierName || e.Supplier.SupplierNameAr == data.SupplierName).ToList();
            }
            else
            {
                equipment = equipment.ToList();
            }
            if (data.purchaseDate != null)
            {
                equipment = equipment.Where(e => e.PurchaseDate == data.purchaseDate || e.PurchaseDate == data.purchaseDate).ToList();
            }
            else
            {
                equipment = equipment.ToList();
            }

            if (equipment.Count > 0)
            {
                foreach (var item in equipment)
                {
                    var eq = new EquipmentDTO
                    {
                        Id = item.Id,
                        EquipmentName = item.EquipmentName,
                        EquipmentNameAr = item.EquipmentNameAr,
                        ManufacturerName = _context.Manufacturers.Where(m => m.Id == item.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerName,
                        ManufacturerNameAr = _context.Manufacturers.Where(m => m.Id == item.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerNameAr,
                        HealthDirectoryName = item.HealthDirectories.HealthDirectoryName,
                        HealthDirectoryNameAr = item.HealthDirectories.HealthDirectoryNameAr,
                        HealthDistrictName = item.HealthDistricts.HealthDistrictName,
                        HealthDistrictNameAr = item.HealthDistricts.HealthDistrictNameAr,
                        HealthCareUnitName = item.HealthCareUnit.HealthCareUnitName,
                        HealthCareUnitNameAr = item.HealthCareUnit.HealthCareUnitNameAr,
                        SupplierName = item.Supplier.SupplierName,
                        SupplierNameAr = item.Supplier.SupplierNameAr,
                        OrganizationName = _context.organizations.Where(h => h.Id == item.HealthCareUnit.organizationId).FirstOrDefault().Name,
                        OrganizationNameAr = _context.organizations.Where(h => h.Id == item.HealthCareUnit.organizationId).FirstOrDefault().NameAr,
                        PurchaseDate = item.PurchaseDate,
                        HealthDistrictId = item.HealthDistrictId,
                        HealthCareUnitId = item.HealthCareUnitId,
                        HealthDirectoryId = item.HealthDirectoryId,
                        OrganizationId = item.HealthCareUnit.organizationId,
                        ManufacturerId = item.MasterEquipment.ManufacturerId,
                        SupplierId = item.SupplierId
                    };
                    equip.Add(eq);
                }
                return equip;
            }
            return null;
        }

        public ActionResult<List<EquipmentDTO>> GetEquipmentInHospital(int hospitalId)
        {
            // var equipmentList = _context.Equipments.Where(e => e.HealthCareUnitId == hospitalId).ToList();
            List<EquipmentDTO> equipment = new List<EquipmentDTO>();
            var equipmentList = _context.Equipments.Where(e => e.HealthCareUnitId == hospitalId && e.ContractId == null)
                .Include(e => e.MasterEquipment)
                .Include(e => e.equipmentEmployees)
                .Include(e => e.HealthCareUnit)
                .Include(e => e.equipmentAttachments)
                .Include(e=>e.ContractRequest)
                .Include(e=>e.OrganizationContract)
                .Select(e => new EquipmentDTO
                {
                    Id = e.Id,
                    ContractRequestId=e.ContractRequest.Id,
                    OrganizationRequestId=e.OrganizationContract.Id,
                    EquipmentCode = e.EquipmentCode,
                    UpaCode = e.MasterEquipment.UpaCode,
                    EquipmentName = e.EquipmentName,
                    EquipmentNameAr = e.EquipmentNameAr,
                    EquipmentType = e.EquipmentType,
                    InstallationDate = e.InstallationDate,
                    HealthCareUnitId = e.HealthCareUnitId,
                    HealthCareUnitName = e.HealthCareUnit.HealthCareUnitName,
                    HealthCareUnitNameAr = e.HealthCareUnit.HealthCareUnitNameAr,
                    Remarks = e.Remarks,
                    SerialNumber = e.SerialNumber,
                    InternalCode = e.InternalCode,
                    Barcode = e.Barcode,                 
                    MasterEquipmentId = e.MasterEquipmentId,
                    EquipmentStatuSId = e.EquipmentStatuSId,
                    ManufacturerId = e.MasterEquipment.ManufacturerId,
                    ManufacturerName = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerName,
                    ManufacturerNameAr = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerNameAr,
                    EmployeeIDs = _context.equipmentEmployees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                    //AttachmentIDs = _context.equipmentAttachments.Where(a => a.EquipmentId == e.Id).Select(a => a.Id).ToList(),
                    OrganizationName = _context.organizations.Where(org => org.Id == e.HealthCareUnit.organizationId).Select(org => org.Name).FirstOrDefault(),
                    OrganizationNameAr = _context.organizations.Where(org => org.Id == e.HealthCareUnit.organizationId).Select(org => org.NameAr).FirstOrDefault(),
                    OrganizationId = e.HealthCareUnit.organizationId
                }).ToList();
            return equipmentList;

        }

        public List<EquipmentDTO> getEquipmentInContract(List<int> Ids)
        {
            List<EquipmentDTO> equipments = new List<EquipmentDTO>();
            foreach (var id in Ids)
            {
                //var equip = _context.Equipments.Where(e => e.Id == id).FirstOrDefault()
                var e = _context.Equipments
               .Include(e => e.Department)
               .Include(e => e.HealthDirectories)
               .Include(e => e.HealthDistricts)
               .Include(e => e.EquipmentStatus)
               .Include(e => e.Supplier)
               .Include(e => e.MasterEquipment)
               .Include(e => e.Contract)
               .Include(e=>e.HealthCareUnit)
               .Include(e => e.equipmentEmployees).FirstOrDefault(e => e.Id == id);
                if (e == null)
                {
                    return null;
                }
                var eq = new EquipmentDTO
                {
                    Id = e.Id,
                    EquipmentCode = e.EquipmentCode,
                    EquipmentName = e.EquipmentName,
                    EquipmentType = e.EquipmentType,
                    InstallationDate = e.InstallationDate,
                    HealthCareUnitId = e.HealthCareUnitId,
                    SerialNumber = e.SerialNumber,
                    InternalCode = e.InternalCode,
                    Barcode = e.Barcode,
                    PurchaseDate = e.PurchaseDate,
                    ManufacturerId = e.MasterEquipment.ManufacturerId,
                    DepartmentId = e.DepartmentId,
                    DepartmentName=e.Department.DepartmentName,
                    DepartmentNameAr=e.Department.DepartmentNameAr,
                    SupplierId = e.SupplierId,
                    SupplierName = e.Supplier.SupplierName,
                    SupplierNameAr = e.Supplier.SupplierNameAr,
                    HealthDirectoryId = e.HealthDirectoryId,
                    HealthDirectoryName = e.HealthDirectories.HealthDirectoryName,
                    HealthDistrictId = e.HealthDistrictId,
                    HealthDistrictName = e.HealthDistricts.HealthDistrictName,
                    HealthCareUnitName=e.HealthCareUnit.HealthCareUnitName,
                    HealthCareUnitNameAr=e.HealthCareUnit.HealthCareUnitNameAr,
                    ManufacturerName = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerName,
                    ManufacturerNameAr = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerNameAr,
                    EmployeeIDs = _context.equipmentEmployees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                    ContractId = e.ContractId
                };
                equipments.Add(eq);
            }
            return equipments;
        }

        public List<EquipmentDTO> EquipmentInContract(int cId)
        {
            List<EquipmentDTO> equips = new List<EquipmentDTO>();
            var equipment = _context.Equipments
               .Include(e => e.Department)
               .Include(e => e.HealthDirectories)
               .Include(e => e.HealthDistricts)
               .Include(e => e.EquipmentStatus)
               .Include(e => e.Supplier)
               .Include(e => e.MasterEquipment)
               .Include(e => e.Contract)
               .Include(e=>e.HealthCareUnit)
               .Include(e => e.equipmentEmployees).Where(e => e.ContractId == cId).ToList();
            if (equipment == null)
            {
                return null;
            }
            foreach (var e in equipment)
            {
                var eq = new EquipmentDTO
                {
                    Id = e.Id,
                    EquipmentCode = e.EquipmentCode,
                    EquipmentName = e.EquipmentName,
                    EquipmentType = e.EquipmentType,
                    InstallationDate = e.InstallationDate,
                    HealthCareUnitId = e.HealthCareUnitId,
                    SerialNumber = e.SerialNumber,
                    InternalCode = e.InternalCode,
                    Barcode = e.Barcode,
                    PurchaseDate = e.PurchaseDate,
                    ManufacturerId = e.MasterEquipment.ManufacturerId,
                    ManufacturerName = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerName,
                    ManufacturerNameAr = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerNameAr,
                    OrganizationName = _context.organizations.Where(o => o.Id == e.HealthCareUnit.organizationId).FirstOrDefault().Name,
                    OrganizationNameAr = _context.organizations.Where(o => o.Id == e.HealthCareUnit.organizationId).FirstOrDefault().NameAr,
                    HealthCareUnitName = e.HealthCareUnit.HealthCareUnitName,
                    HealthCareUnitNameAr = e.HealthCareUnit.HealthCareUnitNameAr,
                    SupplierId = e.SupplierId,
                    SupplierName = e.Supplier.SupplierName,
                    SupplierNameAr = e.Supplier.SupplierNameAr,
                    HealthDirectoryId = e.HealthDirectoryId,
                    HealthDirectoryName = e.HealthDirectories.HealthDirectoryName,
                    HealthDistrictId = e.HealthDistrictId,
                    HealthDistrictName = e.HealthDistricts.HealthDistrictName,
                    EmployeeIDs = _context.equipmentEmployees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                    ContractId = e.ContractId
                };
                equips.Add(eq);
            }              
            return equips;
        }

        public List<EquipmentDTO> GetEquipmentInHospitalToEdit(List<EquipmentDTO> equipment,int hosId)
        {
            bool found = false;
            var equips = new List<EquipmentDTO>();
            var equipments = _context.Equipments.Where(e=>e.HealthCareUnitId==hosId && e.ContractRequestId==null)
                .Include(e=>e.HealthCareUnit)
                .Include(e => e.Supplier)
                .Include(e => e.HealthDistricts)
                .Include(e => e.HealthDirectories)
                .Include(e=>e.MasterEquipment).ThenInclude(m=>m.Manufacturer)
                .ToList();
                foreach (var e in equipments)
                {
                    var equip = new EquipmentDTO
                    {
                        Id = e.Id,
                        EquipmentCode = e.EquipmentCode,
                        UpaCode=e.MasterEquipment.UpaCode,
                        ManufacturerName=e.MasterEquipment.Manufacturer.ManufacturerName,
                        ManufacturerNameAr=e.MasterEquipment.Manufacturer.ManufacturerNameAr,
                        ModelNumber=e.MasterEquipment.ModelNumber,
                        SerialNumber=e.SerialNumber,
                        EquipmentName = e.EquipmentName,
                        EquipmentType = e.EquipmentType,
                        InstallationDate = e.InstallationDate,
                        HealthCareUnitId = e.HealthCareUnitId,
                        InternalCode = e.InternalCode,
                        Barcode = e.Barcode,
                        PurchaseDate = e.PurchaseDate,
                        HealthCareUnitName = e.HealthCareUnit.HealthCareUnitName,
                        HealthCareUnitNameAr = e.HealthCareUnit.HealthCareUnitNameAr,
                        SupplierId = e.SupplierId,
                        SupplierName = e.Supplier.SupplierName,
                        SupplierNameAr = e.Supplier.SupplierNameAr,
                        HealthDirectoryId = e.HealthDirectoryId,
                        HealthDirectoryName = e.HealthDirectories.HealthDirectoryName,
                        HealthDistrictId = e.HealthDistrictId,
                        HealthDistrictName = e.HealthDistricts.HealthDistrictName,
                        EmployeeIDs = _context.equipmentEmployees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                        ContractId = e.ContractId
                    };
                    foreach (var item in equipment)
                    {
                        if(equip.Id==item.Id)
                        {
                          found = true;
                        }
                    }
                    if(!found)
                    {
                        equips.Add(equip);
                    }
                found = false;
                }
            return equips;
        }

        //public List<EquipmentDTO> getEquipmentInContract(int cId)
        //{
        //    List<EquipmentDTO> equips = new List<EquipmentDTO>();
        //    var equipment = _context.Equipments
        //       .Include(e => e.Department)
        //       .Include(e => e.HealthDirectories)
        //       .Include(e => e.HealthDistricts)
        //       .Include(e => e.EquipmentStatus)
        //       .Include(e => e.Supplier)
        //       .Include(e => e.MasterEquipment)
        //       .Include(e => e.Contract)
        //       .Include(e => e.HealthCareUnit)
        //       .Include(e => e.equipmentEmployees).Where(e => e.ContractId == cId).ToList();
        //    if (equipment == null)
        //    {
        //        return null;
        //    }
        //    foreach (var e in equipment)
        //    {
        //        var eq = new EquipmentDTO
        //        {
        //            Id = e.Id,
        //            EquipmentCode = e.EquipmentCode,
        //            EquipmentName = e.EquipmentName,
        //            EquipmentType = e.EquipmentType,
        //            InstallationDate = e.InstallationDate,
        //            HealthCareUnitId = e.HealthCareUnitId,
        //            SerialNumber = e.SerialNumber,
        //            InternalCode = e.InternalCode,
        //            Barcode = e.Barcode,
        //            PurchaseDate = e.PurchaseDate,
        //            ManufacturerId = e.MasterEquipment.ManufacturerId,
        //            ManufacturerName = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerName,
        //            ManufacturerNameAr = _context.Manufacturers.Where(m => m.Id == e.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerNameAr,
        //            OrganizationName = _context.organizations.Where(o => o.Id == e.HealthCareUnit.organizationId).FirstOrDefault().Name,
        //            OrganizationNameAr = _context.organizations.Where(o => o.Id == e.HealthCareUnit.organizationId).FirstOrDefault().NameAr,
        //            HealthCareUnitName = e.HealthCareUnit.HealthCareUnitName,
        //            HealthCareUnitNameAr = e.HealthCareUnit.HealthCareUnitNameAr,
        //            SupplierId = e.SupplierId,
        //            SupplierName = e.Supplier.SupplierName,
        //            SupplierNameAr = e.Supplier.SupplierNameAr,
        //            HealthDirectoryId = e.HealthDirectoryId,
        //            HealthDirectoryName = e.HealthDirectories.HealthDirectoryName,
        //            HealthDistrictId = e.HealthDistrictId,
        //            HealthDistrictName = e.HealthDistricts.HealthDistrictName,
        //            EmployeeIDs = _context.equipmentEmployees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
        //            ContractId = e.ContractId
        //        };
        //        equips.Add(eq);
        //    }
        //    return equips;
        //}

    }
}
