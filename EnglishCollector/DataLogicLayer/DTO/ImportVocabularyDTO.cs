using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataLogicLayer.DTO
{
    public class ImportVocabularyDTO
    {
        public int? cardId { get; set; }
        public string newCardName { get; set; }

        public RememberryDTO rememberryData { get; set; }
    }
}
