using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EnglishCollector.DataAccessLayer.Models;

namespace EnglishCollector.DataAccessLayer
{
    public class DtbContext : DbContext
    {
        public DbSet<VocabularyDAL> Vocabularies { get; set; }
        public DbSet<CardDAL> Cards { get; set; }

        public DtbContext(DbContextOptions<DtbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<PriorityDAL>().HasData(
                new PriorityDAL
                {
                    Id = 1,
                    Title = "Low",
                    Description = null
                },
                new PriorityDAL
                {
                    Id = 2,
                    Title = "Medium",
                    Description = null
                },
                new PriorityDAL
                {
                    Id = 3,
                    Title = "High",
                    Description = null
                }
                );

            base.OnModelCreating(modelBuilder);
        }
    }
}
