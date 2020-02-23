using EnglishCollector.Communication;
using EnglishCollector.DataAccessLayer.Models;
using EnglishCollector.DataLogicLayer.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataLogicLayer.Interfaces
{
    public interface ICardService : IService
    {
        IQueryable<CardDAL> GetAll();
        CardResponse CreateCard(CardDAL card);
        CardResponse UpdateCard(CardDAL card);
        CardResponse DeleteCard(int id);
        CardResponse GetCard(int id);
    }
}
