$(document).ready(function() {
  
  $('.products').click(function(event) {
    event.preventDefault();
    $('.products').toggleClass('active')
    $('.dropdown-open').slideToggle();
  });

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  $('.top a').click(function(event){
    event.preventDefault();
    $('html,body').animate({
      scrollTop:0 
    }, 800);
  });
});