using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.ContractRequestRepositories
{
    public interface IContractRequestRepository : IDisposable
    {
        void Add(ContractRequestDTO contractRequest);
        List<ContractVM> getRequestForOrganizations(int OrgId);
        void AddRequestForOrganization(OrganizationRequestDTO OrgRequest);
        List<ContractVM> getRequestBetweenDates(int OrgId, dateVM d);
        List<OrganizationRequestsVM> getRequestForUPA();
        List<ContractRequestVM> GetRequestInHospital(PagingParameter paging,int hosId);
        void UpdateStatusOfContractRequest(int id);
        ContractRequestVM GetRequest(int id);
        void Update(ContractRequestDTO contractRequest);
        void Delete(int id);
    }
}
