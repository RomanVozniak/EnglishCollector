using EnglishCollector.DataAccessLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataAccessLayer.Repositories
{
    public class BaseRepository : IBaseRepository
    {
        protected readonly DtbContext _context;

        public BaseRepository(DtbContext context)
        {
            _context = context;
        }
    }
}
