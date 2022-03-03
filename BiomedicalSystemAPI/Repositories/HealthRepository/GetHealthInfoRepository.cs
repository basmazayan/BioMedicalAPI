using System;
using System.Collections.Generic;
using System.Linq;
using BiomedicalSystemAPI.Models.HealthAppContext;
using BiomedicalSystemAPI.ViewModels;
using Microsoft.EntityFrameworkCore;
using BiomedicalSystemAPI.Repositories;
using BiomedicalSystemAPI.Models;

namespace BiomedicalSystemAPI.Repositories.HealthRepository
{
    public class GetHealthInfoRepository : IGetHealthInfoRepository
    {
        private readonly BioMedEquipmentDBContext _context;
        private readonly ApplicationDbContext _BioContext;
        public GetHealthInfoRepository(BioMedEquipmentDBContext context, ApplicationDbContext BioContext)
        {
            _context = context;
            _BioContext = BioContext;
        }

        public IEnumerable<DepartmemtByHospitalCodeViewModels> GetDepartmant(int id)
        {

            if (id == 0)
            {
                return null;
            }

            var model = (
                from a in _context.HealthCareUnitEquipments
                join b in _context.HealthCareUnits
                    on a.HealthCareUnitId equals b.Id
                join c in _context.Departments
                    on a.DepartmentId equals c.Id
                where a.HealthCareUnitId == id
                select new
                {
                    HospitalArName = b.NameAr,
                    HospitalEngName = b.Name,
                    HospitalID = b.Id,
                    DepartmentArName = c.NameAr,
                    DepartmentEngName = c.Name,
                    DepartmentID = c.Id,
                }).AsEnumerable().Select(x => new DepartmemtByHospitalCodeViewModels()
            {
                HospitalArName = x.DepartmentArName,
                HospitalEngName = x.HospitalEngName,
                DepartmentArName = x.DepartmentArName,
                DepartmentEngName = x.DepartmentEngName,
                HospitalID = x.HospitalID,
                DepartmentID = x.DepartmentID
            });

            var uniq = model.GroupBy(x => x.DepartmentArName).Select(y => y.First()).Distinct();
            return uniq;
        }

        public IEnumerable<HealthCareDevicesViewModels> GetDeviceData(int id)
        {
            var model = (from a in _context.HealthCareUnitEquipments
                join b in _context.HealthCareUnits
                    on a.HealthCareUnitId equals b.Id
                join c in _context.Departments
                    on a.DepartmentId equals c.Id
                join f in _context.EquipmentCatalogs
                    on a.EquipmentCatalogId equals f.Id
                where f.Id == id
                select new
                {
                    HospitalArName = b.NameAr,
                    HospitalEngName = b.Name,
                    DepartmentArName = c.NameAr,
                    DeviceArName = f.NameAr,
                    DeviceEngName = f.Name,
                    DeviceId = f.Id,
                    DeviceInternData = a.InstallationDate,
                    PurchaseDate = a.PurchaseDate,
                    DeviceModel = f.Model,
                    DevicePrice = a.Price,
                    hospitalId = a.HealthCareUnitId
                }).AsEnumerable().Select(x => new HealthCareDevicesViewModels()
            {
                HospitalArName = x.HospitalArName,
                DeviceId = x.DeviceId,
                HospitalEngName = x.HospitalEngName,
                PurchaseDate = x.PurchaseDate.ToString(),
                DepartmentArName = x.DepartmentArName,
                DeviceArName = x.DeviceArName,
                DeviceEngName = x.DeviceEngName,
                DeviceInternData = x.DeviceInternData.ToString(),
                DeviceModel = x.DeviceModel,
                DevicePrice = x.DevicePrice.ToString(),
                HospitalId = x.hospitalId
            });
            var uniq = model.GroupBy(x => x.HospitalId).Select(y => y.First()).Distinct();
            return uniq;
        }

