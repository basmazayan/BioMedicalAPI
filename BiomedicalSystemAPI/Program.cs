using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BiomedicalSystemAPI.Controllers;
using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.AttachmentRepositories;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace BiomedicalSystemAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {          
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
