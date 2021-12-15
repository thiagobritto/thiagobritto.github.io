import { doc } from '../../sevices/app.js'
import http from '../../sevices/http.js'
import Card from '../../components/Card.js'
import imageShow from '../../sevices/renderer/imageShow.js'

http.get('/src/database/projects.json').then(res => {
    const { data } = res
    data.forEach(unityData => {
        doc.getElementById('main').innerHTML += Card(unityData)
    })
    setImageShow(doc.getElementById('main'))
})

function setImageShow(divMain) {
    const imgs = [...divMain.querySelectorAll('img')]
    imgs.forEach(img => {
        img.onclick = () => imageShow(doc, img)
    })
}