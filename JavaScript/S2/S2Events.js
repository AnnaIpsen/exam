console.log("omg")

//Eventhandling
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

//btn clicks
let btnClicks = 0
let btn = document.getElementById("btn")

function click() {
  btnClicks++
  btn.innerHTML = `du har klikket på mig ${btnClicks} gange`
}
btn.addEventListener("click", click)