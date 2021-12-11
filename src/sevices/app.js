export function onReady(on) {
    window.addEventListener('DOMContentLoaded', event => on(event.target, event))
}