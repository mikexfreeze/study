/**
 * Created by Micheal Xiao on 2017/3/7.
 */

/* jshint globalstrict: true */
/* global Scope: false */

'use strict';
describe("Scope", function() {
    var Scope = require('../../src/scope.js');

    it("can be constructed and used as an object", function() {
        var scope = new Scope();
        scope.aProperty = 1;
        expect(scope.aProperty).toBe(1);
    });

    describe("digest", function () {
        var scope;
        beforeEach(function () {
            scope = new Scope();
        });
        // it("calls the listener function of a watch on first $digest", function () {
        //     var watchFn = function () {
        //         return 'wat';
        //     };
        //     var listenerFn = jasmine.createSpy();
        //     scope.$watch(watchFn, listenerFn);
        //     scope.$digest();
        //     expect(listenerFn).toHaveBeenCalled();
        // });
        //
        // it("calls the watch function with the scope as the argument",function(){
        //     var watchFn = jasmine.createSpy();
        //     var listenerFn = function(){};
        //     scope.$watch(watchFn,listenerFn);
        //
        //     scope.$digest();
        //
        //     expect(watchFn).toHaveBeenCalledWith(scope);
        // });
        //
        // it("calls the listener function when the watched value changes", function () {
        //     scope.someValue = 'a';
        //     scope.counter = 0;
        //     scope.$watch(
        //         function (scope) {
        //             return scope.someValue;
        //         }, function (newValue, oldValue, scope) {
        //             scope.counter++;
        //         }
        //     );
        //     expect(scope.counter).toBe(0);
        //     scope.$digest();
        //     expect(scope.counter).toBe(1);
        //     scope.$digest();
        //     expect(scope.counter).toBe(1);
        //     scope.someValue = 'b';
        //     expect(scope.counter).toBe(1);
        //     scope.$digest();
        //     expect(scope.counter).toBe(2);
        // });

        // it("calls listener when watch value is first undefined", function () {
        //     scope.counter = 0;
        //     scope.$watch(
        //         function (scope) {
        //             return scope.someValue;
        //         }, function (newValue, oldValue, scope) {
        //             scope.counter++;
        //         }
        //     );
        //     scope.$digest();
        //     expect(scope.counter).toBe(1);
        // });
        //
        // it("may have watchers that omit the listener function", function () {
        //     var watchFn = jasmine.createSpy().and.returnValue('something');
        //     scope.$watch(watchFn);
        //     scope.$digest();
        //     expect(watchFn).toHaveBeenCalled();
        // });

        it("triggers chained watchers in the same digest", function () {
            scope.name = 'Jane';
            scope.$watch(
                function (scope) {
                    return scope.nameUpper;
                }, function (newValue, oldValue, scope) {
                    if (newValue) {
                        scope.initial = newValue.substring(0, 1) + '.';
                    }
                }
            );
            scope.$watch(
                function (scope) {
                    return scope.name;
                }, function (newValue, oldValue, scope) {
                    if (newValue) {
                        scope.nameUpper = newValue.toUpperCase();
                    }
                }
            );
            scope.$digest();
            expect(scope.initial).toBe('J.');
            scope.name = 'Bob';
            // scope.$digest();
            // expect(scope.initial).toBe('B.');
        });


    });



});