import Handlebars from 'handlebars/dist/handlebars';
import template from './index.tmpl'

document.addEventListener('DOMContentLoaded', () => {
  const compiled = Handlebars.compile(template)

  const html = compiled({name: "tanya"})

   document.body.innerHTML = html

})
