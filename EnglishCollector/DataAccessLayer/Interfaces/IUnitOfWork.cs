using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataAccessLayer.Interfaces
{
    public interface IUnitOfWork
    {
        IVocabularyRepository VocabularyRepository { get; }
        ICardRepository CardRepository { get; }
        Task SaveAsync();
        void Save();
    }
}
