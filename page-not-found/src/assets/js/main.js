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
