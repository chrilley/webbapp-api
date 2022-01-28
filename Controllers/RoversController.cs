using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using webbapp_api.Models;
using AutoMapper;
using webbapp_api.Resources;

namespace webbapp_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RoversController : ControllerBase
    {
        private readonly IRoverRepository _mockRoverRepository;
        private readonly IMapper _mapper;
        public RoversController(IRoverRepository mockRoverRepository, IMapper mapper)
        {
            _mockRoverRepository = mockRoverRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public IEnumerable<RoverResource> Get()
        {
           var rovers = _mockRoverRepository.AllRovers;
           var resources = _mapper.Map<IEnumerable<Rover>, IEnumerable<RoverResource>>(rovers);
           return resources;
        }

        [HttpGet("{id}")]
        public Rover Get(int id){
            return _mockRoverRepository.GetRoverById(id);
        }
    }
}