const express = require("express");
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    // res.send("Hello World")

    res.status(200).send({
        message: "Hello From the HobiKod !"
    })

})

app.post("/",(req,res)=>{
    const getName = req.body.name; 
    console.log(getName)
    res.status(200).send({
        message : "Hello " + getName
    })
})

//localhost:3000
const server = app.listen( 3000,()=>{
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});