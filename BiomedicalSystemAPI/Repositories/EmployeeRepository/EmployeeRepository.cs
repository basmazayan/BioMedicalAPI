using BiomedicalSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.EmployeeRepository
{
    public class EmployeeRepository:IEmployeeRepository
    {
        private readonly ApplicationDbContext _context;

        public void Dispose()
        {
            throw new NotImplementedException();
        }
        public EmployeeRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        //private bool disposed = false;
        //public virtual void Dispose(bool disposing)
        //{
        //    if (!this.disposed)
        //    {
        //        if (disposing)
        //        {
        //            _context.Dispose();
        //        }
        //    }
        //    this.disposed = true;
        //}
        //public void Dispose()
        //{
        //    Dispose(true);
        //    GC.SuppressFinalize(this);
        //}
        //public Employee GetById(int id)
        //{
        //   return _context.Employees.Find(id);
        //}

        //public Employee GetByMail(string mail)
        //{
        //    return _context.Employees.FirstOrDefault(e => e.Email == mail);
        //}

        //public List<Employee> GetEmployeesInEquipment(int equipId)
        //{
        //    return _context.equipmentEmployees.Where(e => e.EquipmentId == equipId).ToList();
        //}
    }
}
