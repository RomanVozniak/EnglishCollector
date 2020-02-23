using EnglishCollector.DataAccessLayer.Models;
using EnglishCollector.Functions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataLogicLayer.FunctionsModels
{
    public static class FuncVocabulary
    {
        public const int PHRASE_LEN = 200;
        public const int TRANSLATION_LEN = 200;
        public const int DESCRIPTION_LEN = 1000;

        public static VocabularyDAL UpdateVocabulary(VocabularyDAL oldVocabulary, VocabularyDAL newVocabulary)
        {
            oldVocabulary.OrderId = newVocabulary.OrderId;
            oldVocabulary.Phrase = newVocabulary.Phrase;
            oldVocabulary.Translation = newVocabulary.Translation;
            oldVocabulary.Description = newVocabulary.Description;
            oldVocabulary.StatusId = newVocabulary.StatusId;
            oldVocabulary.ImportanceId = newVocabulary.ImportanceId;
            oldVocabulary.ComplexityId = newVocabulary.ComplexityId;
            oldVocabulary.SuccessCount = newVocabulary.SuccessCount;
            oldVocabulary.FailCount = newVocabulary.FailCount;
            oldVocabulary.CardId = newVocabulary.CardId;
            oldVocabulary.LastOpening = newVocabulary.LastOpening;

            return oldVocabulary;
        }

        public static string ValidateVocabulary(VocabularyDAL vocabulary)
        {
            List<string> messages = new List<string>();
            string responseMessage = null;

            FB.ValidateString(vocabulary.Phrase, PHRASE_LEN, "Phrase", true, messages);
            FB.ValidateString(vocabulary.Translation, TRANSLATION_LEN, "Translation", true, messages);
            FB.ValidateString(vocabulary.Description, DESCRIPTION_LEN, "Description", false, messages);

            if(messages.Count > 0)
            {
                foreach(var str in messages)
                {
                    responseMessage += str + "</br>";
                }
            }
            return responseMessage;
        }
    }
}
