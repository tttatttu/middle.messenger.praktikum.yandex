

const button = {
  "authorization": {
      "text": "Авторизоваться",
      "className": "button_blueviolet",
      "type": "submit"
  }
};

document.getElementById('button').addEventListener('click', function () {
  const source = document.getElementById('button').innerHTML;
  const Handlebars = require("handlebars");
  const template = Handlebars.compile(source);
  const html = template(button);
  document.getElementById('content').innerHTML = html;
});
