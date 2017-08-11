import _ from 'lodash';
import '../css/main.scss';
// import '../css/test.css';
// import moment from 'moment';
// var moment = require('moment');
// console.log(moment().format());
import ts from '../test/test';

ts();
function determineDate() {
    import('moment')
        .then(moment => moment().format('LLLL'))
        .then(str => console.log(str))
        .catch(err => console.log('Failed to load moment', err));

}

determineDate();

console.log("1");

function component() {
    var element = document.createElement('div');

    /* 需要引入 lodash，下一行才能正常工作 */
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');


    return element;
}

document.body.appendChild(component());