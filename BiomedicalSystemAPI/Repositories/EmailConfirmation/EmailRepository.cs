using BiomedicalSystemAPI.Models;
using BiomedicalSystemAPI.Repositories.EmailConfiguration;
using MailKit.Net.Smtp;
using MimeKit;
using MimeKit.Text;
using System;
using System.Collections.Generic;
using System.Linq;

using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Repositories.EmailConfirmation
{
    public class EmailRepository : IEmailRepository
    {
        private readonly IEmailConfigurationRepository _emailConfigurationRepository;
        public EmailRepository(IEmailConfigurationRepository emailConfigurationRepository)
        {
            _emailConfigurationRepository = emailConfigurationRepository;
        }
        public void Send(Message Mailmessage)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress(_emailConfigurationRepository.From));
            message.To.AddRange(Mailmessage.To.Select(x => new MailboxAddress(x.Name, x.address)));
            message.Subject = Mailmessage.Subject;
            message.Body = new TextPart(TextFormat.Html)
            {
                Text = Mailmessage.Content
            };
            using (var emailClient=new SmtpClient())
            {
                emailClient.Connect(_emailConfigurationRepository.SmtpServer, _emailConfigurationRepository.Port, true);
                emailClient.AuthenticationMechanisms.Remove("XOAUTH2");
                emailClient.Authenticate(_emailConfigurationRepository.UserName, _emailConfigurationRepository.Password);
                emailClient.Send(message);
                emailClient.Disconnect(true);
            }

        }
    }
}
