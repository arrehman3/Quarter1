function carInformation(manf:string,model:string,options:{[key:string]:any}):object
{
    const car = {
        manf:manf,
        model:model,
        ...options
    }

    return car
}

const car1 = carInformation("Toy","cc",{color:"red",km:280})
console.log(car1);