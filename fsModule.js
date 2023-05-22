const fs = require('fs');

// fs.readFile('file1.txt', 'utf8', (err, data)=>{
//     console.log(err, data);
// })

// const a = fs.readFileSync('file1.txt');
// console.log(a.toString());

// console.log('Finished reading file');

// fs.writeFile('file2.txt', "Thisss is second file", ()=>{
//     console.log("Written to the file");
// })

const b = fs.writeFileSync('file2.txt', "This is file second");
console.log(b);

console.log("Finished writing in the file");