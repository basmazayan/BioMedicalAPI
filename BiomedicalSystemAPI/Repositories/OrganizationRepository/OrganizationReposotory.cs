using BiomedicalSystemAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.OrganizationRepository
{
    public class OrganizationReposotory : IOrganizationRepository
    {
        ApplicationDbContext _context;
        public OrganizationReposotory(ApplicationDbContext context)
        {
            _context = context;
        }
        public void Add(Organization organization)
        {
            _context.Organizations.Add(organization);
            _context.SaveChanges();                      
        }

        public void Delete(int id)
        {      
            Organization organization= _context.Organizations.Find(id);
            if(organization!=null)
            {
                _context.Remove(organization);
            }
            
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

        public IEnumerable<Organization> GetAll()
        {
            return _context.Organizations.ToList();
        }

        public Organization GetById(int id)
        {
           return _context.Organizations.Find(id);
        }

        public void Update(Organization organization)
        {
            Organization organizationObj = new Organization();
            organizationObj.Id = organization.Id;
            organizationObj.Name = organization.Name;
            organizationObj.NameAr = organization.NameAr;
            _context.Entry(organization).State = EntityState.Modified;
           // _context.SaveChanges();
        }
        public void SaveChanges()
        {
            _context.SaveChanges();
        }
        public IEnumerable<Organization> GetAllbutOne(int id)
        {
            return _context.Organizations.Where(o => o.Id != id).ToList();
        }
    }
}
