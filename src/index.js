import Handlebars from 'handlebars/dist/handlebars';
import template from './index.tmpl'
import {tmpl}from './blocks/button/button.tmpl'

document.addEventListener('DOMContentLoaded', () => {
  const compiled = Handlebars.compile(tmpl)

  const html = compiled({text: 'Нет аккаунта?', type: 'submit', classes: ['button', 'button_blueviolet', 'authorization__button']})

   document.body.innerHTML = html

})

