"use strict"

function btZero(song) {
    const bt10 = document.querySelector("#bt10")
    bt10.onclick = async () => {
        song.currentTime = 0
        song.play()
    }
}

function getValueKey(value) {
    return value
}

function buttonsNumbers(song) {
    const buttonsNumbers = document.querySelector(".buttons-number")
    buttonsNumbers.addEventListener("click", function (event) {
        if (event.target.className == "bt-small-color") {
            console.log(event.target.innerText)
            song.currentTime = 0
            song.play()
           value = event.target.innerText
        }
    })
}

function buttonsLarges(blanck, reset, confirm) {
    const buttonsLarges = document.querySelector(".buttons")
    buttonsLarges.addEventListener("click", function (event) {
        if (event.target.className == "bt-large") {
            console.log(event.target.innerText)
            switch (event.target.innerText) {
                case "BRANCO":
                    blanck.currentTime = 0
                    blanck.play()
                    break;
                case "CORRIGE":
                    reset.currentTime = 0
                    reset.play()
                    break;
                case "CONFIRMA":
                    confirm.currentTime = 0
                    confirm.play()
                    break;
            }
        }
    })
}


export default {
    btZero,
    buttonsLarges,
    buttonsNumbers,
    getValueKey
}