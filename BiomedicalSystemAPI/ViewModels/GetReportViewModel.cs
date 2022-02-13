using System.Collections.Generic;

namespace BiomedicalSystemAPI.ViewModels
{
    public class GetReportViewModel
    {
        public string currentHospitalName { get; set; }
        public string deviceName { get; set; }
        public IEnumerable<GetReportViewDetail> GetReportViewDetails { get; set; }
    }

    public class GetReportViewDetail
    {
        public string hospitalName { get; set; }
        public float lengthKM { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string DirectorName { get; set; }
    }
}