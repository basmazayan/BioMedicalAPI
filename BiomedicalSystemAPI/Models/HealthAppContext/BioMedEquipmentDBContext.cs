using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace BiomedicalSystemAPI.Models.HealthAppContext
{
    public partial class BioMedEquipmentDBContext : DbContext
    {
        public BioMedEquipmentDBContext()
        {
        }

        public BioMedEquipmentDBContext(DbContextOptions<BioMedEquipmentDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<EquipmentCatalog> EquipmentCatalogs { get; set; }
        public virtual DbSet<EquipmentCategory> EquipmentCategories { get; set; }
        public virtual DbSet<EquipmentSubCategory> EquipmentSubCategories { get; set; }
        public virtual DbSet<HealthCareUnit> HealthCareUnits { get; set; }
        public virtual DbSet<HealthCareUnitEquipment> HealthCareUnitEquipments { get; set; }
        public virtual DbSet<HealthDirectorate> HealthDirectorates { get; set; }
        public virtual DbSet<HealthDistrict> HealthDistricts { get; set; }
        public virtual DbSet<Manufacturer> Manufacturers { get; set; }
        public virtual DbSet<Organization> Organizations { get; set; }
        public virtual DbSet<Origin> Origins { get; set; }
        public virtual DbSet<Status> Statuses { get; set; }
        public virtual DbSet<SubOrganization> SubOrganizations { get; set; }
        public virtual DbSet<Supplier> Suppliers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                // optionsBuilder.UseSqlServer("server=172.16.184.128\\MyInstance,1433;Database=BioMedEquipmentDB;User ID=sa;Password=20100;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Department>(entity =>
            {
                entity.Property(e => e.Code).HasMaxLength(20);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.NameAr).HasMaxLength(50);
            });

            modelBuilder.Entity<EquipmentCatalog>(entity =>
            {
                entity.Property(e => e.Code).HasMaxLength(20);

                entity.Property(e => e.Description).HasMaxLength(500);

                entity.Property(e => e.Ecricode).HasColumnName("ECRICode");

                entity.Property(e => e.Model).HasMaxLength(20);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.NameAr).HasMaxLength(50);

                entity.Property(e => e.Version).HasMaxLength(20);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.EquipmentCatalogs)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK_EquipmentCatalogs_EquipmentCategories");

                entity.HasOne(d => d.Manufacturer)
                    .WithMany(p => p.EquipmentCatalogs)
                    .HasForeignKey(d => d.ManufacturerId)
                    .HasConstraintName("FK_EquipmentCatalogs_Manufacturers");

                entity.HasOne(d => d.Origin)
                    .WithMany(p => p.EquipmentCatalogs)
                    .HasForeignKey(d => d.OriginId)
                    .HasConstraintName("FK_EquipmentCatalogs_Origins");
            });

            modelBuilder.Entity<EquipmentCategory>(entity =>
            {
                entity.Property(e => e.Code).HasMaxLength(20);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.NameAr).HasMaxLength(50);
            });

            modelBuilder.Entity<EquipmentSubCategory>(entity =>
            {
                entity.Property(e => e.Code).HasMaxLength(20);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.NameAr).HasMaxLength(50);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.EquipmentSubCategories)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_EquipmentSubCategories_EquipmentCategories");
            });

            modelBuilder.Entity<HealthCareUnit>(entity =>
            {
                entity.Property(e => e.Address).HasMaxLength(500);

                entity.Property(e => e.Code).HasMaxLength(20);

                entity.Property(e => e.DirectorName).HasMaxLength(50);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.NameAr).HasMaxLength(50);

                entity.Property(e => e.Telephone).HasMaxLength(15);

                entity.HasOne(d => d.HealthDistrict)
                    .WithMany(p => p.HealthCareUnits)
                    .HasForeignKey(d => d.HealthDistrictId)
                    .HasConstraintName("FK_HealthCareUnits_HealthDistricts");

                entity.HasOne(d => d.SubOrganization)
                    .WithMany(p => p.HealthCareUnits)
                    .HasForeignKey(d => d.SubOrganizationId)
                    .HasConstraintName("FK_HealthCareUnits_subOrganizations");
            });

            modelBuilder.Entity<HealthCareUnitEquipment>(entity =>
            {
                entity.Property(e => e.HospitalInternalCode).HasMaxLength(20);

                entity.Property(e => e.InstallationDate).HasColumnType("date");

                entity.Property(e => e.Price).HasColumnType("decimal(18, 2)");

                entity.Property(e => e.PurchaseDate).HasColumnType("date");

                entity.Property(e => e.Remarks).HasMaxLength(20);

                entity.Property(e => e.SerialNumber).HasMaxLength(20);

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.HealthCareUnitEquipments)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("FK_HealthCareUnitEquipments_Departments");

                entity.HasOne(d => d.EquipmentCatalog)
                    .WithMany(p => p.HealthCareUnitEquipments)
                    .HasForeignKey(d => d.EquipmentCatalogId)
                    .HasConstraintName("FK_HealthCareUnitEquipments_EquipmentCatalogs");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.HealthCareUnitEquipments)
                    .HasForeignKey(d => d.StatusId)
                    .HasConstraintName("FK_HealthCareUnitEquipments_Status");

                entity.HasOne(d => d.Supplier)
                    .WithMany(p => p.HealthCareUnitEquipments)
                    .HasForeignKey(d => d.SupplierId)
                    .HasConstraintName("FK_HealthCareUnitEquipments_Suppliers");
            });

            modelBuilder.Entity<HealthDirectorate>(entity =>
            {
                entity.Property(e => e.Code).HasMaxLength(20);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.NameAr).HasMaxLength(50);
            });

            modelBuilder.Entity<HealthDistrict>(entity =>
            {
                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.NameAr).HasMaxLength(50);

                entity.HasOne(d => d.Directorate)
                    .WithMany(p => p.HealthDistricts)
                    .HasForeignKey(d => d.DirectorateId)
                    .HasConstraintName("FK_HealthDistricts_HealthDirectorates");
            });

            modelBuilder.Entity<Manufacturer>(entity =>
            {
                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.NameAr).HasMaxLength(50);
            });

            modelBuilder.Entity<Organization>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.NameAr).HasMaxLength(50);
            });

            modelBuilder.Entity<Origin>(entity =>
            {
                entity.Property(e => e.Code).HasMaxLength(20);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.NameAr).HasMaxLength(50);
            });

            modelBuilder.Entity<Status>(entity =>
            {
                entity.ToTable("Status");

                entity.Property(e => e.Code).HasMaxLength(20);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.NameAr).HasMaxLength(50);
            });

            modelBuilder.Entity<SubOrganization>(entity =>
            {
                entity.ToTable("subOrganizations");

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.NameAr).HasMaxLength(50);

                entity.Property(e => e.OrganizationId).HasColumnName("organizationId");

                entity.HasOne(d => d.Organization)
                    .WithMany(p => p.SubOrganizations)
                    .HasForeignKey(d => d.OrganizationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_subOrganizations_Organizations");
            });

            modelBuilder.Entity<Supplier>(entity =>
            {
                entity.Property(e => e.Address).HasMaxLength(500);

                entity.Property(e => e.Code).HasMaxLength(20);

                entity.Property(e => e.ContactPerson).HasMaxLength(200);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.Telephone).HasMaxLength(15);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
