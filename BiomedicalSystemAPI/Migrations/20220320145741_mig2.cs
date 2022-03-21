using Microsoft.EntityFrameworkCore.Migrations;

namespace BiomedicalSystemAPI.Migrations
{
    public partial class mig2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_HealthDirectories_HealthdirId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_HealthDistricts_HealthDistrictId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_organizations_OrganizationId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_subOrganizations_SubOrganizationId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AssetDetail_organizationContractRequests_OrganizationContractRequestId",
                table: "AssetDetail");

            migrationBuilder.DropForeignKey(
                name: "FK_Assets_organizationContractRequests_OrganizationRequestId",
                table: "Assets");

            migrationBuilder.DropForeignKey(
                name: "FK_contractAttachments_Contracts_ContractId",
                table: "contractAttachments");

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
                name: "FK_Hospitals_organizations_organizationId",
                table: "Hospitals");

            migrationBuilder.DropForeignKey(
                name: "FK_inventories_AspNetUsers_UserId",
                table: "inventories");

            migrationBuilder.DropForeignKey(
                name: "FK_inventories_AssetDetail_EquipmentId",
                table: "inventories");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_Manufacturers_BrandId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_masterEquipmentAttachments_masterAssets_MasterEquipmentId",
                table: "masterEquipmentAttachments");

            migrationBuilder.DropForeignKey(
                name: "FK_organizationContractRequests_organizations_OrganizationId",
                table: "organizationContractRequests");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceRequest_HealthDirectories_HealthDirectoryId",
                table: "ServiceRequest");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceRequest_HealthDistricts_HealthDistrictId",
                table: "ServiceRequest");

            migrationBuilder.DropForeignKey(
                name: "FK_serviceRequestAttachments_ServiceRequest_ServiceRequestId",
                table: "serviceRequestAttachments");

            migrationBuilder.DropForeignKey(
                name: "FK_subOrganizations_organizations_organizationId",
                table: "subOrganizations");

            migrationBuilder.DropForeignKey(
                name: "FK_workOrderAttachments_WorkOrders_WorkOrderId",
                table: "workOrderAttachments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_workOrderAttachments",
                table: "workOrderAttachments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_subOrganizations",
                table: "subOrganizations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_serviceRequestAttachments",
                table: "serviceRequestAttachments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_organizations",
                table: "organizations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_organizationContractRequests",
                table: "organizationContractRequests");

            migrationBuilder.DropPrimaryKey(
                name: "PK_masterEquipmentAttachments",
                table: "masterEquipmentAttachments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_inventories",
                table: "inventories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_contractAttachments",
                table: "contractAttachments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Manufacturers",
                table: "Manufacturers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_HealthDistricts",
                table: "HealthDistricts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_HealthDirectories",
                table: "HealthDirectories");

            migrationBuilder.RenameTable(
                name: "workOrderAttachments",
                newName: "WorkOrderAttachments");

            migrationBuilder.RenameTable(
                name: "subOrganizations",
                newName: "SubOrganizations");

            migrationBuilder.RenameTable(
                name: "serviceRequestAttachments",
                newName: "ServiceRequestAttachments");

            migrationBuilder.RenameTable(
                name: "organizations",
                newName: "Organizations");

            migrationBuilder.RenameTable(
                name: "organizationContractRequests",
                newName: "OrganizationContractRequests");

            migrationBuilder.RenameTable(
                name: "masterEquipmentAttachments",
                newName: "MasterEquipmentAttachments");

            migrationBuilder.RenameTable(
                name: "inventories",
                newName: "Inventories");

            migrationBuilder.RenameTable(
                name: "contractAttachments",
                newName: "ContractAttachments");

            migrationBuilder.RenameTable(
                name: "Manufacturers",
                newName: "Brands");

            migrationBuilder.RenameTable(
                name: "HealthDistricts",
                newName: "Cities");

            migrationBuilder.RenameTable(
                name: "HealthDirectories",
                newName: "Governorates");

            migrationBuilder.RenameIndex(
                name: "IX_workOrderAttachments_WorkOrderId",
                table: "WorkOrderAttachments",
                newName: "IX_WorkOrderAttachments_WorkOrderId");

            migrationBuilder.RenameIndex(
                name: "IX_subOrganizations_organizationId",
                table: "SubOrganizations",
                newName: "IX_SubOrganizations_organizationId");

            migrationBuilder.RenameIndex(
                name: "IX_serviceRequestAttachments_ServiceRequestId",
                table: "ServiceRequestAttachments",
                newName: "IX_ServiceRequestAttachments_ServiceRequestId");

            migrationBuilder.RenameIndex(
                name: "IX_organizationContractRequests_OrganizationId",
                table: "OrganizationContractRequests",
                newName: "IX_OrganizationContractRequests_OrganizationId");

            migrationBuilder.RenameIndex(
                name: "IX_masterEquipmentAttachments_MasterEquipmentId",
                table: "MasterEquipmentAttachments",
                newName: "IX_MasterEquipmentAttachments_MasterEquipmentId");

            migrationBuilder.RenameIndex(
                name: "IX_inventories_UserId",
                table: "Inventories",
                newName: "IX_Inventories_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_inventories_EquipmentId",
                table: "Inventories",
                newName: "IX_Inventories_EquipmentId");

            migrationBuilder.RenameIndex(
                name: "IX_contractAttachments_ContractId",
                table: "ContractAttachments",
                newName: "IX_ContractAttachments_ContractId");

            migrationBuilder.RenameIndex(
                name: "IX_HealthDistricts_GovernorateId",
                table: "Cities",
                newName: "IX_Cities_GovernorateId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_WorkOrderAttachments",
                table: "WorkOrderAttachments",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SubOrganizations",
                table: "SubOrganizations",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ServiceRequestAttachments",
                table: "ServiceRequestAttachments",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Organizations",
                table: "Organizations",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrganizationContractRequests",
                table: "OrganizationContractRequests",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MasterEquipmentAttachments",
                table: "MasterEquipmentAttachments",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Inventories",
                table: "Inventories",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ContractAttachments",
                table: "ContractAttachments",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Brands",
                table: "Brands",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Cities",
                table: "Cities",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Governorates",
                table: "Governorates",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Cities_HealthDistrictId",
                table: "AspNetUsers",
                column: "HealthDistrictId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Governorates_HealthdirId",
                table: "AspNetUsers",
                column: "HealthdirId",
                principalTable: "Governorates",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Organizations_OrganizationId",
                table: "AspNetUsers",
                column: "OrganizationId",
                principalTable: "Organizations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_SubOrganizations_SubOrganizationId",
                table: "AspNetUsers",
                column: "SubOrganizationId",
                principalTable: "SubOrganizations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AssetDetail_OrganizationContractRequests_OrganizationContractRequestId",
                table: "AssetDetail",
                column: "OrganizationContractRequestId",
                principalTable: "OrganizationContractRequests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Assets_OrganizationContractRequests_OrganizationRequestId",
                table: "Assets",
                column: "OrganizationRequestId",
                principalTable: "OrganizationContractRequests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

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
                name: "FK_Hospitals_Organizations_organizationId",
                table: "Hospitals",
                column: "organizationId",
                principalTable: "Organizations",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Inventories_AspNetUsers_UserId",
                table: "Inventories",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Inventories_AssetDetail_EquipmentId",
                table: "Inventories",
                column: "EquipmentId",
                principalTable: "AssetDetail",
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
                name: "FK_MasterEquipmentAttachments_masterAssets_MasterEquipmentId",
                table: "MasterEquipmentAttachments",
                column: "MasterEquipmentId",
                principalTable: "masterAssets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_OrganizationContractRequests_Organizations_OrganizationId",
                table: "OrganizationContractRequests",
                column: "OrganizationId",
                principalTable: "Organizations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceRequest_Cities_HealthDistrictId",
                table: "ServiceRequest",
                column: "HealthDistrictId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceRequest_Governorates_HealthDirectoryId",
                table: "ServiceRequest",
                column: "HealthDirectoryId",
                principalTable: "Governorates",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceRequestAttachments_ServiceRequest_ServiceRequestId",
                table: "ServiceRequestAttachments",
                column: "ServiceRequestId",
                principalTable: "ServiceRequest",
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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Cities_HealthDistrictId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Governorates_HealthdirId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Organizations_OrganizationId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_SubOrganizations_SubOrganizationId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AssetDetail_OrganizationContractRequests_OrganizationContractRequestId",
                table: "AssetDetail");

            migrationBuilder.DropForeignKey(
                name: "FK_Assets_OrganizationContractRequests_OrganizationRequestId",
                table: "Assets");

            migrationBuilder.DropForeignKey(
                name: "FK_Cities_Governorates_GovernorateId",
                table: "Cities");

            migrationBuilder.DropForeignKey(
                name: "FK_ContractAttachments_Contracts_ContractId",
                table: "ContractAttachments");

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
                name: "FK_Inventories_AspNetUsers_UserId",
                table: "Inventories");

            migrationBuilder.DropForeignKey(
                name: "FK_Inventories_AssetDetail_EquipmentId",
                table: "Inventories");

            migrationBuilder.DropForeignKey(
                name: "FK_masterAssets_Brands_BrandId",
                table: "masterAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_MasterEquipmentAttachments_masterAssets_MasterEquipmentId",
                table: "MasterEquipmentAttachments");

            migrationBuilder.DropForeignKey(
                name: "FK_OrganizationContractRequests_Organizations_OrganizationId",
                table: "OrganizationContractRequests");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceRequest_Cities_HealthDistrictId",
                table: "ServiceRequest");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceRequest_Governorates_HealthDirectoryId",
                table: "ServiceRequest");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceRequestAttachments_ServiceRequest_ServiceRequestId",
                table: "ServiceRequestAttachments");

            migrationBuilder.DropForeignKey(
                name: "FK_SubOrganizations_Organizations_organizationId",
                table: "SubOrganizations");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkOrderAttachments_WorkOrders_WorkOrderId",
                table: "WorkOrderAttachments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_WorkOrderAttachments",
                table: "WorkOrderAttachments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SubOrganizations",
                table: "SubOrganizations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ServiceRequestAttachments",
                table: "ServiceRequestAttachments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Organizations",
                table: "Organizations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OrganizationContractRequests",
                table: "OrganizationContractRequests");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MasterEquipmentAttachments",
                table: "MasterEquipmentAttachments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Inventories",
                table: "Inventories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ContractAttachments",
                table: "ContractAttachments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Governorates",
                table: "Governorates");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Cities",
                table: "Cities");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Brands",
                table: "Brands");

            migrationBuilder.RenameTable(
                name: "WorkOrderAttachments",
                newName: "workOrderAttachments");

            migrationBuilder.RenameTable(
                name: "SubOrganizations",
                newName: "subOrganizations");

            migrationBuilder.RenameTable(
                name: "ServiceRequestAttachments",
                newName: "serviceRequestAttachments");

            migrationBuilder.RenameTable(
                name: "Organizations",
                newName: "organizations");

            migrationBuilder.RenameTable(
                name: "OrganizationContractRequests",
                newName: "organizationContractRequests");

            migrationBuilder.RenameTable(
                name: "MasterEquipmentAttachments",
                newName: "masterEquipmentAttachments");

            migrationBuilder.RenameTable(
                name: "Inventories",
                newName: "inventories");

            migrationBuilder.RenameTable(
                name: "ContractAttachments",
                newName: "contractAttachments");

            migrationBuilder.RenameTable(
                name: "Governorates",
                newName: "HealthDirectories");

            migrationBuilder.RenameTable(
                name: "Cities",
                newName: "HealthDistricts");

            migrationBuilder.RenameTable(
                name: "Brands",
                newName: "Manufacturers");

            migrationBuilder.RenameIndex(
                name: "IX_WorkOrderAttachments_WorkOrderId",
                table: "workOrderAttachments",
                newName: "IX_workOrderAttachments_WorkOrderId");

            migrationBuilder.RenameIndex(
                name: "IX_SubOrganizations_organizationId",
                table: "subOrganizations",
                newName: "IX_subOrganizations_organizationId");

            migrationBuilder.RenameIndex(
                name: "IX_ServiceRequestAttachments_ServiceRequestId",
                table: "serviceRequestAttachments",
                newName: "IX_serviceRequestAttachments_ServiceRequestId");

            migrationBuilder.RenameIndex(
                name: "IX_OrganizationContractRequests_OrganizationId",
                table: "organizationContractRequests",
                newName: "IX_organizationContractRequests_OrganizationId");

            migrationBuilder.RenameIndex(
                name: "IX_MasterEquipmentAttachments_MasterEquipmentId",
                table: "masterEquipmentAttachments",
                newName: "IX_masterEquipmentAttachments_MasterEquipmentId");

            migrationBuilder.RenameIndex(
                name: "IX_Inventories_UserId",
                table: "inventories",
                newName: "IX_inventories_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Inventories_EquipmentId",
                table: "inventories",
                newName: "IX_inventories_EquipmentId");

            migrationBuilder.RenameIndex(
                name: "IX_ContractAttachments_ContractId",
                table: "contractAttachments",
                newName: "IX_contractAttachments_ContractId");

            migrationBuilder.RenameIndex(
                name: "IX_Cities_GovernorateId",
                table: "HealthDistricts",
                newName: "IX_HealthDistricts_GovernorateId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_workOrderAttachments",
                table: "workOrderAttachments",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_subOrganizations",
                table: "subOrganizations",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_serviceRequestAttachments",
                table: "serviceRequestAttachments",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_organizations",
                table: "organizations",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_organizationContractRequests",
                table: "organizationContractRequests",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_masterEquipmentAttachments",
                table: "masterEquipmentAttachments",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_inventories",
                table: "inventories",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_contractAttachments",
                table: "contractAttachments",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_HealthDirectories",
                table: "HealthDirectories",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_HealthDistricts",
                table: "HealthDistricts",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Manufacturers",
                table: "Manufacturers",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_HealthDirectories_HealthdirId",
                table: "AspNetUsers",
                column: "HealthdirId",
                principalTable: "HealthDirectories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_HealthDistricts_HealthDistrictId",
                table: "AspNetUsers",
                column: "HealthDistrictId",
                principalTable: "HealthDistricts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_organizations_OrganizationId",
                table: "AspNetUsers",
                column: "OrganizationId",
                principalTable: "organizations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_subOrganizations_SubOrganizationId",
                table: "AspNetUsers",
                column: "SubOrganizationId",
                principalTable: "subOrganizations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AssetDetail_organizationContractRequests_OrganizationContractRequestId",
                table: "AssetDetail",
                column: "OrganizationContractRequestId",
                principalTable: "organizationContractRequests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Assets_organizationContractRequests_OrganizationRequestId",
                table: "Assets",
                column: "OrganizationRequestId",
                principalTable: "organizationContractRequests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_contractAttachments_Contracts_ContractId",
                table: "contractAttachments",
                column: "ContractId",
                principalTable: "Contracts",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

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
                name: "FK_Hospitals_organizations_organizationId",
                table: "Hospitals",
                column: "organizationId",
                principalTable: "organizations",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_inventories_AspNetUsers_UserId",
                table: "inventories",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_inventories_AssetDetail_EquipmentId",
                table: "inventories",
                column: "EquipmentId",
                principalTable: "AssetDetail",
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
                name: "FK_masterEquipmentAttachments_masterAssets_MasterEquipmentId",
                table: "masterEquipmentAttachments",
                column: "MasterEquipmentId",
                principalTable: "masterAssets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_organizationContractRequests_organizations_OrganizationId",
                table: "organizationContractRequests",
                column: "OrganizationId",
                principalTable: "organizations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceRequest_HealthDirectories_HealthDirectoryId",
                table: "ServiceRequest",
                column: "HealthDirectoryId",
                principalTable: "HealthDirectories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceRequest_HealthDistricts_HealthDistrictId",
                table: "ServiceRequest",
                column: "HealthDistrictId",
                principalTable: "HealthDistricts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_serviceRequestAttachments_ServiceRequest_ServiceRequestId",
                table: "serviceRequestAttachments",
                column: "ServiceRequestId",
                principalTable: "ServiceRequest",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_subOrganizations_organizations_organizationId",
                table: "subOrganizations",
                column: "organizationId",
                principalTable: "organizations",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_workOrderAttachments_WorkOrders_WorkOrderId",
                table: "workOrderAttachments",
                column: "WorkOrderId",
                principalTable: "WorkOrders",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }
    }
}
