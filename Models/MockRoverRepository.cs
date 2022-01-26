using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace webbapp_api.Models
{
    public class MockRoverRepository : IRoverRepository
    {
        private List<Rover> rovers;
        public IEnumerable<Rover> AllRovers =>
        new List<Rover>
        {
            new Rover { Name = "Curiosity", Description = "Curiosity är en obemannad motoriserad landfarkost som sköts upp på uppdrag av NASA den 26 november 2011. Enligt plan landade strövaren på Mars vid kratern Gale den 5 augusti 2012 kl. 05:31 UTC. Strövaren är tre gånger så tung och dubbelt så bred som de tidigare Mars Exploration Rovers (MER) Spirit och Opportunity som landade på Mars 2004. Efter landningen har Curiosity analyserat ett flertal prover från marsjorden och från stenar. Strövaren förväntades vid uppskjutningen arbeta i minst ett marsår (cirka två jordår) och planerades att bli den strövare som täckte en större del av planetytan än någon tidigare strövare. Uppdraget var att undersöka Mars tidigare och dåvarande förmåga att hysa liv. Curiosity är 2020 fortfarande aktiv, vilket innebär att den har överlevt långt längre än vad man först trodde eller planerade för.", History="", Weight = 899.0, WheelCount = 6 },
            new Rover { Name = "Spirit", Description = "Spirit, också känd som MER-A (Mars Exploration Rover – A) eller MER-2, var NASAs första sond i Marsutforskningsprogrammet Mars Exploration Rover Mission. Den sköts upp med en Delta II-raket från Cape Canaveral Air Force Station, den 10 juni 2003 och landade på Mars yta, den 3 januari 2004. Den är syskonfarkost till MER-B, kallad Opportunity. Uppdraget var tänkt att pågå i 90 dagar, men tack vare att solcellerna då och då blåstes rena av starka vindar på Mars, överlevde Spirit i 2 269 dagar.", History = "", Weight = 185.0, WheelCount = 6 },
            new Rover { Name = "Opportunity", Description = "Opportunity, också känd som MER-B (Mars Exploration Rover – B) eller MER-1, med smeknamnet Oppy, var NASAs andra rymdsond i Mars-utforskningsprogrammet Mars Exploration Rover Mission. MER-B sköts iväg 8 juli 2003 och landade i området Meridiani planum på planeten Mars den 25 januari 2004. Den är tvillingfarkost till MER-A, Spirit. NASA förklarade den 13 februari 2019 uppdraget för avslutat då man inte sedan juni 2018 haft kontakt med farkosten. Detta efter att en större sandstorm dragit fram över området där den befann sig.", History = "", Weight = 185.0, WheelCount = 6 }
        };
    }
}
