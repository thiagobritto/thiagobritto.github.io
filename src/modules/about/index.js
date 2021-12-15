import { doc } from '../../services/app.js'
import http from '../../services/http.js'

http.get('/src/database/about.json').then(res => {
    const { aboutText } = res
    doc.getElementById('about-text').innerText = aboutText
})