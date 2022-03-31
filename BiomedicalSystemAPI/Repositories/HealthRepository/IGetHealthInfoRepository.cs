using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BiomedicalSystemAPI.ViewModels;
using BiomedicalSystemAPI.Models.HealthAppContext;
using BiomedicalSystemAPI.Models;
using System;
using BiomedicalSystemAPI.DTO;

namespace BiomedicalSystemAPI.Repositories
{
    public interface IGetHealthInfoRepository
    {
        IEnumerable<HealthCareDevicesViewModels> GetHealthCareData(int hospitalID, int departmantId);
        IEnumerable<DepartmemtByHospitalCodeViewModels> GetDepartmant(int id);
        IEnumerable<HealthCareDevicesViewModels> GetDeviceData(int id);
        IEnumerable<HealthCareUnit> GetHospitalData(int id);
        IEnumerable<OrganizationViewModel> GetOrganizationDetails(getMultiIDViewModel model);
        IEnumerable<SubOrganizationViewModel> GetSubOrganizationDetails(int []orgId);
      //  IEnumerable<HealthCareUnit> GetHospitalsBySubOrginizationsDetails(getMultiIDViewModel model);
        IEnumerable<HealthCareUnit> GetHospitalsByOrginizationsDetails(getMultiIDViewModel model);
        IEnumerable<ManFactureViewModel> GetBrandsetails(int []model);
        IEnumerable<SupplierViewModel> GetSuppliersDetails(string[] hosCodesInBrand);
        IEnumerable<InstallDateViewModel> GetInstallDateetails(int id);
        IEnumerable<PriceViewModel> GetPricetails(int id);
        IEnumerable<DepartmemtByHospitalCodeViewModels> GetDepartmants(int[] orgIds);
        public IEnumerable<Hospital> GetHospitalInCity(string[] model);
    //    public IEnumerable<Hospital> GetHospitalsInOrganization(int[] orgIds);
        public IEnumerable<Hospital> GetHospitalInSubOrganization(int[] subOrgIds);
        public IEnumerable<Hospital> GetHospitalInDepartment(int[] DeptIds);
        public IEnumerable<Hospital> GetHospitalsBySupplier(int[] supplierIds);
        public IEnumerable<Hospital> GetPriceRange(decimal FPrice, decimal ToPrice);
        public IEnumerable<Hospital> GetDateRange(dateVM dates);
    }
}