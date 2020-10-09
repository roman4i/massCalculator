let calcMass = 0;
let startMass;
let speed;

function dataOut(){
    
}

function calcIt(){
    startMass = inps.mass.value;
    speed = inps.speed.value;
    calcMass = formulae(startMass, speed);
    console.log(calcMass);
}

function formulae(mass, spd){
    let lightSpd = 1079252848.8;
    let endMass = mass / Math.sqrt(1 - ((spd*spd)/(lightSpd*lightSpd)));
    return endMass;
}