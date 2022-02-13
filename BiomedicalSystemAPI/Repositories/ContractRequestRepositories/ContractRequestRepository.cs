using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.ContractRequestRepositories;
using BiomedicalSystemAPI.Repositories.EquipmentReposatories;
using BiomedicalSystemAPI.Repositories.PagingRepository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.ContractRequestRepository
{
    public class ContractRequestRepository : IContractRequestRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly IPagingRepository _pagingRepository;

        public ContractRequestRepository(ApplicationDbContext  context,IPagingRepository pagingRepository)
        {
            _context = context;
            _pagingRepository = pagingRepository;
        }
        public void Add(ContractRequestDTO contractRequest)
        {
            ContractRequest contractrequest = new ContractRequest();
            contractrequest.Id = contractRequest.Id;
            contractrequest.Number = contractRequest.Number;
            contractrequest.HospitalId = contractRequest.HospitalId;
            contractrequest.Comments = contractRequest.Comments;
            contractrequest.Date = contractRequest.Date;
            contractrequest.Status = contractRequest.Status;
            _context.contractRequests.Add(contractrequest);
            _context.SaveChanges();
            foreach (var eq in contractRequest.equipments)
            {
                var equip = _context.Equipments.Where(e => e.Id == eq.Id).FirstOrDefault();
                equip.ContractRequestId= contractrequest.Id;
                //eq.ContractRequestId = contractrequest.Id;
            }
            _context.SaveChanges();
        }
        public void Update(ContractRequestDTO contractRequest)
        {
            ContractRequest contractrequest = new ContractRequest();
            contractrequest.Id = contractRequest.Id;
            contractrequest.Number = contractRequest.Number;
            contractrequest.Comments = contractRequest.Comments;
            contractrequest.Date = contractRequest.Date;
            contractrequest.Status = contractRequest.Status;
            contractrequest.HospitalId = contractRequest.HospitalId;
            var req = _context.Equipments.Where(e => e.ContractRequestId == contractrequest.Id).ToList();
            foreach (var item in req)
            {
                item.ContractRequestId = null;
            }
            _context.SaveChanges();

            foreach (var eq in contractRequest.equipments)
            {

                var equip = _context.Equipments.Where(e => e.Id == eq.Id).FirstOrDefault();
                equip.ContractRequestId = contractrequest.Id;
            }
            _context.Entry(contractrequest).State = EntityState.Modified;
            _context.SaveChanges();
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
        //public List<ContractRequestVM> GetAll()
        //{

        //}
        public List<ContractVM> getRequestForOrganizations(int OrgId)
        {
            List<ContractVM> contracts = new List<ContractVM>();
            var hospitals = _context.HealthCareUnits.Where(h => h.organizationId == OrgId).ToList().GroupBy(h => h.Id).ToList();           
            if (hospitals.Count > 0)
            {
                foreach (var hos in hospitals)
                {
                    ContractVM contractRequest = new ContractVM();

                    contractRequest.Id = hos.FirstOrDefault().Id;
                    contractRequest.HospitalId = hos.FirstOrDefault().Id;
                    contractRequest.HospitalName = hos.FirstOrDefault().HealthCareUnitName;
                    contractRequest.HospitalNameAr = hos.FirstOrDefault().HealthCareUnitNameAr;
                    contractRequest.ContractRequests = _context.contractRequests.Where(c => c.HospitalId == contractRequest.Id && c.Status==Status.SentToOrganization)
                        .Select(contRequest => new ContractRequestVM
                        {
                            Id = contRequest.Id,
                            Number = contRequest.Number,
                            Date = contRequest.Date,
                            Equipments = _context.Equipments.Where(e => e.ContractRequestId == contRequest.Id)
                            .Select(equip => new EquipmentDTO
                            {
                                Id=equip.Id,
                                EquipmentCode = equip.EquipmentCode,
                                EquipmentName = equip.EquipmentName,
                                EquipmentNameAr = equip.EquipmentNameAr,
                                ManufacturerName = _context.Manufacturers.Where(m => m.Id == equip.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerName,
                                ManufacturerNameAr = _context.Manufacturers.Where(m => m.Id == equip.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerNameAr,
                                SerialNumber = equip.SerialNumber,
                                DepartmentName = equip.Department.DepartmentName,
                                DepartmentNameAr = equip.Department.DepartmentNameAr,
                                OrganizationRequestId=equip.OrganizationContract.Id,
                                InternalCode=equip.InternalCode,
                                UpaCode=equip.MasterEquipment.UpaCode,
                                ContractRequestId=equip.ContractRequest.Id
                            }).ToList()
                        }).ToList();
                    var count = contractRequest.ContractRequests.Count;
                    int i = 0;
                    if (contractRequest.ContractRequests.Count > 0)
                    {
                        contracts.Add(contractRequest);
                        for (; i < count;)
                        {
                            if (contractRequest.ContractRequests[i].Equipments.Count == 0)
                            {
                                contractRequest.ContractRequests.Remove(contractRequest.ContractRequests[i]);
                                count--;
                            }
                            else
                            {
                                i++;
                            }
                        }
                    }
                }
            }
            return contracts;
        }

        public void AddRequestForOrganization(OrganizationRequestDTO OrgRequest)
        {
            OrganizationContractRequest organizationRequest = new OrganizationContractRequest();
            organizationRequest.Id = OrgRequest.Id;
            organizationRequest.Number = OrgRequest.Number;
            organizationRequest.Date = OrgRequest.Date;
            organizationRequest.OrganizationId = OrgRequest.OrganizationId;
            _context.organizationContractRequests.Add(organizationRequest);
            _context.SaveChanges();
            foreach (var eqId in OrgRequest.equipmentIDs)
            {
                var equip = _context.Equipments.Where(e => e.Id == eqId).FirstOrDefault();
                equip.OrganizationRequestId = organizationRequest.Id;
            }
            _context.SaveChanges();
        }

        public List<ContractVM> getRequestBetweenDates(int OrgId, dateVM d)
        {
            List<ContractVM> contractVMs = getRequestForOrganizations(OrgId);
            
            //dateVM dateVM = new dateVM();
            //dateVM.from = d.from;
            //dateVM.to = d.to;
            foreach (var item in contractVMs)
            {
                var count = item.ContractRequests.Count;
                int i = 0;
                if (count > 0)
                {
                    for (; i < count;)
                    {
                        if (d.from != null && d.to==null)
                        {
                            var r=item.ContractRequests.Where(r => r.Date.Date < d.from || r.Date.Date > DateTime.Now.Date).FirstOrDefault();
                            item.ContractRequests.Remove(r);
                            count--;
                        }
                        else if (d.from == null && d.to != null)
                        {
                            var r = item.ContractRequests.Where(r => r.Date.Date < DateTime.Now.Date || r.Date.Date > d.to).FirstOrDefault();
                            item.ContractRequests.Remove(r);
                            count--;
                        }
                        else if (d.from != null && d.to != null)
                        {
                            var r = item.ContractRequests.Where(r => r.Date.Date < d.from || r.Date.Date > d.to).FirstOrDefault();
                            item.ContractRequests.Remove(r);
                            count--;
                        }
                        else
                        {
                            i++;
                        }
                    }
                    //if(item.ContractRequests.Count==0)
                    //{
                    //    contractVMs.Remove(item);
                    //}
                }
            }
            
            return contractVMs;
        }

        public List<OrganizationRequestsVM> getRequestForUPA()
        {
            List<OrganizationRequestsVM> organizationcontracts = new List<OrganizationRequestsVM>();
            //var organizations = _context.organizationContractRequests.Include(oc => oc.Organization).ToList().GroupBy(o=>o.Id).ToList();
            var organizations=_context.organizations.ToList().GroupBy(o => o.Id).ToList();
            if(organizations.Count>0)
            {
                foreach (var org in organizations)
                {
                    OrganizationRequestsVM organizationRequest = new OrganizationRequestsVM();
                    organizationRequest.Id = org.FirstOrDefault().Id;
                    organizationRequest.OrganizationId= org.FirstOrDefault().Id;
                    organizationRequest.OrganizationName = org.FirstOrDefault().Name;
                    organizationRequest.OrganizationNameAr = org.FirstOrDefault().NameAr;
                    organizationRequest.orgRequests = _context.organizationContractRequests.Where(o => o.OrganizationId == organizationRequest.Id)
                                    .Select(orgReq => new OrganizationContractRequestVM
                                    {

                                        Id = orgReq.Id,
                                        Date = orgReq.Date,
                                        Number = orgReq.Number,
                                        Equipments = _context.Equipments.Where(e => e.OrganizationRequestId == orgReq.Id && e.ContractId==null)
                                        .Select(equip => new EquipmentDTO
                                        {
                                            Id=equip.Id,
                                            EquipmentCode = equip.EquipmentCode,
                                            EquipmentName = equip.EquipmentName,
                                            EquipmentNameAr = equip.EquipmentNameAr,
                                            ManufacturerName = _context.Manufacturers.Where(m => m.Id == equip.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerName,
                                            ManufacturerNameAr = _context.Manufacturers.Where(m => m.Id == equip.MasterEquipment.ManufacturerId).FirstOrDefault().ManufacturerNameAr,
                                            SerialNumber = equip.SerialNumber,
                                            DepartmentName = equip.Department.DepartmentName,
                                            DepartmentNameAr = equip.Department.DepartmentNameAr,
                                            OrganizationRequestId = equip.OrganizationContract.Id,
                                            ContractRequestId = equip.ContractRequest.Id,
                                            HealthDirectoryName=equip.HealthDirectories.HealthDirectoryName,
                                            HealthDirectoryNameAr=equip.HealthDirectories.HealthDirectoryNameAr,
                                            HealthDistrictName=equip.HealthDistricts.HealthDistrictName,
                                            HealthDistrictNameAr=equip.HealthDistricts.HealthDistrictNameAr,
                                            HealthCareUnitName = equip.HealthCareUnit.HealthCareUnitName,
                                            HealthCareUnitNameAr = equip.HealthCareUnit.HealthCareUnitNameAr,
                                            UpaCode=equip.MasterEquipment.UpaCode,
                                            InternalCode=equip.InternalCode,
                                            ContractId=equip.ContractId
                                        }).ToList()
                                    }).ToList();
                    var count = organizationRequest.orgRequests.Count;
                    int i = 0;
                    if (organizationRequest.orgRequests.Count > 0)
                    {
                     organizationcontracts.Add(organizationRequest);
                        for (;i<count;)
                        {
                            if (organizationRequest.orgRequests[i].Equipments.Count == 0)
                            {
                                organizationRequest.orgRequests.Remove(organizationRequest.orgRequests[i]);
                                count--;
                            }
                            else
                            {
                                i++;
                            }
                        }
                    }
                }
            }          
            return organizationcontracts;
        }

        public List<ContractRequestVM> GetRequestInHospital(PagingParameter paging,int hosId)
        {
            try
            {
             var list = _context.contractRequests.Where(h=>h.HospitalId==hosId)
                .ToList();
            List<ContractRequestVM> requestsInHospital = new List<ContractRequestVM>();
            foreach (var req in list)
            {
                ContractRequestVM contractRequest = new ContractRequestVM
                {
                    Id = req.Id,
                    Comments = req.Comments,
                    Date = req.Date,
                    Number = req.Number,

                    Status = req.Status,
                    NumberOfEquipment = _context.Equipments.Where(e => e.ContractRequestId == req.Id).Count(),
                    Equipments =_context.Equipments.Where(e=>e.ContractRequestId==req.Id)
                    .Select(equip => new EquipmentDTO
                    {
                        Id = equip.Id,
                        EquipmentCode = equip.EquipmentCode,
                        EquipmentName = equip.EquipmentName,
                        EquipmentNameAr = equip.EquipmentNameAr,
                        SerialNumber = equip.SerialNumber,
                        InternalCode = equip.InternalCode,
                        ContractRequestId = equip.ContractRequest.Id
                    }).ToList()
                };
                requestsInHospital.Add(contractRequest);
            }
            requestsInHospital=_pagingRepository.GetAll(paging, requestsInHospital).ToList();
            return requestsInHospital;
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void UpdateStatusOfContractRequest(int id)
        {
            var req = _context.contractRequests.Where(r => r.Id == id).FirstOrDefault();
            req.Status = Status.SentToOrganization;
            _context.SaveChanges();
        }
        public ContractRequestVM GetRequest(int id)
        {
            var req= _context.contractRequests.Where(r => r.Id == id)
                
                .Select(r => new ContractRequestVM
                {
                    Status = r.Status,
                    Comments = r.Comments,
                    Date = r.Date,
                    Id = r.Id,
                    Number = r.Number,
                    Equipments= _context.Equipments.Where(e => e.ContractRequestId == r.Id)
                    .Include(e=>e.MasterEquipment).ThenInclude(m=>m.Manufacturer)
                    .Select(equip => new EquipmentDTO
                    {
                        Id = equip.Id,
                        EquipmentCode = equip.EquipmentCode,
                        EquipmentName = equip.EquipmentName,
                        EquipmentNameAr = equip.EquipmentNameAr,
                        SerialNumber = equip.SerialNumber,
                        InternalCode = equip.InternalCode,
                        ContractRequestId = equip.ContractRequest.Id,
                        UpaCode=equip.MasterEquipment.UpaCode,
                        ManufacturerName=equip.MasterEquipment.Manufacturer.ManufacturerName,
                        ManufacturerNameAr=equip.MasterEquipment.Manufacturer.ManufacturerNameAr,
                        ModelNumber=equip.MasterEquipment.ModelNumber,
                        
                    }).ToList()
                }).FirstOrDefault();
            return req;
        }

        public void Delete(int id)
        {
            var hospitalRequest = _context.contractRequests.Find(id);
            var equip = _context.Equipments.Where(e => e.ContractRequestId == hospitalRequest.Id).ToList();
            foreach (var eq in equip)
            {
                eq.ContractRequest = null;
            }
            _context.contractRequests.Remove(hospitalRequest);
            _context.SaveChanges();
        }
        //public void AddContract(ContractDTO contractdto)
        //{
        //    Contract contract = new Contract();
        //    contract.Contents = contractdto.Contents;
        //    contract.StartDate = contractdto.StartDate;
        //    contract.EndDate = contractdto.EndDate;
        //    contract.Subject = contractdto.Subject;
        //    _context.Add(contract);
        //    _context.SaveChanges();
        //    foreach (var equipId in contractdto.equipmentIDs)
        //    {
        //        var equip = _context.Equipments.Where(e => e.Id == equipId).FirstOrDefault();
        //        equip.ContractId = contract.Id;
        //    }
        //    _context.SaveChanges();
        //}
    }

}
