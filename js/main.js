define(function(require,module,exports){
    "use strict";
    var a = require('./a');
    var $ = require('jquery');
    console.log($);
    $(document).click(function(){
        alert('1');
    });
    console.log(2322);
    console.log(a);
});