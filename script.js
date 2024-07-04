const close = document.querySelector('#close')
const open = document.querySelector('#open')
const nav = document.querySelector('nav')
const cerrarNav = document.querySelector('ul')

function copiarUrl(){
    let url = document.querySelector('#url')
    let copy = document.querySelector('#copy')

    navigator.clipboard.writeText(url.textContent)
}

open.addEventListener('click', () => {
    nav.classList.add('visible')
})

close.addEventListener('click', () => {
    nav.classList.remove('visible')
})

cerrarNav.addEventListener('click', () => {
    nav.classList.remove('visible')
})

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});