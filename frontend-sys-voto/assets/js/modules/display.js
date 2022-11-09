"use strict"

var displayFormed

function getNubersDisplay() {
    return displayFormed
}

function votoNulo(cargo) {
    const div = document.querySelector(".message")
    div.innerHTML = `\
    <div class="title title-presidente">${cargo}</div>\
    <div class="message-nulo">VOTO <br> NULO</div>\
    `
}

function votoBranco(cargo) {
    var div = document.querySelector(".message")
    div.innerHTML = `\
    <div class="title title-presidente">${cargo}</div>\
    <div class="message-nulo">VOTO <br> BRANCO</div>\
    `
}

function returnScreen() {
    const div = document.querySelector(".message")
    div.innerHTML = `<span class="img-presidente">
    <img src="/assets/img/scorpion.png" alt="">
</span>
<div class="presidente">
    <div class="title title-presidente">${atualCargo}</div>
    <div id="display" class="title title-numero">
    </div>
    <div class="title title-nome">Nome: Scorpion</div>
    <span class="img-vice-presidente">
        <br>
        <img src="/assets/img/sektor.png" alt="">
    </span>
    <div class="title title-partido">Partido: MTK</div>
    <br>
</div>
<div class="vice-presidente">
    <div class="title title-vice">VICE-${atualCargo}</div>
    <div class="title title-vice-nome">Nome: Sektor</div>
</div>`
}


function setCandidateScreen(atualCargo, atualnumberCardo, candidateEncontred) {
    const div = document.querySelector(".screen")
    if (atualCargo == "PREFEITO" || atualCargo == "${atualCargo}") {
        div.innerHTML = `
        <div class="title title-voto">SEU VOTO PARA</div>
        <div class="message">
            <span class="img-presidente">
                <img src="${candidateEncontred.uriImgCandidato}" alt="">
            </span>
            <div class="presidente">
                <div class="title title-presidente">${atualCargo}</div>
                <div id="display" class="title title-numero">
                </div>
                <div class="title title-nome">Nome: ${candidateEncontred.nome}</div>
                <span class="img-vice-presidente">
                    <br>
                    <img src="${candidateEncontred.uriImgVice}" alt="">
                </span>
                <div class="title title-partido">Partido: ${candidateEncontred.siglaPartido}</div>
                <br>
            </div>
            <div class="vice-presidente">
                <div class="title title-vice">VICE-${atualCargo}</div>
                <div class="title title-vice-nome">Nome: ${candidateEncontred.nomeVice}</div>
            </div>
        </div>
        <br>
        <hr>
        <div>
            <footer>
                <div class="title info-teclas">
                <div class="info-teclas">Aperte a tecla:</div>
                <div class="info-tecla"><strong>BRANCO</strong> para votar em branco</div>
                <div class="info-tecla"><strong>LARANJA</strong> para corrigin</div>
                <div class="info-tecla"><strong>VERDE</strong> para confirmar</div>
                </div>
            </footer>
        </div>`
    } else {
        div.innerHTML = `
        <div class="title title-voto">SEU VOTO PARA</div>
        <div class="message">
            <span class="img-presidente">
                <img src="${candidateEncontred.uriImgCandidato}" alt="">
            </span>
            <div class="presidente">
                <div class="title title-presidente">${atualCargo}</div>
                <div id="display" class="title title-numero">
                </div>
                <div class="title title-nome">Nome: ${candidateEncontred.nome}</div>
                <span class="img-vice-presidente">
                    <br>
                </span>
                <div class="title title-partido">Partido: ${candidateEncontred.siglaPartido}</div>
                <br>
            </div>
            <div class="vice-presidente">
                <div class="title title-vice"></div>
                <div class="title title-vice-nome"></div>
            </div>
        </div>
        <br>
        <hr>
        <div>
            <footer>
                <div class="title info-teclas">
                <div class="info-teclas">Aperte a tecla:</div>
                <div class="info-tecla"><strong>BRANCO</strong> para votar em branco</div>
                <div class="info-tecla"><strong>LARANJA</strong> para corrigin</div>
                <div class="info-tecla"><strong>VERDE</strong> para confirmar</div>
                </div>
            </footer>
        </div>`
    }

    setDisplayCandidateNumber(atualnumberCardo, candidateEncontred.numero)
}

function returnScreenInitial() {
    const div = document.querySelector(".screen")
    div.innerHTML = `
    <div class="title title-voto">SEU VOTO PARA</div>
    <div class="message">
        <span class="img-presidente">
        </span>
        <div class="presidente">
            <div class="title title-presidente"></div>
            <div id="display" class="title title-numero">
            </div>
            <div class="title title-nome"></div>
            <span class="img-vice-presidente">
                <br>
            </span>
            <div class="title title-partido"></div>
            <br>
        </div>
        <div class="vice-presidente">
            <div class="title title-vice"></div>
            <div class="title title-vice-nome"></div>
        </div>
    </div>
    <br>
    <hr>
    <div>
        <footer>
            <div class="title info-teclas">
            <div class="info-teclas">Aperte a tecla:</div>
            <div class="info-tecla"><strong>BRANCO</strong> para votar em branco</div>
            <div class="info-tecla"><strong>LARANJA</strong> para corrigin</div>
            <div class="info-tecla"><strong>VERDE</strong> para confirmar</div>
            </div>
        </footer>
    </div>
    `
}

function barraLoading() {
    var messageDiv = document.querySelector(".screen")
    messageDiv.innerHTML = `\
    <div class="progress">
  <div class="progress-value"></div>
</div>`
}


function fim() {
    var messageDiv = document.querySelector(".screen")
    messageDiv.innerHTML = `\
    <div class="message-fim">FIM</div>\
    `

}


function setDisplayNumber(numberPressed, numberDisplay, numberCargo) {
    let numerReset = document.querySelectorAll(".reset-display")
    if (numerReset.length > 0) {
        for (let index = 1; index < numerReset.length; index++) {
            numerReset[index].remove()
        }
    }
    let displayDiv = document.querySelector("#display")
    if (displayDiv.parentNode.ATTRIBUTE_NODE != undefined) {
        displayDiv.removeChild(displayDiv.lastChild)
    }
    displayDiv.innerHTML += `<span>${numberPressed}</span>`
    if (numberDisplay < numberCargo - 1) {
        displayDiv.innerHTML += `<span class="indicador"></span>`
    }
    displayFormed += numberPressed
    return getNubersDisplay()
}

function setDisplayCandidateNumber(numberCargo, numberDisplay) {
    let displayDiv = document.querySelector("#display")
    let convert = (numberDisplay).toString();
    let arrayNumber = convert.split('');
    displayDiv.removeChild(displayDiv.firstChild)
    displayDiv.innerHTML = ""
    for (let index = 0; index < numberCargo; index++) {
        displayDiv.innerHTML += `<span class="reset-display">${arrayNumber[index]}</span>`
    }
}

function resetDisplay(nameCargo, numberCargo) {
    let cargo = document.querySelector(".title-presidente")
    let displayDiv = document.querySelector("#display")
    cargo.innerHTML = nameCargo
    displayFormed = ""
    displayDiv.removeChild(displayDiv.firstChild)
    displayDiv.innerHTML = ""
    for (let index = 0; index < numberCargo; index++) {
        displayDiv.innerHTML += `<span class="reset-display"></span>`
    }
}

export default {
    setDisplayNumber,
    resetDisplay,
    getNubersDisplay,
    votoNulo,
    votoBranco,
    fim,
    returnScreen,
    returnScreenInitial,
    barraLoading,
    setCandidateScreen
}