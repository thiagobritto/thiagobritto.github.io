import { onReady } from '../../sevices/app.js'
import http from '../../sevices/http.js'

onReady(async doc => {
    http.get('../../src/database/about.json', (req, res) => {
        const { data } = res.json
        console.log(data);

    })
})