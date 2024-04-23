const http = require('http')

const server= http.createServer((req,res)=>{
res.setHeader("Content-type","application/json")
if(req.url==='/apiv1'){
    res.statusCode=200
    res.end(JSON.stringify({
        id:1,
        name:"Laxman",
        age:undefined,
        profession:'Tech'
    }))
}
else{
    res.end(JSON.stringify({
        statusCode:404,
        message:"Page Not Found"
    }))
}
 
})


server.listen(3000,()=>{
    console.log("Server is running on Port 3000");
})