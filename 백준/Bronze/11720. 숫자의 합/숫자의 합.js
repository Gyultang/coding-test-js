let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCaseNum = +input[0]; //숫자로바꿔주기
let numbers = [];
for (let i = 1; i < input.length; i++) {
    if (input[i] !== '') {
      numbers.push(input[i].split(' ')); // [ [ '54321' ] ]
    }
    // console.log("numbers:",numbers)
  }


for (let i = 0; i < numbers.length; i++){
  let arr = numbers[i].map(e=>e.split(''));
  let sumArr=arr[0].map(e=>Number(e)) // [ 5, 4, 3, 2, 1 ]
  const res=sumArr.reduce((p,c)=>{return p+c;})
 
  console.log(res)
}