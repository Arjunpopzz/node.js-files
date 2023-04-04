const express = require('express')
const bodyparser =require("body-parser")
const app = express()
const port = 3000
app.use(bodyparser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", (req,res) => {
  var num1 = Number(req.body.n1)
  var num2 = Number(req.body.n2)

  var result = num1+num2;
  res.send("The result of calculation is "+ result);

});
app.get("/bmicalculator",(req,res) => {
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator",(req,res)=>{
  var weight = parseFloat(req.body.weight)
  var height = parseFloat(req.body.height)

  var result = weight/(height * height) *10000;
  res.send("The result is "+result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
