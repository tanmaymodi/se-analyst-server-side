const PORT = process.env.PORT || 4000;
var express=require("express");
var bodyParser=require("body-parser");


const mongoose = require('mongoose');
const connectDB = require('./config/db');
connectDB();
const Form = require('./models/user');

var url = 'mongodb+srv://tanmaymodi:HomeSweetHomE@cluster0.ulutu.mongodb.net/se?retryWrites=true&w=majority';
var app=express()

var engine = require('consolidate');
app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');
app.use('/', require('./routes/index'));




app.get('/analysisdata', (req,res) =>{
    console.log("analytic form khul gya hai");
    var query = { name: "Health Survey"};
    var mainObj = {};
    var fields = [];
    var nof = 1;
    db.collection("forms").find(query).toArray(function(err, data){
        if(err) throw err;
        //console.log(res);
        nof = Object.keys(data[0]["fields"]).length;
        console.log("nof: is ______________________");
     
        console.log(Object.keys(data[0]["fields"]).length);
        console.log("pehli quesry ho gayi");
        for(var i=0;i<nof;i++){
            console.log(data[0]["fields"][i]);
            var temp = data[0]["fields"][i]["title"];
            mainObj[temp]=[];
            fields.push(temp);
        }
        db.collection("responses").find({}).toArray(function(err, result) {
            if (err) throw err;
            //console.log(result);
            //console.log(typeof result);
            console.log(Object.keys(result).length);
            var n = Object.keys(result).length;
            console.log("this is double loop");
            for(var j=0;j<nof;j++){
                for(var i=0;i<n;i++){
                    console.log(result[i][fields[j]]);
                    mainObj[fields[j]].push(result[i][fields[j]]);
                }
            }
            console.log("this is mainobje");
            console.log(mainObj);
            db.close();
            console.log("analysisdata -- ", mainObj);
    
            return res.send({
                data: mainObj
            });
            
          });
    })
    
    
});

app.get('/analysispage', (req, res) => {
    res.render('analysis.html');
});

var server = require('http').createServer(app);
server.listen(PORT, () => {console.log("Server started at "+PORT)});

    




