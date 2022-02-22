import Handlebars from 'handlebars/dist/handlebars';
// import {tmpl}from './blocks/button/button.tmpl'
import { tmpl } from './blocks/error/error.tmpl';

const prop = {
  errorStatus: '404',
  title: 'Не туда попали',
};
document.addEventListener('DOMContentLoaded', () => {
  // const compiled = Handlebars.compile(tmpl)
  //
  // // const html = compiled({text: 'Авторизоваться', type: 'submit', classes: 'button button_blueviolet authorization__button'})
  // const html = compiled({errorStatus: '404', title: 'Не туда попали'});
  //
  // document.getElementById('app').innerHTML = html

  const compiled = Handlebars.compile(tmpl);
  const element = compiled(prop);
  const wrapper = document.createElement('div');
  wrapper.innerHTML = element;
  const node = wrapper.childNodes;

  const root = document.querySelector('#test');
  root.appendChild(node[0]);
});
