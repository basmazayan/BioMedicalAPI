using System;
using System.Collections.Generic;
using System.Linq;
using BiomedicalSystemAPI.Models.HealthAppContext;
using BiomedicalSystemAPI.ViewModels;
using Microsoft.EntityFrameworkCore;
using BiomedicalSystemAPI.Repositories;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Interface;
using BiomedicalSystemAPI.DTO;

namespace BiomedicalSystemAPI.Repositories.HealthRepository
{
    public class GetHealthInfoRepository : IGetHealthInfoRepository
    {
        private readonly BioMedEquipmentDBContext _context;
        private readonly ApplicationDbContext _BioContext;
        //private readonly AssetDbContext _AssetContext;
        public GetHealthInfoRepository(BioMedEquipmentDBContext context, ApplicationDbContext BioContext)
        {
            _context = context;
            _BioContext = BioContext;
            //_AssetContext = AssetContext;
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
            var equipment = _BioContext.Assets
                .Include(e=>e.MasterAsset)
                .Where(e => e.HospitalId == hospitalId && e.DepartmentId == departmantId)
                .Select(equip=>new 
                {
                    HospitalArName = equip.Hospital.NameAr,
                    HospitalEngName = equip.Hospital.Name,
                    DepartmentArName = equip.Department.NameAr,
                    DeviceArName = equip.MasterAsset.NameAr,
                    DeviceEngName = equip.MasterAsset.Name,
                    DeviceInternData = equip.InstallationDate.ToString(),
                    DeviceModel = equip.MasterAsset.ModelNumber,
                    DevicePrice = equip.Price.ToString(),
                    HospitalId = equip.Hospital.Id,
                    PurchaseDate = equip.PurchaseDate.ToString(),
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

        public IEnumerable<HealthCareUnit> GetHospitalData(int id)
        {
            return _context.HealthCareUnits.Where(x => x.Code == id.ToString()).ToList();
        }
        public IEnumerable<Hospital> GetHospitalInCity(string[] modelID)
        {
            var hospitalLst = new List<Hospital>();
            foreach (var cityCode in modelID)
            {
                var city = _BioContext.Cities.Where(c => c.Code == cityCode).FirstOrDefault();
                if(city!=null)
                {
                    var hos = _BioContext.Hospitals.Where(h => h.CityId ==city.Id).ToList();
                    hospitalLst.AddRange(hos);
                }
            }
            return hospitalLst;
        }
        public IEnumerable<Hospital> GetHospitalInSubOrganization(int[] subOrgIds)
        {
            var hospitalLst = new List<Hospital>();
            foreach (var id in subOrgIds)
            {
                var hos = _BioContext.Hospitals.Where(h => h.SuborganizationId == id).ToList();
                hospitalLst.AddRange(hos);
            }
            return hospitalLst;
        }

        //public IEnumerable<Hospital> GetHospitalsInOrganization(int[] orgIds)
        //{
        //    var hospitalLst = new List<Hospital>();
        //    foreach (var orgid in orgIds)
        //    {
        //        var hos = _BioContext.Hospitals.Where(h => h.organizationId == orgid).ToList();
        //        hospitalLst.AddRange(hos);
        //    }
        //    return hospitalLst;
        //}
        public IEnumerable<OrganizationViewModel> GetOrganizationDetails(getMultiIDViewModel modelID)
        {
            var orgComparer = new Interface.Comparer<OrganizationViewModel>("Id");
            var query = (from a in _BioContext.Hospitals
                         join b in _BioContext.SubOrganizations
                         on a.SuborganizationId equals b.Id
                         join c in _BioContext.Organizations
                         on b.organizationId equals c.Id
                         where modelID.Id.Contains(a.City.Code)                         
                         select new
                         {
                             Id = c.Id,
                             orgName = c.Name,
                             orgNameAr = c.NameAr,
                             HospitalCode = a.Code,
                             subOrgId=b.Id,
                             code=a.City.Code
                         }).AsEnumerable().Select(x => new OrganizationViewModel()
                        {

                            Id = x.Id,
                            Name = x.orgName,
                            NameAr = x.orgNameAr,
                            HospitalCode = x.HospitalCode,
                            subOrganizationId= x.subOrgId,
                            code=x.code
                         });
            return query.Distinct(orgComparer).ToList();
        }

        public IEnumerable<SubOrganizationViewModel> GetSubOrganizationDetails(int[] orgId)
        {
            var suborgs = new List<SubOrganizationViewModel>();
            if (orgId != null)
            {
                var query = (from a in _BioContext.Organizations
                            join b in _BioContext.SubOrganizations
                            on a.Id equals b.organizationId
                            where orgId.Contains(a.Id)
                            select new
                            {
                                subOrgName = b.Name,
                                subOrgNameAr = b.NameAr,
                                orgId=a.Id,
                                Id=b.Id,
                            }).AsEnumerable().Select(x => new SubOrganizationViewModel()
                            {
                                Name = x.subOrgName,
                                NameAr = x.subOrgNameAr,
                                OrganizationId = x.orgId,
                                Id = x.Id,
                            });
   
                return query.ToList();
            }
            return null;
        }

        //public IEnumerable<HealthCareUnit> GetHospitalsBySubOrginizationsDetails(getMultiIDViewModel modelID)
        //{
        //    // return _context.HealthCareUnits.Where(modelID.Id.Contains(x => x.SubOrganizationId));
        //    // var model = from a in _context.HealthCareUnits
        //    //     where modelID.Id.Contains(a.SubOrganizationId)

        //    // return _context.HealthCareUnits.Where(x => modelID.Id.Contains(x.SubOrganizationId)).ToList();    edit it
        //    return null;

        //}

        public IEnumerable<HealthCareUnit> GetHospitalsByOrginizationsDetails(getMultiIDViewModel modelID)
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
                }).AsEnumerable().Select(x => new HealthCareUnit()
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
            var BrandComparer = new Interface.Comparer<ManFactureViewModel>("Id");
            var brands = new List<ManFactureViewModel>();
            if(models!=null || models.Length !=0)
            {
                var query= (from d in _BioContext.Departments
                            join a in _BioContext.Assets
                            on d.Id equals a.DepartmentId
                            join m in _BioContext.masterAssets
                            on a.MasterAssetId equals m.Id
                            join b in _BioContext.Brands
                            on m.BrandId equals b.Id
                            where models.Contains(d.Id)
                            select new
                            {
                                BrandName = b.Name,
                                BrandNameAr = b.NameAr,
                                Id=b.Id,
                                HospitalCode=a.Hospital.Code
                            }).AsEnumerable().Select(x => new ManFactureViewModel()
                            {
                                Name = x.BrandName,
                                NameAr = x.BrandNameAr,
                                Id = x.Id,
                                HospitalCode=x.HospitalCode
                            });

                return query.Distinct(BrandComparer).ToList();
                //    foreach (var deptId in models)
                //    {
                //        var equipment = _BioContext.Assets.Include(e=>e.Hospital).Where(e => e.DepartmentId == deptId).ToList();
                //        foreach (var eq in equipment)
                //        {
                //            var masterEq = _BioContext.masterAssets.Where(meq => meq.Id == eq.MasterAssetId).FirstOrDefault();
                //            var brand = _BioContext.Brands.Where(m => m.Id == masterEq.BrandId).Select(b=>new 
                //            {
                //                brandNameAr=b.NameAr,
                //                brandNameEn=b.Name,
                //                HospitalCode=eq.Hospital.Code
                //            }).AsEnumerable().Select(x => new ManFactureViewModel()
                //            {
                //                ManFactureName = x.brandNameEn,
                //                ManFactureNameAr = x.brandNameAr,
                //                HospitalCode = x.HospitalCode,
                //            }).FirstOrDefault();
                //            if (brand != null)
                //            {
                //                bool containsItem = brands.Any(item => item.ManFactureName == brand.ManFactureName || item.ManFactureNameAr==brand.ManFactureNameAr);
                //                if (!containsItem)
                //                {
                //                    brands.Add(brand);
                //                }
                //            }
                //        }
                //    }
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
            return null;
        }

        public IEnumerable<SupplierViewModel> GetSuppliersDetails(string[] hosCodesInBrand)
        {
            var query = (from a in _BioContext.Assets
                         join h in _BioContext.Hospitals
                         on a.HospitalId equals h.Id
                         join s in _BioContext.Suppliers
                         on a.SupplierId equals s.Id
                         where hosCodesInBrand.Contains(h.Code)
                         select new
                         {
                             Name = s.Name,
                             NameAr = s.NameAr,
                             HospitalCod = h.Code,
                             Id = s.Id
                         }).AsEnumerable().Select(x => new SupplierViewModel
                         {
                             Name = x.Name,
                             NameAr = x.NameAr,
                             HospitalCode = x.HospitalCod,
                             Id = x.Id
                         });
            return query.ToList();
        }
        public IEnumerable<Hospital> GetHospitalsBySupplier(int[] supplierIds)
        {
            var query = (from a in _BioContext.Assets
                         join h in _BioContext.Hospitals
                         on a.HospitalId equals h.Id
                         join s in _BioContext.Suppliers
                         on a.SupplierId equals s.Id
                         where supplierIds.Contains(s.Id)
                         select new
                         {
                             name=h.Name,
                             nameAr=h.NameAr,
                             code=h.Code
                         }).AsEnumerable().Select(x => new Hospital
                         {
                             Name=x.name,
                             NameAr=x.nameAr,
                             Code=x.code
                         });
            return query.ToList();
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

        public IEnumerable<DepartmemtByHospitalCodeViewModels> GetDepartmants(int[] orgIds)
        {
            var DeptComparer = new Interface.Comparer<DepartmemtByHospitalCodeViewModels>("DepartmentID");
            if(orgIds != null)
            {
                var query = (from h in _BioContext.Hospitals
                        join s in _BioContext.SubOrganizations
                        on h.SuborganizationId equals s.Id
                        join a in _BioContext.Assets
                        on h.Id equals a.HospitalId
                        join d in _BioContext.Departments
                        on a.DepartmentId equals d.Id
                        where orgIds.Contains(s.Id)
                        select new
                        {
                            DeptId = d.Id,
                            DeptName = d.Name,
                            DeptNameAr = d.NameAr,
                            HospitalId = h.Id,
                            HospitalCode = h.Code,
                            
                        }).AsEnumerable().Select(x => new DepartmemtByHospitalCodeViewModels
                        {
                            DepartmentID = x.DeptId,
                            DepartmentArName = x.DeptNameAr,
                            DepartmentEngName = x.DeptName,
                            HospitalCode=x.HospitalCode,
                            HospitalID=x.HospitalId
                        });
                return query.ToList();

            }
          return null;
        }
        public IEnumerable<Hospital> GetHospitalInDepartment(int[] DeptIds)
        {
            var hos = (from h in _BioContext.Hospitals
                       join a in _BioContext.Assets
                       on h.Id equals a.HospitalId
                       join d in _BioContext.Departments
                       on a.DepartmentId equals d.Id
                       where DeptIds.Contains(d.Id)
                       select new
                       {
                           hospitalName = h.Name,
                           hospitalId = h.Id,
                           hospitalCode = h.Code
                       }).AsEnumerable().Select(x => new Hospital
                       {
                           Name=x.hospitalName,
                           Id=x.hospitalId,
                           Code=x.hospitalCode
                       }).ToList();
            return hos;
        }

        public IEnumerable<Hospital> GetPriceRange(decimal FPrice, decimal ToPrice)
        {
            var hosList = new List<Hospital>();
            var Assets = new List<Assets>();
            if(FPrice==0)
            {
                Assets = _BioContext.Assets.Where(a => a.Price <= ToPrice).ToList();
            }
            else if(ToPrice==0)
            {
                Assets = _BioContext.Assets.Where(a => a.Price >= FPrice).ToList();
            }
            else
            {
                Assets = _BioContext.Assets.Where(a => a.Price >= FPrice && a.Price <= ToPrice).ToList();
            }
            foreach (var Asset in Assets)
            {
                var hos = _BioContext.Hospitals.Where(h => h.Id == Asset.HospitalId).FirstOrDefault();
                if(!hosList.Any(hospital=> hospital .Id== hos.Id))
                {
                    hosList.Add(hos);
                }
            }
            return hosList;
        }
        public IEnumerable<Hospital> GetDateRange(dateVM dates)
        {
            var hosList = new List<Hospital>();
            var Assets = new List<Assets>();
            if (dates.from==null)
            {
                Assets = _BioContext.Assets.Where(a => a.InstallationDate<= dates.to).ToList();
            }
            else if (dates.to == null)
            {
                Assets = _BioContext.Assets.Where(a => a.InstallationDate >= dates.from).ToList();
            }
            else
            {
                Assets = _BioContext.Assets.Where(a => a.InstallationDate >= dates.from && a.InstallationDate <= dates.to).ToList();
            }
            foreach (var Asset in Assets)
            {
                var hos = _BioContext.Hospitals.Where(h => h.Id == Asset.HospitalId).FirstOrDefault();
                if (!hosList.Any(hospital => hospital.Id == hos.Id))
                {
                    hosList.Add(hos);
                }
            }
            return hosList;
        }
    }
}
