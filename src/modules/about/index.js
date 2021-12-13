import { onReady } from '../../sevices/app.js'
import http from '../../sevices/http.js'

onReady(async doc => {
    http.get('../../src/database/about.json', (req, res) => {
        const { aboutText } = res.json
        doc.getElementById('about-text').innerText = aboutText
    })
})