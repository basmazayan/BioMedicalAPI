using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.OrganizationRepository;
using BiomedicalSystemAPI.Repositories.PagingRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganizationController : ControllerBase
    {
        IOrganizationRepository _organizationRepository;
        private readonly IPagingRepository _pagingRepository;
        public OrganizationController(IOrganizationRepository organizationRepository, IPagingRepository pagingRepository)
        {
            _organizationRepository = organizationRepository;
            _pagingRepository = pagingRepository;
        }
        [HttpPost]
        public ActionResult<Organization> PostOrganization(Organization organization)
        {
            var organizations = _organizationRepository.GetAll();
            foreach (var org in organizations)
            {
                if (org.Name == organization.Name)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = organization.Name + " already exists before" });
                }
                else if (org.NameAr == organization.NameAr)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Sucess", Message = organization.NameAr + " already exists before" });
                }
            }
            try
            {
                _organizationRepository.Add(organization);
              //  return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "sucess"});
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = " error while adding item" });
            }
            return NoContent();
        }
        [HttpGet]
        public IEnumerable<Organization> GetOrganizations()
        {
            return _organizationRepository.GetAll();

        }
        [HttpPut]
        [Route("GetOrganizationsWithPaging")]
        public IEnumerable<Organization> GetOrganizationsWithPaging(PagingParameter page)
        {
            var orgLst = _organizationRepository.GetAll().ToList();
            return _pagingRepository.GetAll(page, orgLst);
        }
        [HttpGet]
        [Route("getcount")]
        public int count()
        {
            var num = _pagingRepository.Count<Organization>();
            return num;
        }

        [HttpGet("{id}")]
        public ActionResult<Organization> GetOrganization(int id)
        {
            var organization = _organizationRepository.GetById(id);

            if (organization == null)
            {
                return NotFound();
            }

            return organization;
        }
        [HttpPut("{id}")]
        public ActionResult PutOrganization(int id, Organization organization)
        {
            if (id != organization.Id)
            {
                return BadRequest();
            }
                var organizations = _organizationRepository.GetAllbutOne(id);
                foreach (var org in organizations)
                {
                    if (org.Name == organization.Name)
                    {
                        return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = organization.Name + " already exists before" });
                    }
                    else if (org.NameAr == organization.NameAr)
                    {
                        return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Success", Message = organization.NameAr + " already exists before" });
                    }
                }
                try
                {
                    _organizationRepository.Update(organization);
                    _organizationRepository.SaveChanges();
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = ex.Message});
                }

return NoContent();
        }
        [HttpDelete("{id}")]
        public void DeleteOrganization(int id)
        {
            _organizationRepository.Delete(id);
            _organizationRepository.SaveChanges();
        }
    }
}
