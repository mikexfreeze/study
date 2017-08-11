/**
 * Created by Micheal Xiao on 2017/6/26.
 */
function factorial(num) {
    if(num <= 1){
        return 1;
    }else{
        // return num * factorial(num - 1)
        return num * arguments.callee(num - 1)
    }
}

var trueFactorial = factorial;

factorial = function () {
    return 0
}

console.log(trueFactorial(4))
console.log(factorial(4))