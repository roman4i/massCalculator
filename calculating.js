let calcMass;
let startMass;
let speed;
let inpName;

function dataOut(){
    outBlock.insertAdjacentHTML('beforeend',
    `<div class="rowRes">
                <div class="resCell">` + inpName + `</div>
                <div class="resCell">` + startMass + `</div>
                <div class="resCell">` + speed + `</div>
                <div class="resCell">` + calcMass + `</div>
    </div>`
    );
}

function calcIt(){
    startMass = inps.mass.value;
    speed = inps.speed.value;
    inpName = inps.inpName.value;
    calcMass = formulae(startMass, speed);
    console.log(calcMass);
    dataOut();
}

function formulae(mass, spd){
    let lightSpd = 1079252848.8;
    let endMass = mass / Math.sqrt(1 - ((spd*spd)/(lightSpd*lightSpd)));
    return endMass;
}