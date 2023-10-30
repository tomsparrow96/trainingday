let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true
let runnersAge = 16
if (registeredEarly === true && runnersAge > 18) 
{raceNumber += 1000;}
// console.log (raceNumber)
if (registeredEarly === true && runnersAge > 18) 
{console.log(`Your race will begin at 9:30am, your race number is ${raceNumber}!`);
}
else if (registeredEarly === false && runnersAge > 18) 
{console.log (`Your race will begin at 11:00 am, your race number is ${raceNumber}`);
}
else if (runnersAge < 18) {console.log (`Your race will begin at 12:30, your race number is ${raceNumber}`);}
