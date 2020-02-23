using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataLogicLayer.DTO
{
    public class CardDTO
    {
        public int Id { get; set; }

        public int? OrderId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public int StatusId { get; set; } = 0;

        public int ImportanceId { get; set; } = 0;

        public DateTime Created { get; set; } = DateTime.Now;

        public DateTime LastOpening { get; set; } = DateTime.Now;

        public string UId { get; set; } = null;

        public List<VocabularyDTO> Vocabulary { get; set; }
    }
}
