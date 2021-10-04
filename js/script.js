'use strict'

document.addEventListener('DOMContentLoaded', () => {
  handleWordOfToday()
  handleInternalLink()
  handleScrollToTop()
})

function handleWordOfToday() {
  const wordOfToday = document.getElementById('word-of-today')
  const image = document.createElement('img')

  image.src = `img/day/${new Date().getDate()}.jpg`
  image.alt = '今日のコトバ'
  image.width = 443

  wordOfToday.appendChild(image)
}

function handleInternalLink() {
  const menu = document.getElementById('menu')
  const menuItems = menu.querySelectorAll('a')

  menuItems.forEach((item) => {
    const link = item.getAttribute('href')

    if (!link.startsWith('#') || link === '#') {
      return
    }

    const targetId = link.split('#')[1]
    const targetElement = document.getElementById(targetId)

    item.addEventListener('click', (ev) => {
      ev.preventDefault()

      const rectTop = targetElement.getBoundingClientRect().top
      const offsetTop = window.pageYOffset
      const buffer = 0
      const top = rectTop + offsetTop - buffer

      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    })
  })
}

function handleScrollToTop() {
  const pageTopButton = document.getElementById('page-top')

  pageTopButton.addEventListener('click', (ev) => {
    ev.preventDefault()

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  })
}
