import { onReady } from '../../sevices/app.js'
import http from '../../sevices/http.js'

onReady(async doc => {
    http.get('../../src/database/projects.json', (req, res) => {
        const { data } = res.json
        data.map(unityData => {
            doc.getElementById('main').innerHTML += templateMounted(unityData)
        })
        imageEventClick(doc)
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

const imageEventClick = (doc) => {
    const [...cards] = doc.querySelectorAll('.card')
    for (const card of cards) {
        setClickImage(doc, card)
    }
}

const setClickImage = (doc, card) => {
    const image = card.querySelector('img')
    image.onclick = () => {
        const ovrlayImage = doc.createElement('div')
        ovrlayImage.setAttribute('class', 'ovrlayImage')

        const clear = doc.createElement('span')
        clear.innerText = 'clear'
        clear.setAttribute('class', 'imgHide material-icons')

        const img = new Image()
        img.src = image.src
        img.setAttribute('class', 'imgShow')

        doc.body.appendChild(ovrlayImage)
        doc.body.appendChild(clear)
        doc.body.appendChild(img)

        ovrlayImage.onclick = remove
        clear.onclick = remove

        function remove() {
            ovrlayImage.remove()
            clear.remove()
            img.remove()
        }

    }
}