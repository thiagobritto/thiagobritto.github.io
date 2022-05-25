import { tick } from './app.js'
import http from './http.js'

http.cors()
http.headers.append('Content-type', 'application/json; charset=UTF-8')

const chat = {}

// Methods public
chat.send = async function(msg) {

    beforeSend(msg)

    const { chatId, chatToken } = await http.get('/src/config.json')

    return new Promise((resove, reject) => {
        http.post(`https://api.telegram.org/${chatToken}/sendMessage`, {
            "chat_id": chatId,
            "text": `Nome: ${msg.name}\r\nEmail: ${msg.email}\r\nMensagem: ${msg.text}`
        }).then(res => {
            if (res.ok) {
                window.localStorage.setItem('tb_contact_site', tick())
                resove('Mensagem enviada com sucesso!')
            } else {
                reject('Algo deu errado, contacte-me através do email thiago britto.developer@gmail.com')
            }
        }).catch(reject)
    })

}

// Methods private
function beforeSend(msg) {
    // check if they are empty
    if (!msg.email || !msg.name || !msg.text)
        throw 'Form malformed!'

    // check if they are valid
    if (!emailValidate(msg.email) || filterChar(msg.email))
        throw 'E-mail malformed!'

    // check the browser
    if (!window.hasOwnProperty('localStorage'))
        throw 'The browser does not support this functionality!'

    const localTime = window.localStorage.getItem('tb_contact_site')

    // check if it has already been sent
    if (localTime && tick() - localTime < (1000 * 60 * 60))
        throw 'We have already received your message, please wait for contact!'
}

function emailValidate(email) {
    return String(email).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function filterChar(email) {
    let isInvalid = false
    for (let i = 0; i < email.length; i++) {
        if (
            email[i] == '!' ||
            email[i] == '#' ||
            email[i] == '*' ||
            email[i] == ' ' ||
            email[i] == ',' ||
            email[i] == '\'' ||
            email[i] == '\"' ||
            email[i] == '\`'
        ) isInvalid = true
    }
    return isInvalid
}

export default chat