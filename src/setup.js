import { doc } from './services/app.js'
import http from './services/http.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import mobileMenu from './services/renderer/mobileMenu.js'

http.get('/src/config.json').then(res => {
    const { title, version } = res
    doc.title = `${title} - v${version}`
})

doc.getElementById('cabecalho').innerHTML = Header
doc.getElementById('rodape').innerHTML = Footer

doc.getElementById('btn-menu').onclick = () => mobileMenu(doc)