using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Models
{
    public class Root
    {
        public bool ResponseStatus { get; set; }
        public string ErrorGUID { get; set; }
        public string Message { get; set; }
        public List<Category> Results { get; set; }
    }
}
