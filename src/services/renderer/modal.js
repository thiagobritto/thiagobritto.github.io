export default (doc, data, responseCallback) => {

    const overlay = doc.createElement('div')
    overlay.setAttribute('class', 'overlay-full')

    doc.body.appendChild(overlay)

    const modal = doc.createElement('div')
    modal.setAttribute('class', 'modal')

    const title = doc.createElement('h3')
    title.setAttribute('class', 'title')
    title.innerHTML = data.title

    modal.appendChild(title)

    const message = doc.createElement('p')
    message.setAttribute('class', 'message')
    message.innerHTML = data.message

    modal.appendChild(message)

    const modalBtn = doc.createElement('div')
    modalBtn.setAttribute('class', 'modal-btn')

    const closed = doc.createElement('a')
    closed.setAttribute('class', 'btn btn-on')
    closed.innerHTML = 'close'

    modalBtn.appendChild(closed)

    const ok = doc.createElement('a')
    ok.setAttribute('class', 'btn-dark btn-on')
    ok.innerHTML = 'ok'

    modalBtn.appendChild(ok)

    modal.appendChild(modalBtn)

    doc.body.appendChild(modal)

    const modalPanel = [
        overlay, modal
    ]

    overlay.onclick = () => close(modalPanel)
    closed.onclick = () => close(modalPanel)
    ok.onclick = () => {
        close(modalPanel)
        responseCallback(true)
    }

}

function close(elemants) {
    elemants.forEach(element => {
        element.remove()
    });
}