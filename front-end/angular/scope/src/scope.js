/**
 * Created by Micheal Xiao on 2017/3/7.
 */
/* jshint globalstrict: true */
'use strict';
function Scope() {
    this.$$watchers = [];
}

function initWatchVal(){}

Scope.prototype.$watch = function(watchFn, listenerFn) {
    var watcher = {
        watchFn: watchFn,
        listenerFn: listenerFn || function () {},
        last:initWatchVal
    };
    this.$$watchers.unshift(watcher);
};

Scope.prototype.$digest = function () {
    var dirty;
    do {
        dirty = this.$$digestOnce();
    } while (dirty);
};

Scope.prototype.$$digestOnce = function(){
    var length = this.$$watchers.length;
    var watcher, newValue, oldValue, dirty;
    while(length--){
        watcher = this.$$watchers[length];
        newValue = watcher.watchFn(this);
        oldValue= watcher.last;
        if(newValue !== oldValue){
            watcher.last == newValue;
            watcher.listenerFn(newValue, oldValue, this);
            dirty = true;
        }
    }
    return dirty;
};


module.exports = Scope;