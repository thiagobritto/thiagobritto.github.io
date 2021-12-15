import modal from "./renderer/modal.js";

export const doc = window.document

export const tick = () => new Date().getTime()

export const wait = (step) => {
    const time = tick();
    while (tick() - time < (step * 1000));
}

export const alertMessage = (data, callback) => {

    modal(doc, data, (action) => {
        if (action) return callback()
    })

}