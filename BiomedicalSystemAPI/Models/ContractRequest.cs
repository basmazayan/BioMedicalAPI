﻿using BiomedicalSystemAPI.DTO;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models
{
    public class ContractRequest
    {
        public int Id { get; set; }
        public int Number { get; set; }
        public DateTime Date { get; set; }
        //public DateTime OrganizationRequestDate { get; set; }
        public string Comments { get; set; }
        public Status Status { get; set; }
        public int HospitalId { get; set; }
        [ForeignKey("HospitalId")]
        public virtual HealthCareUnit HealthCareUnit { get; set; }
        public virtual ICollection<Equipment> equipment { get; set; }
    }
}