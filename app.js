let mobileMenu = document.querySelector('.nav-mobile-menu')
let mainMenu = document.querySelector('.navigation')
const navLinks = document.querySelectorAll('.navLink')

const OpenNavBar = () => {
    mobileMenu.classList.toggle('active-menu')
    if (mobileMenu.classList.contains('active-menu')) {
        mainMenu.classList.add('active-menu')
    } else {
        mainMenu.classList.remove('active-menu')
    }
}

mobileMenu.addEventListener('click', OpenNavBar, { passive: true })

const loop = navLinks.forEach((link) => {
    link.addEventListener('click', OpenNavBar, { passive: true })
})
