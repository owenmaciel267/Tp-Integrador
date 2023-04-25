// CAMBIANDO EL MENU CUANDO HAGO SCROLL

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



// Swiper slider de autos 
const swiper = new Swiper('.swiper', {

    

    // Optional parameters
    direction: 'horizontal',
    loop: true,


  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 3,
  
    breakpoints:{
        0:{
            slidesPerView: 1
        },
        520:{
            slidesPerView: 2
        },
        950:{
            slidesPerView: 3
        }
    }


});
  


// Animacion 

new TypeIt("#element", {
  speed: 50,
  startDelay: 100,
  loop:true,
  loopDelay: null
})
  .type("Speedealers", { delay: 1000 })
  .pause(5000)

  .delete("Speedealers", {delay: 1000})
  .pause(3000)
  .type("En este lugar encontras lo mejor!!!",{delay: 1000})

  .go();
