using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SafeAccountsUI.Models;
using System.Net.Http;
using System.Text;
using Newtonsoft.Json.Linq;

namespace SafeAccountsUI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;

        public UsersController(ILogger<UsersController> logger)
        {
            _logger = logger;
        }

        [HttpPost("login")]
        public string User_Login([FromBody]string credentials)
        {
            return "In Login section of Controller.. ";
        }

        [HttpPost("signup")]
        public async Task<string> User_SignUpAsync([FromBody]string userInfo)
        {
            // idk why this is needed but it has to be seen as a string in a string with both my apis
            JObject json = JObject.Parse(userInfo);
            string body = @"""{\""firstname\"":\""" + json["firstname"].ToString() + @"\"", \""lastname\"":\""" + json["lastname"] + @"\"", \""email\"":\""" + json["email"] + @"\"", \""password\"":\""" + json["password"] + @"\""}"""; 

            HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.PostAsync("https://eus-safeaccounts-test.azurewebsites.net/users", new StringContent(body, Encoding.UTF8, "application/json"));
            string result = await response.Content.ReadAsStringAsync();
            return result;
        }
    }
}
