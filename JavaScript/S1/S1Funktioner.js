//Indbygget funktioner

//String function
function consoleStringLength(string) {
  if (typeof string !== "string") return
  console.log(string.length)
}

consoleStringLength("hallo")

//Math function
function consoleRandomNumber() {
  console.log(Math.floor(Math.random() * 100))
}
consoleRandomNumber()

//Number function

let numberToFixed = 123.456

console.log(numberToFixed.toFixed()) //123
console.log(numberToFixed.toFixed(1)) //123.5
console.log(numberToFixed.toFixed(2)) //123.46

//Array function
function sortArray() {
  let fooArray = []
  fooArray.forEach((element) => console.log(element))
}

//darkmode funktion
let darkmode = false

document.getElementById("switch").addEventListener("click", switchMode)

function switchMode() {
  if (darkmode === false) {
    document.getElementById("change").style.color = "white"
    document.getElementById("change").style.backgroundColor = "black"
  } else {
    document.getElementById("change").style.color = "black"
    document.getElementById("change").style.backgroundColor = "white"
  }

  darkmode = !darkmode
}

//btn clicks
let btnClicks = 0
let btn = document.getElementById("btn")

function click() {
  btnClicks++
  btn.innerHTML = `du har klikket på mig ${btnClicks} gange`
}
btn.addEventListener("click", click)


//Arrow function Example
document.getElementById("userForm").addEventListener("click", (event) => {
  event.preventDefault()
  let name = document.getElementById("frm").name.value
  let age = document.getElementById("frm").age.value
  let home = document.getElementById("frm").home.value
  let hobby = document.getElementById("frm").hobby.value
  let siblings = document.getElementById("frm").siblings.value

  document.getElementById("modal").innerHTML = `
      <h2>Hej ${name}</h2>
      <p>Du er ${age} år gammel</p>
      <p>Du har ${siblings}</p>
      <p>Du bor i ${home}</p>
      <p>Din hobby er ${hobby}</p>`
})

