import { onReady, validateEmail } from '../../sevices/app.js'
import http from '../../sevices/http.js'

//window.hasOwnProperty('localStorage')
//https://api.telegram.org/bot5007815071:AAGIxjW_cvrPQ6X68WM9RFf5xNILt6f2TfE/sendMessage

const data = 1639515842685

onReady(doc => {

    const form = doc.querySelector('#contact form')
    form.onsubmit = event => messageVerify(event, form)

})

async function messageVerify(event, form) {
    event.preventDefault()
    const name = form.nameContact.value
    const email = form.emailContact.value
    const msg = form.msgContact.value

    if (!validateEmail(email) || email.split('@')[0].length < 3 || characterVerify(email))
        return alert('E-mail mau formatado!')

    const { msgToken, chatId } = await http.get('/src/config.json')

    sendMessage({ msgToken, chatId, name, email, msg })
}

function sendMessage(send) {
    if (!window.hasOwnProperty('localStorage'))
        return alert('Seu navegador nâo suporta essa funcionalidade!')

    if (new Date().getTime() - window.localStorage.getItem('tb_contact_site') < (1000 * 60 * 60))
        return alert('O E-mail já foi enviado! por favor aguarde o contato!')

    http.post(`https://api.telegram.org/${send.msgToken}/sendMessage`, {
        "chat_id": send.chatId,
        "text": `Nome: ${send.name}\r\nEmail: ${send.email}\r\nMensagem: ${send.msg}`
    }).then(res => {
        window.localStorage.setItem('tb_contact_site', new Date().getTime())

        if (res.ok) {
            return alert('Mensagem enviada com sucesso!')
        } else {
            return alert('Ecomtramos uma falha na api, por favor contate-nos em: thiagobritto.developer@gmail.com')
        }
    })
}

function characterVerify(email) {
    let condChar = false
    for (let i = 0; i < email.length; i++) {
        if (
            email[i] == '!' ||
            email[i] == '#' ||
            email[i] == '*' ||
            email[i] == ',' ||
            email[i] == '\'' ||
            email[i] == '\"' ||
            email[i] == '\`'
        ) condChar = true
    }
    return condChar
}




/*
    http.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 0,
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
*/