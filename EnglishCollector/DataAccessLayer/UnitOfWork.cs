using EnglishCollector.DataAccessLayer.Interfaces;
using EnglishCollector.DataAccessLayer.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataAccessLayer
{
    public class UnitOfWork : IUnitOfWork
    {
        protected readonly DtbContext _context;
        private IVocabularyRepository _vocabularyRepository;
        private ICardRepository _cardRepository;

        public UnitOfWork(DtbContext context)
        {
            _context = context;
        }

        public IVocabularyRepository VocabularyRepository
        {
            get
            {
                if(_vocabularyRepository == null)
                {
                    _vocabularyRepository = new VocabularyRepository(_context);
                }
                return _vocabularyRepository;
            }
        }

        public ICardRepository CardRepository
        {
            get
            {
                if(_cardRepository == null)
                {
                    _cardRepository = new CardRepository(_context);
                }
                return _cardRepository;
            }
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }

        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
