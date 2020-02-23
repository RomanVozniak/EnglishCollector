using EnglishCollector.DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.Communication
{
    public class VocabularyResponse : BaseResponse
    {
        public VocabularyDAL Vocabulary { get; private set; } 

        private VocabularyResponse(bool success, string message, VocabularyDAL vocabulary) : base(success,message)
        {
            Vocabulary = vocabulary;
        }

        public VocabularyResponse(VocabularyDAL vocabulary) : this(true, String.Empty, vocabulary) { }
        public VocabularyResponse(string message) : this(false, message, null) { }
    }
}
