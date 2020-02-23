using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataAccessLayer.Models
{
    [Table("Vocabulary")]
    public class VocabularyDAL
    {
        [Key]
        public int Id { get; set; }

        public int? OrderId { get; set; } = null;

        [MaxLength(200)]
        public string Phrase { get; set; } = null;
        [MaxLength(200)]
        public string Translation { get; set; } = null;
        [MaxLength(1000)]
        public string Description { get; set; } = null;

        public int StatusId { get; set; } = 1;

        public int ImportanceId { get; set; } = 1;

        public int ComplexityId { get; set; } = 1;

        public int SuccessCount { get; set; } = 0;

        public int FailCount { get; set; } = 0;

        [ForeignKey("Card")]
        public int? CardId { get; set; } = null;

        public CardDAL Card { get; set; }

        public DateTime Created { get; set; } = DateTime.Now;

        public DateTime LastOpening { get; set; } = DateTime.Now;
    }
}
