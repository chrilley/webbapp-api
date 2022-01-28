using System;

namespace webbapp_api.Models
{
    public class Rover
    {
        public int RoverId { get; set; }
        public string Name { get; set; }
        public string URL { get; set; }             // This property holds the rover's url name, used to construct the full url to NASA's API through my Client App.
        public string Description { get; set; }
        public string History { get; set; }         // I am just a dummy stat to be filtered out for Christian to try out AutoMapper
        public double Weight { get; set; }
        public int WheelCount { get; set; }
    }
}