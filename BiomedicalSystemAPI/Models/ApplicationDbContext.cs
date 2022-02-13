using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BiomedicalSystemAPI.DTO;

namespace BiomedicalSystemAPI.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }


       //public DbSet<Equipment> Equiments { get; set; }
        public DbSet<Equipment> Equipments { get; set; }
        public DbSet<HealthCareUnit> HealthCareUnits { get; set; }
        public DbSet<ServiceRequest> ServiceRequest { get; set; }
        public DbSet<WorkOrders> WorkOrders { get; set; }
        public DbSet<Origin> Origins { get; set; }
        public DbSet<EquipmentCategory> EquipmentCategories { get; set; }
        public DbSet<Manufacturer> Manufacturers { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<EquipmentStatus> EquipmentStatus { get; set; }
        public DbSet<EquipmentSubCategory> EquipmentSubCategories { get; set; }
        public DbSet<DepreciationType> DepreciationTypes { get; set; }
        public DbSet<Priority> Assets { get; set; }
       // public DbSet<Employee> Employees { get; set; }
        public DbSet<SparePart> spareParts { get; set; }
        public DbSet<EquipmentAttachments> Attachments { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Priority> Priorities { get; set; }
        public DbSet<Mode> Modes { get; set; }
        public DbSet<HealthDirectory> HealthDirectories { get; set; }
        public DbSet<HealthDistrict> HealthDistricts { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<EquipmentEmployees> equipmentEmployees { get; set; }
        public DbSet<MasterEquipment> masterEquipments { get; set; }
        public DbSet<MaintenanceService> MaintenanceServices { get; set; }
        public DbSet<Vendor> Vendors { get; set; }
        public DbSet<RequestStatus> requestStatuses { get; set; }
        public DbSet<Contract> Contracts { get; set; }
        public DbSet<ContractRequest> contractRequests { get; set; }
        public DbSet<EquipmentCoverage> EquipmentCoverages { get; set; }
        public DbSet<Ecri> Ecris { get; set; }
        public DbSet<Organization> organizations { get; set; }
        public DbSet<EquipmentAttachments> equipmentAttachments { get; set; }
        public DbSet<ContractAttachment> contractAttachments { get; set; }
        public DbSet<ServiceRequestAttachment> serviceRequestAttachments { get; set; }
        public DbSet<WorkOrderAttachment> workOrderAttachments { get; set; }
        public DbSet<MasterEquipmentAttachment> masterEquipmentAttachments { get; set; }
        public DbSet<SubOrganization> subOrganizations { get; set; }
       public DbSet<Inventory> inventories { get; set; }
        public DbSet<EquipmentRecall> EquipmentRecalls { get; set; }
        public DbSet<OrganizationContractRequest> organizationContractRequests { get; set; }

        //public DbSet<Message> messages { get; set; }


    }
}
