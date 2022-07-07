const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const {
  ObjectCsvStringifier,
} = require("csv-writer/src/lib/csv-stringifiers/object");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

// read file

// way 1 async
// fs.readFile("app/files/t1.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// console.log("I'm first because fs is async")

// way 2 sync

// const text = fs.readFileSync("app/files/t1.txt", "utf-8")
// console.log(text)
// console.log('I`m second because fs is sync')

// read dir

// way 1 async

// fs.readdir("app/files", (err, data) => {
//   if (err) {
//     console.log(err.message);
//     return
//   }
// console.log(data)
// data.forEach(file=> {
// console.log(file)
// console.log(file + ' ' + path.extname(file)) // .txt
// console.log(fs.statSync('app/files/'+file)) // all info about file
// console.log(fs.statSync('app/files/'+file).size) // number of symbols in file
// console.log(file + '\t\t' + path.extname(file) + '\t\t' + fs.statSync('app/files/'+file).size + 'B')// file format size
// })
// })

// way 1 write async

// fs.writeFile('app/files/t3.txt', 'Hello to all \nfrom writeFile', (err)=> {
//     if(err){
//         console.log(err.message)
//         return
//     }
// })

// write json file

// const info = {
//     id:1,
//     name:'kiril',
//     age:19,
//     dateOfBirth: Date()
// }

// fs.writeFile('app/files/tx3.json', JSON.stringify(info), (err) => {
//     if(err){
//         console.log(err.message)
//         return
//     }
// })

// way 1 read json file

// fs.readFile('app/files/tx3.json', (err, data)=>{
//     if(err){
//         console.log(err.message)
//         return
//     }
//     console.log(JSON.parse(data))
// })

// way 2 read json file

// const info = require('./files/tx3.json')
// console.log(info)

// read csv file

// const results = []

// fs.createReadStream('app/files/tt.csv')
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     console.log(results);})

// write csv file

// const csvWriter = createCsvWriter({
//   path: "app/files/ttw.csv",
//   header: [
//     { id: "id", title: "ID" },
//     { id: "name", title: "NAME" },
//     { id: "age", title: "AGE" },
//     { id: "salary", title: "SALARY" },
//   ],
// });

// const user = [
//   { id: 1, name: "Izzat", age: 19, salary: 40000 },
//   { id: 2, name: "Kiril", age: 16, salary: 40500 },
//   { id: 3, name: "Oleg", age: 18, salary: 30000 },
//   { id: 4, name: "Ilya", age: 20, salary: 40400 },
// ];

// csvWriter
//   .writeRecords(user)
//   .then(() => console.log("... DONE"))
//   .catch((err) => console.error(err));


console.log('hello people')
