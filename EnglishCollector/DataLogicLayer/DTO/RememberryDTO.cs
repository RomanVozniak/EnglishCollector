using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataLogicLayer.DTO
{
    public class RememberryDTO
    {
        public string Name { get; set; }
        public string Desc { get; set; }
        public List<Cards> cards = new List<Cards>();
    }

    public class Cards
    {
        public string O { get; set; }
        public string Sl { get; set; }
        public List<string> T { get; set; }
        public double Freq { get; set; }
        public string Tl { get; set; }
    }
}
