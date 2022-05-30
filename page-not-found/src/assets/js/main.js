/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggleMenu = document.getElementById('nav-toggle-menu')
const navMenuClose = document.getElementById('nav-menu-close')

/*========= OPEN MENU =========*/
if (navToggleMenu) {
  navToggleMenu.addEventListener('click', openMenu)
}

function openMenu() {
  navMenu.classList.add('show-menu')
}

/*========= CLOSE MENU =========*/
if (navMenuClose) {
  navMenuClose.addEventListener('click', closeMenu)
}

function closeMenu() {
  navMenu.classList.remove('show-menu')
}

/*=============== REMOVE MENU MOBILE ===============*/
const navMenuLinks = document.querySelectorAll('.nav__menu__link')

navMenuLinks.forEach(itemMenuLink =>
  itemMenuLink.addEventListener('click', menuLinkAction)
)

function menuLinkAction() {
  closeMenu()
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const scrollReveal = ScrollReveal({
  distance: '90px',
  duration: 3000
})

scrollReveal.reveal('.home__data', { origin: 'top', delay: 400 })
scrollReveal.reveal('.home__img', { origin: 'bottom', delay: 600 })
scrollReveal.reveal('.home__footer', { origin: 'bottom', delay: 800 })
