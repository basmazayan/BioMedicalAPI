using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BiomedicalSystemAPI.Migrations
{
    public partial class mig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AssetDetail_Building_BuildingId",
                table: "AssetDetail");

            migrationBuilder.DropForeignKey(
                name: "FK_AssetDetail_Departments_DepartmentId",
                table: "AssetDetail");

            migrationBuilder.DropForeignKey(
                name: "FK_AssetDetail_EquipmentRecalls_EquipmentRecallId",
                table: "AssetDetail");

            migrationBuilder.DropForeignKey(
                name: "FK_AssetDetail_EquipmentStatus_StatusId",
                table: "AssetDetail");

            migrationBuilder.DropForeignKey(
                name: "FK_AssetDetail_Floor_FloorId",
                table: "AssetDetail");

            migrationBuilder.DropForeignKey(
                name: "FK_AssetDetail_Hospitals_HospitalId",
                table: "AssetDetail");

            migrationBuilder.DropForeignKey(
                name: "FK_AssetDetail_masterAssets_MasterAssetId",
                table: "AssetDetail");

            migrationBuilder.DropForeignKey(
                name: "FK_AssetDetail_organizationContractRequests_OrganizationRequestId",
                table: "AssetDetail");

            migrationBuilder.DropForeignKey(
                name: "FK_AssetDetail_Room_RoomId",
                table: "AssetDetail");

            migrationBuilder.DropForeignKey(
                name: "FK_AssetDetail_Suppliers_SupplierId",
                table: "AssetDetail");

            migrationBuilder.DropForeignKey(
                name: "FK_EquipmentSubCategories_EquipmentCategories_EquipmentCategoryId",
                table: "EquipmentSubCategories");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_EquipmentCategories_EquipmentCategoryId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_EquipmentSubCategories_EquipmentSubCategoryId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceRequest_AssetDetail_EquipmentId",
                table: "ServiceRequest");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkOrders_AssetDetail_EquipmentId",
                table: "WorkOrders");

            migrationBuilder.DropTable(
                name: "Building");

            migrationBuilder.DropTable(
                name: "equipmentEmployees");

            migrationBuilder.DropTable(
                name: "Floor");

            migrationBuilder.DropTable(
                name: "Room");

            migrationBuilder.DropIndex(
                name: "IX_AssetDetail_BuildingId",
                table: "AssetDetail");

            migrationBuilder.DropIndex(
                name: "IX_AssetDetail_DepartmentId",
                table: "AssetDetail");

            migrationBuilder.DropIndex(
                name: "IX_AssetDetail_EquipmentRecallId",
                table: "AssetDetail");

            migrationBuilder.DropIndex(
                name: "IX_AssetDetail_FloorId",
                table: "AssetDetail");

            migrationBuilder.DropIndex(
                name: "IX_AssetDetail_HospitalId",
                table: "AssetDetail");

            migrationBuilder.DropIndex(
                name: "IX_AssetDetail_MasterAssetId",
                table: "AssetDetail");

            migrationBuilder.DropIndex(
                name: "IX_AssetDetail_OrganizationRequestId",
                table: "AssetDetail");

            migrationBuilder.DropIndex(
                name: "IX_AssetDetail_StatusId",
                table: "AssetDetail");

            migrationBuilder.DropIndex(
                name: "IX_AssetDetail_SupplierId",
                table: "AssetDetail");

            migrationBuilder.DropPrimaryKey(
                name: "PK_EquipmentSubCategories",
                table: "EquipmentSubCategories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_EquipmentStatus",
                table: "EquipmentStatus");

            migrationBuilder.DropPrimaryKey(
                name: "PK_EquipmentCategories",
                table: "EquipmentCategories");

            migrationBuilder.DropColumn(
                name: "BuildingId",
                table: "AssetDetail");

            migrationBuilder.DropColumn(
                name: "DepartmentId",
                table: "AssetDetail");

            migrationBuilder.DropColumn(
                name: "EquipmentRecallId",
                table: "AssetDetail");

            migrationBuilder.DropColumn(
                name: "FloorId",
                table: "AssetDetail");

            migrationBuilder.DropColumn(
                name: "HospitalId",
                table: "AssetDetail");

            migrationBuilder.DropColumn(
                name: "MasterAssetId",
                table: "AssetDetail");

            migrationBuilder.DropColumn(
                name: "OrganizationRequestId",
                table: "AssetDetail");

            migrationBuilder.DropColumn(
                name: "StatusId",
                table: "AssetDetail");

            migrationBuilder.DropColumn(
                name: "SupplierId",
                table: "AssetDetail");

            migrationBuilder.RenameTable(
                name: "EquipmentSubCategories",
                newName: "SubCategories");

            migrationBuilder.RenameTable(
                name: "EquipmentStatus",
                newName: "Status");

            migrationBuilder.RenameTable(
                name: "EquipmentCategories",
                newName: "Categories");

            migrationBuilder.RenameColumn(
                name: "RoomId",
                table: "AssetDetail",
                newName: "OrganizationContractRequestId");

            migrationBuilder.RenameIndex(
                name: "IX_AssetDetail_RoomId",
                table: "AssetDetail",
                newName: "IX_AssetDetail_OrganizationContractRequestId");

            migrationBuilder.RenameIndex(
                name: "IX_EquipmentSubCategories_EquipmentCategoryId",
                table: "SubCategories",
                newName: "IX_SubCategories_EquipmentCategoryId");

            migrationBuilder.AddColumn<int>(
                name: "AssetsId",
                table: "EquipmentAttachments",
                type: "int",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_SubCategories",
                table: "SubCategories",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Status",
                table: "Status",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Categories",
                table: "Categories",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Assets",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MasterCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NameAr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InstallationDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    HospitalId = table.Column<int>(type: "int", nullable: false),
                    Remarks = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SerialNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InternalCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Barcode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PurchaseDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    SupplierId = table.Column<int>(type: "int", nullable: false),
                    StatusId = table.Column<int>(type: "int", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    WarrantyExpires = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Length = table.Column<float>(type: "real", nullable: false),
                    Height = table.Column<float>(type: "real", nullable: false),
                    Weight = table.Column<float>(type: "real", nullable: false),
                    Color = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ColorAr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CustomizedField = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DepartmentId = table.Column<int>(type: "int", nullable: false),
                    Room = table.Column<int>(type: "int", nullable: false),
                    Floor = table.Column<int>(type: "int", nullable: false),
                    ProductionYear = table.Column<DateTime>(type: "datetime2", nullable: false),
                    MasterAssetId = table.Column<int>(type: "int", nullable: false),
                    ContractRequestId = table.Column<int>(type: "int", nullable: true),
                    OrganizationRequestId = table.Column<int>(type: "int", nullable: true),
                    ContractId = table.Column<int>(type: "int", nullable: true),
                    EquipmentRecallId = table.Column<int>(type: "int", nullable: true),
                    QrImgPath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WarrantyStart = table.Column<DateTime>(type: "datetime2", nullable: true),
                    WarrantyEnd = table.Column<DateTime>(type: "datetime2", nullable: true),
                    OperationDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ReceivingDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    PONumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DepreciationRate = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    CostCenter = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Assets", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Assets_contractRequests_ContractRequestId",
                        column: x => x.ContractRequestId,
                        principalTable: "contractRequests",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Assets_Contracts_ContractId",
                        column: x => x.ContractId,
                        principalTable: "Contracts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Assets_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_Assets_EquipmentRecalls_EquipmentRecallId",
                        column: x => x.EquipmentRecallId,
                        principalTable: "EquipmentRecalls",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Assets_Hospitals_HospitalId",
                        column: x => x.HospitalId,
                        principalTable: "Hospitals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_Assets_masterAssets_MasterAssetId",
                        column: x => x.MasterAssetId,
                        principalTable: "masterAssets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_Assets_organizationContractRequests_OrganizationRequestId",
                        column: x => x.OrganizationRequestId,
                        principalTable: "organizationContractRequests",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Assets_Status_StatusId",
                        column: x => x.StatusId,
                        principalTable: "Status",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_Assets_Suppliers_SupplierId",
                        column: x => x.SupplierId,
                        principalTable: "Suppliers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EquipmentId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    AssetsId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Employees_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Employees_AssetDetail_EquipmentId",
                        column: x => x.EquipmentId,
                        principalTable: "AssetDetail",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_Employees_Assets_AssetsId",
                        column: x => x.AssetsId,
                        principalTable: "Assets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EquipmentAttachments_AssetsId",
                table: "EquipmentAttachments",
                column: "AssetsId");

            migrationBuilder.CreateIndex(
                name: "IX_Assets_ContractId",
                table: "Assets",
                column: "ContractId");

            migrationBuilder.CreateIndex(
                name: "IX_Assets_ContractRequestId",
                table: "Assets",
                column: "ContractRequestId");

            migrationBuilder.CreateIndex(
                name: "IX_Assets_DepartmentId",
                table: "Assets",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Assets_EquipmentRecallId",
                table: "Assets",
                column: "EquipmentRecallId");

            migrationBuilder.CreateIndex(
                name: "IX_Assets_HospitalId",
                table: "Assets",
                column: "HospitalId");

            migrationBuilder.CreateIndex(
                name: "IX_Assets_MasterAssetId",
                table: "Assets",
                column: "MasterAssetId");

            migrationBuilder.CreateIndex(
                name: "IX_Assets_OrganizationRequestId",
                table: "Assets",
                column: "OrganizationRequestId");

            migrationBuilder.CreateIndex(
                name: "IX_Assets_StatusId",
                table: "Assets",
                column: "StatusId");

            migrationBuilder.CreateIndex(
                name: "IX_Assets_SupplierId",
                table: "Assets",
                column: "SupplierId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_AssetsId",
                table: "Employees",
                column: "AssetsId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_EquipmentId",
                table: "Employees",
                column: "EquipmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_UserId",
                table: "Employees",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_AssetDetail_organizationContractRequests_OrganizationContractRequestId",
                table: "AssetDetail",
                column: "OrganizationContractRequestId",
                principalTable: "organizationContractRequests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_EquipmentAttachments_Assets_AssetsId",
                table: "EquipmentAttachments",
                column: "AssetsId",
                principalTable: "Assets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_masterAssets_Categories_EquipmentCategoryId",
                table: "masterAssets",
                column: "EquipmentCategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_masterAssets_SubCategories_EquipmentSubCategoryId",
                table: "masterAssets",
                column: "EquipmentSubCategoryId",
                principalTable: "SubCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceRequest_Assets_EquipmentId",
                table: "ServiceRequest",
                column: "EquipmentId",
                principalTable: "Assets",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_SubCategories_Categories_EquipmentCategoryId",
                table: "SubCategories",
                column: "EquipmentCategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkOrders_Assets_EquipmentId",
                table: "WorkOrders",
                column: "EquipmentId",
                principalTable: "Assets",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AssetDetail_organizationContractRequests_OrganizationContractRequestId",
                table: "AssetDetail");

            migrationBuilder.DropForeignKey(
                name: "FK_EquipmentAttachments_Assets_AssetsId",
                table: "EquipmentAttachments");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_Categories_EquipmentCategoryId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_SubCategories_EquipmentSubCategoryId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceRequest_Assets_EquipmentId",
                table: "ServiceRequest");

            migrationBuilder.DropForeignKey(
                name: "FK_SubCategories_Categories_EquipmentCategoryId",
                table: "SubCategories");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkOrders_Assets_EquipmentId",
                table: "WorkOrders");

            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "Assets");

            migrationBuilder.DropIndex(
                name: "IX_EquipmentAttachments_AssetsId",
                table: "EquipmentAttachments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SubCategories",
                table: "SubCategories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Status",
                table: "Status");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Categories",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "AssetsId",
                table: "EquipmentAttachments");

            migrationBuilder.RenameTable(
                name: "SubCategories",
                newName: "EquipmentSubCategories");

            migrationBuilder.RenameTable(
                name: "Status",
                newName: "EquipmentStatus");

            migrationBuilder.RenameTable(
                name: "Categories",
                newName: "EquipmentCategories");

            migrationBuilder.RenameColumn(
                name: "OrganizationContractRequestId",
                table: "AssetDetail",
                newName: "RoomId");

            migrationBuilder.RenameIndex(
                name: "IX_AssetDetail_OrganizationContractRequestId",
                table: "AssetDetail",
                newName: "IX_AssetDetail_RoomId");

            migrationBuilder.RenameIndex(
                name: "IX_SubCategories_EquipmentCategoryId",
                table: "EquipmentSubCategories",
                newName: "IX_EquipmentSubCategories_EquipmentCategoryId");

            migrationBuilder.AddColumn<int>(
                name: "BuildingId",
                table: "AssetDetail",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DepartmentId",
                table: "AssetDetail",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "EquipmentRecallId",
                table: "AssetDetail",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "FloorId",
                table: "AssetDetail",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "HospitalId",
                table: "AssetDetail",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "MasterAssetId",
                table: "AssetDetail",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "OrganizationRequestId",
                table: "AssetDetail",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "StatusId",
                table: "AssetDetail",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SupplierId",
                table: "AssetDetail",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_EquipmentSubCategories",
                table: "EquipmentSubCategories",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_EquipmentStatus",
                table: "EquipmentStatus",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_EquipmentCategories",
                table: "EquipmentCategories",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Building",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Brief = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    BriefAr = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    Code = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: true),
                    HospitalId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    NameAr = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Building", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "equipmentEmployees",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EquipmentId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_equipmentEmployees", x => x.Id);
                    table.ForeignKey(
                        name: "FK_equipmentEmployees_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_equipmentEmployees_AssetDetail_EquipmentId",
                        column: x => x.EquipmentId,
                        principalTable: "AssetDetail",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "Floor",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BuildingId = table.Column<int>(type: "int", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: true),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    NameAr = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Floor", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Room",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: true),
                    FloorId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    NameAr = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Room", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AssetDetail_BuildingId",
                table: "AssetDetail",
                column: "BuildingId");

            migrationBuilder.CreateIndex(
                name: "IX_AssetDetail_DepartmentId",
                table: "AssetDetail",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_AssetDetail_EquipmentRecallId",
                table: "AssetDetail",
                column: "EquipmentRecallId");

            migrationBuilder.CreateIndex(
                name: "IX_AssetDetail_FloorId",
                table: "AssetDetail",
                column: "FloorId");

            migrationBuilder.CreateIndex(
                name: "IX_AssetDetail_HospitalId",
                table: "AssetDetail",
                column: "HospitalId");

            migrationBuilder.CreateIndex(
                name: "IX_AssetDetail_MasterAssetId",
                table: "AssetDetail",
                column: "MasterAssetId");

            migrationBuilder.CreateIndex(
                name: "IX_AssetDetail_OrganizationRequestId",
                table: "AssetDetail",
                column: "OrganizationRequestId");

            migrationBuilder.CreateIndex(
                name: "IX_AssetDetail_StatusId",
                table: "AssetDetail",
                column: "StatusId");

            migrationBuilder.CreateIndex(
                name: "IX_AssetDetail_SupplierId",
                table: "AssetDetail",
                column: "SupplierId");

            migrationBuilder.CreateIndex(
                name: "IX_equipmentEmployees_EquipmentId",
                table: "equipmentEmployees",
                column: "EquipmentId");

            migrationBuilder.CreateIndex(
                name: "IX_equipmentEmployees_UserId",
                table: "equipmentEmployees",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_AssetDetail_Building_BuildingId",
                table: "AssetDetail",
                column: "BuildingId",
                principalTable: "Building",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AssetDetail_Departments_DepartmentId",
                table: "AssetDetail",
                column: "DepartmentId",
                principalTable: "Departments",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_AssetDetail_EquipmentRecalls_EquipmentRecallId",
                table: "AssetDetail",
                column: "EquipmentRecallId",
                principalTable: "EquipmentRecalls",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AssetDetail_EquipmentStatus_StatusId",
                table: "AssetDetail",
                column: "StatusId",
                principalTable: "EquipmentStatus",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_AssetDetail_Floor_FloorId",
                table: "AssetDetail",
                column: "FloorId",
                principalTable: "Floor",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AssetDetail_Hospitals_HospitalId",
                table: "AssetDetail",
                column: "HospitalId",
                principalTable: "Hospitals",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_AssetDetail_masterAssets_MasterAssetId",
                table: "AssetDetail",
                column: "MasterAssetId",
                principalTable: "masterAssets",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_AssetDetail_organizationContractRequests_OrganizationRequestId",
                table: "AssetDetail",
                column: "OrganizationRequestId",
                principalTable: "organizationContractRequests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AssetDetail_Room_RoomId",
                table: "AssetDetail",
                column: "RoomId",
                principalTable: "Room",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AssetDetail_Suppliers_SupplierId",
                table: "AssetDetail",
                column: "SupplierId",
                principalTable: "Suppliers",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_EquipmentSubCategories_EquipmentCategories_EquipmentCategoryId",
                table: "EquipmentSubCategories",
                column: "EquipmentCategoryId",
                principalTable: "EquipmentCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_masterAssets_EquipmentCategories_EquipmentCategoryId",
                table: "masterAssets",
                column: "EquipmentCategoryId",
                principalTable: "EquipmentCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_masterAssets_EquipmentSubCategories_EquipmentSubCategoryId",
                table: "masterAssets",
                column: "EquipmentSubCategoryId",
                principalTable: "EquipmentSubCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceRequest_AssetDetail_EquipmentId",
                table: "ServiceRequest",
                column: "EquipmentId",
                principalTable: "AssetDetail",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkOrders_AssetDetail_EquipmentId",
                table: "WorkOrders",
                column: "EquipmentId",
                principalTable: "AssetDetail",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }
    }
}
