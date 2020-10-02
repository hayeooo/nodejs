var http=require('http');

var option={
  host:'localhost',
  method:'GET',
  path:'/',
  port:'8080'
}

var request=http.request(options,(response)=>{

});

request.end();
