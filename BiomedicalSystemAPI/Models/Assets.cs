using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class Assets
    {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Code { get; set; }
        public string MasterCode { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        public string Type { get; set; }
        public DateTime? InstallationDate { get; set; }
        public int HospitalId { get; set; }
        [ForeignKey("HospitalId")]
        public virtual Hospital Hospital { get; set; }
        public string Remarks { get; set; }
        public string SerialNumber { get; set; }
        public string InternalCode { get; set; }
        public string Barcode { get; set; }

        public DateTime? PurchaseDate { get; set; }
        public int SupplierId { get; set; }
        [ForeignKey("SupplierId")]
        public virtual Supplier Supplier { get; set; }
        public int StatusId { get; set; }
        [ForeignKey("StatusId")]
        public virtual EquipmentStatus Status { get; set; }
        [Column(TypeName = "decimal(18, 2)")]
        public decimal? Price { get; set; }
        public DateTime WarrantyExpires { get; set; }
        public float Length { get; set; }
        public float Height { get; set; }
        public float Weight { get; set; }
        public string Color { get; set; }
        public string ColorAr { get; set; }
        public string CustomizedField { get; set; }
        public int DepartmentId { get; set; }
        [ForeignKey("DepartmentId")]
        public virtual Department Department { get; set; }
        public int Room { get; set; }
        public int Floor { get; set; }
        public DateTime ProductionYear { get; set; }

        //public int HealthDirectoryId { get; set; }
        //[ForeignKey("HealthDirectoryId")]
      //  public virtual HealthDirectory HealthDirectories { get; set; }
        public int MasterAssetId { get; set; }
        [ForeignKey("MasterAssetId")]
        public virtual MasterAsset MasterAsset { get; set; }
        //public int HealthDistrictId { get; set; }
        //[ForeignKey("HealthDistrictId")]
        //public virtual HealthDistrict HealthDistricts { get; set; }

        public int? ContractRequestId { get; set; }
        [ForeignKey("ContractRequestId")]
        public virtual ContractRequest ContractRequest { get; set; }
        public int? OrganizationRequestId { get; set; }
        [ForeignKey("OrganizationRequestId")]
        public virtual OrganizationContractRequest OrganizationContract { get; set; }
        public int? ContractId { get; set; }
        [ForeignKey("ContractId")]
        public virtual Contract Contract { get; set; }

        public int? EquipmentRecallId { get; set; }
        [ForeignKey("EquipmentRecallId")]
        public virtual EquipmentRecall EquipmentRecall { get; set; }
        public virtual ICollection<EquipmentEmployees> equipmentEmployees { get; set; }
        public virtual ICollection<EquipmentAttachments> equipmentAttachments { get; set; }
        //public int? AttachmentId { get; set; }
        //[ForeignKey("AttachmentId")]
        //public virtual Attachment Attachment { get; set; }
        public string QrImgPath { get; set; }
        [DataType(DataType.Date)]
        public DateTime? WarrantyStart { get; set; }

        [DataType(DataType.Date)]
        public DateTime? WarrantyEnd { get; set; }
        [DataType(DataType.Date)]
        public DateTime? OperationDate { get; set; }

        [DataType(DataType.Date)]
        public DateTime? ReceivingDate { get; set; }

        public string PONumber { get; set; }

        public decimal? DepreciationRate { get; set; }
        public string CostCenter { get; set; }

    }
}