        public IEnumerable<HealthCareDevicesViewModels> GetHealthCareData(int hospitalId, int departmantId)
        {
            if (hospitalId == 0 || departmantId == 0)
            {
                return null;
            }
            var equipment = _BioContext.Equipments.Where(e => e.HealthCareUnitId == hospitalId && e.DepartmentId == departmantId)
                .Select(equip=>new 
                {
                    HospitalArName = equip.HealthCareUnit.HealthCareUnitNameAr,
                    HospitalEngName = equip.HealthCareUnit.HealthCareUnitName,
                    DepartmentArName = equip.Department.DepartmentNameAr,
                    DeviceArName = equip.EquipmentNameAr,
                    DeviceEngName = equip.EquipmentName,
                    DeviceInternData = equip.InstallationDate.ToString("dd-MM-yyyy"),
                    DeviceModel = equip.MasterEquipment.ModelNumber,
                    DevicePrice = equip.Price.ToString(),
                    HospitalId = equip.HealthCareUnit.Id,
                    PurchaseDate = equip.PurchaseDate.ToString("dd-MM-yyyy"),
                    DeviceId =equip.Id
                }).AsEnumerable().Select(x => new HealthCareDevicesViewModels()
                {
                    HospitalArName = x.HospitalArName,
                    HospitalEngName = x.HospitalEngName,
                    DepartmentArName = x.DepartmentArName,
                    DeviceArName = x.DeviceArName,
                    DeviceEngName = x.DeviceEngName,
                    DeviceInternData = x.DeviceInternData,
                    DeviceModel = x.DeviceModel,
                    DevicePrice = x.DevicePrice.ToString(),
                    HospitalId = x.HospitalId,
                    PurchaseDate = x.PurchaseDate,
                    DeviceId = x.DeviceId
                }).ToList();
            //var model = (
            //    from a in _context.HealthCareUnitEquipments
            //    join b in _context.HealthCareUnits
            //        on a.HealthCareUnitId equals b.Id
            //    join c in _context.Departments
            //        on a.DepartmentId equals c.Id
            //    join f in _context.EquipmentCatalogs
            //        on a.EquipmentCatalogId equals f.Id
            //    where a.HealthCareUnitId == hospitalId
            //    where a.DepartmentId == departmantId
            //    select new
            //    {
            //        HospitalArName = b.NameAr,
            //        HospitalEngName = b.Name,
            //        DepartmentName = c.NameAr,
            //        DeviceArName = f.NameAr,
            //        DeviceEngName = f.Name,
            //        DeviceInternData = a.InstallationDate,
            //        DeviceModel = f.Model,
            //        PurchaseDate = a.PurchaseDate,
            //        DevicePrice = a.Price,
            //        hospitalId = a.HealthCareUnitId,
            //        DeviceId = f.Code
            //    }).AsEnumerable().Select(x => new HealthCareDevicesViewModels()
            //{
            //    HospitalArName = x.HospitalArName,
            //    HospitalEngName = x.HospitalEngName,
            //    DepartmentArName = x.DepartmentName,
            //    DeviceArName = x.DeviceArName,
            //    DeviceEngName = x.DeviceEngName,
            //    DeviceInternData = x.DeviceInternData.ToString("dd-MM-yyyy"),
            //    DeviceModel = x.DeviceModel,
            //    DevicePrice = x.DevicePrice.ToString(),
            //    HospitalId = x.hospitalId,
            //    PurchaseDate = x.PurchaseDate.ToString("dd-MM-yyyy"),
            //    DeviceId = x.DeviceId
            //});
            return equipment;
        }

        public IEnumerable<Models.HealthAppContext.HealthCareUnit> GetHospitalData(int id)
        {
            return _context.HealthCareUnits.Where(x => x.Code == id.ToString()).ToList();
        }

        public IEnumerable<OrganizationViewModel> GetOrganizationDetails(getMultiIDViewModel modelID)
        {
            var organizations = new List<OrganizationViewModel>();
            var m = new List<Models.HealthAppContext.HealthCareUnit>();
            if(modelID.Id!=null)
            {
               foreach (var id in modelID.Id)
               {
                    var city = _BioContext.HealthDistricts.Where(hd => hd.HealthDistrictCode == id).FirstOrDefault();
                    if(city!=null)
                    {
                        var hospitals = _BioContext.HealthCareUnits.Where(h => h.HealthDistrictId == city.Id).ToList();
                        foreach (var item in hospitals)
                        {
                            var organization = _BioContext.organizations.Where(o => o.Id == item.organizationId).Select(d => new
                        {
                                OrginizationsEn = d.Name,
                                OrginizationsAr = d.NameAr,
                                Id = d.Id,
                                HospitalId = item.HealthCareUnitCode
                            }).Select(x => new OrganizationViewModel()
                            {
                                Name = x.OrginizationsEn,
                                NameAr = x.OrginizationsAr,
                                HospitalId = x.HospitalId,
                                Id = x.Id,

                            }).FirstOrDefault();
                        bool containsItem = organizations.Any(item => item.Id == organization.Id);
                        if(!containsItem)
                        {
                             organizations.Add(organization);
                        }
                    }
                }
            }
            }
            //var model = (
            //    from a in _context.HealthCareUnits
            //    join b in _context.SubOrganizations
            //        on a.SubOrganizationId equals b.Id
            //    join c in _context.Organizations
            //        on b.OrganizationId equals c.Id
            //    // where a.HealthDistrictId == id
            //    where modelID.Id.Contains(a.HealthDistrict.Code)

            //    select new
            //    {
            //        OrginizationsEn = c.Name,
            //        OrginizationsAr = c.NameAr,
            //        Id = c.Id,
            //        HospitalId = a.Code,
            //        HealthDistrict=
                    
            //    }).AsEnumerable().Select(x => new OrganizationViewModel()
            //    {

            //        Name = x.OrginizationsEn,
            //        NameAr = x.OrginizationsAr,
            //        HospitalId = x.HospitalId,
            //        Id = x.Id
            //    });
            //return model.ToList();
            return organizations;
        }

