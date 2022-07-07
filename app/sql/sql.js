const mysql = require("mysql2");
// const Mysql = require("sync-mysql2");

// configuration

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  database: "node",
  user: "root",
  password: "undi"
});

// sync configuration

// const connection = new Mysql({
//   host: "localhost",
//   port: "3306",
//   database: "node",
//   user: "root",
//   password: "undi",
// });

// connect and query

let query = "select * from user";

connection.connect((err) => {
    if(err){
        throw new Error(err)
    }
    console.log('connected')
})

connection.query(query, (err,data, fields) => {
    if(err){
    throw new Error(err)
    }
    console.log(data)
    // console.log(data[1]['name'])
    // console.log(fields) // all information about query
})

connection.end((err)=>{  // will be closed before getting result
    if(err){
        throw new Error(err)
    }
    console.log('closed')
})

// sync connect and query