using BiomedicalSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.EmailConfirmation
{
    public interface IEmailRepository
    {
        void Send(Message message);
    }
}
