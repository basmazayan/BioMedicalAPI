using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BiomedicalSystemAPI.Migrations
{
    public partial class appmig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Building",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: true),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    NameAr = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Brief = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    BriefAr = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    HospitalId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Building", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Departments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DepartmentName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DepartmentNameAr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DepartmentCode = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DepreciationTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DepreciationTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Ecris",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ecri_code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NameAr = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ecris", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EquipmentCategories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CategoryCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CategoryName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CategoryNameAr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CategoryDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CategoryDescriptionAr = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EquipmentCategories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EquipmentStatus",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StatusAr = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EquipmentStatus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Floor",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: true),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    NameAr = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    BuildingId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Floor", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "HealthDirectories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HealthDirectoryCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HealthDirectoryName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HealthDirectoryNameAr = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HealthDirectories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Languages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Languages", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MaintenanceServices",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    problem = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PartCost = table.Column<double>(type: "float", nullable: false),
                    LaborCost = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MaintenanceServices", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Manufacturers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: true),
                    ManufacturerName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ManufacturerNameAr = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Manufacturers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Modes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RequestMode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RequestModeAr = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Modes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "organizations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NameAr = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_organizations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Origins",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OriginCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EnglishName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ArabicName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Origins", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Priority",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: true),
                    PriorityLevel = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PriorityLevelAr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DescriptionAr = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Priority", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "requestStatuses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    statusAr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    color = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_requestStatuses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Room",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: true),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    NameAr = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    FloorId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Room", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "spareParts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SparePartCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SparePartName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SparePartNameAr = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_spareParts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Suppliers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SupplierCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SupplierName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SupplierNameAr = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Suppliers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Vendors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VendorName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VendorNameAr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VendorCode = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vendors", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "EquipmentSubCategories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: true),
                    SubCategoryName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SubCategoryNameAr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EquipmentCategoryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EquipmentSubCategories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EquipmentSubCategories_EquipmentCategories_EquipmentCategoryId",
                        column: x => x.EquipmentCategoryId,
                        principalTable: "EquipmentCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "HealthDistricts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HealthDistrictCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HealthDistrictName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HealthDistrictNameAr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HealthDirectoryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HealthDistricts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HealthDistricts_HealthDirectories_HealthDirectoryId",
                        column: x => x.HealthDirectoryId,
                        principalTable: "HealthDirectories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "organizationContractRequests",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Number = table.Column<int>(type: "int", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    OrganizationId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_organizationContractRequests", x => x.Id);
                    table.ForeignKey(
                        name: "FK_organizationContractRequests_organizations_OrganizationId",
                        column: x => x.OrganizationId,
                        principalTable: "organizations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "subOrganizations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NameAr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    organizationId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_subOrganizations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_subOrganizations_organizations_organizationId",
                        column: x => x.organizationId,
                        principalTable: "organizations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "masterAssets",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NameAr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MasterCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EquipmentCategoryId = table.Column<int>(type: "int", nullable: false),
                    EquipmentSubCategoryId = table.Column<int>(type: "int", nullable: true),
                    ManufacturerId = table.Column<int>(type: "int", nullable: false),
                    PriorityId = table.Column<int>(type: "int", nullable: false),
                    EquipmentDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EquipmentDescriptionAr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExpectedLifeTime = table.Column<int>(type: "int", nullable: false),
                    UpaCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ModelNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VersionNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OriginId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_masterAssets", x => x.Id);
                    table.ForeignKey(
                        name: "FK_masterAssets_EquipmentCategories_EquipmentCategoryId",
                        column: x => x.EquipmentCategoryId,
                        principalTable: "EquipmentCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_masterAssets_EquipmentSubCategories_EquipmentSubCategoryId",
                        column: x => x.EquipmentSubCategoryId,
                        principalTable: "EquipmentSubCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_masterAssets_Manufacturers_ManufacturerId",
                        column: x => x.ManufacturerId,
                        principalTable: "Manufacturers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_masterAssets_Origins_OriginId",
                        column: x => x.OriginId,
                        principalTable: "Origins",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_masterAssets_Priority_PriorityId",
                        column: x => x.PriorityId,
                        principalTable: "Priority",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "Hospitals",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HealthCareUnitCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HealthCareUnitName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HealthCareUnitNameAr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Director = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Mobile = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Long = table.Column<double>(type: "float", nullable: true),
                    Lat = table.Column<double>(type: "float", nullable: true),
                    HealthDistrictId = table.Column<int>(type: "int", nullable: false),
                    HealthDirectoryId = table.Column<int>(type: "int", nullable: false),
                    organizationId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hospitals", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Hospitals_HealthDirectories_HealthDirectoryId",
                        column: x => x.HealthDirectoryId,
                        principalTable: "HealthDirectories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_Hospitals_HealthDistricts_HealthDistrictId",
                        column: x => x.HealthDistrictId,
                        principalTable: "HealthDistricts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_Hospitals_organizations_organizationId",
                        column: x => x.organizationId,
                        principalTable: "organizations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "EquipmentRecalls",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MasterAssetId = table.Column<int>(type: "int", nullable: false),
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
                        name: "FK_EquipmentRecalls_masterAssets_MasterAssetId",
                        column: x => x.MasterAssetId,
                        principalTable: "masterAssets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_EquipmentRecalls_Suppliers_SupplierId",
                        column: x => x.SupplierId,
                        principalTable: "Suppliers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "masterEquipmentAttachments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MasterEquipmentId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_masterEquipmentAttachments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_masterEquipmentAttachments_masterAssets_MasterEquipmentId",
                        column: x => x.MasterEquipmentId,
                        principalTable: "masterAssets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    NameAr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Mobile = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HealthCareUnitId = table.Column<int>(type: "int", nullable: true),
                    OrganizationId = table.Column<int>(type: "int", nullable: true),
                    HealthdirId = table.Column<int>(type: "int", nullable: true),
                    HealthDistrictId = table.Column<int>(type: "int", nullable: true),
                    SubOrganizationId = table.Column<int>(type: "int", nullable: true),
                    SupplierId = table.Column<int>(type: "int", nullable: true),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_HealthDirectories_HealthdirId",
                        column: x => x.HealthdirId,
                        principalTable: "HealthDirectories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_HealthDistricts_HealthDistrictId",
                        column: x => x.HealthDistrictId,
                        principalTable: "HealthDistricts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_Hospitals_HealthCareUnitId",
                        column: x => x.HealthCareUnitId,
                        principalTable: "Hospitals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_organizations_OrganizationId",
                        column: x => x.OrganizationId,
                        principalTable: "organizations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_subOrganizations_SubOrganizationId",
                        column: x => x.SubOrganizationId,
                        principalTable: "subOrganizations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_Suppliers_SupplierId",
                        column: x => x.SupplierId,
                        principalTable: "Suppliers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "contractRequests",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Number = table.Column<int>(type: "int", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Comments = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<int>(type: "int", nullable: false),
                    HospitalId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_contractRequests", x => x.Id);
                    table.ForeignKey(
                        name: "FK_contractRequests_Hospitals_HospitalId",
                        column: x => x.HospitalId,
                        principalTable: "Hospitals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "Contracts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Subject = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Number = table.Column<int>(type: "int", nullable: false),
                    Contents = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    HealthCareUnitId = table.Column<int>(type: "int", nullable: true),
                    SupplierId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contracts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Contracts_Hospitals_HealthCareUnitId",
                        column: x => x.HealthCareUnitId,
                        principalTable: "Hospitals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Contracts_Suppliers_SupplierId",
                        column: x => x.SupplierId,
                        principalTable: "Suppliers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "AssetDetail",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: true),
                    PurchaseDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    SerialNumber = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    Remarks = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Barcode = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    InstallationDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    WarrantyExpires = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    BuildingId = table.Column<int>(type: "int", nullable: true),
                    RoomId = table.Column<int>(type: "int", nullable: true),
                    FloorId = table.Column<int>(type: "int", nullable: true),
                    DepartmentId = table.Column<int>(type: "int", nullable: false),
                    SupplierId = table.Column<int>(type: "int", nullable: false),
                    HospitalId = table.Column<int>(type: "int", nullable: false),
                    MasterAssetId = table.Column<int>(type: "int", nullable: false),
                    WarrantyStart = table.Column<DateTime>(type: "datetime2", nullable: true),
                    WarrantyEnd = table.Column<DateTime>(type: "datetime2", nullable: true),
                    OperationDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ReceivingDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    PONumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DepreciationRate = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    CostCenter = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    QrFilePath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MasterCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StatusId = table.Column<int>(type: "int", nullable: false),
                    EquipmentRecallId = table.Column<int>(type: "int", nullable: true),
                    ContractId = table.Column<int>(type: "int", nullable: true),
                    ContractRequestId = table.Column<int>(type: "int", nullable: true),
                    OrganizationRequestId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AssetDetail", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AssetDetail_Building_BuildingId",
                        column: x => x.BuildingId,
                        principalTable: "Building",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AssetDetail_contractRequests_ContractRequestId",
                        column: x => x.ContractRequestId,
                        principalTable: "contractRequests",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AssetDetail_Contracts_ContractId",
                        column: x => x.ContractId,
                        principalTable: "Contracts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AssetDetail_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_AssetDetail_EquipmentRecalls_EquipmentRecallId",
                        column: x => x.EquipmentRecallId,
                        principalTable: "EquipmentRecalls",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AssetDetail_EquipmentStatus_StatusId",
                        column: x => x.StatusId,
                        principalTable: "EquipmentStatus",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_AssetDetail_Floor_FloorId",
                        column: x => x.FloorId,
                        principalTable: "Floor",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AssetDetail_Hospitals_HospitalId",
                        column: x => x.HospitalId,
                        principalTable: "Hospitals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_AssetDetail_masterAssets_MasterAssetId",
                        column: x => x.MasterAssetId,
                        principalTable: "masterAssets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_AssetDetail_organizationContractRequests_OrganizationRequestId",
                        column: x => x.OrganizationRequestId,
                        principalTable: "organizationContractRequests",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AssetDetail_Room_RoomId",
                        column: x => x.RoomId,
                        principalTable: "Room",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AssetDetail_Suppliers_SupplierId",
                        column: x => x.SupplierId,
                        principalTable: "Suppliers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "contractAttachments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ContractId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_contractAttachments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_contractAttachments_Contracts_ContractId",
                        column: x => x.ContractId,
                        principalTable: "Contracts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "EquipmentCoverages",
                columns: table => new
                {
                    equipmentCoverageId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ResponseTime = table.Column<float>(type: "real", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DescriptionAr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NumberOfVisits = table.Column<int>(type: "int", nullable: false),
                    SparePartId = table.Column<int>(type: "int", nullable: true),
                    ContractId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EquipmentCoverages", x => x.equipmentCoverageId);
                    table.ForeignKey(
                        name: "FK_EquipmentCoverages_Contracts_ContractId",
                        column: x => x.ContractId,
                        principalTable: "Contracts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_EquipmentCoverages_spareParts_SparePartId",
                        column: x => x.SparePartId,
                        principalTable: "spareParts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "EquipmentAttachments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EquipmentId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EquipmentAttachments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EquipmentAttachments_AssetDetail_EquipmentId",
                        column: x => x.EquipmentId,
                        principalTable: "AssetDetail",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
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
                name: "inventories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    EquipmentId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_inventories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_inventories_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_inventories_AssetDetail_EquipmentId",
                        column: x => x.EquipmentId,
                        principalTable: "AssetDetail",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "ServiceRequest",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ServiceRequestCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServiceRequestTitle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServiceRequestTitleAr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProblemDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProblemDescriptionAr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServiceRequestDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ServiceRequestTime = table.Column<TimeSpan>(type: "time", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    UserEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RequestType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RequestTypeAr = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EquipmentId = table.Column<int>(type: "int", nullable: false),
                    EquipmentCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EquipmentName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ModeId = table.Column<int>(type: "int", nullable: false),
                    RequestMode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PriorityId = table.Column<int>(type: "int", nullable: false),
                    PriorityLevel = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HealthDirectoryId = table.Column<int>(type: "int", nullable: true),
                    HealthDistrictId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceRequest", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ServiceRequest_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ServiceRequest_AssetDetail_EquipmentId",
                        column: x => x.EquipmentId,
                        principalTable: "AssetDetail",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_ServiceRequest_HealthDirectories_HealthDirectoryId",
                        column: x => x.HealthDirectoryId,
                        principalTable: "HealthDirectories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ServiceRequest_HealthDistricts_HealthDistrictId",
                        column: x => x.HealthDistrictId,
                        principalTable: "HealthDistricts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ServiceRequest_Modes_ModeId",
                        column: x => x.ModeId,
                        principalTable: "Modes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_ServiceRequest_Priority_PriorityId",
                        column: x => x.PriorityId,
                        principalTable: "Priority",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "Equipment_EquipmentCoverage",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EquipmentId = table.Column<int>(type: "int", nullable: false),
                    EquipmentCoverageId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Equipment_EquipmentCoverage", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Equipment_EquipmentCoverage_AssetDetail_EquipmentId",
                        column: x => x.EquipmentId,
                        principalTable: "AssetDetail",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_Equipment_EquipmentCoverage_EquipmentCoverages_EquipmentCoverageId",
                        column: x => x.EquipmentCoverageId,
                        principalTable: "EquipmentCoverages",
                        principalColumn: "equipmentCoverageId",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "serviceRequestAttachments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServiceRequestId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_serviceRequestAttachments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_serviceRequestAttachments_ServiceRequest_ServiceRequestId",
                        column: x => x.ServiceRequestId,
                        principalTable: "ServiceRequest",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "WorkOrders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    WorkOrderDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PriorityId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    VendorId = table.Column<int>(type: "int", nullable: true),
                    RequestStatusId = table.Column<int>(type: "int", nullable: false),
                    EquipmentId = table.Column<int>(type: "int", nullable: false),
                    ServiceRequestId = table.Column<int>(type: "int", nullable: true),
                    MaintenanceId = table.Column<int>(type: "int", nullable: false),
                    SparePartId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkOrders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_WorkOrders_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_WorkOrders_AssetDetail_EquipmentId",
                        column: x => x.EquipmentId,
                        principalTable: "AssetDetail",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_WorkOrders_MaintenanceServices_MaintenanceId",
                        column: x => x.MaintenanceId,
                        principalTable: "MaintenanceServices",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_WorkOrders_Priority_PriorityId",
                        column: x => x.PriorityId,
                        principalTable: "Priority",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_WorkOrders_requestStatuses_RequestStatusId",
                        column: x => x.RequestStatusId,
                        principalTable: "requestStatuses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_WorkOrders_ServiceRequest_ServiceRequestId",
                        column: x => x.ServiceRequestId,
                        principalTable: "ServiceRequest",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_WorkOrders_spareParts_SparePartId",
                        column: x => x.SparePartId,
                        principalTable: "spareParts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_WorkOrders_Vendors_VendorId",
                        column: x => x.VendorId,
                        principalTable: "Vendors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "workOrderAttachments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkOrderId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_workOrderAttachments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_workOrderAttachments_WorkOrders_WorkOrderId",
                        column: x => x.WorkOrderId,
                        principalTable: "WorkOrders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_HealthCareUnitId",
                table: "AspNetUsers",
                column: "HealthCareUnitId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_HealthdirId",
                table: "AspNetUsers",
                column: "HealthdirId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_HealthDistrictId",
                table: "AspNetUsers",
                column: "HealthDistrictId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_OrganizationId",
                table: "AspNetUsers",
                column: "OrganizationId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_SubOrganizationId",
                table: "AspNetUsers",
                column: "SubOrganizationId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_SupplierId",
                table: "AspNetUsers",
                column: "SupplierId");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AssetDetail_BuildingId",
                table: "AssetDetail",
                column: "BuildingId");

            migrationBuilder.CreateIndex(
                name: "IX_AssetDetail_ContractId",
                table: "AssetDetail",
                column: "ContractId");

            migrationBuilder.CreateIndex(
                name: "IX_AssetDetail_ContractRequestId",
                table: "AssetDetail",
                column: "ContractRequestId");

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
                name: "IX_AssetDetail_RoomId",
                table: "AssetDetail",
                column: "RoomId");

            migrationBuilder.CreateIndex(
                name: "IX_AssetDetail_StatusId",
                table: "AssetDetail",
                column: "StatusId");

            migrationBuilder.CreateIndex(
                name: "IX_AssetDetail_SupplierId",
                table: "AssetDetail",
                column: "SupplierId");

            migrationBuilder.CreateIndex(
                name: "IX_contractAttachments_ContractId",
                table: "contractAttachments",
                column: "ContractId");

            migrationBuilder.CreateIndex(
                name: "IX_contractRequests_HospitalId",
                table: "contractRequests",
                column: "HospitalId");

            migrationBuilder.CreateIndex(
                name: "IX_Contracts_HealthCareUnitId",
                table: "Contracts",
                column: "HealthCareUnitId");

            migrationBuilder.CreateIndex(
                name: "IX_Contracts_SupplierId",
                table: "Contracts",
                column: "SupplierId");

            migrationBuilder.CreateIndex(
                name: "IX_Equipment_EquipmentCoverage_EquipmentCoverageId",
                table: "Equipment_EquipmentCoverage",
                column: "EquipmentCoverageId");

            migrationBuilder.CreateIndex(
                name: "IX_Equipment_EquipmentCoverage_EquipmentId",
                table: "Equipment_EquipmentCoverage",
                column: "EquipmentId");

            migrationBuilder.CreateIndex(
                name: "IX_EquipmentAttachments_EquipmentId",
                table: "EquipmentAttachments",
                column: "EquipmentId");

            migrationBuilder.CreateIndex(
                name: "IX_EquipmentCoverages_ContractId",
                table: "EquipmentCoverages",
                column: "ContractId");

            migrationBuilder.CreateIndex(
                name: "IX_EquipmentCoverages_SparePartId",
                table: "EquipmentCoverages",
                column: "SparePartId");

            migrationBuilder.CreateIndex(
                name: "IX_equipmentEmployees_EquipmentId",
                table: "equipmentEmployees",
                column: "EquipmentId");

            migrationBuilder.CreateIndex(
                name: "IX_equipmentEmployees_UserId",
                table: "equipmentEmployees",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_EquipmentRecalls_MasterAssetId",
                table: "EquipmentRecalls",
                column: "MasterAssetId");

            migrationBuilder.CreateIndex(
                name: "IX_EquipmentRecalls_SupplierId",
                table: "EquipmentRecalls",
                column: "SupplierId");

            migrationBuilder.CreateIndex(
                name: "IX_EquipmentSubCategories_EquipmentCategoryId",
                table: "EquipmentSubCategories",
                column: "EquipmentCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_HealthDistricts_HealthDirectoryId",
                table: "HealthDistricts",
                column: "HealthDirectoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Hospitals_HealthDirectoryId",
                table: "Hospitals",
                column: "HealthDirectoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Hospitals_HealthDistrictId",
                table: "Hospitals",
                column: "HealthDistrictId");

            migrationBuilder.CreateIndex(
                name: "IX_Hospitals_organizationId",
                table: "Hospitals",
                column: "organizationId");

            migrationBuilder.CreateIndex(
                name: "IX_inventories_EquipmentId",
                table: "inventories",
                column: "EquipmentId");

            migrationBuilder.CreateIndex(
                name: "IX_inventories_UserId",
                table: "inventories",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_masterAssets_EquipmentCategoryId",
                table: "masterAssets",
                column: "EquipmentCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_masterAssets_EquipmentSubCategoryId",
                table: "masterAssets",
                column: "EquipmentSubCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_masterAssets_ManufacturerId",
                table: "masterAssets",
                column: "ManufacturerId");

            migrationBuilder.CreateIndex(
                name: "IX_masterAssets_OriginId",
                table: "masterAssets",
                column: "OriginId");

            migrationBuilder.CreateIndex(
                name: "IX_masterAssets_PriorityId",
                table: "masterAssets",
                column: "PriorityId");

            migrationBuilder.CreateIndex(
                name: "IX_masterEquipmentAttachments_MasterEquipmentId",
                table: "masterEquipmentAttachments",
                column: "MasterEquipmentId");

            migrationBuilder.CreateIndex(
                name: "IX_organizationContractRequests_OrganizationId",
                table: "organizationContractRequests",
                column: "OrganizationId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceRequest_EquipmentId",
                table: "ServiceRequest",
                column: "EquipmentId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceRequest_HealthDirectoryId",
                table: "ServiceRequest",
                column: "HealthDirectoryId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceRequest_HealthDistrictId",
                table: "ServiceRequest",
                column: "HealthDistrictId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceRequest_ModeId",
                table: "ServiceRequest",
                column: "ModeId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceRequest_PriorityId",
                table: "ServiceRequest",
                column: "PriorityId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceRequest_UserId",
                table: "ServiceRequest",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_serviceRequestAttachments_ServiceRequestId",
                table: "serviceRequestAttachments",
                column: "ServiceRequestId");

            migrationBuilder.CreateIndex(
                name: "IX_subOrganizations_organizationId",
                table: "subOrganizations",
                column: "organizationId");

            migrationBuilder.CreateIndex(
                name: "IX_workOrderAttachments_WorkOrderId",
                table: "workOrderAttachments",
                column: "WorkOrderId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkOrders_EquipmentId",
                table: "WorkOrders",
                column: "EquipmentId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkOrders_MaintenanceId",
                table: "WorkOrders",
                column: "MaintenanceId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkOrders_PriorityId",
                table: "WorkOrders",
                column: "PriorityId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkOrders_RequestStatusId",
                table: "WorkOrders",
                column: "RequestStatusId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkOrders_ServiceRequestId",
                table: "WorkOrders",
                column: "ServiceRequestId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkOrders_SparePartId",
                table: "WorkOrders",
                column: "SparePartId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkOrders_UserId",
                table: "WorkOrders",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkOrders_VendorId",
                table: "WorkOrders",
                column: "VendorId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "contractAttachments");

            migrationBuilder.DropTable(
                name: "DepreciationTypes");

            migrationBuilder.DropTable(
                name: "Ecris");

            migrationBuilder.DropTable(
                name: "Equipment_EquipmentCoverage");

            migrationBuilder.DropTable(
                name: "EquipmentAttachments");

            migrationBuilder.DropTable(
                name: "equipmentEmployees");

            migrationBuilder.DropTable(
                name: "inventories");

            migrationBuilder.DropTable(
                name: "Languages");

            migrationBuilder.DropTable(
                name: "masterEquipmentAttachments");

            migrationBuilder.DropTable(
                name: "serviceRequestAttachments");

            migrationBuilder.DropTable(
                name: "workOrderAttachments");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "EquipmentCoverages");

            migrationBuilder.DropTable(
                name: "WorkOrders");

            migrationBuilder.DropTable(
                name: "MaintenanceServices");

            migrationBuilder.DropTable(
                name: "requestStatuses");

            migrationBuilder.DropTable(
                name: "ServiceRequest");

            migrationBuilder.DropTable(
                name: "spareParts");

            migrationBuilder.DropTable(
                name: "Vendors");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "AssetDetail");

            migrationBuilder.DropTable(
                name: "Modes");

            migrationBuilder.DropTable(
                name: "subOrganizations");

            migrationBuilder.DropTable(
                name: "Building");

            migrationBuilder.DropTable(
                name: "contractRequests");

            migrationBuilder.DropTable(
                name: "Contracts");

            migrationBuilder.DropTable(
                name: "Departments");

            migrationBuilder.DropTable(
                name: "EquipmentRecalls");

            migrationBuilder.DropTable(
                name: "EquipmentStatus");

            migrationBuilder.DropTable(
                name: "Floor");

            migrationBuilder.DropTable(
                name: "organizationContractRequests");

            migrationBuilder.DropTable(
                name: "Room");

            migrationBuilder.DropTable(
                name: "Hospitals");

            migrationBuilder.DropTable(
                name: "masterAssets");

            migrationBuilder.DropTable(
                name: "Suppliers");

            migrationBuilder.DropTable(
                name: "HealthDistricts");

            migrationBuilder.DropTable(
                name: "organizations");

            migrationBuilder.DropTable(
                name: "EquipmentSubCategories");

            migrationBuilder.DropTable(
                name: "Manufacturers");

            migrationBuilder.DropTable(
                name: "Origins");

            migrationBuilder.DropTable(
                name: "Priority");

            migrationBuilder.DropTable(
                name: "HealthDirectories");

            migrationBuilder.DropTable(
                name: "EquipmentCategories");
        }
    }
}
