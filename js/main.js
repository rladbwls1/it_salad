'use strict'

let swiper = new Swiper('.mySwiper', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

const logo_wrap = document.getElementById('logo_wrap')

const click1 = document.getElementById('click1')
const submenu = document.querySelector('.submenu')

click1.addEventListener('click', () => {
  if (submenu.classList.contains('on1')) {
    submenu.classList.remove('on1')
    logo_wrap.style.height = 400 + 'px'
  } else {
    submenu.classList.add('on1')
    logo_wrap.style.height = 650 + 'px'
  }
})

const click2 = document.getElementById('click2')
const submenu2 = document.getElementById('apper2')
click2.addEventListener('click', () => {
  if (submenu2.classList.contains('on2')) {
    submenu2.classList.remove('on2')
    logo_wrap.style.height = 400 + 'px'
  } else {
    submenu2.classList.add('on2')
    logo_wrap.style.height = 650 + 'px'
  }
})

const click3 = document.getElementById('click3')
const submenu3 = document.getElementById('apper3')
click3.addEventListener('click', () => {
  if (submenu3.classList.contains('on3')) {
    submenu3.classList.remove('on3')
    logo_wrap.style.height = 600 + 'px'
  } else {
    submenu3.classList.add('on3')
    logo_wrap.style.height = 650 + 'px'
  }
})

document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: true,
    disableMutationObserver: true,
    debounceDelay: 1,
    throttleDelay: 1,
    offset: 100,
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
  })
})

let options = {
  animatedClassName: 'aos-animate',
  initClassName: 'aos-init',
  useClassNames: true,
  disableMutationObserver: true,
  disableMutationObserver: true,
  throttleDelay: 2,
  debounceDelay: 2,
}

window.onload = function () {
  Sticker.init('.sticker')
}
