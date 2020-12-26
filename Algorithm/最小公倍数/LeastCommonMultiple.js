/**
 * 求两个数的最小公倍数
 */
function getLCM(a,b){
  return a*b/getGCD(a,b);
}

/**
 * 求两个数的最大公约数
 */
function getGCD(a,b){
  
  if(a%b==0){
    console.log('最大公约数:',b)
    return b;
  }
  console.log('a:', a, 'b:', b, 'a%b', a%b)
  return getGCD(b, a%b);
}

var res = getLCM(12, 80)
console.log('最大公倍数', res)
