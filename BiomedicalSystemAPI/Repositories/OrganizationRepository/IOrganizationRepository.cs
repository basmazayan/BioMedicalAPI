using BiomedicalSystemAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.OrganizationRepository
{
    public interface IOrganizationRepository:IDisposable
    {
        IEnumerable<Organization> GetAll();
        Organization GetById(int id);
        void Add(Organization organization);
        void Update(Organization organization);
        void Delete(int id);
        void SaveChanges();
        IEnumerable<Organization> GetAllbutOne(int id);
    }
}
