var express=require("express");
var bodyParser=require("body-parser");






const mongoose = require('mongoose');
const { response } = require("express");
mongoose.connect('mongodb+srv://tanmaymodi:HomeSweetHomE@cluster0.ulutu.mongodb.net/se?retryWrites=true&w=majority');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
   console.log("connection succeeded");
});
var app=express()

var engine = require('consolidate');
app.set('views', __dirname + '/public');
app.engine('html', engine.mustache);
app.set('view engine', 'html');



app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
   extended: true
}));

app.post('/sign_up', function(req,res){
    var name = req.body.name;
    d = req.body;
    var n = parseInt(req.body.nof);
    var newForm = {};
    //console.log("herer is the the test form f: " + testFrom);
    //console.log(testFrom);
    newForm["name"] = name;
    var data = [];
    if(d.field_name1 != undefined){
        g = {
            title: d.field_name1,
            type: d.field_type1
        };
        data.push(g);
    }
    if(d.field_name2 != undefined){
        g = {
            title: d.field_name2,
            type: d.field_type2
        };
        data.push(g);
    }
    if(d.field_name3 != undefined){
        g = {
            title: d.field_name3,
            type: d.field_type3
        };
        data.push(g);
    }
    if(d.field_name4 != undefined){
        g = {
            title: d.field_name4,
            type: d.field_type4
        };
        data.push(g);
    }
    if(d.field_name5 != undefined){
        g = {
            title: d.field_name5,
            type: d.field_type5
        };
        data.push(g);
    }
    if(d.field_name6 != undefined){
        g = {
            title: d.field_name6,
            type: d.field_type6
        };
        data.push(g);
    }
    if(d.field_name7 != undefined){
        g = {
            title: d.field_name7,
            type: d.field_type7
        };
        data.push(g);
    }
    if(d.field_name8 != undefined){
        g = {
            title: d.field_name8,
            type: d.field_type8
        };
        data.push(g);
    }
    if(d.field_name9 != undefined){
        g = {
            title: d.field_name9,
            type: d.field_type9
        };
        data.push(g);
    }
    if(d.field_name10 != undefined){
        g = {
            title: d.field_name10,
            type: d.field_type10
        };
        data.push(g);
    }
    if(d.field_name11 != undefined){
        g = {
            title: d.field_name11,
            type: d.field_type11
        };
        data.push(g);
    }
    if(d.field_name12 != undefined){
        g = {
            title: d.field_name12,
            type: d.field_type12
        };
        data.push(g);
    }
    if(d.field_name13 != undefined){
        g = {
            title: d.field_name13,
            type: d.field_type13
        };
        data.push(g);
    }
    if(d.field_name14 != undefined){
        g = {
            title: d.field_name14,
            type: d.field_type14
        };
        data.push(g);
    }
    if(d.field_name15 != undefined){
        g = {
            title: d.field_name15,
            type: d.field_type15
        };
        data.push(g);
    }
    

    var resoponses = {
        name: "Vartika",
        adhar: 74859685749652,
        age: 27,
        gender: "Female",
        occupation: "Chef",
        height: 1.6,
        dental_hygeine: "Hygeine",
        disea_record: "None",
        allergies: "None",
        current_health_status: "Healthy"
    }
   //console.log(req.body);
   data.forEach(element => {
       console.log(element);
   });
   newForm["fields"]=data;
   console.log(newForm);
   db.collection('forms').insertOne(newForm,function(err, collection){
   if (err) throw err;
      console.log("Record inserted Successfully");
   });
   return res.redirect('success.html');
})

app.get('/',function(req,res){
   res.set({
      'Access-control-Allow-Origin': '*'
   });
   return res.redirect('index.html');
}).listen(3000)

app.get('/analysisdata', (req,res) =>{
    db.once('open', function(callback){
        console.log("connection succeeded");
     });
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

console.log("server listening at port 3000");    