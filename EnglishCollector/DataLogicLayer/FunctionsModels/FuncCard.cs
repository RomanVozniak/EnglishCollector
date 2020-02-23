using EnglishCollector.DataAccessLayer.Models;
using EnglishCollector.Functions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataLogicLayer.FunctionsModels
{
    public class FuncCard
    {
        public const int TITLE_LEN = 200;
        public const int DESCRIPTION_LEN = 2000;

        public static CardDAL UpdateCard(CardDAL oldCard, CardDAL newCard)
        {
            oldCard.OrderId = newCard.OrderId;
            oldCard.Title = newCard.Title;
            oldCard.Description = newCard.Description;
            oldCard.StatusId = newCard.StatusId;
            oldCard.ImportanceId = newCard.ImportanceId;
            oldCard.LastOpening = newCard.LastOpening;
            oldCard.UId = newCard.UId;

            return oldCard;
        }

        public static string ValidateCard(CardDAL card)
        {
            List<string> messages = new List<string>();
            string responseMessage = null;

            FB.ValidateString(card.Title, TITLE_LEN, "Title", true, messages);
            FB.ValidateString(card.Description, DESCRIPTION_LEN, "Description", false, messages);

            if (messages.Count > 0)
            {
                foreach (var str in messages)
                {
                    responseMessage += str + "</br>";
                }
            }
            return responseMessage;
        }
    }
}
