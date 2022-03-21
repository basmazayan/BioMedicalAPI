using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
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
        //private readonly AssetDbContext _AssetContext;

        public EquipmentRepository(ApplicationDbContext context, IMasterEquipmentRepository masterEquipmentRepository,
            IHealthCareUnitRepository healthCareUnitRepository,
            IInventoryRepository inventoryRepository
           )
        {
            _context = context;
            _masterEquipmentRepository = masterEquipmentRepository;
            _healthCareUnitRepository = healthCareUnitRepository;
            _inventoryRepository = inventoryRepository;
            //_AssetContext = AssetContext;
            // _equipmentRepository = equipmentRepository;
        }
        public void Add(EquipmentDTO equipment)
        {

            List<Assets> equip = new List<Assets>();
            equip = _context.Assets.ToList();
            MasterEquipmentDTO mequipment = _masterEquipmentRepository.GetById(equipment.MasterEquipmentId);
            int DistrictId = _healthCareUnitRepository.GetHealthDistrictByCareUnit(equipment.HealthCareUnitId);
            int DirectoryId = _healthCareUnitRepository.GetHealthDirectoryByDistrict(DistrictId);
            Assets eq = new Assets();
            var masterCode = _masterEquipmentRepository.GetMasterCode(mequipment.Name);
            Random random = new Random();
            int num = random.Next(10000);
            var names = (equipment.EquipmentName).Split(" ");
            eq.Code = (names[0] + ' ' + num.ToString());
            eq.MasterCode = masterCode;
            //eq.EquipmentName = mequipment.Name;
            //eq.EquipmentNameAr = equipment.EquipmentNameAr;
            //eq.EquipmentType = equipment.EquipmentType;
            eq.InstallationDate = equipment.InstallationDate;
            eq.Remarks = equipment.Remarks;
            eq.SerialNumber = equipment.SerialNumber;
            eq.Barcode = masterCode + ' ' + eq.Code;
            eq.Barcode = equipment.Barcode;
            eq.PurchaseDate = equipment.PurchaseDate;
            eq.Price = equipment.Price;
            //eq.WarrantyExpires = equipment.WarrantyExpires;

            //eq.Length = equipment.Length;
            //eq.Height = equipment.Height;
            //eq.Weight = equipment.Weight;     //in Master
            //eq.ColorAr = equipment.ColorAr;

            eq.DepartmentId = equipment.DepartmentId;
            eq.StatusId = equipment.EquipmentStatuSId;
            //eq.ManufacturerId = equipment.ManufacturerId;
            //eq.OriginId = equipment.OriginId;
            eq.HospitalId = equipment.HealthCareUnitId;
            eq.SupplierId = equipment.SupplierId;
            //eq.HealthDirectoryId = DirectoryId;
            //eq.HealthDistrictId = DistrictId;
            eq.MasterAssetId = equipment.MasterEquipmentId;
            eq.QrImgPath = equipment.QrImgPath;
            eq.equipmentEmployees = new List<Employees>();
            //foreach(var attach in equipment.attachments)
            //{
            //    eq.AttachmentId = attach.Id;
            //}           
            foreach (var empId in equipment.EmployeeIDs)
            {
                eq.equipmentEmployees.Add(new Employees
                {
                    UserId = empId,
                    EquipmentId = equipment.Id
                });
                //  var employee = _context.Employees.FirstOrDefault(e => e.Id == empId);              
            }
            eq.equipmentAttachments = new List<EquipmentAttachments>();

            //  equipments.Add(eq);
            _context.Assets.Add(eq);
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
            Assets equipment = Find(id);
            equipment.equipmentEmployees = _context.Employees.Where(e => e.EquipmentId == id).ToList();
            if (equipment.equipmentEmployees.Count != 0)
            {
                foreach (var item in equipment.equipmentEmployees)
                {
                    _context.Employees.Remove(item);
                }
            }
            _context.Assets.Remove(equipment);
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


        public Assets Find(int id)
        {
            return _context.Assets.Find(id);
        }

        public IEnumerable<EquipmentDTO> GetAll()//(PagingParameter paging)
        {

            var inventories = _inventoryRepository.GetAll();

            var equips = _context.Assets
                .Include(e => e.Department)
                .Include(e => e.Supplier)
                .Include(e => e.MasterAsset)
                .Include(e => e.equipmentEmployees)
                .Include(e => e.Hospital).ThenInclude(h=>h.City).ThenInclude(d=>d.Governorate)
                .Include(e => e.equipmentAttachments)
                .Include(e => e.ContractRequest)
                .Include(e => e.OrganizationContract)
                .Include(e => e.Contract)
                .Select(e => new EquipmentDTO
                 {
                     Id = e.Id,
                     EquipmentCode = e.Code,
                     UpaCode = e.MasterAsset.MasterCode,
                     EquipmentName = e.MasterAsset.Name,
                     EquipmentNameAr = e.MasterAsset.NameAr,
                     EquipmentType = e.Type,
                     InstallationDate = e.InstallationDate,
                     HealthCareUnitId = e.HospitalId,
                     HealthCareUnitName = e.Hospital.Name,
                     HealthCareUnitNameAr = e.Hospital.NameAr,
                     Remarks = e.Remarks,
                //     ModelNumber = e.MasterAsset.ModelNumber,
                //     VersionNumber = e.MasterAsset.VersionNumber,
                     SerialNumber = e.SerialNumber,
                     //InternalCode = e.InternalCode,
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
                     MasterEquipmentId = e.MasterAssetId,
                     DepartmentName = e.Department.Name,
                     DepartmentNameAr = e.Department.NameAr,
                     EquipmentStatuSId = e.StatusId,
                //     ManufacturerId = e.MasterAsset.ManufacturerId,
                     SupplierId = e.SupplierId,
                     SupplierName = e.Supplier.Name,
                     SupplierNameAr = e.Supplier.NameAr,
                //     ManufacturerName = e.MasterAsset.Manufacturer.ManufacturerName,
                //     ManufacturerNameAr = e.MasterAsset.Manufacturer.ManufacturerNameAr,
                     HealthDirectoryId = e.Hospital.Id,
                     HealthDirectoryName = e.Hospital.Governorate.Name,
                     HealthDirectoryNameAr = e.Hospital.Governorate.NameAr,
                     HealthDistrictId = e.Hospital.City.Id,
                     HealthDistrictName = e.Hospital.City.Name,
                     HealthDistrictNameAr = e.Hospital.City.NameAr,
                     CustomizedField = e.CustomizedField,
                     ContractRequestId = e.ContractRequest.Id,
                     OrganizationRequestId = e.OrganizationContract.Id,
                  //   EmployeeIDs = _context.equipmentEmployees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                     QrImgPath = e.QrImgPath,
                   //  OrganizationName = _context.organizations.Where(org => org.Id == e.Hospital.organizationId).Select(org => org.Name).FirstOrDefault(),
                   //  OrganizationNameAr = _context.organizations.Where(org => org.Id == e.Hospital.organizationId).Select(org => org.NameAr).FirstOrDefault(),
                     OrganizationId = e.Hospital.organizationId,
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

            var equips = _context.Assets
                .Include(e => e.Department)            
                .Include(e => e.Supplier)
                .Include(e => e.MasterAsset)
                .Include(e => e.equipmentEmployees)
                .Include(e => e.Hospital).ThenInclude(h=>h.City).ThenInclude(d=>d.Governorate)
                .Include(e => e.equipmentAttachments)
                .Include(e => e.EquipmentRecall)
                .Select(e => new EquipmentDTO
                {
                    Id = e.Id,
                    EquipmentCode = e.Code,
                    UpaCode = e.MasterAsset.UpaCode,
                    EquipmentName = e.MasterAsset.Name,
                    EquipmentNameAr = e.MasterAsset.NameAr,
                    EquipmentType = e.Type,
                    InstallationDate = e.InstallationDate,
                    HealthCareUnitId = e.HospitalId,
                    HealthCareUnitName = e.Hospital.Name,
                    HealthCareUnitNameAr = e.Hospital.NameAr,
                    Remarks = e.Remarks,
                    ModelNumber = e.MasterAsset.ModelNumber,
                    VersionNumber = e.MasterAsset.VersionNumber,
                    SerialNumber = e.SerialNumber,
                    //InternalCode = e.InternalCode,
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
                    MasterEquipmentId = e.MasterAssetId,
                    DepartmentName = e.Department.Name,
                    DepartmentNameAr = e.Department.NameAr,
                    EquipmentStatuSId = e.StatusId,
                    ManufacturerId = e.MasterAsset.BrandId,
                    SupplierId = e.SupplierId,
                    SupplierName = e.Supplier.Name,
                    SupplierNameAr = e.Supplier.NameAr,
                    ManufacturerName = e.MasterAsset.Brand.Name,
                    ManufacturerNameAr = e.MasterAsset.Brand.NameAr,
                    HealthDirectoryId = e.Hospital.Governorate.Id,
                    HealthDirectoryName = e.Hospital.Governorate.Name,
                    HealthDirectoryNameAr = e.Hospital.Governorate.NameAr,
                    HealthDistrictId = e.Hospital.City.Id,
                    HealthDistrictName = e.Hospital.City.Name,
                    HealthDistrictNameAr = e.Hospital.City.NameAr,
                    CustomizedField = e.CustomizedField,
                    EmployeeIDs = _context.Employees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                    QrImgPath = e.QrImgPath,
                    OrganizationName = _context.Organizations.Where(org => org.Id == e.Hospital.organizationId).Select(org => org.Name).FirstOrDefault(),
                    OrganizationNameAr = _context.Organizations.Where(org => org.Id == e.Hospital.organizationId).Select(org => org.NameAr).FirstOrDefault(),
                    OrganizationId = e.Hospital.organizationId,
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
            var inventories = _context.Inventories.ToList()
                .GroupBy(e => e.EquipmentId).ToList();
            if (inventories.Count > 0)

            {
                foreach (var item in inventories)
                {
                    scanningequipmentVM equipmentsids = new scanningequipmentVM();
                    equipmentsids.EquipmentId = item.FirstOrDefault().EquipmentId;
                    equipmentsids.Id = item.FirstOrDefault().Id;
                    equipmentsids.ListEquipment = (from inventory in _context.Inventories
                                                   join eq in _context.Assets
                                                   on inventory.EquipmentId equals eq.Id
                                                   where inventory.EquipmentId == item.First().EquipmentId
                                                   select eq).Include(e => e.Department)
                                    .Include(e => e.Supplier)
                                    .Include(e => e.MasterAsset)
                                    .Include(e => e.equipmentEmployees)
                                    .Include(e => e.Hospital).ThenInclude(h=>h.City).ThenInclude(d=>d.Governorate)
                                    .Include(e => e.equipmentAttachments)
                                .ToList().Select(e => new EquipmentDTO
                                {
                                    Id = e.Id,
                                    EquipmentCode = e.Code,
                                    UpaCode = e.MasterAsset.UpaCode,
                                    EquipmentName = e.MasterAsset.Name,
                                    EquipmentNameAr = e.MasterAsset.NameAr,
                                    EquipmentType = e.Type,
                                    InstallationDate = e.InstallationDate,
                                    HealthCareUnitId = e.HospitalId,
                                    HealthCareUnitName = e.Hospital.Name,
                                    HealthCareUnitNameAr = e.Hospital.NameAr,
                                    Remarks = e.Remarks,
                                    SerialNumber = e.SerialNumber,
                                    //InternalCode = e.InternalCode,
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
                                    MasterEquipmentId = e.MasterAssetId,
                                    DepartmentName = e.Department.Name,
                                    DepartmentNameAr = e.Department.NameAr,
                                    EquipmentStatuSId = e.StatusId,
                                    SupplierId = e.SupplierId,
                                    SupplierName = e.Supplier.Name,
                                    SupplierNameAr = e.Supplier.NameAr,
                                    ManufacturerName = _context.Brands.Where(m => m.Id == e.MasterAsset.BrandId).FirstOrDefault().Name,
                                    ManufacturerNameAr = _context.Brands.Where(m => m.Id == e.MasterAsset.BrandId).FirstOrDefault().NameAr,                                    //EmployeeId = e.EmployeeId,
                                    HealthDirectoryId = e.Hospital.Governorate.Id,
                                    HealthDirectoryName = e.Hospital.Governorate.Name,
                                    HealthDirectoryNameAr = e.Hospital.Governorate.NameAr,
                                    HealthDistrictId = e.Hospital.City.Id,
                                    HealthDistrictName = e.Hospital.City.Name,
                                    HealthDistrictNameAr = e.Hospital.City.NameAr,
                                    CustomizedField = e.CustomizedField,
                                    EmployeeIDs = _context.Employees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                                    //AttachmentIDs = _context.equipmentAttachments.Where(a => a.EquipmentId == e.Id).Select(a => a.Id).ToList(),
                                    QrImgPath = e.QrImgPath,
                                    OrganizationName = _context.Organizations.Where(org => org.Id == e.Hospital.organizationId).Select(org => org.Name).FirstOrDefault(),
                                    OrganizationNameAr = _context.Organizations.Where(org => org.Id == e.Hospital.organizationId).Select(org => org.NameAr).FirstOrDefault()

                                }).ToList();
                    scanVM.Add(equipmentsids);
                
                    var inve = _context.Inventories.Where(i => i.EquipmentId == equipmentsids.EquipmentId).ToList();
                    int i = 0;
                    foreach (var eq in equipmentsids.ListEquipment)
                    {
                        for (; i < inve.Count;)
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
                var equips = _context.Assets
                     .Include(e => e.Department)
                     .Include(e => e.Supplier)
                     .Include(e => e.MasterAsset)
                     .Include(e => e.equipmentEmployees)
                     .Include(e => e.Hospital).ThenInclude(h=>h.City).ThenInclude(d=>d.Governorate)
                     .Include(e => e.equipmentAttachments)
                     .Select(e => new EquipmentDTO

                     {
                         Id = e.Id,
                         EquipmentCode = e.Code,
                         UpaCode = e.MasterAsset.UpaCode,
                         EquipmentName = e.MasterAsset.Name,
                         EquipmentNameAr = e.MasterAsset.NameAr,
                         EquipmentType = e.Type,
                         InstallationDate = e.InstallationDate,
                         HealthCareUnitId = e.HospitalId,
                         HealthCareUnitName = e.Hospital.Name,
                         HealthCareUnitNameAr = e.Hospital.NameAr,
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
                         MasterEquipmentId = e.MasterAssetId,
                         DepartmentName = e.Department.Name,
                         DepartmentNameAr = e.Department.NameAr,
                         EquipmentStatuSId = e.StatusId,
                         ManufacturerId = e.MasterAsset.BrandId,
                         SupplierId = e.SupplierId,
                         SupplierName = e.Supplier.Name,
                         SupplierNameAr = e.Supplier.NameAr,
                         ManufacturerName = _context.Brands.Where(m => m.Id == e.MasterAsset.BrandId).FirstOrDefault().Name,
                         ManufacturerNameAr = _context.Brands.Where(m => m.Id == e.MasterAsset.BrandId).FirstOrDefault().NameAr,                                    //EmployeeId = e.EmployeeId,
                          HealthDirectoryId = e.Hospital.Governorate.Id,
                         HealthDirectoryName = e.Hospital.Governorate.Name,
                         HealthDirectoryNameAr = e.Hospital.Governorate.NameAr,
                         HealthDistrictId = e.Hospital.City.Id,
                         HealthDistrictName = e.Hospital.City.Name,
                         HealthDistrictNameAr = e.Hospital.City.NameAr,
                         CustomizedField = e.CustomizedField,
                         EmployeeIDs = _context.Employees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                         QrImgPath = e.QrImgPath,
                         OrganizationName = _context.Organizations.Where(org => org.Id == e.Hospital.organizationId).Select(org => org.Name).FirstOrDefault(),
                         OrganizationNameAr = _context.Organizations.Where(org => org.Id == e.Hospital.organizationId).Select(org => org.NameAr).FirstOrDefault(),
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

                var equips = _context.Assets
               .Include(e => e.Department)
               .Include(e => e.Supplier)
               .Include(e => e.MasterAsset)
               .Include(e => e.equipmentEmployees)
               .Include(e => e.Hospital).ThenInclude(h=>h.City).ThenInclude(d=>d.Governorate)
                   .Include(e => e.equipmentAttachments)
                   .Select(e => new EquipmentDTO
                   {
                       Id = e.Id,
                       EquipmentCode = e.Code,
                       UpaCode = e.MasterAsset.UpaCode,
                       EquipmentName = e.MasterAsset.Name,
                       EquipmentNameAr = e.MasterAsset.NameAr,
                       EquipmentType = e.Type,
                       InstallationDate = e.InstallationDate,
                       HealthCareUnitId = e.HospitalId,
                       HealthCareUnitName = e.Hospital.Name,
                       HealthCareUnitNameAr = e.Hospital.NameAr,
                       Remarks = e.Remarks,
                       SerialNumber = e.SerialNumber,
                       InternalCode = e.Barcode,
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
                       MasterEquipmentId = e.MasterAssetId,
                       DepartmentName = e.Department.Name,
                       DepartmentNameAr = e.Department.NameAr,
                       EquipmentStatuSId = e.StatusId,
                       ManufacturerId = e.MasterAsset.BrandId,
                       SupplierId = e.SupplierId,
                       SupplierName = e.Supplier.Name,
                       SupplierNameAr = e.Supplier.NameAr,
                       ManufacturerName = _context.Brands.Where(m => m.Id == e.MasterAsset.BrandId).FirstOrDefault().Name,
                       ManufacturerNameAr = _context.Brands.Where(m => m.Id == e.MasterAsset.BrandId).FirstOrDefault().NameAr,                                    //EmployeeId = e.EmployeeId,
                       HealthDirectoryId = e.Hospital.Governorate.Id,
                       HealthDirectoryName = e.Hospital.Governorate.Name,
                       HealthDirectoryNameAr = e.Hospital.Governorate.NameAr,
                       HealthDistrictId = e.Hospital.City.Id,
                       HealthDistrictName = e.Hospital.City.Name,
                       HealthDistrictNameAr = e.Hospital.City.NameAr,
                       CustomizedField = e.CustomizedField,
                       EmployeeIDs = _context.Employees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                       QrImgPath = e.QrImgPath,
                       OrganizationName = _context.Organizations.Where(org => org.Id == e.Hospital.organizationId).Select(org => org.Name).FirstOrDefault(),
                       OrganizationNameAr = _context.Organizations.Where(org => org.Id == e.Hospital.organizationId).Select(org => org.NameAr).FirstOrDefault(),

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

            var inventories = _context.Inventories.ToList().GroupBy(
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
                dates.ListEquipment = (from inventory in _context.Inventories
                                       join eq in _context.Assets
                                       on inventory.EquipmentId equals eq.Id
                                       where inventory.CreatedAt.Value.Day == item.First().CreatedAt.Value.Day
                                       && inventory.CreatedAt.Value.Month == item.First().CreatedAt.Value.Month
                                       && inventory.CreatedAt.Value.Year == item.First().CreatedAt.Value.Year
                                       select eq).Include(e => e.Department)
                                .Include(e => e.Supplier)
                                .Include(e => e.MasterAsset)
                                .Include(e => e.equipmentEmployees)
                                .Include(e => e.Hospital).ThenInclude(h=>h.City).ThenInclude(d=>d.Governorate)
                                .Include(e => e.equipmentAttachments)
                            .ToList().Select(e => new EquipmentDTO
                            {
                                Id = e.Id,
                                EquipmentCode = e.Code,
                                UpaCode = e.MasterAsset.UpaCode,
                                EquipmentName = e.MasterAsset.Name,
                                EquipmentNameAr = e.MasterAsset.NameAr,
                                EquipmentType = e.Type,
                                InstallationDate = e.InstallationDate,
                                HealthCareUnitId = e.HospitalId,
                                HealthCareUnitName = e.Hospital.Name,
                                HealthCareUnitNameAr = e.Hospital.NameAr,
                                Remarks = e.Remarks,
                                SerialNumber = e.SerialNumber,
                                InternalCode = e.Barcode,
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
                                MasterEquipmentId = e.MasterAssetId,
                                DepartmentName = e.Department.Name,
                                DepartmentNameAr = e.Department.NameAr,
                                EquipmentStatuSId = e.StatusId,
                                SupplierId = e.SupplierId,
                                SupplierName = e.Supplier.Name,
                                SupplierNameAr = e.Supplier.NameAr,
                                ManufacturerName = _context.Brands.Where(m => m.Id == e.MasterAsset.BrandId).FirstOrDefault().Name,
                                ManufacturerNameAr = _context.Brands.Where(m => m.Id == e.MasterAsset.BrandId).FirstOrDefault().NameAr,                                    //EmployeeId = e.EmployeeId,
                                HealthDirectoryId = e.Hospital.Governorate.Id,
                                HealthDirectoryName = e.Hospital.Governorate.Name,
                                HealthDirectoryNameAr = e.Hospital.Governorate.NameAr,
                                HealthDistrictId = e.Hospital.City.Id,
                                HealthDistrictName = e.Hospital.City.Name,
                                HealthDistrictNameAr = e.Hospital.City.NameAr,
                                CustomizedField = e.CustomizedField,
                                EmployeeIDs = _context.Employees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                                QrImgPath = e.QrImgPath,
                                OrganizationName = _context.Organizations.Where(org => org.Id == e.Hospital.organizationId).Select(org => org.Name).FirstOrDefault(),
                                OrganizationNameAr = _context.Organizations.Where(org => org.Id == e.Hospital.organizationId).Select(org => org.NameAr).FirstOrDefault()

                            }).ToList();
                var inve = _context.Inventories.Where(i => i.CreatedAt.Value.Day == dates.CreatedAt.Value.Day).ToList();
                int i = 0;
                foreach (var eq in dates.ListEquipment)
                {
                    for (; i < inve.Count;)
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
            var e = _context.Assets
                .Include(e => e.Department)
                .Include(e => e.Hospital).ThenInclude(h=>h.City).ThenInclude(d=>d.Governorate)
                .Include(e => e.Status)
                .Include(e => e.Supplier)
                .Include(e => e.MasterAsset)
                .Include(e => e.equipmentEmployees).FirstOrDefault(e => e.Id == id);
            if (e == null)
            {
                return null;
            }
            var eq = new EquipmentDTO
            {
                Id = e.Id,
                EquipmentCode = e.Code,
                EquipmentName = e.MasterAsset.Name,
                EquipmentType = e.Type,
                InstallationDate = e.InstallationDate,
                HealthCareUnitId = e.HospitalId,
                Remarks = e.Remarks,
                SerialNumber = e.SerialNumber,
                InternalCode = e.Barcode,
                UpaCode = e.MasterAsset.UpaCode,
                ModelNumber=e.MasterAsset.ModelNumber,
                Barcode = e.Barcode,
                PurchaseDate = e.PurchaseDate,
                Price = e.Price,
                WarrantyExpires = e.WarrantyExpires,
                Length = e.Length,
                Height = e.Height,
                Weight = e.Weight,
                Color = e.Color,
                EquipmentStatuSId = e.StatusId,
                StatusName = e.Status.Status,
                StatusNameAr = e.Status.StatusAr,
                ManufacturerId = e.MasterAsset.BrandId,
                DepartmentId = e.DepartmentId,
                ManufacturerName=_context.Brands.Where(m=>m.Id==e.MasterAsset.BrandId).FirstOrDefault().Name,
                ManufacturerNameAr=_context.Brands.Where(m=>m.Id==e.MasterAsset.BrandId).FirstOrDefault().NameAr,
                SupplierId = e.SupplierId,
                SupplierName = e.Supplier.Name,
                SupplierNameAr = e.Supplier.NameAr,
                HealthDirectoryId = e.Hospital.Governorate.Id,
                HealthDirectoryName = e.Hospital.Governorate.Name,
                HealthDistrictId = e.Hospital.CityId,
                HealthDistrictName = e.Hospital.City.Name,
                CustomizedField = e.CustomizedField,
                Floor = e.Floor,
                Room = e.Room,
                EmployeeIDs = _context.Employees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
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
            var eq = new Assets();
            int DistrictId = _healthCareUnitRepository.GetHealthDistrictByCareUnit(equipment.HealthCareUnitId);
            int DirectoryId = _healthCareUnitRepository.GetHealthDirectoryByDistrict(DistrictId);
            eq.Id = equipment.Id;
            eq.Code = equipment.EquipmentCode;
            //eq.EquipmentName = equipment.EquipmentName;
            //eq.EquipmentNameAr = equipment.EquipmentNameAr;
            eq.Type = equipment.EquipmentType;
            eq.InstallationDate = equipment.InstallationDate;
            eq.HospitalId = equipment.HealthCareUnitId;
            eq.Remarks = equipment.Remarks;
            eq.SerialNumber = equipment.SerialNumber;
            eq.Barcode = equipment.InternalCode;
            eq.Barcode = equipment.Barcode;
            eq.PurchaseDate = equipment.PurchaseDate;
            eq.Price = equipment.Price;
            eq.WarrantyExpires = equipment.WarrantyExpires;
            eq.Length = equipment.Length;
            eq.Height = equipment.Height;
            eq.Weight = equipment.Weight;
            eq.Color = equipment.Color;
            eq.StatusId = equipment.EquipmentStatuSId;
            eq.DepartmentId = equipment.DepartmentId;
            eq.SupplierId = equipment.SupplierId;
            eq.CustomizedField = equipment.CustomizedField;
            eq.MasterAssetId = equipment.MasterEquipmentId;
            eq.EquipmentRecallId = equipment.EquipmentRecallId;
            eq.equipmentEmployees = _context.Employees.Where(e => e.EquipmentId == equipment.Id).ToList();
            if (eq.equipmentEmployees.Count != 0)
            {
                foreach (var item in eq.equipmentEmployees)
                {
                    _context.Employees.Remove(item);
                }
            }

            eq.equipmentEmployees = new List<Employees>();
            foreach (var empId in equipment.EmployeeIDs)
            {
                eq.equipmentEmployees.Add(new Employees
                {
                    UserId = empId,
                    EquipmentId = eq.Id
                });
            }
            _context.Assets.Add(eq);
            eq.equipmentAttachments = new List<EquipmentAttachments>();
            _context.Entry(eq).State = EntityState.Modified;
        }
        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public Task<ActionResult<IEnumerable<Assets>>> ToList()
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

        public ActionResult<List<Assets>> GetAllEquimentsByeqCoverage(int eqCoverageId)
        {
            throw new NotImplementedException();
        }
        public ActionResult<List<Assets>> GetoneEquipmentBymaster(int masterId)
        {
            var equipments = _context.Assets.Where(e => e.MasterAssetId == masterId).ToList();
            if (equipments.Count != 0)
            {
                return equipments;
            }
            return null;
        }
        public ActionResult<List<HospitalVM>> GetEquipmentByHospital(List<EquipmentDTO> equipmentModel)
        {
            List<HospitalVM> lstHospitalEquipment = new List<HospitalVM>();
            var lstHosps = (from hos in _context.Hospitals
                            select hos).ToList()
                            .GroupBy(a => a.Id).ToList();

            if (lstHosps.Count > 0)
            {
                foreach (var item in lstHosps)
                {
                    HospitalVM EquipmentHospitalObj = new HospitalVM();
                    EquipmentHospitalObj.Id = item.FirstOrDefault().Id;
                    EquipmentHospitalObj.Name = item.FirstOrDefault().Name;
                    EquipmentHospitalObj.NameAr = item.FirstOrDefault().NameAr;

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
            var GovLst = _context.Governorates.ToList().GroupBy(g => g.Id).ToList();
            if (GovLst.Count > 0)
            {
                foreach (var g in GovLst)
                {
                    GovernorateVM gov = new GovernorateVM();

                    gov.Id = g.FirstOrDefault().Id;
                    gov.Name = g.FirstOrDefault().Name;
                    gov.NameAr = g.FirstOrDefault().NameAr;
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
            var CityLst = _context.Cities.ToList().GroupBy(g => g.Id).ToList();
            if (CityLst.Count > 0)
            {
                foreach (var g in CityLst)
                {
                    CityVM c = new CityVM();

                    c.Id = g.FirstOrDefault().Id;
                    c.Name = g.FirstOrDefault().Name;
                    c.NameAr = g.FirstOrDefault().NameAr;
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
            var OrganizationLst = _context.Organizations.ToList().GroupBy(g => g.Id).ToList();
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
                    sup.Name = g.FirstOrDefault().Name;
                    sup.NameAr = g.FirstOrDefault().NameAr;
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
            var equipment = new List<Assets>();
            equipment = _context.Assets.Include(e => e.Hospital).ThenInclude(h=>h.City).ThenInclude(d=>d.Governorate)
                                          .Include(e => e.MasterAsset)
                                          .Include(e => e.Supplier).ToList();

            if (data.name != null && data.name != "")
            {
                equipment = equipment.Where(e => e.MasterAsset.Name == data.name || e.MasterAsset.NameAr == data.name).ToList();
            }
            else
            {
                equipment = equipment.ToList();
            }
            if (data.brandName != null && data.brandName != "")
            {
                equipment = equipment.Where(e => (_context.Brands.Where(m => m.Id == e.MasterAsset.BrandId)
                                               .FirstOrDefault().Name == data.brandName || _context.Brands.Where(m => m.Id == e.MasterAsset.BrandId)
                                               .FirstOrDefault().NameAr == data.brandName)).ToList();
            }
            else
            {
                equipment = equipment.ToList();
            }
            if (data.govName != null && data.govName != "")
            {
                equipment = equipment.Where(e => e.Hospital.Governorate.Name == data.govName || e.Hospital.Governorate.NameAr == data.govName).ToList();
            }
            else
            {
                equipment = equipment.ToList();
            }
            if (data.cityName != null && data.cityName != "")
            {
                equipment = equipment.Where(e => e.Hospital.City.Name == data.cityName || e.Hospital.City.NameAr == data.cityName).ToList();
            }
            if (data.hosName != null && data.hosName != "")
            {
                equipment = equipment.Where(e => e.Hospital.Name == data.hosName || e.Hospital.NameAr == data.hosName).ToList();
            }
            else
            {
                equipment = equipment.ToList();
            }
            if (data.SupplierName != null && data.SupplierName != "")
            {
                equipment = equipment.Where(e => e.Supplier.Name == data.SupplierName || e.Supplier.NameAr == data.SupplierName).ToList();
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
                        EquipmentName = item.MasterAsset.Name,
                        EquipmentNameAr = item.MasterAsset.NameAr,
                        ManufacturerName = _context.Brands.Where(m => m.Id == item.MasterAsset.BrandId).FirstOrDefault().Name,
                        ManufacturerNameAr = _context.Brands.Where(m => m.Id == item.MasterAsset.BrandId).FirstOrDefault().NameAr,
                        HealthDirectoryName = item.Hospital.Governorate.Name,
                        HealthDirectoryNameAr = item.Hospital.Governorate.NameAr,
                        HealthDistrictName = item.Hospital.City.Name,
                        HealthDistrictNameAr = item.Hospital.City.NameAr,
                        HealthCareUnitName = item.Hospital.Name,
                        HealthCareUnitNameAr = item.Hospital.NameAr,
                        SupplierName = item.Supplier.Name,
                        SupplierNameAr = item.Supplier.NameAr,
                        OrganizationName = _context.Organizations.Where(h => h.Id == item.Hospital.organizationId).FirstOrDefault().Name,
                        OrganizationNameAr = _context.Organizations.Where(h => h.Id == item.Hospital.organizationId).FirstOrDefault().NameAr,
                        PurchaseDate = item.PurchaseDate,
                        HealthDistrictId = item.Hospital.City.Id,
                        HealthCareUnitId = item.HospitalId,
                        HealthDirectoryId = item.Hospital.Governorate.Id,
                        OrganizationId = item.Hospital.organizationId,
                        ManufacturerId = item.MasterAsset.BrandId,
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
            var equipmentList = _context.Assets.Where(e => e.HospitalId == hospitalId && e.ContractId == null)
                .Include(e => e.MasterAsset)
                .Include(e => e.equipmentEmployees)
                .Include(e => e.Hospital).ThenInclude(h=>h.City).ThenInclude(d=>d.Governorate)
                .Include(e => e.equipmentAttachments)
                .Include(e=>e.ContractRequest)
                .Include(e=>e.OrganizationContract)
                .Select(e => new EquipmentDTO
                {
                    Id = e.Id,
                    ContractRequestId=e.ContractRequest.Id,
                    OrganizationRequestId=e.OrganizationContract.Id,
                    EquipmentCode = e.Code,
                    UpaCode = e.MasterAsset.UpaCode,
                    EquipmentName = e.MasterAsset.Name,
                    EquipmentNameAr = e.MasterAsset.NameAr,
                    EquipmentType = e.Type,
                    InstallationDate = e.InstallationDate,
                    HealthCareUnitId = e.HospitalId,
                    HealthCareUnitName = e.Hospital.Name,
                    HealthCareUnitNameAr = e.Hospital.NameAr,
                    Remarks = e.Remarks,
                    SerialNumber = e.SerialNumber,
                    InternalCode = e.Barcode,
                    Barcode = e.Barcode,                 
                    MasterEquipmentId = e.MasterAssetId,
                    EquipmentStatuSId = e.StatusId,
                    ManufacturerId = e.MasterAsset.BrandId,
                    ManufacturerName = _context.Brands.Where(m => m.Id == e.MasterAsset.BrandId).FirstOrDefault().Name,
                    ManufacturerNameAr = _context.Brands.Where(m => m.Id == e.MasterAsset.BrandId).FirstOrDefault().NameAr,
                    EmployeeIDs = _context.Employees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                    OrganizationName = _context.Organizations.Where(org => org.Id == e.Hospital.organizationId).Select(org => org.Name).FirstOrDefault(),
                    OrganizationNameAr = _context.Organizations.Where(org => org.Id == e.Hospital.organizationId).Select(org => org.NameAr).FirstOrDefault(),
                    OrganizationId = e.Hospital.organizationId
                }).ToList();
            return equipmentList;

        }

        public List<EquipmentDTO> getEquipmentInContract(List<int> Ids)
        {
            List<EquipmentDTO> equipments = new List<EquipmentDTO>();
            foreach (var id in Ids)
            {
                var e = _context.Assets
               .Include(e => e.Department)
               .Include(e => e.Status)
               .Include(e => e.Supplier)
               .Include(e => e.MasterAsset)
               .Include(e => e.Contract)
               .Include(e=>e.Hospital).ThenInclude(h=>h.City).ThenInclude(d=>d.Governorate)
               .Include(e => e.equipmentEmployees).FirstOrDefault(e => e.Id == id);
                if (e == null)
                {
                    return null;
                }
                var eq = new EquipmentDTO
                {
                    Id = e.Id,
                    EquipmentCode = e.Code,
                    EquipmentName = e.MasterAsset.Name,
                    EquipmentType = e.Type,
                    InstallationDate = e.InstallationDate,
                    HealthCareUnitId = e.HospitalId,
                    SerialNumber = e.SerialNumber,
                    InternalCode = e.Barcode,
                    Barcode = e.Barcode,
                    PurchaseDate = e.PurchaseDate,
                    ManufacturerId = e.MasterAsset.BrandId,
                    DepartmentId = e.DepartmentId,
                    DepartmentName=e.Department.Name,
                    DepartmentNameAr=e.Department.NameAr,
                    SupplierId = e.SupplierId,
                    SupplierName = e.Supplier.Name,
                    SupplierNameAr = e.Supplier.NameAr,
                    HealthDirectoryId = e.Hospital.Governorate.Id,
                    HealthDirectoryName = e.Hospital.Governorate.Name,
                    HealthDistrictId = e.Hospital.City.Id,
                    HealthDistrictName = e.Hospital.City.Name,
                    HealthCareUnitName=e.Hospital.Name,
                    HealthCareUnitNameAr=e.Hospital.NameAr,
                    ManufacturerName = _context.Brands.Where(m => m.Id == e.MasterAsset.BrandId).FirstOrDefault().Name,
                    ManufacturerNameAr = _context.Brands.Where(m => m.Id == e.MasterAsset.BrandId).FirstOrDefault().NameAr,
                    EmployeeIDs = _context.Employees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
                    ContractId = e.ContractId
                };
                equipments.Add(eq);
            }
            return equipments;
        }

        public List<EquipmentDTO> EquipmentInContract(int cId)
        {
            List<EquipmentDTO> equips = new List<EquipmentDTO>();
            var equipment = _context.Assets
               .Include(e => e.Department)
               .Include(e => e.Status)
               .Include(e => e.Supplier)
               .Include(e => e.MasterAsset)
               .Include(e => e.Contract)
               .Include(e=>e.Hospital).ThenInclude(h=>h.City).ThenInclude(d=>d.Governorate)
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
                    EquipmentCode = e.Code,
                    EquipmentName = e.MasterAsset.Name,
                    EquipmentType = e.MasterAsset.NameAr,
                    InstallationDate = e.InstallationDate,
                    HealthCareUnitId = e.HospitalId,
                    SerialNumber = e.SerialNumber,
                    InternalCode = e.Barcode,
                    Barcode = e.Barcode,
                    PurchaseDate = e.PurchaseDate,
                    ManufacturerId = e.MasterAsset.BrandId,
                    ManufacturerName = _context.Brands.Where(m => m.Id == e.MasterAsset.BrandId).FirstOrDefault().Name,
                    ManufacturerNameAr = _context.Brands.Where(m => m.Id == e.MasterAsset.BrandId).FirstOrDefault().NameAr,
                    OrganizationName = _context.Organizations.Where(o => o.Id == e.Hospital.organizationId).FirstOrDefault().Name,
                    OrganizationNameAr = _context.Organizations.Where(o => o.Id == e.Hospital.organizationId).FirstOrDefault().NameAr,
                    HealthCareUnitName = e.Hospital.Name,
                    HealthCareUnitNameAr = e.Hospital.NameAr,
                    SupplierId = e.SupplierId,
                    SupplierName = e.Supplier.Name,
                    SupplierNameAr = e.Supplier.NameAr,
                    HealthDirectoryId = e.Hospital.Governorate.Id,
                    HealthDirectoryName = e.Hospital.Governorate.Name,
                    HealthDistrictId = e.Hospital.City.Id,
                    HealthDistrictName = e.Hospital.City.Name,
                    EmployeeIDs = _context.Employees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
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
            var equipments = _context.Assets.Where(e=>e.HospitalId==hosId && e.ContractRequestId==null)
                .Include(e=>e.Hospital).ThenInclude(e=>e.City).ThenInclude(e=>e.Governorate)
                .Include(e => e.Supplier)
                .Include(e=>e.MasterAsset).ThenInclude(m=>m.Brand)
                .ToList();
                foreach (var e in equipments)
                {
                    var equip = new EquipmentDTO
                    {
                        Id = e.Id,
                        EquipmentCode = e.Code,
                        UpaCode=e.MasterAsset.UpaCode,
                        ManufacturerName=e.MasterAsset.Brand.Name,
                        ManufacturerNameAr=e.MasterAsset.Brand.NameAr,
                        ModelNumber=e.MasterAsset.ModelNumber,
                        SerialNumber=e.SerialNumber,
                        EquipmentName = e.MasterAsset.Name,
                        EquipmentType = e.Type,
                        InstallationDate = e.InstallationDate,
                        HealthCareUnitId = e.HospitalId,
                        InternalCode = e.Barcode,
                        Barcode = e.Barcode,
                        PurchaseDate = e.PurchaseDate,
                        HealthCareUnitName = e.Hospital.Name,
                        HealthCareUnitNameAr = e.Hospital.NameAr,
                        SupplierId = e.SupplierId,
                        SupplierName = e.Supplier.Name,
                        SupplierNameAr = e.Supplier.NameAr,
                        HealthDirectoryId = e.Hospital.Id,
                        HealthDirectoryName = e.Hospital.Governorate.Name,
                        HealthDistrictId = e.Hospital.CityId,
                        HealthDistrictName = e.Hospital.City.Name,
                        EmployeeIDs = _context.Employees.Where(a => a.EquipmentId == e.Id).Select(a => a.UserId).ToList(),
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
