const http=require("http");

const server=http.createServer((req,res)=>{
    res.write("Hello World-after pushed code to github-2");
    res.end();
});

server.listen(3000,()=>{
    console.log("Updated App");
})