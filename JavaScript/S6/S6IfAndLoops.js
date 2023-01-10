//Betingelser

//#region If statement
const flipBtn = document.getElementById("flipBtn")
const flipResult = document.getElementById("flipResult")
const successRate = document.getElementById("successRate")
let successCount = 0

flipBtn.addEventListener("click", () => {
  if (getRandomResult()) {
    flipResult.innerHTML = "Got lucky!"
    ++successCount
    successRate.innerHTML = `Times krone flipped: ${successCount} `
  } else {
    flipResult.innerHTML = "Not this time ;("
  }
})

getRandomResult = () => {
  return Math.floor(Math.random() * 2)
}
//#endregion

//#region Switch

const userLetterInput = document.getElementById("userLetterInput")
const rollWordBtn = document.getElementById("rollWordBtn")
const wordResult = document.getElementById("wordResult")

rollWordBtn.addEventListener("click", () => {
  if (!userLetterInput.value) {
    wordResult.innerHTML = "Something went wrong, verify your input"
    return
  }
  const trimmedUserInput = userLetterInput.value[0].toLowerCase()
  switch (trimmedUserInput) {
    case "a":
      wordResult.innerHTML = "Aarhus"
      break
    case "b":
      wordResult.innerHTML = "Bornholm"
      break
    case "c":
      wordResult.innerHTML = "Christmas"
      break
    case "d":
      wordResult.innerHTML = "Dadler"
      break
    case "e":
      wordResult.innerHTML = "El"
      break
    default:
      wordResult.innerHTML =
        "I'm not smart enough to handle more letters than a-e"
  }
})

//#endregion

//#region loop

//#endregion
