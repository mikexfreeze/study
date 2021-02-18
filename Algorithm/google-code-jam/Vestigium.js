// https://codingcompetitions.withgoogle.com/codejam/round/000000000019fd27/000000000020993c
"use strict";
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var output = "";

var lineCount = 1;
var caseNumber = 1;
var T = 0;
var N = 0;
var rowCount = 0;
var lines = [];


rl.on('line', function (line) {
  switch (lineCount) {
    case 1:
      T = parseInt(line);
      //console.log("T:"+T)
      lineCount++;
      break;
    case 2:
      lines = []
      N = parseInt(line);
      //console.log("N:"+N)
      lineCount++;
      rowCount = 0;
      break;
    case 3:
      lines[rowCount] = line.split(" ");
      rowCount++;
      //console.log("line:"+line);

      if (rowCount >= N) {
        // console.log("lines finished");
        processMatrix(lines);
        if (caseNumber < T) {
          lineCount = 2;
          caseNumber++;
          break;
        } else {
          lineCount++;
        }
      } else {
        break;
      }
    default:
      //exit program
      outputAndExit(output);
      process.exit();

  }
});

function processMatrix(matrix) {

  var trace = 0;
  var repeatRows = 0;
  var repeatCols = 0;

  for (let k = 0; k < N; k++) {
    trace += parseInt(matrix[k][k]);
  }

  for (let i = 0; i < matrix.length; i++) {
    if (hasRepeat(matrix[i])) {
      repeatRows++;
    }
  }

  matrix = transpose(matrix);

  for (let i = 0; i < matrix.length; i++) {
    if (hasRepeat(matrix[i])) {
      repeatCols++;
    }
  }

  output += `Case #${caseNumber}: ${trace} ${repeatRows} ${repeatCols}\n`;
}

function outputAndExit(output) {
  process.stdout.write(output);
  process.exit();
}

function hasRepeat(arr) {
  var temp = arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  })
  return arr.length != temp.length;
}

function transpose(mat) {
  for (var i = 0; i < mat.length; i++) {
    for (var j = 0; j < i; j++) {
      const tmp = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = tmp;
    }
  }
  return mat;
}