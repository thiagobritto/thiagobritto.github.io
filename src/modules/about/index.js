import { onReady } from '../../sevices/app.js'
import http from '../../sevices/http.js'

onReady(async doc => {
    http.get('/src/database/about.json').then(res => {
        const { aboutText } = res
        doc.getElementById('about-text').innerText = aboutText
    })
})