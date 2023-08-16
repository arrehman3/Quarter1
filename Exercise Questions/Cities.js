function describe_city(cityName, country) {
    if (country === void 0) { country = "Pakistan"; }
    return cityName + " is in " + country;
}
console.log(describe_city("Karachi"));
console.log(describe_city("Lahore"));
console.log(describe_city("London"));
