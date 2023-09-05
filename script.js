
const tagHtml = document.querySelector("html")
const buttonFoco = document.querySelector(".app__card-button--foco")
const buttonCurto = document.querySelector(".app__card-button--curto")
const buttonLongo = document.querySelector(".app__card-button--longo")
const appImage = document.querySelector(".app__image")
const appTitle = document.querySelector(".app__title")
const appTitleStrong = document.querySelector(".app__title-strong")


function alterarContexto(contexto, title, titleStrong) {
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



buttonFoco.addEventListener("click", () => {
    alterarContexto("foco", "Otimize sua produtividade,", "mergulhe no que importa.")
    buttonFoco.classList.add("active")

})

buttonCurto.addEventListener("click", () => {
    alterarContexto("descanso-curto", "Que tal dar uma respirada?", "Faça uma pausa curta!")
    buttonCurto.classList.add("active")
})

buttonLongo.addEventListener("click", () => {
    alterarContexto("descanso-longo", "Hora de voltar a superfície.", "Faça uma pausa longa.")
    buttonLongo.classList.add("active")

})

