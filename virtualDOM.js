const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const { window } = new JSDOM('<!DOCTYPE html><div id="app"></div>', {
  url: 'http://localhost:1234',
});

const { element } = new JSDOM(element).window.document;

global.window = window;
global.document = window.document;
global.element = element;
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
