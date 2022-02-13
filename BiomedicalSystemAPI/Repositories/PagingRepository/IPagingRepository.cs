using BiomedicalSystemAPI.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.PagingRepository
{
    public interface IPagingRepository
    {
        IEnumerable<T> GetAll<T>(PagingParameter pageInfo, List<T> objList) where T : class;
        public int Count<T>() where T : class;
    }
}
