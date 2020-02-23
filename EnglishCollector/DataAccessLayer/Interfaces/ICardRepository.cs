using EnglishCollector.DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataAccessLayer.Interfaces
{
    public interface ICardRepository : IBaseRepository
    {
        IQueryable<CardDAL> GetAll();

        void Create(CardDAL card);

        CardDAL FindById(int id);
        CardDAL FindByName(string name);

        void Update(CardDAL card);

        void Delete(CardDAL card);
    }
}
