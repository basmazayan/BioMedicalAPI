using Microsoft.EntityFrameworkCore.Migrations;

namespace BiomedicalSystemAPI.Migrations
{
    public partial class mig2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                table: "AspNetRoleClaims");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                table: "AspNetUserClaims");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                table: "AspNetUserLogins");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                table: "AspNetUserRoles");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                table: "AspNetUserRoles");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                table: "AspNetUserTokens");

            migrationBuilder.DropForeignKey(
                name: "FK_Assets_Departments_DepartmentId",
                table: "Assets");

            migrationBuilder.DropForeignKey(
                name: "FK_Assets_Hospitals_HospitalId",
                table: "Assets");

            migrationBuilder.DropForeignKey(
                name: "FK_Assets_masterAssets_MasterAssetId",
                table: "Assets");

            migrationBuilder.DropForeignKey(
                name: "FK_Assets_Status_StatusId",
                table: "Assets");

            migrationBuilder.DropForeignKey(
                name: "FK_Assets_Suppliers_SupplierId",
                table: "Assets");

            migrationBuilder.DropForeignKey(
                name: "FK_Cities_Governorates_GovernorateId",
                table: "Cities");

            migrationBuilder.DropForeignKey(
                name: "FK_ContractAttachments_Contracts_ContractId",
                table: "ContractAttachments");

            migrationBuilder.DropForeignKey(
                name: "FK_contractRequests_Hospitals_HospitalId",
                table: "contractRequests");

            migrationBuilder.DropForeignKey(
                name: "FK_Contracts_Suppliers_SupplierId",
                table: "Contracts");

            migrationBuilder.DropForeignKey(
                name: "FK_Employees_Assets_AssetId",
                table: "Employees");

            migrationBuilder.DropForeignKey(
                name: "FK_Equipment_EquipmentCoverage_Assets_AssetId",
                table: "Equipment_EquipmentCoverage");

            migrationBuilder.DropForeignKey(
                name: "FK_Equipment_EquipmentCoverage_EquipmentCoverages_EquipmentCoverageId",
                table: "Equipment_EquipmentCoverage");

            migrationBuilder.DropForeignKey(
                name: "FK_EquipmentCoverages_Contracts_ContractId",
                table: "EquipmentCoverages");

            migrationBuilder.DropForeignKey(
                name: "FK_EquipmentRecalls_masterAssets_MasterAssetId",
                table: "EquipmentRecalls");

            migrationBuilder.DropForeignKey(
                name: "FK_EquipmentRecalls_Suppliers_SupplierId",
                table: "EquipmentRecalls");

            migrationBuilder.DropForeignKey(
                name: "FK_Hospitals_Cities_CityId",
                table: "Hospitals");

            migrationBuilder.DropForeignKey(
                name: "FK_Hospitals_Governorates_GovernorateId",
                table: "Hospitals");

            migrationBuilder.DropForeignKey(
                name: "FK_Hospitals_Organizations_organizationId",
                table: "Hospitals");

            migrationBuilder.DropForeignKey(
                name: "FK_Inventories_Assets_AssetId",
                table: "Inventories");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_Brands_BrandId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_Categories_CategoryId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_Origins_OriginId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_Priority_PriorityId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceRequest_Assets_AssetId",
                table: "ServiceRequest");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceRequest_Modes_ModeId",
                table: "ServiceRequest");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceRequest_Priority_PriorityId",
                table: "ServiceRequest");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceRequestAttachments_ServiceRequest_ServiceRequestId",
                table: "ServiceRequestAttachments");

            migrationBuilder.DropForeignKey(
                name: "FK_SubCategories_Categories_CategoryId",
                table: "SubCategories");

            migrationBuilder.DropForeignKey(
                name: "FK_SubOrganizations_Organizations_organizationId",
                table: "SubOrganizations");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkOrderAttachments_WorkOrders_WorkOrderId",
                table: "WorkOrderAttachments");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkOrders_Assets_AssetId",
                table: "WorkOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkOrders_MaintenanceServices_MaintenanceId",
                table: "WorkOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkOrders_Priority_PriorityId",
                table: "WorkOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkOrders_requestStatuses_RequestStatusId",
                table: "WorkOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkOrders_spareParts_SparePartId",
                table: "WorkOrders");

            migrationBuilder.RenameColumn(
                name: "organizationId",
                table: "Hospitals",
                newName: "SuborganizationId");

            migrationBuilder.RenameIndex(
                name: "IX_Hospitals_organizationId",
                table: "Hospitals",
                newName: "IX_Hospitals_SuborganizationId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId",
                principalTable: "AspNetRoles",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                table: "AspNetUserClaims",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                table: "AspNetUserLogins",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId",
                principalTable: "AspNetRoles",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                table: "AspNetUserRoles",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                table: "AspNetUserTokens",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Assets_Departments_DepartmentId",
                table: "Assets",
                column: "DepartmentId",
                principalTable: "Departments",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Assets_Hospitals_HospitalId",
                table: "Assets",
                column: "HospitalId",
                principalTable: "Hospitals",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Assets_masterAssets_MasterAssetId",
                table: "Assets",
                column: "MasterAssetId",
                principalTable: "masterAssets",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Assets_Status_StatusId",
                table: "Assets",
                column: "StatusId",
                principalTable: "Status",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Assets_Suppliers_SupplierId",
                table: "Assets",
                column: "SupplierId",
                principalTable: "Suppliers",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Cities_Governorates_GovernorateId",
                table: "Cities",
                column: "GovernorateId",
                principalTable: "Governorates",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_ContractAttachments_Contracts_ContractId",
                table: "ContractAttachments",
                column: "ContractId",
                principalTable: "Contracts",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_contractRequests_Hospitals_HospitalId",
                table: "contractRequests",
                column: "HospitalId",
                principalTable: "Hospitals",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Contracts_Suppliers_SupplierId",
                table: "Contracts",
                column: "SupplierId",
                principalTable: "Suppliers",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_Assets_AssetId",
                table: "Employees",
                column: "AssetId",
                principalTable: "Assets",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Equipment_EquipmentCoverage_Assets_AssetId",
                table: "Equipment_EquipmentCoverage",
                column: "AssetId",
                principalTable: "Assets",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Equipment_EquipmentCoverage_EquipmentCoverages_EquipmentCoverageId",
                table: "Equipment_EquipmentCoverage",
                column: "EquipmentCoverageId",
                principalTable: "EquipmentCoverages",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_EquipmentCoverages_Contracts_ContractId",
                table: "EquipmentCoverages",
                column: "ContractId",
                principalTable: "Contracts",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_EquipmentRecalls_masterAssets_MasterAssetId",
                table: "EquipmentRecalls",
                column: "MasterAssetId",
                principalTable: "masterAssets",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_EquipmentRecalls_Suppliers_SupplierId",
                table: "EquipmentRecalls",
                column: "SupplierId",
                principalTable: "Suppliers",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Hospitals_Cities_CityId",
                table: "Hospitals",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Hospitals_Governorates_GovernorateId",
                table: "Hospitals",
                column: "GovernorateId",
                principalTable: "Governorates",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Hospitals_SubOrganizations_SuborganizationId",
                table: "Hospitals",
                column: "SuborganizationId",
                principalTable: "SubOrganizations",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Inventories_Assets_AssetId",
                table: "Inventories",
                column: "AssetId",
                principalTable: "Assets",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_masterAssets_Brands_BrandId",
                table: "masterAssets",
                column: "BrandId",
                principalTable: "Brands",
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
                name: "FK_masterAssets_Origins_OriginId",
                table: "masterAssets",
                column: "OriginId",
                principalTable: "Origins",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_masterAssets_Priority_PriorityId",
                table: "masterAssets",
                column: "PriorityId",
                principalTable: "Priority",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceRequest_Assets_AssetId",
                table: "ServiceRequest",
                column: "AssetId",
                principalTable: "Assets",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceRequest_Modes_ModeId",
                table: "ServiceRequest",
                column: "ModeId",
                principalTable: "Modes",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceRequest_Priority_PriorityId",
                table: "ServiceRequest",
                column: "PriorityId",
                principalTable: "Priority",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceRequestAttachments_ServiceRequest_ServiceRequestId",
                table: "ServiceRequestAttachments",
                column: "ServiceRequestId",
                principalTable: "ServiceRequest",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_SubCategories_Categories_CategoryId",
                table: "SubCategories",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_SubOrganizations_Organizations_organizationId",
                table: "SubOrganizations",
                column: "organizationId",
                principalTable: "Organizations",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkOrderAttachments_WorkOrders_WorkOrderId",
                table: "WorkOrderAttachments",
                column: "WorkOrderId",
                principalTable: "WorkOrders",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkOrders_Assets_AssetId",
                table: "WorkOrders",
                column: "AssetId",
                principalTable: "Assets",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkOrders_MaintenanceServices_MaintenanceId",
                table: "WorkOrders",
                column: "MaintenanceId",
                principalTable: "MaintenanceServices",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkOrders_Priority_PriorityId",
                table: "WorkOrders",
                column: "PriorityId",
                principalTable: "Priority",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkOrders_requestStatuses_RequestStatusId",
                table: "WorkOrders",
                column: "RequestStatusId",
                principalTable: "requestStatuses",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkOrders_spareParts_SparePartId",
                table: "WorkOrders",
                column: "SparePartId",
                principalTable: "spareParts",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                table: "AspNetRoleClaims");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                table: "AspNetUserClaims");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                table: "AspNetUserLogins");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                table: "AspNetUserRoles");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                table: "AspNetUserRoles");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                table: "AspNetUserTokens");

            migrationBuilder.DropForeignKey(
                name: "FK_Assets_Departments_DepartmentId",
                table: "Assets");

            migrationBuilder.DropForeignKey(
                name: "FK_Assets_Hospitals_HospitalId",
                table: "Assets");

            migrationBuilder.DropForeignKey(
                name: "FK_Assets_masterAssets_MasterAssetId",
                table: "Assets");

            migrationBuilder.DropForeignKey(
                name: "FK_Assets_Status_StatusId",
                table: "Assets");

            migrationBuilder.DropForeignKey(
                name: "FK_Assets_Suppliers_SupplierId",
                table: "Assets");

            migrationBuilder.DropForeignKey(
                name: "FK_Cities_Governorates_GovernorateId",
                table: "Cities");

            migrationBuilder.DropForeignKey(
                name: "FK_ContractAttachments_Contracts_ContractId",
                table: "ContractAttachments");

            migrationBuilder.DropForeignKey(
                name: "FK_contractRequests_Hospitals_HospitalId",
                table: "contractRequests");

            migrationBuilder.DropForeignKey(
                name: "FK_Contracts_Suppliers_SupplierId",
                table: "Contracts");

            migrationBuilder.DropForeignKey(
                name: "FK_Employees_Assets_AssetId",
                table: "Employees");

            migrationBuilder.DropForeignKey(
                name: "FK_Equipment_EquipmentCoverage_Assets_AssetId",
                table: "Equipment_EquipmentCoverage");

            migrationBuilder.DropForeignKey(
                name: "FK_Equipment_EquipmentCoverage_EquipmentCoverages_EquipmentCoverageId",
                table: "Equipment_EquipmentCoverage");

            migrationBuilder.DropForeignKey(
                name: "FK_EquipmentCoverages_Contracts_ContractId",
                table: "EquipmentCoverages");

            migrationBuilder.DropForeignKey(
                name: "FK_EquipmentRecalls_masterAssets_MasterAssetId",
                table: "EquipmentRecalls");

            migrationBuilder.DropForeignKey(
                name: "FK_EquipmentRecalls_Suppliers_SupplierId",
                table: "EquipmentRecalls");

            migrationBuilder.DropForeignKey(
                name: "FK_Hospitals_Cities_CityId",
                table: "Hospitals");

            migrationBuilder.DropForeignKey(
                name: "FK_Hospitals_Governorates_GovernorateId",
                table: "Hospitals");

            migrationBuilder.DropForeignKey(
                name: "FK_Hospitals_SubOrganizations_SuborganizationId",
                table: "Hospitals");

            migrationBuilder.DropForeignKey(
                name: "FK_Inventories_Assets_AssetId",
                table: "Inventories");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_Brands_BrandId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_Categories_CategoryId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_Origins_OriginId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_Priority_PriorityId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceRequest_Assets_AssetId",
                table: "ServiceRequest");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceRequest_Modes_ModeId",
                table: "ServiceRequest");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceRequest_Priority_PriorityId",
                table: "ServiceRequest");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceRequestAttachments_ServiceRequest_ServiceRequestId",
                table: "ServiceRequestAttachments");

            migrationBuilder.DropForeignKey(
                name: "FK_SubCategories_Categories_CategoryId",
                table: "SubCategories");

            migrationBuilder.DropForeignKey(
                name: "FK_SubOrganizations_Organizations_organizationId",
                table: "SubOrganizations");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkOrderAttachments_WorkOrders_WorkOrderId",
                table: "WorkOrderAttachments");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkOrders_Assets_AssetId",
                table: "WorkOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkOrders_MaintenanceServices_MaintenanceId",
                table: "WorkOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkOrders_Priority_PriorityId",
                table: "WorkOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkOrders_requestStatuses_RequestStatusId",
                table: "WorkOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkOrders_spareParts_SparePartId",
                table: "WorkOrders");

            migrationBuilder.RenameColumn(
                name: "SuborganizationId",
                table: "Hospitals",
                newName: "organizationId");

            migrationBuilder.RenameIndex(
                name: "IX_Hospitals_SuborganizationId",
                table: "Hospitals",
                newName: "IX_Hospitals_organizationId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId",
                principalTable: "AspNetRoles",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                table: "AspNetUserClaims",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                table: "AspNetUserLogins",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId",
                principalTable: "AspNetRoles",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                table: "AspNetUserRoles",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                table: "AspNetUserTokens",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Assets_Departments_DepartmentId",
                table: "Assets",
                column: "DepartmentId",
                principalTable: "Departments",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Assets_Hospitals_HospitalId",
                table: "Assets",
                column: "HospitalId",
                principalTable: "Hospitals",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Assets_masterAssets_MasterAssetId",
                table: "Assets",
                column: "MasterAssetId",
                principalTable: "masterAssets",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Assets_Status_StatusId",
                table: "Assets",
                column: "StatusId",
                principalTable: "Status",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Assets_Suppliers_SupplierId",
                table: "Assets",
                column: "SupplierId",
                principalTable: "Suppliers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Cities_Governorates_GovernorateId",
                table: "Cities",
                column: "GovernorateId",
                principalTable: "Governorates",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ContractAttachments_Contracts_ContractId",
                table: "ContractAttachments",
                column: "ContractId",
                principalTable: "Contracts",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_contractRequests_Hospitals_HospitalId",
                table: "contractRequests",
                column: "HospitalId",
                principalTable: "Hospitals",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Contracts_Suppliers_SupplierId",
                table: "Contracts",
                column: "SupplierId",
                principalTable: "Suppliers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_Assets_AssetId",
                table: "Employees",
                column: "AssetId",
                principalTable: "Assets",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Equipment_EquipmentCoverage_Assets_AssetId",
                table: "Equipment_EquipmentCoverage",
                column: "AssetId",
                principalTable: "Assets",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Equipment_EquipmentCoverage_EquipmentCoverages_EquipmentCoverageId",
                table: "Equipment_EquipmentCoverage",
                column: "EquipmentCoverageId",
                principalTable: "EquipmentCoverages",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_EquipmentCoverages_Contracts_ContractId",
                table: "EquipmentCoverages",
                column: "ContractId",
                principalTable: "Contracts",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_EquipmentRecalls_masterAssets_MasterAssetId",
                table: "EquipmentRecalls",
                column: "MasterAssetId",
                principalTable: "masterAssets",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_EquipmentRecalls_Suppliers_SupplierId",
                table: "EquipmentRecalls",
                column: "SupplierId",
                principalTable: "Suppliers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Hospitals_Cities_CityId",
                table: "Hospitals",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Hospitals_Governorates_GovernorateId",
                table: "Hospitals",
                column: "GovernorateId",
                principalTable: "Governorates",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Hospitals_Organizations_organizationId",
                table: "Hospitals",
                column: "organizationId",
                principalTable: "Organizations",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Inventories_Assets_AssetId",
                table: "Inventories",
                column: "AssetId",
                principalTable: "Assets",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_masterAssets_Brands_BrandId",
                table: "masterAssets",
                column: "BrandId",
                principalTable: "Brands",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_masterAssets_Categories_CategoryId",
                table: "masterAssets",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_masterAssets_Origins_OriginId",
                table: "masterAssets",
                column: "OriginId",
                principalTable: "Origins",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_masterAssets_Priority_PriorityId",
                table: "masterAssets",
                column: "PriorityId",
                principalTable: "Priority",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceRequest_Assets_AssetId",
                table: "ServiceRequest",
                column: "AssetId",
                principalTable: "Assets",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceRequest_Modes_ModeId",
                table: "ServiceRequest",
                column: "ModeId",
                principalTable: "Modes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceRequest_Priority_PriorityId",
                table: "ServiceRequest",
                column: "PriorityId",
                principalTable: "Priority",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceRequestAttachments_ServiceRequest_ServiceRequestId",
                table: "ServiceRequestAttachments",
                column: "ServiceRequestId",
                principalTable: "ServiceRequest",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_SubCategories_Categories_CategoryId",
                table: "SubCategories",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_SubOrganizations_Organizations_organizationId",
                table: "SubOrganizations",
                column: "organizationId",
                principalTable: "Organizations",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_WorkOrderAttachments_WorkOrders_WorkOrderId",
                table: "WorkOrderAttachments",
                column: "WorkOrderId",
                principalTable: "WorkOrders",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_WorkOrders_Assets_AssetId",
                table: "WorkOrders",
                column: "AssetId",
                principalTable: "Assets",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_WorkOrders_MaintenanceServices_MaintenanceId",
                table: "WorkOrders",
                column: "MaintenanceId",
                principalTable: "MaintenanceServices",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_WorkOrders_Priority_PriorityId",
                table: "WorkOrders",
                column: "PriorityId",
                principalTable: "Priority",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_WorkOrders_requestStatuses_RequestStatusId",
                table: "WorkOrders",
                column: "RequestStatusId",
                principalTable: "requestStatuses",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_WorkOrders_spareParts_SparePartId",
                table: "WorkOrders",
                column: "SparePartId",
                principalTable: "spareParts",
                principalColumn: "Id");
        }
    }
}
