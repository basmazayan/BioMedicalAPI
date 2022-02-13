using BiomedicalSystemAPI.DTO;
using BiomedicalSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.PagingRepository
{
    public class PagingRepository:IPagingRepository
    {
        private readonly ApplicationDbContext _context;
        public PagingRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public IEnumerable<T> GetAll<T>(PagingParameter pageInfo, List<T> objList) where T : class
        {
            return objList.Skip((pageInfo.PageNumber - 1) * pageInfo.PageSize)
                .Take(pageInfo.PageSize).ToList();
        }
        public int Count<T>() where T : class
        {
            return _context.Set<T>().Count();
        }
    }
}
