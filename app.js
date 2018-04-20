var oExpress = require('express');
var oApp = oExpress();

//especificamos el subdirectorio donde se encuentran las páginas estáticas
oApp.use(oExpress.static(__dirname + '/public'));

oApp.listen(3000, function(){
    console.log('Puerto: 3000');
});