import { doc, alertMessage } from '../../services/app.js'
import chat from '../../services/chat.js'

const form = doc.querySelector('#contact form')

form.onsubmit = event => {
    event.preventDefault()
    const { nameContact, emailContact, msgContact } = event.target
    const clean = cleanForm(event.target)
    try {
        chat.send({
            name: nameContact.value,
            email: emailContact.value,
            text: msgContact.value
        }).then(res => {
            alertMessage({
                title: 'Sucesso!',
                message: res
            }, clean)
        }).catch(err => {
            alertMessage({
                title: 'Aviso!',
                message: err
            }, clean)
        })
    } catch (err) {
        alertMessage({
            title: 'Warning!',
            message: err
        }, clean)
    }
}

function cleanForm(form) {
    const { nameContact, emailContact, msgContact } = form
    return function() {
        nameContact.value = ''
        emailContact.value = ''
        msgContact.value = ''
    }
}