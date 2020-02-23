using EnglishCollector.Communication;
using EnglishCollector.DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataLogicLayer.Interfaces
{
    public interface IVocabularyService
    {
        IQueryable<VocabularyDAL> List();
        VocabularyResponse CreateVocabulary(VocabularyDAL vocabulary);
        VocabularyResponse UpdateVocabulary(VocabularyDAL vocabulary);
        VocabularyResponse DeleteVocabulary(int id);
    }
}
