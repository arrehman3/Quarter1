function describe_city(cityName:string,country:string="Pakistan"):string
{
    return cityName+" is in "+country;
}

console.log(describe_city("Karachi"));
console.log(describe_city("Lahore"));
console.log(describe_city("London"));