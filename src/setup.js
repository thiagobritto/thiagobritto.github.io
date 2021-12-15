import { doc } from './services/app.js'
import http from './services/http.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

http.get('/src/config.json').then(res => {
    const { title, version } = res
    doc.title = `${title} - v${version}`
})

doc.getElementById('cabecalho').innerHTML = Header
doc.getElementById('rodape').innerHTML = Footer

doc.getElementById('btn-menu').onclick = () => menuShow(doc)

function menuShow(doc) {
    const nav = doc.querySelector('#cabecalho nav')
    const overlay = doc.createElement('div')
    const navParent = nav.parentNode

    nav.classList.add('show')
    overlay.setAttribute('id', 'overlay')
    navParent.appendChild(overlay)
    overlay.onclick = () => menuHide(nav, overlay)

}

function menuHide(nav, overlay) {
    nav.classList.remove('show')
    overlay.remove()
}