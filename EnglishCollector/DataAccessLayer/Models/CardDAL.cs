using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataAccessLayer.Models
{
    [Table("Card")]
    public class CardDAL
    {
        [Key]
        public int Id { get; set; }

        public int? OrderId { get; set; } = null;

        [MaxLength(200)]
        public string Title { get; set; }
        [MaxLength(2000)]
        public string Description { get; set; }

        public int StatusId { get; set; } = 0;

        public int ImportanceId { get; set; } = 0;

        public DateTime Created { get; set; } = DateTime.Now;

        public DateTime LastOpening { get; set; } = DateTime.Now;

        public string UId { get; set; } = null;

        public List<VocabularyDAL> Vocabulary { get; set; }

    }
}
