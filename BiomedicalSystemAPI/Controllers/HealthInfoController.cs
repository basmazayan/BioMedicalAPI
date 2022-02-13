﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BiomedicalSystemAPI.Repositories;
using BiomedicalSystemAPI.Models.HealthAppContext;
using BiomedicalSystemAPI.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Wkhtmltopdf.NetCore;

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
        public IEnumerable<DepartmemtByHospitalCodeViewModels> GetDepartmantsData(getMultiIDViewModel model)
        {
            return _dbAccessLayer.GetDepartmants(model);
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
        public IEnumerable<SubOrganizationViewModel>GetSubOrginisations(getMultiIDViewModel model)
        {
            return _dbAccessLayer.GetSubOrganizationDetails(model);
        }
        
        [HttpPost("GetBrands")]
        public IEnumerable<ManFactureViewModel> GetBrands(getMultiIDViewModel model)
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
        public IEnumerable<SupplierViewModel> GetSuppliers(getMultiIDViewModel model)
        {
            return _dbAccessLayer.GetSuppliersDetails(model);
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
    }
}
