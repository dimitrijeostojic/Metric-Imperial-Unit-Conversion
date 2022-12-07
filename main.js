let numberEl = document.getElementById("num");
let convertBtn = document.querySelector(".btn");
let lengthEl1 = document.getElementById("length-el1");
let lengthEl2 = document.getElementById("length-el2");
let lengthEl3 = document.getElementById("length-el3");

let meterToFeet = 3.281;
let litresToGallons = 0.264;
let kilogramsToPounds = 2.204;

const niz1 = [lengthEl1, lengthEl2, lengthEl3];
const niz2 = [meterToFeet, litresToGallons, kilogramsToPounds];

convertBtn.addEventListener("click", function () {
  const baseValue = numberEl.value;
  let obj1;
  let obj2;
  for (let i = 0; i < niz1.length; i++) {
    if (i === 0) {
      obj1 = "meters";
      obj2 = "feet";
    } else if (i === 1) {
      obj1 = "liters";
      obj2 = "gallons";
    } else {
      obj1 = "kilograms";
      obj2 = "pounds";
    }
    niz1[i].textContent = `${baseValue} ${obj1} = ${(
      baseValue * niz2[i]
    ).toFixed(3)} ${obj2} | ${baseValue} ${obj2} = ${(
      baseValue / niz2[i]
    ).toFixed(3)} ${obj1}`;
  }
});
