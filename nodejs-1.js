const http=require('http');

const server=http.createServer((req,res)=>{
  res.write("ping");
  res.end("pong");
}).listen(8080,()=>{
  console.log("서버 대기중");
});
