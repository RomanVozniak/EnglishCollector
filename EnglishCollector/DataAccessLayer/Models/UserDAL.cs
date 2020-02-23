using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.DataAccessLayer.Models
{
    [Table("Users")]
    public class UserDAL
    {
        [Key]
        [MaxLength(100)]
        public string Id { get; set; }

        [Required, MaxLength(50)]
        public string FirstName { get; set; }

        [Required, MaxLength(50)]
        public string LastName { get; set; }

        [MaxLength(100)]
        public string Name { get; set; }

        [MaxLength(50)]
        public string Email { get; set; }

        [MaxLength(100)]
        public string Passwrd { get; set; }

        public DateTime? BirthName { get; set; }
        public int RoleId { get; set; }

        
    }
}
