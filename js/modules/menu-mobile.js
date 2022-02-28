import outsideClick from './outsideClick.js'

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]')
  const menuList = document.querySelector('[data-menu="list"]')
  const eventos = ['click', 'touchstart']

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.add('ativo')
      menuButton.classList.add('ativo')
      outsideClick(menuList, eventos, () => {
        menuButton.classList.remove('ativo')
        menuList.classList.remove('ativo')
      })
    }

    eventos.forEach(userEvent => {
      menuButton.addEventListener(userEvent, openMenu)
    })
  }
}
