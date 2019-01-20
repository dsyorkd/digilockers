using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace Identity.API.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
        public int userBox { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

    }
}
