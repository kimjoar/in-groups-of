(function (root, factory) {

    // Export for node, AMD and the browser.
    if (typeof define === 'function' && define.amd) define(factory);
    else if (typeof exports === 'object') module.exports = factory();
    else root.inGroupsOf = factory();

}(this, function () {
    'use strict';

    return function(arr, n){
        var ret = [];
        var group = [];
        var len = arr.length;

        for (var i = 0; i < len; ++i) {
            group.push(arr[i]);
            if ((i + 1) % n == 0) {
                ret.push(group);
                group = [];
            }
        }

        if (group.length) ret.push(group);

        return ret;
    };
}));
