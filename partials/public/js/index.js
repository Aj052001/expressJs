let searchForm = document.querySelector('.search-form');
document.querySelector('#icon-search').onclick= ()=>
{
    searchForm.classList.toggle('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#icon-cart').onclick =()=>{
    shoppingCart.classList.toggle('active');
}
let loginPage = document.querySelector('.login-page');

document.querySelector('#icon-user').onclick =()=>{
    loginPage.classList.toggle('active');
}
let menuBar = document.querySelector('.menu-bar');

document.querySelector('#icon-bars').onclick =()=>{
    menuBar.classList.toggle('active');
}

var swiper = new Swiper(".product-slider", {
  loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
       
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });