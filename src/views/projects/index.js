import { onReady } from '../../sevices/app.js'
import http from '../../sevices/http.js'

onReady(async doc => {
    http.get('../../src/database/projects.json', (req, res) => {
        const { data } = res.json
        data.map(unityData => {
            doc.getElementById('main').innerHTML += templateMounted(unityData)
        })
    })
})

const templateMounted = (data) => (`
    <div class="card">
        <div>
            <img src="${data.imgSrc}" alt="${data.title}">
            <div class="label">
                <h3> ${data.title} </h3>
                <p> ${data.label} </p>
            </div>
            <a href="${data.link}" class="btn" target="_blank">view</a>
        </div>
    </div>
`)