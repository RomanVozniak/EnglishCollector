﻿// <auto-generated />
using System;
using EnglishCollector.DataAccessLayer;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace EnglishCollector.Migrations
{
    [DbContext(typeof(DtbContext))]
    [Migration("20200223130303_InitDatabase")]
    partial class InitDatabase
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("EnglishCollector.DataAccessLayer.Models.CardDAL", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(2000)")
                        .HasMaxLength(2000);

                    b.Property<int>("ImportanceId")
                        .HasColumnType("int");

                    b.Property<DateTime>("LastOpening")
                        .HasColumnType("datetime2");

                    b.Property<int?>("OrderId")
                        .HasColumnType("int");

                    b.Property<int>("StatusId")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(200)")
                        .HasMaxLength(200);

                    b.Property<string>("UId")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Card");
                });

            modelBuilder.Entity("EnglishCollector.DataAccessLayer.Models.PriorityDAL", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(2000)")
                        .HasMaxLength(2000);

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(200)")
                        .HasMaxLength(200);

                    b.HasKey("Id");

                    b.ToTable("Priorities");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Title = "Low"
                        },
                        new
                        {
                            Id = 2,
                            Title = "Medium"
                        },
                        new
                        {
                            Id = 3,
                            Title = "High"
                        });
                });

            modelBuilder.Entity("EnglishCollector.DataAccessLayer.Models.VocabularyDAL", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("CardId")
                        .HasColumnType("int");

                    b.Property<int>("ComplexityId")
                        .HasColumnType("int");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(1000)")
                        .HasMaxLength(1000);

                    b.Property<int>("FailCount")
                        .HasColumnType("int");

                    b.Property<int>("ImportanceId")
                        .HasColumnType("int");

                    b.Property<DateTime>("LastOpening")
                        .HasColumnType("datetime2");

                    b.Property<int?>("OrderId")
                        .HasColumnType("int");

                    b.Property<string>("Phrase")
                        .HasColumnType("nvarchar(200)")
                        .HasMaxLength(200);

                    b.Property<int>("StatusId")
                        .HasColumnType("int");

                    b.Property<int>("SuccessCount")
                        .HasColumnType("int");

                    b.Property<string>("Translation")
                        .HasColumnType("nvarchar(200)")
                        .HasMaxLength(200);

                    b.HasKey("Id");

                    b.HasIndex("CardId");

                    b.ToTable("Vocabulary");
                });

            modelBuilder.Entity("EnglishCollector.DataAccessLayer.Models.VocabularyDAL", b =>
                {
                    b.HasOne("EnglishCollector.DataAccessLayer.Models.CardDAL", "Card")
                        .WithMany("Vocabulary")
                        .HasForeignKey("CardId");
                });
#pragma warning restore 612, 618
        }
    }
}
