import './src/modules/efeitosMaterializeCSS.js';
import { frontData } from './src/database/frontEndList.js';
import { backData } from './src/database/bacEndList.js';
import { appsData } from './src/database/appsList.js';
import { func } from './src/functions.js';

const fun = func();
setElements([...backData,...frontData]);

document.getElementById('front').onclick = e => setElements(frontData);
document.getElementById('back').onclick = e => setElements(backData);
document.getElementById('apps').onclick = e => setElements(appsData);
document.getElementById('all').onclick = e => setElements([...frontData,...backData,...appsData]);

function setElements(elements){
    let habilidades = fun.prepareClone(document.querySelector('#habilidades .habilidades'));
    elements.map(db => {
        let body = habilidades.elementClone.querySelector('.col').cloneNode(true);
        body.querySelector('img').src = db.img;
        body.querySelector('span').innerText = db.text;
        habilidades.element.appendChild(body);
    });
}