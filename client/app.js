var oExpress = require('express');
var oApp = oExpress();

oApp.use(oExpress.static(__dirname + '/public'));

oApp.listen(3000,function(){
    console.log('Puerto: 3000');
});