const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let num = 0;
rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let n=Number(input[0])
    for(let i =1;i<=n;i++){
        console.log('*'.repeat(i));
    }
    // console.log(Number(input[0]));
});
