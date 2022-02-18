import Handlebars from 'handlebars/dist/handlebars';
import { tmpl } from '../../blocks/error/error.tmpl';

const data = {
  '404': {
    errorStatus: '404',
    title: 'Не туда попали',
  },
  '500': {
    errorStatus: '500',
    title: 'Мы уже фиксим',
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const compiled = Handlebars.compile(tmpl);

  const html = compiled({ errorStatus: 404, title: 'Не туда попали' });

  document.getElementById('app').innerHTML = html;
});
