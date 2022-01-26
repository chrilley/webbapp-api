using System;

namespace webbapp_api.Models
{
    public class Rover
    {
        public int RoverId { get; set; }
        public string Name { get; set; }
        public string URL { get; set; }
        public string Description { get; set; }
        public string History { get; set; }
        public double Weight { get; set; }
        public int WheelCount { get; set; }
    }
}