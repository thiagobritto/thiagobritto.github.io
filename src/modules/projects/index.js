import { onReady } from '../../sevices/app.js'
import http from '../../sevices/http.js'

onReady(async doc => {
    http.get('../../src/database/projects.json', (req, res) => {
        const { data } = res.json
        data.forEach(unityData => {
            doc.getElementById('main').innerHTML += templateMounted(unityData)
        })
        iterateCollectionCard(doc)
    })
})

function templateMounted(data) {
    return (`
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
}

function iterateCollectionCard(doc) {
    const [...cards] = doc.querySelectorAll('.card')
    for (const card of cards) {
        setEventClickImage(doc, card.querySelector('img'))
    }
}

function setEventClickImage(doc, image) {
    image.onclick = () => {
        const ovrlayImage = doc.createElement('div')
        const clear = doc.createElement('span')
        const img = new Image()
        const collectionElementsOfImageFullScreen = [
            ovrlayImage, clear, img
        ]

        ovrlayImage.setAttribute('class', 'ovrlayImage')

        clear.setAttribute('class', 'imgHide material-icons')
        clear.innerText = 'clear'

        img.setAttribute('class', 'imgShow')
        img.src = image.src

        showImageFullScreen(doc, collectionElementsOfImageFullScreen)

        ovrlayImage.onclick = () =>
            hideImageFullScreen(collectionElementsOfImageFullScreen)

        clear.onclick = () =>
            hideImageFullScreen(collectionElementsOfImageFullScreen)

    }
}

function showImageFullScreen(doc, elements) {
    elements.forEach(element => {
        doc.body.appendChild(element)
    });
}

function hideImageFullScreen(elements) {
    elements.forEach(element => {
        element.remove()
    });
}