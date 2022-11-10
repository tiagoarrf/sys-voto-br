"use strict"

import data from "./modules/data.js"
import songs from "./modules/sounds.js"
import display from "./modules/display.js"

const candidatos = await data.getAllCandidates()
const eleicoes = await data.getAllEleicoes()
let eleicao = []
let prefeitos = []
let vereadores = []
let depFederal = []
let depEstadual = []
let senador = []
let governador = []
let presidente = []
let etapas = 0
let candidateValid
let index = 0
let confirmPressed
let permitido = false
let permitidoNulo = false
let permitidoBranco = false
let candidateEncontred
let atualCargo
let atualnumberCardo

const ARRAYS_MODE_PRESIDENTE = [depFederal, depEstadual, senador, governador, presidente]
const ORDEM_VOTACAO_MODO_1 = ["DEPUTADO FEDERAL", "DEPUTADO ESTADUAL", "SENADOR", "GOVERNADOR", "PRESIDENTE"]
const NUMBERS_CARGO_MODE1 = [4, 5, 3, 2, 2]

const ARRAYS_MODE_PREFEITO = [vereadores, prefeitos]
const ORDEM_VOTACAO_MODO_2 = ["VEREADOR", "PREFEITO"]
const NUMBERS_CARGO_MODE2 = [5, 2]

eleicoes.forEach(element => {
    if (element.statusEleicao == "INICIADA") {
        eleicao = element
        if (eleicao.tipoEleicao == "MODO_PRESIDENTE") {
            atualCargo = ORDEM_VOTACAO_MODO_1[0]
            atualnumberCardo = NUMBERS_CARGO_MODE1[0]
            etapas = ORDEM_VOTACAO_MODO_1[0].length
        }
        else {
            atualCargo = ORDEM_VOTACAO_MODO_2[0]
            atualnumberCardo = NUMBERS_CARGO_MODE2[0]
            etapas = ORDEM_VOTACAO_MODO_2[0].length
        }
    }
});

display.resetDisplay(atualCargo, atualnumberCardo)

buttonsNumbers(songs.numbers())
buttonsLarges(songs.blanck(), songs.reset(), songs.confirmation(), songs.finale())

candidatos.forEach(element => {
    if (element.eleicao.tipoEleicao == "MODO_PREFEITO") {
        etapas = ORDEM_VOTACAO_MODO_2.length
        if (element.cargo == "PREFEITO") {
            prefeitos.push(element)
        } else {
            vereadores.push(element)
        }
    }
    else {
        etapas = ORDEM_VOTACAO_MODO_1.length
        if (element.cargo == ORDEM_VOTACAO_MODO_1[0]) {
            depFederal.push(element)
        }
        if (element.cargo == ORDEM_VOTACAO_MODO_1[1]) {
            depEstadual.push(element)
        }
        if (element.cargo == ORDEM_VOTACAO_MODO_1[2]) {
            senador.push(element)
        }
        if (element.cargo == ORDEM_VOTACAO_MODO_1[3]) {
            governador.push(element)
        }
        if (element.cargo == ORDEM_VOTACAO_MODO_1[4]) {
            presidente.push(element)
        }
    }
});


function validarCandidato(arrayCandidate, num) {
    candidateValid = null
    arrayCandidate.forEach(element => {
        if (element.numero == num) {
            candidateValid = element
        }
    });
    if (candidateValid != null) {
        return candidateValid
    }
    return null
}

function buttonsNumbers(song) {
    const buttonsNumbers = document.querySelector(".buttons-number")
    buttonsNumbers.addEventListener("click", function (event) {
        if (event.target.className == "bt-small-color") {
            song.currentTime = 0
            song.play()
            if (display.getNubersDisplay() != undefined) {
                if (eleicao.tipoEleicao == "MODO_PREFEITO") {
                    if (atualCargo == ORDEM_VOTACAO_MODO_2[index] && display.getNubersDisplay().length < NUMBERS_CARGO_MODE2[index]) {
                        display.setDisplayNumber(event.target.innerText, display.getNubersDisplay().length, NUMBERS_CARGO_MODE2[index])
                        candidateEncontred = validarCandidato(ARRAYS_MODE_PREFEITO[index], display.getNubersDisplay())
                        if (display.getNubersDisplay().length == (NUMBERS_CARGO_MODE2[index]) && candidateEncontred != null) {
                            permitido = true
                            display.setCandidateScreen(atualCargo, atualnumberCardo, candidateEncontred)
                        }
                        else if (display.getNubersDisplay().length == NUMBERS_CARGO_MODE2[index] && candidateEncontred == null) {
                            permitidoNulo = true
                            display.votoNulo(atualCargo)
                        }
                    }
                }
                else {
                    if (atualCargo == ORDEM_VOTACAO_MODO_2[index] && display.getNubersDisplay().length < NUMBERS_CARGO_MODE2[index]) {
                        display.setDisplayNumber(event.target.innerText, display.getNubersDisplay().length, NUMBERS_CARGO_MODE2[index])
                        candidateEncontred = validarCandidato(ARRAYS_MODE_PRESIDENTE[index], display.getNubersDisplay())
                        if (display.getNubersDisplay().length == (NUMBERS_CARGO_MODE2[index]) && candidateEncontred != null) {
                            permitido = true
                            data.vote(candidateEncontred.candidatoId)
                        }
                        else if (display.getNubersDisplay().length == NUMBERS_CARGO_MODE2[index] && candidateEncontred == null) {
                            permitidoNulo = true
                            display.votoNulo(atualCargo)
                        }
                    }
                }
            }
        }
    })
}

