import Handlebars from 'handlebars/dist/handlebars';
import {tmpl}from './blocks/button/button.tmpl'

document.addEventListener('DOMContentLoaded', () => {
  const compiled = Handlebars.compile(tmpl)

  // const html = compiled({text: 'Авторизоваться', type: 'submit', classes: ['button', 'button_blueviolet', 'authorization__button']})
  const html = compiled({text: 'Авторизоваться', type: 'submit', classes: 'button button_blueviolet'})

   // document.body.innerHTML = html
  document.getElementById('app').innerHTML = html

})
