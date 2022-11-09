"use strict"

function confirmation() {
    let sound = new Audio();
    sound.volume = 0.8
    sound.src = "assets/sounds/confirmation.mp3"
    return sound
}

function finale() {
    let sound = new Audio();
    sound.volume = 0.5
    sound.src = "assets/sounds/finali.mp3"
    return sound
}

function numbers() {
    let sound = new Audio();
    sound.volume = 0.3
    sound.src = "assets/sounds/numbers.mp3"
    return sound
}

function blanck() {
    let sound = new Audio();
    sound.volume = 0.3
    sound.src = "assets/sounds/numbers.mp3"
    return sound
}

function reset() {
    let sound = new Audio();
    sound.volume = 0.3
    sound.src = "assets/sounds/reset.mp3"
    return sound
}


export default {
    confirmation,
    numbers,
    blanck,
    reset,
    finale
}