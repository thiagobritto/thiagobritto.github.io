export default data => (`
    <div class="item" onclick="window.open('${data.link}')">
        <div class="imagem">
            <img src="${data.imgSrc}" alt="">
        </div>
        <div class="descricao">
            <h2>${data.title}</h2>
            <p>${data.label}</p>
            <div class="h3">stacks</div>
            <div class="stacks">
                ${stacks(data.stacks)}
            </div>
        </div>
    </div>
`)

function stacks(stack){
    return stack.map( element => `
        <img width="32" src="assets/icons/svg/${element}.svg" alt="${element}" title="${element}">
    `).join('');
}