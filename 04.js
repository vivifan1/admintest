var http=require("http")
var fs=require("fs")
http.createServer(function(req,res){
    if(req.url=="/a"){
        fs.readFile("./static/a.html",function(err,data){
            res.end(data.toString())
        })
    }else if(req.url=="/b"){
        fs.readFile("./static/b.html",function(err,data){
            res.end(data.toString())
        })
    }else if(req.url=="/1.css"){
            fs.readFile("./1.css",function(err,data){
                res.end(data.toString())
            })
        }else if(req.url=="/tese-1.png"){
            fs.readFile("./tese-1.png",function(err,data){
                res.end(data)
            })
    }else{
        res.end("404")
    }
}).listen(3000,function(){
    console.log("服务器已挂起")
})