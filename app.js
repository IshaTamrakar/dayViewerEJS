const express = require("express");

const app =express();

app.set('view engine' , 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.get("/",function(req,res){

    var today = new Date();
    var currentDay = today.getDay();
    var day = ""
    if(currentDay === 0){
        day = "Sunday"
    } else if (currentDay === 1){
        day = "Monday"
    } else if (currentDay === 2){
        day = "Tuesday"
    } else if (currentDay === 3){
        day = "Wednesday"
    } else if (currentDay === 4){
        day = "Thursday"
    } else if (currentDay === 5){
        day = "Friday"
    } else {
        day = "Sunday"
    }

    res.render("list" , {kindOfDay : day});
})

app.listen(3000,function(req,res){
    console.log("Server running on port 3000");
})