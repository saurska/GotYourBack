const MySql = require('mysql');

const express = require('express');

const PortNum = process.env.PORT || 3001;

const app =express();
const db = MySql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'Saur@123',
    database: 'MyNodeSql'
})

var Table_Name;
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected to MySql Server");
})

id=0;

// function RegisterUser(TableName, StEmail,password){

// let SqlQuery2 = `SELECT Email FROM ${TableName} WHERE Email ="${StEmail}";`;
// db.query(SqlQuery2, (err, result) => {
//     if (err) {
//         throw err;
//     }

//     //Converting result(Which is by default an Object) to string for convinient comparsion
//     CheckString = JSON.stringify(result);
//     console.log(CheckString);

//     if (CheckString == "[]") {
//         let SqlQuery = `INSERT INTO RegisterAuth VALUES(${id},"${StEmail}","${password}");`;
//         db.query(SqlQuery, (err, result) => {
//             if (err) {
//                 throw err;
//             }
//             res.send(`${StEmail} has been successfully registered `);

//         })
//     }   
//     else {
//         res.status(200).render('register',{NotAbleToRegister :true})
//         // res.redirect(301, '/Register');
//         // res.send(`${StEmail} is already a registered user try loging in `);
//         // res.sendFile(path.join(__dirname,"Public/Register.HTML"));
//         console.log(`User hai bhaii`);
//     }
// })
// }



function SaveInServer(title,text_description,money,x_factor){
    if(x_factor=="gig"){
        Table_Name = "Gig_data";
    }

    else if(x_factor=="request"){
        Table_Name="Request_data";
    }

    let SqlQuery = `INSERT INTO ${Table_Name} VALUES(${id},"${title}","${text_description}","${money}");`;
db.query(SqlQuery, (err, result) => {
    if (err) {
        throw err;
    }
    console.log(result);

})
}



app.listen(PortNum);




module.exports =SaveInServer;