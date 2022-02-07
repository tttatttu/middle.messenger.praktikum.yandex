const techs = {
    fileProvider: require('enb/techs/file-provider'),
    bemhtml: require('enb-bemxjst/techs/bemhtml'),
    bemjsonToHtml: require('enb-bemxjst/techs/bemjson-to-html'),
    postcss: require('enb-postcss/techs/enb-postcss') // вот тут
  };

module.exports = function(config) {
  config.nodes('*.bundles/*', function(nodeConfig) {
    nodeConfig.addTechs([
        // и тут
        [techs.postcss, {
          sourceSuffixes: ['css'], // обрабатываем входные CSS файлы
          comments : true,         // добавляем комменты - какой файл подключен
          sourcemap : true,        // строим sourcemap
          plugins : [              // подключаем плагины
            require('postcss-import')(), // вот это обязательно
            require('autoprefixer')()    // а то чисто для примера
          ]
        }]
    ]);
    // добавляем цель сборки для стилей
    nodeConfig.addTarget('?.css');
  });
};
