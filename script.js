const pageLoad = () => {

  let printText = document.getElementById("printText");
  let change = document.getElementById("change");
  let container = document.querySelector(".container");
  let changeColor = document.getElementById("changeColor");
  let header = document.querySelector("header");

  let counter = 0;
  let colorCounter = 0;

  function print() {

    container.classList.toggle("newClass");

    counter = counter + 1;
    printText.insertAdjacentHTML("beforeend", `
      <p>Megcseréltem ${counter}x</p>
    `)
  }

  function theme(){
    // header.classList.toggle("theme");

    // random color
    header.style.backgroundColor = '#'+ Math.random().toString(16).substr(-6);

    colorCounter = colorCounter +1;
    
    printText.insertAdjacentHTML("beforeend", `
      <p>Megváltoztattam a fejléc színét ${colorCounter}x</p>
    `)
  }

  changeColor.addEventListener("click", theme)
  change.addEventListener("click", print)

  /*
  const array = [];
  console.log(array);
  array.push("pushed");
  console.log(array); // tömbben lévő dolgokat tudtam változtatni
  */

}
window.addEventListener("load", pageLoad);