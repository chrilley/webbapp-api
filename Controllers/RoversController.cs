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

        // Endpoint 1: Get all Rovers
        [HttpGet]
        public IEnumerable<RoverResource> Get()
        {
           var rovers = _mockRoverRepository.AllRovers;
           var resources = _mapper.Map<IEnumerable<Rover>, IEnumerable<RoverResource>>(rovers);
           return resources;
        }

        // Endpoint 2: Get Rover By Id, requires a parameter.
        [HttpGet("{id}")]
        public IEnumerable<RoverResource> Get(int id){
            var rover = _mockRoverRepository.GetRoverById(id);
            
            var list = new List<Rover>();                                                       // There *has* to be a better way to do this. 
            list.Add(rover);

            var resource =_mapper.Map<IEnumerable<Rover>, IEnumerable<RoverResource>>(list);    // Basically, AutoMapper wants a list so I give it one. But I really want to send it just 1 object. What do? :|
            return resource;
        }
    }
}