const http = {}

// Propeds private
let request = {}
let response = {}

// Propeds public
http.exDataPublic

// Methods public
http.get = async function(url, requestResponse) {
    response.json = await fetch(url)
        .then(res => res.json())
        .then(json => json);
    requestResponse(request, response)
}

export default http