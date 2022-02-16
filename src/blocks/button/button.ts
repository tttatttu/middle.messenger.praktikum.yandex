

var data = {
  'cond1'  : true,
  'cond2'  : false,
};

document.getElementById('button').addEventListener('click', function () {
  var source = document.getElementById('button-template').innerHTML;
  var html = Handlebars.compile(source);
  // var html = template(data);
  document.getElementById('content').innerHTML = html;
});