        public IEnumerable<SubOrganizationViewModel> GetSubOrganizationDetails(getMultiIDViewModel modelID)
        {
            var suborgs = new List<SubOrganizationViewModel>();
            if(modelID.Id!=null)
            {
                 foreach (var code in modelID.Id)
                 {
                        if(code!=null)
                        {
                            var hospital = _BioContext.HealthCareUnits.Where(h => h.HealthCareUnitCode == code).FirstOrDefault();
                            var organization = _BioContext.organizations.Where(o => o.Id == hospital.organizationId).FirstOrDefault();
                            var subOrganization=_BioContext.subOrganizations.Where(s=>s.organizationId==organization.Id).Select(sub=> new
                            {
                                OrginizationsEn = sub.Name,
                                OrginizationsAr = sub.NameAr,
                                organizationId = sub.organizationId,
                                HospitaIds = hospital.HealthCareUnitCode,
                                Id = sub.Id
                            }).AsEnumerable().Select(x => new SubOrganizationViewModel()
                            {
                                Name = x.OrginizationsEn,
                                NameAr = x.OrginizationsAr,
                                OrganizationId = x.organizationId,
                                HospitaIds = x.HospitaIds,
                                Id = x.Id
                            }).FirstOrDefault();
                            if(subOrganization!=null)
                            {
                                bool containsItem = suborgs.Any(item => item.Id == subOrganization.Id);
                                if (!containsItem)
                                {
                                    suborgs.Add(subOrganization);
                                }
                            }

                        }
                 }
            }
            //var model = (
            //    from a in _context.Organizations
            //    join b in _context.SubOrganizations
            //        on a.Id equals b.OrganizationId
                    
            //    join bH in _context.HealthCareUnits
            //        on b.Id equals bH.SubOrganizationId
                    
            //    //where modelID.Id.Contains(a.Id) 
            //    select new
            //    {
            //        OrginizationsEn = b.Name,
            //        OrginizationsAr = b.NameAr,
            //        organizationId = b.OrganizationId,
            //        HospitaIds = bH.Code,
            //        Id=b.Id
            //    }).AsEnumerable().Select(x => new SubOrganizationViewModel()
            //{
            //    Name = x.OrginizationsEn,
            //    NameAr = x.OrginizationsAr,
            //    OrganizationId = x.organizationId,
            //  HospitaIds = x.HospitaIds,
            //  Id = x.Id
            //});
            return suborgs;
        }

        public IEnumerable<Models.HealthAppContext.HealthCareUnit> GetHospitalsBySubOrginizationsDetails(getMultiIDViewModel modelID)
        {
            // return _context.HealthCareUnits.Where(modelID.Id.Contains(x => x.SubOrganizationId));
            // var model = from a in _context.HealthCareUnits
            //     where modelID.Id.Contains(a.SubOrganizationId)

            // return _context.HealthCareUnits.Where(x => modelID.Id.Contains(x.SubOrganizationId)).ToList();    edit it
            return null;

        }

        public IEnumerable<Models.HealthAppContext.HealthCareUnit> GetHospitalsByOrginizationsDetails(getMultiIDViewModel modelID)
        {
            var model = (
                from a in _context.HealthCareUnits
                join b in _context.SubOrganizations
                    on a.SubOrganizationId equals b.Id
                join c in _context.Organizations
                    on b.OrganizationId equals c.Id
              //  where modelID.Id.Contains(c.Id )   edit it
                select new
                {
                    HospitalName = a.Name,
                    HospitalNameAr = a.NameAr,
                    Code = a.Code,
                    SubOrganizationId = a.SubOrganizationId
                }).AsEnumerable().Select(x => new Models.HealthAppContext.HealthCareUnit()
            {
                Code = x.Code,
                Name = x.HospitalName,
                NameAr = x.HospitalNameAr,
                SubOrganizationId = x.SubOrganizationId
            });
            return model.ToList();
        }

