import { doc } from '../../sevices/app.js'
import http from '../../sevices/http.js'

http.get('/src/database/about.json').then(res => {
    const { aboutText } = res
    doc.getElementById('about-text').innerText = aboutText
})