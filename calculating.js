let calcMass;
let startMass;
let speed;
let inpName;
let counter = 0;
let divs = [];

function dataOut(){
    /*outBlock.insertAdjacentHTML('beforeend',
    `<div class="rowRes">
                <div class="resCell">` + inpName + `</div>
                <div class="resCell">` + startMass + `</div>
                <div class="resCell">` + speed + `</div>
                <div class="resCell">` + calcMass + `</div>
    </div>`
    );
    */
   let resArray = [inpName, startMass, speed, calcMass]
   let tableLine = document.createElement("div");
   tableLine.className = "rowRes";
   for (let i = 0; i < 4; i++) {
       let tabCell = document.createElement("div");
       tabCell.className = "resCell";
       dataNode = document.createTextNode(resArray[i]);
       tabCell.appendChild(dataNode);
       tableLine.appendChild(tabCell);
   }
   let delCell = document.createElement("div");
   delCell.className = "resCell";
   let delButton = document.createElement("button");
   let buttonData = document.createTextNode("Delete");
   delButton.appendChild(buttonData);
   const staticNum = counter;
   delButton.onclick = function () {removeLine(staticNum)};
   delCell.appendChild(delButton);
   tableLine.appendChild(delCell);
   tableLine.id = "lin" + counter;
   let outWrite = document.getElementById("outBlock");
   outWrite.appendChild(tableLine);
   counter++;
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

function removeLine(num){
    let toRemove = document.getElementById("lin"+num);
    toRemove.remove();
}