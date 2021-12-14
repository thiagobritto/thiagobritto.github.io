import { onReady } from './sevices/app.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import http from './sevices/http.js'

onReady(async doc => {
    http.get('../src/config.json', (req, res) => {
        const { title, version } = res.json
        doc.title = `${title} - v${version}`
    })

    doc.getElementById('cabecalho').innerHTML = Header
    doc.getElementById('rodape').innerHTML = Footer

    doc.getElementById('btn-menu').onclick = () => menuShow(doc)

})

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