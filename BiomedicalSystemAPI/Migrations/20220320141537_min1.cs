using Microsoft.EntityFrameworkCore.Migrations;

namespace BiomedicalSystemAPI.Migrations
{
    public partial class min1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HealthDistricts_HealthDirectories_HealthDirectoryId",
                table: "HealthDistricts");

            migrationBuilder.DropForeignKey(
                name: "FK_Hospitals_HealthDirectories_HealthDirectoryId",
                table: "Hospitals");

            migrationBuilder.DropForeignKey(
                name: "FK_Hospitals_HealthDistricts_HealthDistrictId",
                table: "Hospitals");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_Categories_EquipmentCategoryId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_Manufacturers_ManufacturerId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_SubCategories_EquipmentSubCategoryId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_SubCategories_Categories_EquipmentCategoryId",
                table: "SubCategories");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkOrders_Assets_EquipmentId",
                table: "WorkOrders");

            migrationBuilder.RenameColumn(
                name: "WorkOrderDate",
                table: "WorkOrders",
                newName: "Date");

            migrationBuilder.RenameColumn(
                name: "EquipmentId",
                table: "WorkOrders",
                newName: "AssetId");

            migrationBuilder.RenameIndex(
                name: "IX_WorkOrders_EquipmentId",
                table: "WorkOrders",
                newName: "IX_WorkOrders_AssetId");

            migrationBuilder.RenameColumn(
                name: "VendorNameAr",
                table: "Vendors",
                newName: "NameAr");

            migrationBuilder.RenameColumn(
                name: "VendorName",
                table: "Vendors",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "VendorCode",
                table: "Vendors",
                newName: "Code");

            migrationBuilder.RenameColumn(
                name: "SupplierNameAr",
                table: "Suppliers",
                newName: "NameAr");

            migrationBuilder.RenameColumn(
                name: "SupplierName",
                table: "Suppliers",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "SupplierCode",
                table: "Suppliers",
                newName: "Code");

            migrationBuilder.RenameColumn(
                name: "SubCategoryNameAr",
                table: "SubCategories",
                newName: "NameAr");

            migrationBuilder.RenameColumn(
                name: "SubCategoryName",
                table: "SubCategories",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "EquipmentCategoryId",
                table: "SubCategories",
                newName: "CategoryId");

            migrationBuilder.RenameIndex(
                name: "IX_SubCategories_EquipmentCategoryId",
                table: "SubCategories",
                newName: "IX_SubCategories_CategoryId");

            migrationBuilder.RenameColumn(
                name: "OriginCode",
                table: "Origins",
                newName: "NameAr");

            migrationBuilder.RenameColumn(
                name: "EnglishName",
                table: "Origins",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "ArabicName",
                table: "Origins",
                newName: "Code");

            migrationBuilder.RenameColumn(
                name: "ManufacturerId",
                table: "masterAssets",
                newName: "CategoryId");

            migrationBuilder.RenameColumn(
                name: "EquipmentSubCategoryId",
                table: "masterAssets",
                newName: "SubCategoryId");

            migrationBuilder.RenameColumn(
                name: "EquipmentDescriptionAr",
                table: "masterAssets",
                newName: "DescriptionAr");

            migrationBuilder.RenameColumn(
                name: "EquipmentDescription",
                table: "masterAssets",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "EquipmentCategoryId",
                table: "masterAssets",
                newName: "BrandId");

            migrationBuilder.RenameIndex(
                name: "IX_masterAssets_ManufacturerId",
                table: "masterAssets",
                newName: "IX_masterAssets_CategoryId");

            migrationBuilder.RenameIndex(
                name: "IX_masterAssets_EquipmentSubCategoryId",
                table: "masterAssets",
                newName: "IX_masterAssets_SubCategoryId");

            migrationBuilder.RenameIndex(
                name: "IX_masterAssets_EquipmentCategoryId",
                table: "masterAssets",
                newName: "IX_masterAssets_BrandId");

            migrationBuilder.RenameColumn(
                name: "ManufacturerNameAr",
                table: "Manufacturers",
                newName: "NameAr");

            migrationBuilder.RenameColumn(
                name: "ManufacturerName",
                table: "Manufacturers",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "HealthDistrictId",
                table: "Hospitals",
                newName: "GovernorateId");

            migrationBuilder.RenameColumn(
                name: "HealthDirectoryId",
                table: "Hospitals",
                newName: "CityId");

            migrationBuilder.RenameColumn(
                name: "HealthCareUnitNameAr",
                table: "Hospitals",
                newName: "NameAr");

            migrationBuilder.RenameColumn(
                name: "HealthCareUnitName",
                table: "Hospitals",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "HealthCareUnitCode",
                table: "Hospitals",
                newName: "Code");

            migrationBuilder.RenameIndex(
                name: "IX_Hospitals_HealthDistrictId",
                table: "Hospitals",
                newName: "IX_Hospitals_GovernorateId");

            migrationBuilder.RenameIndex(
                name: "IX_Hospitals_HealthDirectoryId",
                table: "Hospitals",
                newName: "IX_Hospitals_CityId");

            migrationBuilder.RenameColumn(
                name: "HealthDistrictNameAr",
                table: "HealthDistricts",
                newName: "NameAr");

            migrationBuilder.RenameColumn(
                name: "HealthDistrictName",
                table: "HealthDistricts",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "HealthDistrictCode",
                table: "HealthDistricts",
                newName: "Code");

            migrationBuilder.RenameColumn(
                name: "HealthDirectoryId",
                table: "HealthDistricts",
                newName: "GovernorateId");

            migrationBuilder.RenameIndex(
                name: "IX_HealthDistricts_HealthDirectoryId",
                table: "HealthDistricts",
                newName: "IX_HealthDistricts_GovernorateId");

            migrationBuilder.RenameColumn(
                name: "HealthDirectoryNameAr",
                table: "HealthDirectories",
                newName: "NameAr");

            migrationBuilder.RenameColumn(
                name: "HealthDirectoryName",
                table: "HealthDirectories",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "HealthDirectoryCode",
                table: "HealthDirectories",
                newName: "Code");

            migrationBuilder.RenameColumn(
                name: "DepartmentNameAr",
                table: "Departments",
                newName: "NameAr");

            migrationBuilder.RenameColumn(
                name: "DepartmentName",
                table: "Departments",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "DepartmentCode",
                table: "Departments",
                newName: "Code");

            migrationBuilder.RenameColumn(
                name: "CategoryNameAr",
                table: "Categories",
                newName: "NameAr");

            migrationBuilder.RenameColumn(
                name: "CategoryName",
                table: "Categories",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "CategoryDescriptionAr",
                table: "Categories",
                newName: "DescriptionAr");

            migrationBuilder.RenameColumn(
                name: "CategoryDescription",
                table: "Categories",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "CategoryCode",
                table: "Categories",
                newName: "Code");

            migrationBuilder.AddColumn<string>(
                name: "Ampair",
                table: "masterAssets",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ElectricRequirement",
                table: "masterAssets",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Frequency",
                table: "masterAssets",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Height",
                table: "masterAssets",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Length",
                table: "masterAssets",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PMBGColor",
                table: "masterAssets",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PMColor",
                table: "masterAssets",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Power",
                table: "masterAssets",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Voltage",
                table: "masterAssets",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Weight",
                table: "masterAssets",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Width",
                table: "masterAssets",
                type: "float",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_HealthDistricts_HealthDirectories_GovernorateId",
                table: "HealthDistricts",
                column: "GovernorateId",
                principalTable: "HealthDirectories",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Hospitals_HealthDirectories_GovernorateId",
                table: "Hospitals",
                column: "GovernorateId",
                principalTable: "HealthDirectories",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Hospitals_HealthDistricts_CityId",
                table: "Hospitals",
                column: "CityId",
                principalTable: "HealthDistricts",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_masterAssets_Categories_CategoryId",
                table: "masterAssets",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_masterAssets_Manufacturers_BrandId",
                table: "masterAssets",
                column: "BrandId",
                principalTable: "Manufacturers",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_masterAssets_SubCategories_SubCategoryId",
                table: "masterAssets",
                column: "SubCategoryId",
                principalTable: "SubCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_SubCategories_Categories_CategoryId",
                table: "SubCategories",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkOrders_Assets_AssetId",
                table: "WorkOrders",
                column: "AssetId",
                principalTable: "Assets",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HealthDistricts_HealthDirectories_GovernorateId",
                table: "HealthDistricts");

            migrationBuilder.DropForeignKey(
                name: "FK_Hospitals_HealthDirectories_GovernorateId",
                table: "Hospitals");

            migrationBuilder.DropForeignKey(
                name: "FK_Hospitals_HealthDistricts_CityId",
                table: "Hospitals");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_Categories_CategoryId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_Manufacturers_BrandId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_SubCategories_SubCategoryId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_SubCategories_Categories_CategoryId",
                table: "SubCategories");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkOrders_Assets_AssetId",
                table: "WorkOrders");

            migrationBuilder.DropColumn(
                name: "Ampair",
                table: "masterAssets");

            migrationBuilder.DropColumn(
                name: "ElectricRequirement",
                table: "masterAssets");

            migrationBuilder.DropColumn(
                name: "Frequency",
                table: "masterAssets");

            migrationBuilder.DropColumn(
                name: "Height",
                table: "masterAssets");

            migrationBuilder.DropColumn(
                name: "Length",
                table: "masterAssets");

            migrationBuilder.DropColumn(
                name: "PMBGColor",
                table: "masterAssets");

            migrationBuilder.DropColumn(
                name: "PMColor",
                table: "masterAssets");

            migrationBuilder.DropColumn(
                name: "Power",
                table: "masterAssets");

            migrationBuilder.DropColumn(
                name: "Voltage",
                table: "masterAssets");

            migrationBuilder.DropColumn(
                name: "Weight",
                table: "masterAssets");

            migrationBuilder.DropColumn(
                name: "Width",
                table: "masterAssets");

            migrationBuilder.RenameColumn(
                name: "Date",
                table: "WorkOrders",
                newName: "WorkOrderDate");

            migrationBuilder.RenameColumn(
                name: "AssetId",
                table: "WorkOrders",
                newName: "EquipmentId");

            migrationBuilder.RenameIndex(
                name: "IX_WorkOrders_AssetId",
                table: "WorkOrders",
                newName: "IX_WorkOrders_EquipmentId");

            migrationBuilder.RenameColumn(
                name: "NameAr",
                table: "Vendors",
                newName: "VendorNameAr");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Vendors",
                newName: "VendorName");

            migrationBuilder.RenameColumn(
                name: "Code",
                table: "Vendors",
                newName: "VendorCode");

            migrationBuilder.RenameColumn(
                name: "NameAr",
                table: "Suppliers",
                newName: "SupplierNameAr");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Suppliers",
                newName: "SupplierName");

            migrationBuilder.RenameColumn(
                name: "Code",
                table: "Suppliers",
                newName: "SupplierCode");

            migrationBuilder.RenameColumn(
                name: "NameAr",
                table: "SubCategories",
                newName: "SubCategoryNameAr");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "SubCategories",
                newName: "SubCategoryName");

            migrationBuilder.RenameColumn(
                name: "CategoryId",
                table: "SubCategories",
                newName: "EquipmentCategoryId");

            migrationBuilder.RenameIndex(
                name: "IX_SubCategories_CategoryId",
                table: "SubCategories",
                newName: "IX_SubCategories_EquipmentCategoryId");

            migrationBuilder.RenameColumn(
                name: "NameAr",
                table: "Origins",
                newName: "OriginCode");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Origins",
                newName: "EnglishName");

            migrationBuilder.RenameColumn(
                name: "Code",
                table: "Origins",
                newName: "ArabicName");

            migrationBuilder.RenameColumn(
                name: "SubCategoryId",
                table: "masterAssets",
                newName: "EquipmentSubCategoryId");

            migrationBuilder.RenameColumn(
                name: "DescriptionAr",
                table: "masterAssets",
                newName: "EquipmentDescriptionAr");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "masterAssets",
                newName: "EquipmentDescription");

            migrationBuilder.RenameColumn(
                name: "CategoryId",
                table: "masterAssets",
                newName: "ManufacturerId");

            migrationBuilder.RenameColumn(
                name: "BrandId",
                table: "masterAssets",
                newName: "EquipmentCategoryId");

            migrationBuilder.RenameIndex(
                name: "IX_masterAssets_SubCategoryId",
                table: "masterAssets",
                newName: "IX_masterAssets_EquipmentSubCategoryId");

            migrationBuilder.RenameIndex(
                name: "IX_masterAssets_CategoryId",
                table: "masterAssets",
                newName: "IX_masterAssets_ManufacturerId");

            migrationBuilder.RenameIndex(
                name: "IX_masterAssets_BrandId",
                table: "masterAssets",
                newName: "IX_masterAssets_EquipmentCategoryId");

            migrationBuilder.RenameColumn(
                name: "NameAr",
                table: "Manufacturers",
                newName: "ManufacturerNameAr");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Manufacturers",
                newName: "ManufacturerName");

            migrationBuilder.RenameColumn(
                name: "NameAr",
                table: "Hospitals",
                newName: "HealthCareUnitNameAr");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Hospitals",
                newName: "HealthCareUnitName");

            migrationBuilder.RenameColumn(
                name: "GovernorateId",
                table: "Hospitals",
                newName: "HealthDistrictId");

            migrationBuilder.RenameColumn(
                name: "Code",
                table: "Hospitals",
                newName: "HealthCareUnitCode");

            migrationBuilder.RenameColumn(
                name: "CityId",
                table: "Hospitals",
                newName: "HealthDirectoryId");

            migrationBuilder.RenameIndex(
                name: "IX_Hospitals_GovernorateId",
                table: "Hospitals",
                newName: "IX_Hospitals_HealthDistrictId");

            migrationBuilder.RenameIndex(
                name: "IX_Hospitals_CityId",
                table: "Hospitals",
                newName: "IX_Hospitals_HealthDirectoryId");

            migrationBuilder.RenameColumn(
                name: "NameAr",
                table: "HealthDistricts",
                newName: "HealthDistrictNameAr");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "HealthDistricts",
                newName: "HealthDistrictName");

            migrationBuilder.RenameColumn(
                name: "GovernorateId",
                table: "HealthDistricts",
                newName: "HealthDirectoryId");

            migrationBuilder.RenameColumn(
                name: "Code",
                table: "HealthDistricts",
                newName: "HealthDistrictCode");

            migrationBuilder.RenameIndex(
                name: "IX_HealthDistricts_GovernorateId",
                table: "HealthDistricts",
                newName: "IX_HealthDistricts_HealthDirectoryId");

            migrationBuilder.RenameColumn(
                name: "NameAr",
                table: "HealthDirectories",
                newName: "HealthDirectoryNameAr");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "HealthDirectories",
                newName: "HealthDirectoryName");

            migrationBuilder.RenameColumn(
                name: "Code",
                table: "HealthDirectories",
                newName: "HealthDirectoryCode");

            migrationBuilder.RenameColumn(
                name: "NameAr",
                table: "Departments",
                newName: "DepartmentNameAr");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Departments",
                newName: "DepartmentName");

            migrationBuilder.RenameColumn(
                name: "Code",
                table: "Departments",
                newName: "DepartmentCode");

            migrationBuilder.RenameColumn(
                name: "NameAr",
                table: "Categories",
                newName: "CategoryNameAr");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Categories",
                newName: "CategoryName");

            migrationBuilder.RenameColumn(
                name: "DescriptionAr",
                table: "Categories",
                newName: "CategoryDescriptionAr");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Categories",
                newName: "CategoryDescription");

            migrationBuilder.RenameColumn(
                name: "Code",
                table: "Categories",
                newName: "CategoryCode");

            migrationBuilder.AddForeignKey(
                name: "FK_HealthDistricts_HealthDirectories_HealthDirectoryId",
                table: "HealthDistricts",
                column: "HealthDirectoryId",
                principalTable: "HealthDirectories",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Hospitals_HealthDirectories_HealthDirectoryId",
                table: "Hospitals",
                column: "HealthDirectoryId",
                principalTable: "HealthDirectories",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Hospitals_HealthDistricts_HealthDistrictId",
                table: "Hospitals",
                column: "HealthDistrictId",
                principalTable: "HealthDistricts",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_masterAssets_Categories_EquipmentCategoryId",
                table: "masterAssets",
                column: "EquipmentCategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_masterAssets_Manufacturers_ManufacturerId",
                table: "masterAssets",
                column: "ManufacturerId",
                principalTable: "Manufacturers",
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
    }
}
