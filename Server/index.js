const path = require('path');
const express = require('express');
const MySql = require('mysql');

var dataModules = require('./db/dataModules.js')
var SaveInServer =dataModules;

const { DefaultDeserializer } = require('v8');
const { json } = require('express');
// 
const PortNum = process.env.PORT || 3000;





const db = MySql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'Saur@123',
    database: 'MyNodeSql'
})

var TableName = 'RegisterAuth';

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected to MySql Server");
})



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine','pug');

app.set('Views',path.join(__dirname,"Views"))

// app.get('/demo',(req,res)=>{
//     res.status(200).render('register',{title: "Mori Maiya",message:"Kya hogya vaii?"})
// })
// For accessing Index.js file in the Public dir by joining it to the current dir
app.use(express.static(path.join(__dirname, "Public")));


// This sends Hello World when server gets '/hello' 
app.get('/hello', (req, res) => {
    res.send('Hello World');
})

// These are the variables for storing the value of inputs 


// Manages the post request made by user in the form action 



app.post('/Register', (req, res) => {

    var StEmail;
    var id = 0;
    var password;

    StEmail = req.body.Email;
    password = req.body.Password;

    //Variable for comparing string for user authentication
    let CheckString;

    // SQL Query for checking if the user already exists
    let SqlQuery2 = `SELECT Email FROM ${TableName} WHERE Email ="${StEmail}";`;
    db.query(SqlQuery2, (err, result) => {
        if (err) {
            throw err;
        }

        //Converting result(Which is by default an Object) to string for convinient comparsion
        CheckString = JSON.stringify(result);
        console.log(CheckString);

        if (CheckString == "[]") {
            let SqlQuery = `INSERT INTO RegisterAuth VALUES(${id},"${StEmail}","${password}");`;
            db.query(SqlQuery, (err, result) => {
                if (err) {
                    throw err;
                }
                res.send(`${StEmail} has been successfully registered `);

            })
        }   
        else {
            res.status(200).render('register',{NotAbleToRegister :true})
            // res.redirect(301, '/Register');
            // res.send(`${StEmail} is already a registered user try loging in `);
            // res.sendFile(path.join(__dirname,"Public/Register.HTML"));
            console.log(`User hai bhaii`);
        }
    })
})


app.post('/Login',(req,res)=>{
    var LoginEmail = req.body.Email;
    var LoginPassword = req.body.Password;
    SqlQueryForEmailMatch = `SELECT Email from ${TableName} WHERE Email = "${LoginEmail}";`
    db.query(SqlQueryForEmailMatch,(err,result)=>{
        if(err){
            throw err;
        }
        
        var CheckString = JSON.stringify(result);
        if(CheckString=="[]"){
            // res.send('Sorry no user could be found try registering');
            res.status(200).render('login',{NotAbleToLogin :true})
        }
        else{
        SqlQueryForPasswordMatch =`SELECT Password from ${TableName} WHERE Email = "${LoginEmail}" AND Password ="${LoginPassword}";`
        db.query(SqlQueryForPasswordMatch,(err,result)=>{
            if(err){
                throw err;
            }
            let CheckPasswordString= JSON.stringify(result);
            if(CheckPasswordString=="[]"){
                console.log(LoginPassword);
                res.status(200).render('login',{IncorrectPassword:true});
            }
            else{
                res.send(`Login Successful`);

            }
        })
    }
        
    })
    console.log(LoginEmail);


   
})

// app.get('/CreateNewGig',(req,res)=>{
//     res.send('success');

// })

// This Shows that server is listening on the defined PORT
app.post('/Helper',(req,res)=>{
    x_factor ="gig";
    SaveInServer(req.body.title, req.body.text_description,req.body.money,x_factor);
    res.send(req.body);
    

})

app.get('/Helper',(req,res)=>{

    GigDesc(); // For getting the data and displaying it on the Helper gig wala page where it is supposed to bev

})
    


app.post('/Seeker',(req,res)=>{
    x_factor="request";
    SaveInServer(req.body.title, req.body.text_description,req.body.money,x_factor);
    res.send(req.body);

})



app.listen(PortNum, () => {
    console.log(`listening on port ${PortNum}`);
})



