import './src/modules/efeitosMaterializeCSS.js';
import { frontData, backData, appsData } from './src/database/habilidades/habiledadesData.js';
import { htmlCssData } from './src/database/projetos/htmlCssData.js';
import { javascriptData } from './src/database/projetos/javascrptData.js';
import { phpData } from './src/database/projetos/phpData.js';
import { func } from './src/functions.js';

addEventListener('DOMContentLoaded', () => {

    const habi = func(document.querySelector('#habilidades .habilidades'));
    habi.setHabildades([...backData,...frontData]);
    
    document.getElementById('front').onclick = () => habi.setHabildades(frontData);
    document.getElementById('back').onclick = () => habi.setHabildades(backData);
    document.getElementById('apps').onclick = () => habi.setHabildades(appsData);
    document.getElementById('all').onclick = () => habi.setHabildades([...frontData,...backData,...appsData]);

    const project = func(document.querySelector("#projetos .projetos"));
    project.setProjects(htmlCssData);

    document.getElementById('htmlcss').onclick = () => project.setProjects(htmlCssData);
    document.getElementById('javascript').onclick = () => project.setProjects(javascriptData);
    document.getElementById('php').onclick = () => project.setProjects(phpData);
    
});
