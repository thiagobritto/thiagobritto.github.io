const http = {}

// Propeds private
let request = {}
let response = {}

// Propeds public
http.baseURL = ''

// Methods public
http.get = function(url, body = {}) {
    return new Promise((resove, reject) => {
        try {
            fetch(this.baseURL + url)
                .then(res => res.json()).then(resove).catch(reject)
        } catch (error) {
            reject(error)
        }
    })
}

http.post = function(url, body = {}) {
    let init = {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }

    return new Promise((resove, reject) => {
        try {
            fetch(this.baseURL + url, init)
                .then(res => res.json()).then(resove).catch(reject)
        } catch (error) {
            reject(error)
        }
    })


}

/*
var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

fetch('flowers.jpg',myInit)
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});
*/

export default http