export default doc => {
    const overlay = doc.createElement('div')
    overlay.setAttribute('id', 'overlay-menu')

    const nav = doc.querySelector('#cabecalho nav')
    nav.classList.add('show')

    const navParent = nav.parentNode
    navParent.appendChild(overlay)

    overlay.onclick = () => close(nav, overlay)
}

function close(nav, overlay) {
    nav.classList.remove('show')
    overlay.remove()
}