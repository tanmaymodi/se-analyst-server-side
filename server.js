const PORT = process.env.PORT || 4000;
var express=require("express");
var bodyParser=require("body-parser");

const mongoose = require('mongoose');
const connectDB = require('./config/db');
connectDB();

const Form = require('./models/form');
const Person = require('./models/person');

var url = 'mongodb+srv://tanmaymodi:HomeSweetHomE@cluster0.ulutu.mongodb.net/se?retryWrites=true&w=majority';
var app=express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));

var engine = require('consolidate');

const { join } = require("path");
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');
app.use('/', require('./routes/index'));
app.get('/index.html' ,(req,res)=>{
    res.render('index.html');
})
app.get('/auth',(req,res)=>{
    res.render('auth.html');
})
app.get('/auth.html',(req,res)=>{
    res.render('auth.html');
})
app.get('/home',(req,res)=>{
    res.render('index.html');
})

//create form page code starts here

app.post('/sign_up', async(req,res) =>{
    //console.log(req.body);


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
  // console.log(req.body);
   data.forEach(element => {
      // console.log(element);
   });
   newForm["fields"]=data;
   console.log(newForm);

   var insertObj = new Form(newForm);
   await insertObj.save();

//    db.collection('forms').insertOne(newForm,function(err, collection){
//    if (err) throw err;
//       console.log("Record inserted Successfully");
//    });
   res.render('success.html');
   return;
})


app.get('/',function(req,res){
   res.set({
      'Access-control-Allow-Origin': '*'
   });
  res.render('index.html');
})



//analyis page ccode starts here
app.get('/analysisdata', async(req,res) =>{

    // for(let j=1;j<10;j++){
    //     var Res =  {
    //         "surveyType" : "Health Survey",
    //         "fields" : {
    //             "gender" : "Male",
    //             "maritalStatus" : "Married",
    //             "city" : "fuf",
    //             "district" : "jfil",
    //             "state" : "ufui",
    //             "Adhaar" : "68",
    //             "Name" : "person" + j,
    //             "Age" : (j+4)*10,
    //             "Gender" : "yd",
    //             "MaritalStatus" : "hs",
    //             "Height" : 10 + j,
    //             "Weight" : j*10 + j,
    //             "Dental Hygiene" : "gs",
    //             "Eye Vision" : "hd",
    //             "surveyType" : "Health Survey"
    //             }
    //         }
    //     var io = new Person(Res);
    //     await io.save();
    //     }







   // console.log("analytic form khul gya hai");
    var query = { name: "Health Survey"};
    var mainObj = {};
    var fields = [];
    var nof = 1;
    var data = await Form.find(query);
    //console.log("form data -- ", data);
    nof = Object.keys(data[0]["fields"]).length;
    
    nof = Object.keys(data[0]["fields"]).length;
    //console.log("nof: is ______________________");
    
   // console.log(Object.keys(data[0]["fields"]).length);
   // console.log("pehli quesry ho gayi");
    for(var i=0;i<nof;i++){
        //console.log(data[0]["fields"][i]);
        var temp = data[0]["fields"][i]["title"];
        mainObj[temp]=[];
        fields.push(temp);
    }

    var result = await Person.find({surveyType: 'Health Survey'});
        
    // console.log(result);

    var mainObj = {};

    for(let i=0;i<result.length;i++){
        var fields = result[i]["fields"];
        Object.keys(fields).forEach(e => {
            if(mainObj[e] === null || mainObj[e] === undefined){
                mainObj[e] = [];
            }
            mainObj[e].push(fields[e]);
        });
    }
    // console.log("main obej--", mainObj);
    //console.log(typeof result);
    // console.log((result).length);
    // var n = Object.keys(result).length;
    // console.log("this is double loop");
    // for(var j=0;j<nof;j++){
    //     for(var i=0;i<n;i++){
    //         console.log(result[i][fields[j]]);
    //         mainObj[fields[j]].push(result[i][fields[j]]);
    //     }
    // }
    console.log("this is mainobje");
    //console.log(mainObj);

    return res.send({
        data: mainObj
    });
    
    
    
});

app.get('/analysis', (req, res) => {
    res.render('analysis.html');    
});
app.get('/analysis.html', (req, res) => {
    res.render('analysis.html');    
});

var server = require('http').createServer(app);
server.listen(PORT, () => {console.log("Server started at "+PORT)});

    
/*
    for(let j=1;j<10;j++){
    var Res =  {
        "surveyType" : "Health Survey",
        "fields" : {
            "gender" : "Male",
            "maritalStatus" : "Married",
            "city" : "fuf",
            "district" : "jfil",
            "state" : "ufui",
            "Adhaar" : "68",
            "Name" : "yd",
            "Age" : "65",
            "Gender" : "yd",
            "MaritalStatus" : "hs",
            "Height" : "97",
            "Weight" : "67",
            "Dental Hygiene" : "gs",
            "Eye Vision" : "hd",
            "surveyType" : "Health Survey"
            }
        }
    var io = new Person(Res);
    await io.save();
    }
*/



