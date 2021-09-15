using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Project1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Project1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MainController : ControllerBase
    {
     
        private readonly ILogger<MainController> _logger;

        public MainController(ILogger<MainController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<List<Category>> GetAsync()
        {
            var httpClient = HttpClientFactory.Create();

            var json = await httpClient.GetStringAsync("https://halfiyatlaripublicdata.ibb.gov.tr/api/HalManager/getCategories");

            Root newRoot = new Root();
            newRoot = JsonConvert.DeserializeObject<Root>(json);
            return newRoot.Results.Select(x =>  { x.Kategori = x.Kategori.ToLower();  return x; }).ToList();
        }
    }
}
