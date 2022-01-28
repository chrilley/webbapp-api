using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace webbapp_api.Models
{
    public interface IRoverRepository
    {
        IEnumerable<Rover> AllRovers { get; }
        Rover GetRoverById(int roverId);
    }
}