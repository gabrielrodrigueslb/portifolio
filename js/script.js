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
        text.textContent = "Freelancer"
    }, 4000);
    setTimeout(() =>{
        text.textContent = "Web Designer"
    }, 8000);
    setTimeout(() =>{
        text.textContent = "Programador"
    }, 12000);
}

textLoad();
setInterval(textLoad, 12000)