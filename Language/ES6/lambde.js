/**
 * Created by Micheal Xiao on 2017/7/7.
 */
// fix = λf.(λx.f(λv.x(x)(v)))(λx.f(λv.x(x)(v)))
var x = function () {
    
}
var fix = f => (x => f(v => x(x)(v)))
                (x => f(v => x(x)(v)));

fix(2)