using System.IO;
using BiomedicalSystemAPI.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;

using BiomedicalSystemAPI.Repositories.EquipmentReposatories;
using BiomedicalSystemAPI.Repositories.ServiceRequestRepository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using BiomedicalSystemAPI.Repositories.MasterEquipmentRepository;
using BiomedicalSystemAPI.Repositories.EmployeeRepository;
using BiomedicalSystemAPI.Repositories.VendorRepository;
using BiomedicalSystemAPI.Repositories.WorkOrdersRepositories;
using BiomedicalSystemAPI.Repositories.MaintenanceRepository;
using BiomedicalSystemAPI.Repositories.SparePartRepository;
using BiomedicalSystemAPI.Repositories.EmailConfiguration;
using BiomedicalSystemAPI.Repositories.EmailConfirmation;
using Microsoft.Net.Http.Headers;
using BiomedicalSystemAPI.Repositories.ContractRepository;
using BiomedicalSystemAPI.Repositories.EquipmentCoverageRepository;
using BiomedicalSystemAPI.Repositories.HealthCareUnitRepositories;
using BiomedicalSystemAPI.Repositories.OrganizationRepository;
using Microsoft.AspNetCore.Http.Features;
using BiomedicalSystemAPI.Controllers;
using BiomedicalSystemAPI.Repositories;
using BiomedicalSystemAPI.Repositories.AttachmentRepositories;
using BiomedicalSystemAPI.Repositories.InventoryRepository;
using BiomedicalSystemAPI.Repositories.ContractRequestRepositories;
using BiomedicalSystemAPI.Repositories.ContractRequestRepository;
using BiomedicalSystemAPI.Repositories.PagingRepository;
using BiomedicalSystemAPI.Repositories.HealthRepository;
using BiomedicalSystemAPI.Models.HealthAppContext;

namespace BiomedicalSystemAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public object JwtBearerDefaults { get; private set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        [System.Obsolete]
        // This method gets called by the runtime. Use this method to add services to the container.

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDirectoryBrowser();
            services.AddHttpContextAccessor();
            services.AddCors();
            services.AddMvc(x => x.EnableEndpointRouting = false);//.SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddControllers();
            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("SqlConnection")));
            services.AddDbContext<BioMedEquipmentDBContext>(options => options.UseSqlServer(Configuration.GetConnectionString("HealthAppConnetion")));

            services.Configure<FormOptions>(o => {
                o.ValueLengthLimit = int.MaxValue;
                o.MultipartBodyLengthLimit = int.MaxValue;
                o.MemoryBufferThreshold = int.MaxValue;
            });

            services.AddScoped<IEquipmentRepository, EquipmentRepository>();
            services.AddScoped<IServiceRequestRepository, ServiceRequestRepository>();
            services.AddScoped<IMasterEquipmentRepository, MasterEquipmentRepository>();
            services.AddScoped<IEmployeeRepository, EmployeeRepository>();
            services.AddScoped<IVendorRepository, VendorRepository>();
            services.AddScoped<IWorkOrderRepository, WorkOrderRepository>();
            services.AddScoped<IMaintenanceRepository, MaintenanceRepository>();
            services.AddScoped<ISparePartRepository, SparePartRepository>();
            services.AddSingleton<IEmailConfigurationRepository>(Configuration.GetSection("EmailConfigurationRepository").Get<EmailConfigurationRepository>());
            services.AddScoped<IEmailRepository, EmailRepository>();
            services.AddScoped<IContractRepository, Contract_Repository>();
            services.AddScoped<IHealthCareUnitRepository, HealthCareUnitRepository>();
            services.AddScoped<IEquipmentCoverageRepository, EquipmentCoverageRepository>();
            services.AddScoped<IAttachmentRepository, AttachmentRepository>();
            //services.AddScoped<AttachmentsController, AttachmentsController>();
            services.AddScoped<IOrganizationRepository, OrganizationReposotory>();
            services.AddScoped<ImgUploadController, ImgUploadController>();
            services.AddScoped<QRCoderController, QRCoderController>();
            services.AddScoped<IInventoryRepository, InventoryRepository>();
            services.AddScoped<EquipmentRecallController, EquipmentRecallController>();
            services.AddScoped<IContractRequestRepository, ContractRequestRepository>();
            services.AddScoped<IPagingRepository, PagingRepository>();
            services.AddScoped<IGetHealthInfoRepository, GetHealthInfoRepository>();
            //services.AddWkhtmltopdf();
            // For Identity  
            //services.AddSession(options =>
            //{
            //    options.IdleTimeout = TimeSpan.FromSeconds(60);
            //});
            services.AddIdentity<ApplicationUser, IdentityRole>(o=> 
            {
                //o.Password.RequireLowercase = true;
                //o.Password.RequireNonAlphanumeric = true;
                //o.Password.RequiredLength = 10;
            })
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            // Adding Authentication  
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme;
            })

            // Adding Jwt Bearer  
            .AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidAudience = Configuration["JWT:ValidAudience"],
                    ValidIssuer = Configuration["JWT:ValidIssuer"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWT:Secret"]))
                };
            });


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
         
            app.UseCors(
        //options => options.WithOrigins("http://localhost:4200.com").AllowAnyMethod()
            options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
          );

            app.Use(async (context, next) =>
            {
                await next();
                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });
            app.UseDefaultFiles();
            app.UseStaticFiles(); // For the wwwroot folder.
            app.UseFileServer(new FileServerOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, @"Resources")),
                RequestPath = "/Resources",
                EnableDirectoryBrowsing=true
            }) ;

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
