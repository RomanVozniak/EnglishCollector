using EnglishCollector.DataAccessLayer.Interfaces;
using EnglishCollector.DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataAccessLayer.Repositories
{
    public class VocabularyRepository : BaseRepository, IVocabularyRepository
    {
        public VocabularyRepository(DtbContext context) : base(context)
        {

        }

        public void Create(VocabularyDAL vocabulary)
        {
            _context.Vocabularies.Add(vocabulary);
        }

        public void Delete(VocabularyDAL vocabulary)
        {
            _context.Vocabularies.Remove(vocabulary);
        }

        public VocabularyDAL FindById(int id)
        {
            return _context.Vocabularies.Find(id);
        }

        public VocabularyDAL FindByPhrase(string phrase)
        {
            return _context.Vocabularies.FirstOrDefault(vocab => vocab.Phrase == phrase);
        }

        public IQueryable<VocabularyDAL> GetAll()
        {
            return _context.Vocabularies.AsQueryable().OrderByDescending(vocab => vocab.Id);
        }

        public void Update(VocabularyDAL vocabulary)
        {
            _context.Vocabularies.Update(vocabulary);
        }
    }
}
