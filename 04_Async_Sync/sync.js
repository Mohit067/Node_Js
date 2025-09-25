// this will teach you that node.js is synchronous language

console.log("start ...");

let count = 0;
for(let i=0; i<10000000000; i++){
    count += 1;
}
console.log(count);
console.log("end ...");