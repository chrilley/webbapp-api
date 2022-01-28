using AutoMapper;
using webbapp_api.Resources;

namespace webbapp_api.Models
{
    public class ModelToResourceProfile : Profile
    {
        public ModelToResourceProfile()
        {
            CreateMap<Rover, RoverResource>();
        }
    }
}