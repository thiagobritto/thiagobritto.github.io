export default data => (`
    <div class="card">
        <div>
            <img src="${data.imgSrc}" alt="${data.title}">
            <div class="label">
                <h3> ${data.title} </h3>
                <p> ${data.label} </p>
            </div>
            <a href="${data.link}" class="btn-light btn-on" target="_blank">view</a>
        </div>
    </div>
`)