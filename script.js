






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
  

