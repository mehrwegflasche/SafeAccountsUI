using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SafeAccountsUI.Models;

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
        public string User_SignUp([FromBody]string userInfo)
        {
            return "In Login section of Controller.. ";
        }
    }
}
