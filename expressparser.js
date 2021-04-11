var express=require('express')
var bodyParser = require('body-parser')
var app=express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/',(req,res)=>{
    var getname=req.body.name
    var getid=req.body.roll
    res.send(getname+ getid)
})
app.listen(3000,()=>{
    console.log("working condition at http://localhost:3000/")

}
)