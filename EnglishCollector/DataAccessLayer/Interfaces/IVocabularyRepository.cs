using EnglishCollector.DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataAccessLayer.Interfaces
{
    public interface IVocabularyRepository : IBaseRepository
    {
        IQueryable<VocabularyDAL> GetAll();

        void Create(VocabularyDAL vocabulary);

        VocabularyDAL FindById(int id);
        VocabularyDAL FindByPhrase(string phrase);

        void Update(VocabularyDAL vocabulary);

        void Delete(VocabularyDAL vocabulary);
    }
}
