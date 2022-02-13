using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace BiomedicalSystemAPI.Repositories.EquipmentReposatories
{
    public interface IEquipmentRepository : IDisposable
    {
        IEnumerable<EquipmentDTO> GetAll();// (PagingParameter paging);
        IEnumerable<EquipmentDTO> GetAllRecalledEquipments();
        List<EquipmentDTO> GetAllforInventory();
        List<scanningDateVM> GetAllwithgrouping();
        //IEnumerable<EquipmentDTO> GetAllEquimentsByEmp(string email);
        EquipmentDTO GetById(int id);
       // EquipmentDTO GetEquipmentBySerial(string serialNumber);
        Equipment Find(int id);
        void Add(EquipmentDTO equipmentDTO);
        void Update(EquipmentDTO equipmentDTO);
        void Delete(int id);
        void Save();
        void SaveChanges();
        //ActionResult<IEnumerable<Equipment>> GetAllEquimentsByEmp(string email);
        Task<ActionResult<IEnumerable<Equipment>>> ToList();
        ActionResult<List<Equipment>> GetAllEquimentsByeqCoverage(int eqCoverageId);
        ActionResult<List<Equipment>> GetoneEquipmentBymaster(int masterId);
        ActionResult<List<HospitalVM>> GetEquipmentByHospital(List<EquipmentDTO> equipmentModel);
        ActionResult<List<GovernorateVM>> GetEquipmentLstByGovernorate(List<EquipmentDTO> equipmentmodel);
        ActionResult<List<CityVM>> GetEquipmentLstByDistrict(List<EquipmentDTO> equipmentModel);
        ActionResult<List<OrganizationVM>> GetEquipmentLstByOrganization(List<EquipmentDTO> equipmentModel);
        ActionResult<List<SupplierVM>> GetEquipmentLstBySupplier(List<EquipmentDTO> equipmentModel);
        List<EquipmentDTO> FilterEquipment(filterDto data);
        ActionResult<List<EquipmentDTO>> GetEquipmentInHospital(int hospitalId);
        public List<EquipmentDTO> getEquipmentInContract(List<int> Ids);
        public List<EquipmentDTO> EquipmentInContract(int cId);
        public List<EquipmentDTO> GetEquipmentInHospitalToEdit(List<EquipmentDTO> equip, int hosId);



    }
}
