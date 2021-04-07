using System;

namespace SafeAccountsUI.Models
{
    public class User
    {
        public int ID { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Email { get; set; }
        public int NumAccs { get; set; }
        public string Role { get; set; }
    }
}
