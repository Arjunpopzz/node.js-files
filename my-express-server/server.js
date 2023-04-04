const express =  require("express");
const app = express();
app.get("/",function(req,res){
  res.send("<h2> hi bro<h2>");
});

app.get("/contact",function(req,res){
  res.send("contact me @::@arjun_karekar");
});

app.get("/about",function(req,res){
  res.send("<h1>Iam Arjun karekar<br>Iam a programmer<h1>");
});

app.get("/mail",function(req,res){
  res.send("arjinkarekar1002@gmail.com");
});

app.listen(3000,function(){
   console.log("server has started on the port 3000");
});
