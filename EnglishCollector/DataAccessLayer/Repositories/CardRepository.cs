using EnglishCollector.DataAccessLayer.Interfaces;
using EnglishCollector.DataAccessLayer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataAccessLayer.Repositories
{
    public class CardRepository : ICardRepository
    {
        private DtbContext _context = null;
        public CardRepository(DtbContext context)
        {
            _context = context;
        }

        public IQueryable<CardDAL> GetAll()
        {
            var cardList = _context.Cards.AsQueryable<CardDAL>().OrderBy(card => card.OrderId);
            return cardList;
        }

        public void Create(CardDAL card)
        {
            _context.Cards.Add(card);
        }

        public void Update(CardDAL card)
        {
            _context.Cards.Update(card);
        }

        public void Delete(CardDAL card)
        {
            _context.Cards.Remove(card);
        }   

        public CardDAL FindById(int id)
        {
            var card = _context.Cards
                .Include(vocab => vocab.Vocabulary)
                .Where(item => item.Id == id).First();
            card.Vocabulary = card.Vocabulary.OrderByDescending(vocab => vocab.ComplexityId).OrderByDescending(vocab => vocab.ImportanceId).ToList();
            return card;
        }

        public CardDAL FindByName(string name)
        {
            CardDAL card = _context.Cards.FirstOrDefault(item => item.Title == name);
            return card;
        }
    }
}