function resetVotação() {
    display.returnScreenInitial()
    index = 0;
    atualCargo = ORDEM_VOTACAO_MODO_2[index]
    atualnumberCardo = NUMBERS_CARGO_MODE2[index]
    display.resetDisplay(atualCargo, atualnumberCardo)
}

function buttonsLarges(blanck, reset, confirm, finale) {
    const buttonsLarges = document.querySelector(".buttons")
    buttonsLarges.addEventListener("click", function (event) {
        if (event.target.className == "bt-large") {
            switch (event.target.innerText) {
                case "BRANCO":
                    blanck.currentTime = 0
                    blanck.play()
                    display.votoBranco(atualCargo)
                    permitidoBranco = true
                    break;
                case "CORRIGE":
                    reset.currentTime = 0
                    reset.play()
                    display.returnScreenInitial()
                    display.resetDisplay(atualCargo, atualnumberCardo)
                    permitido = false
                    permitidoNulo = false
                    permitidoBranco = false
                    confirmPressed = false
                    break;
                case "CONFIRMA":
                    if (permitido) {
                        data.vote(candidateEncontred.candidatoId, eleicao.eleicaoId)
                        index++
                        confirmPressed = true
                        permitidoBranco = false
                        permitidoNulo = false
                        confirm.currentTime = 0
                        confirm.play()
                        display.barraLoading()
                        setTimeout(() => {
                            if (index < etapas) {
                                atualCargo = ORDEM_VOTACAO_MODO_2[index]
                                atualnumberCardo = NUMBERS_CARGO_MODE2[index]
                            }
                            else {
                                finale.currentTime = 0
                                finale.play()
                                setTimeout(() => {
                                    display.fim()
                                }, 0);
                                setTimeout(() => {
                                    resetVotação()
                                }, 4000);
                            }
                            display.returnScreenInitial()
                            display.resetDisplay(atualCargo, atualnumberCardo)
                        }, 1000);
                        permitido = false
                    }
                    if (permitidoNulo) {
                        data.voteNull(eleicao.eleicaoId)
                        index++
                        confirmPressed = true
                        permitido = false
                        permitidoBranco = false
                        confirm.currentTime = 0
                        confirm.play()
                        display.barraLoading()
                        setTimeout(() => {
                            if (index < etapas) {
                                atualCargo = ORDEM_VOTACAO_MODO_2[index]
                                atualnumberCardo = NUMBERS_CARGO_MODE2[index]
                            }
                            else {
                                finale.currentTime = 0
                                finale.play()
                                setTimeout(() => {
                                    display.fim()
                                }, 0);
                                setTimeout(() => {
                                    resetVotação()
                                }, 4000);
                            }
                            display.returnScreenInitial()
                            display.resetDisplay(atualCargo, atualnumberCardo)
                        }, 1000);
                        permitidoNulo = false
                    }
                    if (permitidoBranco) {
                        data.voteBranco(eleicao.eleicaoId)
                        index++
                        confirmPressed = true
                        permitido = false
                        permitidoNulo = false
                        confirm.currentTime = 0
                        confirm.play()
                        display.barraLoading()
                        setTimeout(() => {
                            if (index < etapas) {
                                atualCargo = ORDEM_VOTACAO_MODO_2[index]
                                atualnumberCardo = NUMBERS_CARGO_MODE2[index]
                            }
                            else {
                                finale.currentTime = 0
                                finale.play()
                                setTimeout(() => {
                                    display.fim()
                                }, 0);
                                setTimeout(() => {
                                    resetVotação()
                                }, 4000);
                            }
                            display.returnScreenInitial()
                            display.resetDisplay(atualCargo, atualnumberCardo)
                        }, 1000);
                        permitidoBranco = false
                    }
                    break;
            }
        }
    })
}


