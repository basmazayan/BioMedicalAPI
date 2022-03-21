﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class MasterAsset
    {
        //[DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string NameAr { get; set; }
        public string MasterCode { get; set; }
        public int CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public virtual Category Category { get; set; }
        public int ?SubCategoryId { get; set; }
        [ForeignKey("SubCategoryId")]
         public virtual SubCategory SubCategory { get; set; }
        public int BrandId { get; set; }
        [ForeignKey("BrandId")]
        public virtual Brand Brand { get; set; }
        public int PriorityId { get; set; }
        [ForeignKey("PriorityId")]
        public virtual Priority Priority { get; set; }
        public string Description { get; set; }
        public string DescriptionAr { get; set; }
        public int ExpectedLifeTime { get; set; }
        public string UpaCode { get; set; }
        public string ModelNumber { get; set; }
        public string VersionNumber { get; set; }
        public int OriginId { get; set; }
        [ForeignKey("OriginId")]
        public virtual Origin Origin { get; set; }
        public double? Length { get; set; }
        public double? Height { get; set; }
        public double? Width { get; set; }
        public double? Weight { get; set; }

        [StringLength(10)]
        public string Power { get; set; }
        [StringLength(10)]
        public string Voltage { get; set; }

        [StringLength(10)]
        public string Ampair { get; set; }

        [StringLength(10)]
        public string Frequency { get; set; }

        [StringLength(10)]
        public string ElectricRequirement { get; set; }


        [StringLength(10)]
        public string PMColor { get; set; }


        [StringLength(10)]
        public string PMBGColor { get; set; }
        public virtual ICollection<MasterEquipmentAttachment> masterequipmentAttachments { get; set; }
    }
}
