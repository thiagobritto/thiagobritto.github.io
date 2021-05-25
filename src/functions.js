class Functions {

    constructor(element){
        this.element = element;
        this.elementClone = this.element.cloneNode(true);
        this.elementChild = this.elementClone.children[0];
        this.element.innerHTML = '';
    }

    setHabildades(listData){
        this.element.innerHTML = '';
        listData.map( db => {
            let body = this.elementChild.cloneNode(true);
            body.querySelector('img').src = db.img;
            body.querySelector('span').innerHTML = db.text;
            this.element.appendChild(body);
        });
    }

    setProjects(listData){
        this.element.innerHTML = '';
        listData.map( db => {
            let body = this.elementChild.cloneNode(true);
            body.querySelector('span').innerHTML = db.title;
            body.querySelector('img').src = db.img;
            body.querySelector('p').innerHTML = db.article;
            body.querySelector('a').href = db.linck;
            this.element.appendChild(body);
        });
    }

}

function func(element){
    return new Functions(element);
}

export { func };