"use strict";
function carInformation(manf, model, options) {
    const car = Object.assign({ manf: manf, model: model }, options);
    return car;
}
const car1 = carInformation("Toy", "cc", { color: "red", km: 280 });
console.log(car1);
