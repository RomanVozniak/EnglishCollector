using EnglishCollector.DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.Communication
{
    public class CardResponse : BaseResponse
    {
        public CardDAL Card { get; private set; }

        public CardResponse(bool success, string message, CardDAL card) : base(success, message)
        {
            Card = card;
        }

        public CardResponse(CardDAL card) : this(true, null, card) { }
        public CardResponse(string message) : this(false, message, null) { }
    }
}