        public IEnumerable<ManFactureViewModel> GetBrandsetails(int[] models)
        {
            var brands = new List<ManFactureViewModel>();
            if(models!=null || models.Length !=0)
            {
                foreach (var deptId in models)
                {
                    var equipment = _BioContext.Equipments.Include(e=>e.HealthCareUnit).Where(e => e.DepartmentId == deptId).ToList();
                    foreach (var eq in equipment)
                    {
                        var masterEq = _BioContext.masterEquipments.Where(meq => meq.Id == eq.MasterEquipmentId).FirstOrDefault();
                        var brand = _BioContext.Manufacturers.Where(m => m.Id == masterEq.ManufacturerId).Select(b=>new 
                        {
                            brandNameAr=b.ManufacturerNameAr,
                            brandNameEn=b.ManufacturerName,
                            HospitalCode=eq.HealthCareUnit.HealthCareUnitCode
                        }).AsEnumerable().Select(x => new ManFactureViewModel()
                        {
                            ManFactureName = x.brandNameEn,
                            ManFactureNameAr = x.brandNameAr,
                            HospitalCode = x.HospitalCode,
                        }).FirstOrDefault();
                        if (brand != null)
                        {
                            bool containsItem = brands.Any(item => item.ManFactureName == brand.ManFactureName || item.ManFactureNameAr==brand.ManFactureNameAr);
                            if (!containsItem)
                            {
                                brands.Add(brand);
                            }
                        }
                    }
                }
            }
            //var model = (
            //    from a in _context.HealthCareUnitEquipments
            //    join b in _context.EquipmentCatalogs
            //        on a.EquipmentCatalogId equals b.Id
            //    join c in _context.Manufacturers
            //        on b.ManufacturerId equals c.Id
            ////    where modelID.Id.Contains(a.HealthCareUnitId)   edit it
            //    select new 
            //    {
            //        ManufacturerName = c.Name,
            //        ManufacturerNameAr = c.NameAr,
            //        HospitalCode = a.HealthCareUnitId,
            //    }).AsEnumerable().Select(x => new ManFactureViewModel()
            //{
            //    ManFactureName = x.ManufacturerName,
            //    ManFactureNameAr = x.ManufacturerNameAr,
            //    HospitalCode = x.HospitalCode.ToString()
            //});
            //var uniq = model.GroupBy(x => x.ManFactureName).Select(y => y.First()).Distinct();
            return brands;
        }

        public IEnumerable<SupplierViewModel> GetSuppliersDetails(getMultiIDViewModel modelID)
        {
            var suppliers = new List<SupplierViewModel>();
            foreach (var code in modelID.Id)
            {
                var hospital = _BioContext.HealthCareUnits.Where(h => h.HealthCareUnitCode == code).FirstOrDefault();
                var equipment = _BioContext.Equipments.Where(e => e.HealthCareUnitId == hospital.Id).ToList();
                foreach (var eq in equipment)
                {
                    var supplier = _BioContext.Suppliers.Where(s => s.Id == eq.SupplierId).Select(sup => new
                    {
                        Name=sup.SupplierName,
                        NameAr=sup.SupplierNameAr,
                        HospitalCod=eq.HealthCareUnit.HealthCareUnitCode,
                        Id=sup.Id
                    }).AsEnumerable().Select(x => new SupplierViewModel()
                    {
                        Name = x.Name,
                        NameAr=x.NameAr,
                        HospitalCode=x.HospitalCod,
                        Id=x.Id
                    }).FirstOrDefault();
                    if (supplier != null)
                    {
                        bool containsItem = suppliers.Any(item => item.HospitalCode == supplier.HospitalCode);
                        if (!containsItem)
                        {
                            suppliers.Add(supplier);
                        }
                    }
                }
            }
            //var model = (
            //    from a in _context.HealthCareUnitEquipments
            //    join b in _context.Suppliers
            //        on a.SupplierId equals b.Id

            // //   where modelID.Id.Contains(a.HealthCareUnitId)  edit it

            //    select new
            //    {
            //        Name = b.Name,
            //        id = b.Id,
            //        hospitalCode = a.HealthCareUnitId
            //    }).AsEnumerable().Select(x => new SupplierViewModel()
            //{
            //    Name = x.Name,
            //    HospitalCode = x.hospitalCode
            //});
            //var uniq = model.GroupBy(x => x.Name).Select(y => y.First()).Distinct();
            return suppliers;
        }

