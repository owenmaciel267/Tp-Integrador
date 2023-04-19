// al hacer scroll que cambie de color

window.addEventListener('scroll', function() {
    const menu = document.getElementById('menu');
    const submenu = document.getElementById("submenu")
    const scrollPosition = window.scrollY;

    
    if (scrollPosition > 100) {
      menu.classList.add('scrolled');
    } else {
      menu.classList.remove('scrolled');
    }

})

// menu
const hambur = document.getElementById("hambur")
const navBar = document.getElementById("navBar")

hambur.addEventListener("click", ()=>{
    navBar.classList.toggle("active")
    console.log("click");
})
