using BiomedicalSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.DTO
{
    public class ContractDTO
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public int Number { get; set; }
        public string Contents { get; set; }
        public DateTime ?StartDate { get; set; }
        public DateTime ?EndDate { get; set; }
        public int? HealthCareUnitId { get; set; }
        public string HealthCareUnitName { get; set; }
        public string HealthCareUnitNameAr { get; set; }
        public int SupplierId { get; set; }
        public string SupplierName { get; set; }
        public string SupplierNameAr { get; set; }
        public List<int> equipmentIDs { get; set; }

    }
    public class ContractRequestVM
    {
        public int Id { get; set; }
        public int Number { get; set; }
        public DateTime Date { get; set; }
        public Status Status { get; set; }
        public string Comments {get;set; }
        public int NumberOfEquipment {get;set; }
        public List<EquipmentDTO> Equipments { get; set; }

    }

    public class ContractVM
    {
        public int Id { get; set; }
        public int HospitalId { get; set; }
        public string HospitalName { get; set; }
        public string HospitalNameAr { get; set; }
        public List<ContractRequestVM> ContractRequests { get; set; }
    }
    public class OrganizationRequestsVM
    {
        public int Id { get; set; }
        public int OrganizationId { get; set; }
        public string OrganizationName { get; set; }
        public string OrganizationNameAr { get; set; }
        public List<OrganizationContractRequestVM> orgRequests { get; set; }
    }
    public class OrganizationContractRequestVM
    {
        public int Id { get; set; }
        public int Number { get; set; }
        public DateTime Date { get; set; }
        public List<EquipmentDTO> Equipments { get; set; }
    }
    public  class dateVM
    {
        public DateTime? from { get; set; }
        public DateTime? to { get; set; }
    }
    public enum Status
    {
        New ,
        SentToOrganization
    }
}
