using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.EmailConfiguration
{
    public interface IEmailConfigurationRepository
    {
        string From { get; set; }
        string SmtpServer { get; set; }
        int Port { get; set; }
        string UserName { get; set; }
        string Password { get; set; }
    }
}
