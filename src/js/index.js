const botaoTrailer = document.querySelector(".botao-trailer")
const modal = document.querySelector(".modal")
const video = document.getElementById("video")
const linkDoVideo = video.src

function alternarModal() {
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", linkDoVideo)
})

const botaoFecharModal = document.querySelector(".fechar-modal")

botaoFecharModal.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", "")
})

