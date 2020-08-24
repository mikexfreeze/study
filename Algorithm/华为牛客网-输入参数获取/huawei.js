// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
while(line=readline()){
  var lines = line.split(" ");
  var a = parseInt(lines[0]);
  var b = parseInt(lines[1]);
  print(a+b);
}

// 本题为考试多行输入输出规范示例，无需提交，不计分。
var n = parseInt(readline());
var ans = 0;
for(var i = 0;i < n; i++){
    lines = readline().split(" ")
    for(var j = 0;j < lines.length; j++){
        ans += parseInt(lines[j]);
    }
}
print(ans);


var n = parseInt(readline());
for(var i = 0;i < n; i++){
    lines = readline().split(" ")
    console.log('line', i)
    for(var j = 0;j < lines.length; j++){
      console.log('number',lines[j]);
    }
}
print(11)

var readline=require('readline');
var r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var data=[];
r1.on('line',function(line){
    line=line.trim();
    data.push(line);
    arr1 = data[0].split(' ');
    console.log(arr1[0])
})

let str = readline();
let arr = str.split(' ');
let a = arr[0], b = arr[1]

var n = parseInt(readline());
var nums = readline().split(" ");
var k = parseInt(readline());

var len = parseInt(readline());
var n = parseInt(readline());
var arrArr = []
for(var i = 0;i < n; i++){
  lines = readline().split(" ")
  arrArr.push(lines)
}

var arrNM = readline().split(" ");
var n = parseInt(arrNM[0])
var m = parseInt(arrNM[1])
var grid = []
for(var i = 0;i < m; i++){
  lines = readline().split(" ")
  grid.push(lines)
}