// const http = require("http");
// const url = require('url')
// const {parse} = require('querystring')

// GET запрос

// http
//   .createServer((req, res) => {
//       if(req.method === 'GET'){ // GET запрос
//           console.log("server work");
//           console.log(req.method) // Get
//           let urlRequest = url.parse(req.url, true)
//           // console.log(urlRequest)
//           console.log(urlRequest.query.id)
//           console.log(urlRequest.query.key)
//           if(urlRequest.query.id % 2 === 0){
//               res.end("work");
//               return
//           }
//           res.end("hello")
//       } else {
//           console.log(req.method) //POST REQUEST
//           let body = ''
//           req.on('data', chunk=> {
//               body += chunk.toString()
//           })
//           req.on('end', () => {
//               console.log(body)
//               let params = parse(body)
//               console.log(params)
//               res.end('ok')
//           })
//       }
//   })
//   .listen(3000);
