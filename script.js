
const tagHtml = document.querySelector("html")
const buttonFoco = document.querySelector(".app__card-button--foco")
const buttonCurto = document.querySelector(".app__card-button--curto")
const buttonLongo = document.querySelector(".app__card-button--longo")
const appImage = document.querySelector(".app__image")
const appTitle = document.querySelector(".app__title")
const appTitleStrong = document.querySelector(".app__title-strong")
const buttonMusic = document.querySelector("#alternar-musica")
const music = new Audio('/sons/luna-rise-part-one.mp3')
const buttonStartPause = document.querySelector("#start-pause")
const beep = new Audio('/sons/beep.mp3')
const iniciarPausarButton = document.querySelector("#start-pause span")
const tempoNaTela = document.querySelector("#timer")

let tempoDecorridoEmSegundos = 3000
let intervaloId = null

function alterarContexto(contexto, title, titleStrong) {
    mostrarTempo()
    tagHtml.setAttribute("data-contexto", contexto)
    appImage.setAttribute("src", `/imagens/${contexto}.png`)
    appTitle.innerHTML = `
    ${title},<br>
                <strong class="app__title-strong">${titleStrong}</strong>
    `
    const buttons = document.querySelectorAll(".app__card-button")
    buttons.forEach( button => {
            button.classList.remove("active")
    });

     
}

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        zerar()
        beep.play()
        alert("Tempo Encerrado!")
        return
    }

    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
}  

buttonStartPause.addEventListener("click", iniciar)

function iniciar() {
    if (intervaloId) {
        zerar()
        return
    }
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarPausarButton.textContent = "Pausar"
}

function zerar() {
    clearInterval(intervaloId)
    intervaloId = null
    iniciarPausarButton.textContent = "Começar"
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleString('pt-br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

buttonMusic.addEventListener("change", () => {
    if (music.paused) {
        music.play()
    }
    else {
        music.pause()
    }
    music.loop()
})

buttonFoco.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 3000
    alterarContexto("foco", "Otimize sua produtividade,", "mergulhe no que importa.")
    buttonFoco.classList.add("active")

})

buttonCurto.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 600
    alterarContexto("descanso-curto", "Que tal dar uma respirada?", "Faça uma pausa curta!")
    buttonCurto.classList.add("active")
    
})

buttonLongo.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 1200
    alterarContexto("descanso-longo", "Hora de voltar a superfície.", "Faça uma pausa longa.")
    buttonLongo.classList.add("active")
    

})

mostrarTempo()