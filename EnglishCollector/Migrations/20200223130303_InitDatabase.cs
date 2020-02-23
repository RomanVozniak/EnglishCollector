using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EnglishCollector.Migrations
{
    public partial class InitDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Card",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderId = table.Column<int>(nullable: true),
                    Title = table.Column<string>(maxLength: 200, nullable: true),
                    Description = table.Column<string>(maxLength: 2000, nullable: true),
                    StatusId = table.Column<int>(nullable: false),
                    ImportanceId = table.Column<int>(nullable: false),
                    Created = table.Column<DateTime>(nullable: false),
                    LastOpening = table.Column<DateTime>(nullable: false),
                    UId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Card", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Priorities",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(maxLength: 200, nullable: false),
                    Description = table.Column<string>(maxLength: 2000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Priorities", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Vocabulary",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderId = table.Column<int>(nullable: true),
                    Phrase = table.Column<string>(maxLength: 200, nullable: true),
                    Translation = table.Column<string>(maxLength: 200, nullable: true),
                    Description = table.Column<string>(maxLength: 1000, nullable: true),
                    StatusId = table.Column<int>(nullable: false),
                    ImportanceId = table.Column<int>(nullable: false),
                    ComplexityId = table.Column<int>(nullable: false),
                    SuccessCount = table.Column<int>(nullable: false),
                    FailCount = table.Column<int>(nullable: false),
                    CardId = table.Column<int>(nullable: true),
                    Created = table.Column<DateTime>(nullable: false),
                    LastOpening = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vocabulary", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Vocabulary_Card_CardId",
                        column: x => x.CardId,
                        principalTable: "Card",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Priorities",
                columns: new[] { "Id", "Description", "Title" },
                values: new object[] { 1, null, "Low" });

            migrationBuilder.InsertData(
                table: "Priorities",
                columns: new[] { "Id", "Description", "Title" },
                values: new object[] { 2, null, "Medium" });

            migrationBuilder.InsertData(
                table: "Priorities",
                columns: new[] { "Id", "Description", "Title" },
                values: new object[] { 3, null, "High" });

            migrationBuilder.CreateIndex(
                name: "IX_Vocabulary_CardId",
                table: "Vocabulary",
                column: "CardId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Priorities");

            migrationBuilder.DropTable(
                name: "Vocabulary");

            migrationBuilder.DropTable(
                name: "Card");
        }
    }
}
