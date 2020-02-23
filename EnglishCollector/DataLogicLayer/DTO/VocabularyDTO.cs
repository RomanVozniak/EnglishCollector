using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataLogicLayer.DTO
{
    public class VocabularyDTO
    {
        public int Id { get; set; } = 0;
        public int? OrderId { get; set; } = null;
        
        public string Phrase { get; set; } = null;
        public string Translation { get; set; } = null;
        public string Description { get; set; } = null;

        public int StatusId { get; set; } = 0;
        public int ImportanceId { get; set; } = 1;
        public int ComplexityId { get; set; } = 1;
        public int SuccessCount { get; set; } = 0;
        public int FailCount { get; set; } = 0;
        
        public int? CardId { get; set; } = null;

        public CardDTO Card { get; set; }

        public DateTime Created { get; set; } = DateTime.Now;
        public DateTime LastOpening { get; set; } = DateTime.Now;
    }
}
