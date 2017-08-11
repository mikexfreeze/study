var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
        restrict: 'ACEM',
        template: '<div>Hi everyone!</div>',
        replace: true
    }
});