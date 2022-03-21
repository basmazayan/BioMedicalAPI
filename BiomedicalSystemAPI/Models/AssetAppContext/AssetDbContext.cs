using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Models.AssetAppContext
{
    public class AssetDbContext: DbContext
    {
        public AssetDbContext(DbContextOptions<AssetDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
        public DbSet<AssetDetail> AssetDetails { get; set; }

    }
}
