export default (doc, img) => {
    const overlay = doc.createElement('div')
    overlay.setAttribute('class', 'overlay-full')

    doc.body.appendChild(overlay)

    const btn = doc.createElement('span')
    btn.setAttribute('class', 'btn-image-close material-icons')
    btn.innerText = 'clear'

    doc.body.appendChild(btn)

    const image = new Image()
    image.setAttribute('class', 'image-full')
    image.src = img.src

    doc.body.appendChild(image)

    const panelImageShow = [
        overlay, btn, image
    ]

    overlay.onclick = () => clean(panelImageShow)
    btn.onclick = () => clean(panelImageShow)

}

function clean(elements) {
    elements.forEach(element => {
        element.remove()
    });
}