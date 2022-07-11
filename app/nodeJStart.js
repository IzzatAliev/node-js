// node app.js 100 5 100
// const a = process.argv // node js core
// console.log(a) //[
// //     'C:\\Program Files\\nodejs\\node.exe',
// //     'C:\\Users\\DOM\\OneDrive\\Рабочий стол\\nodeJs\\app.js',
// //     '100',
// //     '5',
// //     '100'
// //   ]
// console.log(a[0]) //C:\Program Files\nodejs\node.exe
// console.log(a[1]) //C:\Users\DOM\OneDrive\Рабочий стол\nodeJs\app.js
// console.log(a[2]) //100
// console.log(a[3]) //5
// console.log(a[4]) //100

// node app.js 100 5 

// const args = process.argv
// console.log(typeof args[2]) // string
// console.log(typeof args[3]) // string
// console.log(typeof +args[3]) // number

// if(+args[2]>+args[3]){ // for comparing number just add + before argument
// if(args[2]>args[3]){
//     console.log(args[2])
// }else{
//     console.log(args[3])
// }
// result is 5 because 5 symbol > than 1

// const args = process.argv

// const c = (+args[2]>+args[3]) ? args[2] : args[3] 
// console.log(c) // 100

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// // result
// // 0
// // 1
// // 2
// // 3
// // 4
// }

// let result = ''
// for (let i = 0; i < 5; i++) {
//     result += i +' '
// }
// console.log(result) // 0 1 2 3 4

// map in array

// const a = [1,2,3]
// const b = a.map(elem=>elem*3)
// console.log(b) //[ 3, 6, 9 ]

// const user = { id: 1, name: 'kiril'}
// console.log(user) /{ id: 1, name: 'kiril' }


console.log('hello')
console.log('hello')
console.log('hello')
console.log('hello')
console.log('hello')