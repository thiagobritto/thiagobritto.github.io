import card from './cardComponent.js'

const geleria = document.getElementById('galeria')

fetch('./portfolio.json').then(res => res.json()).then(res => {
  res.data.forEach(item => {
    geleria.innerHTML += card(item)
  });
})