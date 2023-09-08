"use strict";
function describe_city(cityName, country = "Pakistan") {
    return cityName + " is in " + country;
}
console.log(describe_city("Karachi"));
console.log(describe_city("Lahore"));
console.log(describe_city("London"));
