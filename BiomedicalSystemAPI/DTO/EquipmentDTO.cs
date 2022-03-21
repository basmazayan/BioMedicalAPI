using BiomedicalSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.DTO
{
    public class EquipmentDTO
    {
        public int Id { get; set; }
        public string EquipmentCode { get; set; }
        public string EquipmentName { get; set; }
        public string EquipmentNameAr { get; set; }
        public string EquipmentType { get; set; }
        public DateTime? InstallationDate { get; set; }
        public string EquipmentDescription { get; set; }
        public string EquipmentDescriptionAr { get; set; }
        public string Remarks { get; set; }
        public int ManufacturerId { get; set; }
        public string SerialNumber { get; set; }
        public string InternalCode { get; set; }
        public string Barcode { get; set; }
        public string UpaCode { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public int SupplierId { get; set; }
        public string ModelNumber { get; set; }
        public string VersionNumber { get; set; }
        public string SupplierCode { get; set; }
        public string SupplierName { get; set; }
        public string SupplierNameAr { get; set; }
        public decimal? Price { get; set; }
        public DateTime WarrantyExpires { get; set; }
        public int ExpectedLifeTime { get; set; }
        public float Length { get; set; }
        public float Height { get; set; }
        public float Weight { get; set; }
        public string Color { get; set; }
        public string ColorAr { get; set; }
        public int HealthCareUnitId { get; set; }
        public string HealthCareUnitName { get; set; }
        public string HealthCareUnitNameAr { get; set; }
        public int? Room { get; set; }
        public int? Floor { get; set; }
        public int EquipmentStatuSId { get; set; }
        public string Status { get; set; }
        public string StatusName { get; set; }
        public string StatusNameAr { get; set; }
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        public string DepartmentNameAr { get; set; }
        public int HealthDirectoryId { get; set; }
        public string HealthDirectoryName { get; set; }
        public string HealthDirectoryNameAr { get; set; }
        public int HealthDistrictId { get; set; }
        public string HealthDistrictName { get; set; }
        public string HealthDistrictNameAr { get; set; }
        public DateTime ProductionYear { get; set; }
        public string CustomizedField { get; set; }
        public int? EquipmentId { get; set; }
        public int MasterEquipmentId { get; set; }
        public string ManufacturerName { get; set; }
        public string ManufacturerNameAr { get; set; }
        public int OrganizationId { get; set; }
        public string OrganizationName { get; set; }
        public string OrganizationNameAr { get; set; }
        public List<string> EmployeeIDs { get; set; }
      //  public List<int> AttachmentIDs { get; set; }
        public string QrImgPath { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string time { get; set; }
        public int? ContractRequestId { get; set; }
        public int? ContractId { get; set; }
        public int? OrganizationRequestId { get; set; }

        public int? EquipmentRecallId { get; set; }
        public DateTime ?RecallDate { get; set; }
        public int RecallNumber { get; set; }
    }

    public class BrandVM
    {
        public int Id { get; set; }
        public string BrandName { get; set; }
        public string BrandNameAr { get; set; }

        public List<EquipmentDTO> ListEquipment { get; set; }
    }
    public class EquipmentVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        public string BrandName { get; set; }
        public string BrandNameAr { get; set; }
        public string GovName { get; set; }
        public string GovNameAr { get; set; }
        public string DistrictName { get; set; }
        public string DistrictNameAr { get; set; }
        public string HospitalName { get; set; }
        public string HospitalNameAr { get; set; }
        public string SupplierName { get; set; }
        public string SupplierNameAr { get; set; }
        public string OrganizationName { get; set; }
        public string OrganizationNameAr { get; set; }
        public int HealthCareUnitId { get; set; }
        public DateTime PurchaseDate { get; set; }

    }
    public class HospitalVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        public List<EquipmentDTO> ListEquipment { get; set; }
    }
    public class GovernorateVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        public List<EquipmentDTO> ListEquipment { get; set; }
    }
    public class CityVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        public List<EquipmentDTO> ListEquipment { get; set; }
    }
    public class OrganizationVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        public List<EquipmentDTO> ListEquipment { get; set; }
    }
    public class SupplierVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        public List<EquipmentDTO> ListEquipment { get; set; }
    }
    public class filterDto
    {
        public int Id { get; set; }
        public string name { get; set; }
        public string brandName { get; set; }
        public string cityName { get; set; }
        public string hosName { get; set; }
        public string govName { get; set; }
        public string SupplierName { get; set; }
        public DateTime? purchaseDate { get; set; }
    }
    public class scanningDateVM
    {
        public int Id { get; set; }
        public DateTime? CreatedAt { get; set; }

        public List<EquipmentDTO> ListEquipment { get; set; }
    }

    public class scanningequipmentVM
    {
        public int Id { get; set; }
        public int EquipmentId { get; set; }

        public List<EquipmentDTO> ListEquipment { get; set; }
    }
}
