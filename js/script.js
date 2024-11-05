const hamburguer = document.querySelector(".hamburguer")
const nav = document.querySelector(".navbar")
const navItems = document.querySelectorAll(".menu a");

hamburguer.addEventListener('click', () =>
    nav.classList.toggle("active")
)

navItems.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove("active"); // Remove a classe 'active' para fechar o menu
    });
});


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