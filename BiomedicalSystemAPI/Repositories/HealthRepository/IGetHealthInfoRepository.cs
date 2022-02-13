using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BiomedicalSystemAPI.ViewModels;
using BiomedicalSystemAPI.Models.HealthAppContext;

namespace BiomedicalSystemAPI.Repositories
{
    public interface IGetHealthInfoRepository
    {
        IEnumerable<HealthCareDevicesViewModels> GetHealthCareData(int hospitalID, int departmantId);
        IEnumerable<DepartmemtByHospitalCodeViewModels> GetDepartmant(int id);
        IEnumerable<HealthCareDevicesViewModels> GetDeviceData(int id);
        IEnumerable<HealthCareUnit> GetHospitalData(int id);
        IEnumerable<OrganizationViewModel> GetOrganizationDetails(getMultiIDViewModel model);
        IEnumerable<SubOrganizationViewModel> GetSubOrganizationDetails(getMultiIDViewModel model);
        IEnumerable<HealthCareUnit> GetHospitalsBySubOrginizationsDetails(getMultiIDViewModel model);
        IEnumerable<HealthCareUnit> GetHospitalsByOrginizationsDetails(getMultiIDViewModel model);
        IEnumerable<ManFactureViewModel> GetBrandsetails(getMultiIDViewModel model);
        IEnumerable<SupplierViewModel> GetSuppliersDetails(getMultiIDViewModel model);
        IEnumerable<InstallDateViewModel> GetInstallDateetails(int id);
        IEnumerable<PriceViewModel> GetPricetails(int id);
        IEnumerable<DepartmemtByHospitalCodeViewModels> GetDepartmants(getMultiIDViewModel model);
    }
}