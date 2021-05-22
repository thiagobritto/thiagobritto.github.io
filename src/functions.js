class Functions {
    prepareClone(element){
        let elementClone = element.cloneNode(true);
        element.innerHTML = '';
        return { element, elementClone };
    }
}

function func(){
    return new Functions();
}

export { func };