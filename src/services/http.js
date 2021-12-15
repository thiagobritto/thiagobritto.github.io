const http = {}

// Property private
let response = {}
let request = {
    method: 'GET',
    cache: 'default',
    headers: new Headers(),
}

// Property public
http.baseURL = ''

// Methods public
http.get = function(url) {
    return new Promise((resove, reject) => {
        try {
            request.method = 'GET'
            fetch(this.baseURL + url, request)
                .then(res => res.json()).then(resove).catch(reject)
        } catch (error) {
            reject(error)
        }
    })
}

http.post = function(url, body = {}) {
    return new Promise((resove, reject) => {
        try {
            request.method = 'POST'
            bodyRequest(body)
            fetch(this.baseURL + url, request)
                .then(res => res.json()).then(resove).catch(reject)
        } catch (error) {
            reject(error)
        }
    })
}

http.cors = function(cors = 'cors') {
    request.mode = cors
}

http.headers = {
    append(key, value) {
        request.headers.append(key, value)
    },
    get(key) {
        request.headers.get(key)
    }
}

// Method Private
function bodyRequest(body) {
    request.body = JSON.stringify(body)
}

export default http