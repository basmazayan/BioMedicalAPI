using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BiomedicalSystemAPI.Repositories;
using BiomedicalSystemAPI.Models.HealthAppContext;
using BiomedicalSystemAPI.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Wkhtmltopdf.NetCore;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.DTO;

namespace BiomedicalSystemAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HealthInfoController : ControllerBase
    {
        private IGeneratePdf _generatePdf;
        private readonly IGetHealthInfoRepository _dbAccessLayer;
        public HealthInfoController(IGetHealthInfoRepository dbAccessLayer)//, IGeneratePdf generatePdf)
        {
            _dbAccessLayer = dbAccessLayer;
         //   _generatePdf = generatePdf;
        }

        [HttpGet]
        [Route("GetHealthData")]
        public IEnumerable<HealthCareDevicesViewModels> GetHealthData(int hospitalId, int departmantId)
        {
            return _dbAccessLayer.GetHealthCareData(hospitalId, departmantId);
        }


        [HttpGet]
        [Route("GetDepartmantData")]
        public IEnumerable<DepartmemtByHospitalCodeViewModels> GetDepartmantData(int id)
        {
            return _dbAccessLayer.GetDepartmant(id);
        }
        
        [HttpPost]
        [Route("GetDepartmantsData")]
        public IEnumerable<DepartmemtByHospitalCodeViewModels> GetDepartmantsData(int[] orgIds)
        {
            return _dbAccessLayer.GetDepartmants(orgIds);
        }


        [HttpGet]
        [Route("GetDevice")]
        public IEnumerable<HealthCareDevicesViewModels> GetDevice(int id)
        {
            return _dbAccessLayer.GetDeviceData(id);
        }

        [HttpGet]
        [Route("GetHospitalDetails")]
        public IEnumerable<HealthCareUnit> GetHospitalDetails(int id)
        {
            return _dbAccessLayer.GetHospitalData(id);
        }
        [HttpPost("GetOrginisations")]
        public IEnumerable<OrganizationViewModel> GetOrginisations(getMultiIDViewModel model)
        {
            return _dbAccessLayer.GetOrganizationDetails(model);
        }
        
        [HttpPost("GetSubOrginisations")]
        public IEnumerable<SubOrganizationViewModel>GetSubOrginisations(int[] orgId)
        {
            return _dbAccessLayer.GetSubOrganizationDetails(orgId);
        }
        
        [HttpPost("GetBrands")]
        public IEnumerable<ManFactureViewModel> GetBrands(int[] model)
        {
            return _dbAccessLayer.GetBrandsetails(model);
        }
        
        // [HttpPost("GetHospitalsBySubOrginizations")]
        // public IEnumerable<HealthCareUnit> GetHospitalsBySubOrginizations(getMultiIDViewModel model)
        // {
        //     return _dbAccessLayer.GetHospitalsBySubOrginizationsDetails(model);
        // }
        
        // [HttpPost("GetHospitalsByOrginizations")]
        // public IEnumerable<HealthCareUnit> GetHospitalsByOrginizations(getMultiIDViewModel model)
        // {
        //     return _dbAccessLayer.GetHospitalsByOrginizationsDetails(model);
        // }
        
        [HttpPost("GetSuppliers")]
        public IEnumerable<SupplierViewModel> GetSuppliers(string[] hosCodesInBrand)
        {
            return _dbAccessLayer.GetSuppliersDetails(hosCodesInBrand);
        }
        
        [HttpGet("GetInstallDate")]
        public IEnumerable<InstallDateViewModel> GetInstallDate(int id)
        {
            return _dbAccessLayer.GetInstallDateetails(id);
        }
        
        [HttpGet("GetPrice")]
        public IEnumerable<PriceViewModel> GetPrice(int id)
        {
            return _dbAccessLayer.GetPricetails(id);
        }
        
        [HttpPost]
        [Route("GetReport")]
        public async Task<IActionResult> GetReport(GetReportViewModel model)
        {
            return await _generatePdf.GetPdf("views/Reports/GetReport.cshtml", model);
        }

        [HttpPost]
        [Route("GetReportEng")]
        public async Task<IActionResult> GetReportEng(GetReportViewModel model)
        {
            var options = new ConvertOptions
            {
                //HeaderHtml = "http://localhost/header.html",
                HeaderSpacing = 0,
                FooterSpacing = 0,
                // IsGrayScale = true,
                PageSize = Wkhtmltopdf.NetCore.Options.Size.A4,
                // PageMargins = new Wkhtmltopdf.NetCore.Options.Margins() { Bottom = 0, Left = 0, Right = 0, Top = 0 },
                PageOrientation = Wkhtmltopdf.NetCore.Options.Orientation.Portrait
            };
            _generatePdf.SetConvertOptions(options);

            return await _generatePdf.GetPdf("views/Reports/GetReportEng.cshtml", model);
        }
        [HttpPost]
        [Route("GetHospitalsInCity")]
        public IEnumerable<Hospital> GetHospitalsInCity(string[] cityCode)
        {
            return _dbAccessLayer.GetHospitalInCity(cityCode);
        }
        //[HttpPost]
        //[Route("GetHospitalsInOrganization")]
        //public IEnumerable<Hospital> GetHospitalsInOrganization(int[] OrgIds)
        //{
        //    return _dbAccessLayer.GetHospitalsInOrganization(OrgIds);
        //}
        [HttpPost]
        [Route("GetHospitalsInSubOrganization")]
        public IEnumerable<Hospital> GetHospitalsInSubOrganization(int[] subOrgIds)
        {
            return _dbAccessLayer.GetHospitalInSubOrganization(subOrgIds);
        }
        [HttpPost]
        [Route("GetHospitalsInDepartment")]
        public IEnumerable<Hospital> GetHospitalsInDepartment(int[] DeptIds)
        {
            return _dbAccessLayer.GetHospitalInDepartment(DeptIds);
        }
        [HttpPost]
        [Route("GetHospitalsBySupplier")]
        public IEnumerable<Hospital> GetHospitalsBySupplier(int[] supplierIds)
        {
            return _dbAccessLayer.GetHospitalsBySupplier(supplierIds);
        }
        [HttpGet]
        [Route("GetPriceRange")]
        public IEnumerable<Hospital> GetPriceRange(decimal FPrice, decimal ToPrice)
        {
            return _dbAccessLayer.GetPriceRange(FPrice, ToPrice);
        }
        [HttpPost]
        [Route("GetDateRange")]
        public IEnumerable<Hospital> GetDateRange(dateVM dates)
        {
            return _dbAccessLayer.GetDateRange(dates);
        }
    }
}

