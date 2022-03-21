const jsdom = require('jsdom')

const {JSDOM} = jsdom
const {window} = new JSDOM('<!DOCTYPE html><div id="app"></div>', {
    url: 'http://localhost:1234'
})

global.window = window
global.document = window.document
global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
