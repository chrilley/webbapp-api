using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using webbapp_api.Models;

namespace webbapp_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RoversController : ControllerBase
    {
        private readonly IRoverRepository _mockRoverRepository;
        public RoversController(IRoverRepository mockRoverRepository)
        {
            _mockRoverRepository = mockRoverRepository;
        }

        [HttpGet]
        public IEnumerable<Rover> Get()
        {
           return _mockRoverRepository.AllRovers;
        }
    }
}