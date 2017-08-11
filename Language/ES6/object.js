/**
 * Created by Micheal Xiao on 2017/7/7.
 */
var name = "Mike"
// console.log({name} = {})

var foo = ({name} = {}) => {
    console.log(name)
    console.log("1")
}
foo(name)

// var sum = (num1, num2) => {
//     console.log(num1)
//     return num1 + num2;
// }
// console.log(sum(1,2))