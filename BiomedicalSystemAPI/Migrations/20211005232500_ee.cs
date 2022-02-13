using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BiomedicalSystemAPI.Migrations
{
    public partial class ee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.CreateTable(
                name: "EquipmentRecalls",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MasterEquipmentId = table.Column<int>(type: "int", nullable: false),
                    RecallDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    RecallNumber = table.Column<int>(type: "int", nullable: false),
                    RecallSubject = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ModelNumber = table.Column<int>(type: "int", nullable: false),
                    VersionNumber = table.Column<int>(type: "int", nullable: false),
                    SupplierId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EquipmentRecalls", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EquipmentRecalls_masterEquipments_MasterEquipmentId",
                        column: x => x.MasterEquipmentId,
                        principalTable: "masterEquipments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_EquipmentRecalls_Suppliers_SupplierId",
                        column: x => x.SupplierId,
                        principalTable: "Suppliers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Equipments_EquipmentRecallId",
                table: "Equipments",
                column: "EquipmentRecallId");

     
        }

       
    }
}