        public IEnumerable<InstallDateViewModel> GetInstallDateetails(int id)
        {
            var getData= _context.HealthCareUnitEquipments.Where(x => x.HealthCareUnitId == id);
            DateTime earliest = getData.Min(record => record.InstallationDate);
            DateTime latest   = getData.Max(record => record.InstallationDate);
        
            var model = (
                from a in _context.HealthCareUnitEquipments
              
                where a.HealthCareUnitId == id
                select new
                {
                    HospitalCode =a.HealthCareUnitId
                    
                }).AsEnumerable().Select(x => new InstallDateViewModel()
            {
                HospitalCode = x.HospitalCode,
                StartFrom = earliest,
                EndFrom = latest
            });
            var uniq = model.GroupBy(x => x.HospitalCode).Select(y => y.First()).Distinct();
            return uniq;
            
        }

        public IEnumerable<PriceViewModel> GetPricetails(int id)
        {
            var getData= _context.HealthCareUnitEquipments.Where(x => x.HealthCareUnitId == id);
            var earliest = getData.Min(record => record.Price);
            var latest   = getData.Max(record => record.Price);
        
            var model = (
                from a in _context.HealthCareUnitEquipments
              
                where a.HealthCareUnitId == id
                select new
                {
                    HospitalCode =a.HealthCareUnitId
                    
                }).AsEnumerable().Select(x => new PriceViewModel()
            {
                HospitalCode = x.HospitalCode,
                StartPrice = earliest,
                EndPrice = latest
            });
            var uniq = model.GroupBy(x => x.HospitalCode).Select(y => y.First()).Distinct();
            return uniq;

        }

        public IEnumerable<DepartmemtByHospitalCodeViewModels> GetDepartmants(getMultiIDViewModel models)
        {
            var departmentList = new List<DepartmemtByHospitalCodeViewModels>();
            if(models.Id!=null)
            {
                foreach (var code in models.Id)
            {
                var hospital = _BioContext.HealthCareUnits.Where(h => h.HealthCareUnitCode == code).FirstOrDefault();
                var eqiupment = _BioContext.Equipments.Where(e => e.HealthCareUnitId == hospital.Id).ToList();
                foreach (var eq in eqiupment)
                {
                    var department = _BioContext.Departments.Where(d => d.Id == eq.DepartmentId).Select(dept => new
                    {
                        HospitalArName = eq.HealthCareUnit.HealthCareUnitNameAr,
                        HospitalEngName = eq.HealthCareUnit.HealthCareUnitName,
                        HospitalCode = eq.HealthCareUnit.HealthCareUnitCode,
                        HospitalID= eq.HealthCareUnit.Id,
                        DepartmentArName = dept.DepartmentNameAr,
                        DepartmentEngName = dept.DepartmentName,
                        DepartmentID = dept.Id,
                    }).AsEnumerable().Select(x => new DepartmemtByHospitalCodeViewModels()
                    {
                        HospitalArName = x.HospitalArName,
                        HospitalEngName = x.HospitalEngName,
                        DepartmentArName = x.DepartmentArName,
                        DepartmentEngName = x.DepartmentEngName,
                        HospitalCode = x.HospitalCode,
                        HospitalID=x.HospitalID,
                        DepartmentID = x.DepartmentID
                    }).FirstOrDefault();
                    if (department != null)
                    {
                        bool containsItem = departmentList.Any(item => item.DepartmentID == department.DepartmentID);
                        if (!containsItem)
                        {
                            departmentList.Add(department);
                        }
                    };

                }
            }
            }
            //var model = (
            //    from a in _context.HealthCareUnitEquipments
            //    join b in _context.HealthCareUnits
            //        on a.HealthCareUnitId equals b.Id
            //    join c in _context.Departments
            //        on a.DepartmentId equals c.Id
                // where a.HealthCareUnitId == id
                
              //  where models.Id.Contains(a.HealthCareUnitId)  edit it
            //    select new
            //    {
            //        HospitalArName = b.NameAr,
            //        HospitalEngName = b.Name,
            //        HospitalID = b.Id,
            //        DepartmentArName = c.NameAr,
            //        DepartmentEngName = c.Name,
            //        DepartmentID = c.Id,
            //    }).AsEnumerable().Select(x => new DepartmemtByHospitalCodeViewModels()
            //{
            //    HospitalArName = x.DepartmentArName,
            //    HospitalEngName = x.HospitalEngName,
            //    DepartmentArName = x.DepartmentArName,
            //    DepartmentEngName = x.DepartmentEngName,
            //    HospitalID = x.HospitalID,
            //    DepartmentID = x.DepartmentID
            //});

            //var uniq = model.GroupBy(x => x.DepartmentArName).Select(y => y.First()).Distinct();
            return departmentList;
        }
    }
}
