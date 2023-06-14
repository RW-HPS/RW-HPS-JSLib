var lib = (function (exports) {
    'use strict';

    function hello(a) {
        return a + 1;
    }

    Java.type(`${hello(1)}`);

    exports.hello = hello;

    return exports;

})({});
