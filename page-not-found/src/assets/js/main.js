/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggleMenu = document.getElementById('nav-toggle-menu')

/*========= OPEN MENU =========*/
if (navToggleMenu) {
  navToggleMenu.addEventListener('click', openMenu)
}

function openMenu() {
  navMenu.classList.add('show-menu')
}
