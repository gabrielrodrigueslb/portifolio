const hamburguer = document.querySelector(".hamburguer")
const nav = document.querySelector(".navbar")

hamburguer.addEventListener('click', () =>
    nav.classList.toggle("active")
)


const text = document.querySelector(".sec-text")
const textLoad = () => {
    setTimeout(() =>{
        text.textContent = "UX/UI Designer"
    }, 0);
    setTimeout(() =>{
        text.textContent = "Desenvolvedor"
    }, 4000);
    setTimeout(() =>{
        text.textContent = "Freelancer"
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000)