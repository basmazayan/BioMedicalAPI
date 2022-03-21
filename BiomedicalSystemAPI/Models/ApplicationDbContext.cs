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
        //    public DbSet<Equipment> Equipments { get; set; }
        public DbSet<Assets> Assets { get; set; }
        public DbSet<Hospital> Hospitals { get; set; }
        public DbSet<ServiceRequest> ServiceRequest { get; set; }
        public DbSet<WorkOrders> WorkOrders { get; set; }
        public DbSet<Origin> Origins { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<EquipmentStatus> Status { get; set; }
        public DbSet<SubCategory> SubCategories { get; set; }
        public DbSet<DepreciationType> DepreciationTypes { get; set; }
        public DbSet<Priority> priorities { get; set; }
       // public DbSet<Employee> Employees { get; set; }
        public DbSet<SparePart> spareParts { get; set; }
        public DbSet<EquipmentAttachments> Attachments { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Priority> Priorities { get; set; }
        public DbSet<Mode> Modes { get; set; }
        public DbSet<Governorate> Governorates { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<EquipmentEmployees> Employees { get; set; }
        public DbSet<MasterAsset> masterAssets { get; set; }
        public DbSet<MaintenanceService> MaintenanceServices { get; set; }
        public DbSet<Vendor> Vendors { get; set; }
        public DbSet<RequestStatus> requestStatuses { get; set; }
        public DbSet<Contract> Contracts { get; set; }
        public DbSet<ContractRequest> contractRequests { get; set; }
        public DbSet<EquipmentCoverage> EquipmentCoverages { get; set; }
        public DbSet<Ecri> Ecris { get; set; }
        public DbSet<Organization> Organizations { get; set; }
        public DbSet<EquipmentAttachments> EquipmentAttachments { get; set; }
        public DbSet<ContractAttachment> ContractAttachments { get; set; }
        public DbSet<ServiceRequestAttachment> ServiceRequestAttachments { get; set; }
        public DbSet<WorkOrderAttachment> WorkOrderAttachments { get; set; }
        public DbSet<MasterEquipmentAttachment> MasterEquipmentAttachments { get; set; }
        public DbSet<SubOrganization> SubOrganizations { get; set; }
       public DbSet<Inventory> Inventories { get; set; }
        public DbSet<EquipmentRecall> EquipmentRecalls { get; set; }
        public DbSet<OrganizationContractRequest> OrganizationContractRequests { get; set; }

        //public DbSet<Message> messages { get; set; }


    }
}
