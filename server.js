require('dotenv').config();
const userlib = require("./backend/lib/userlib");
const express = require('express');
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;
const options = {
    extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
    index: ['index.html'],  
}
app.use(express.static("public",options));
app.use(express.static("frontend"));

app.get("/", function(req, res){
	// res.send("I am satwik");
    res.sendFile(__dirname + '/index.html');
});

app.get('/resume', function(req, res) {
    res.sendFile(__dirname + '/resume.html');
});

app.get('/card', function(req, res) {
    res.sendFile(__dirname + '/card.html');
});

app.get('/weather', function(req, res) {
    res.sendFile(__dirname + '/weather.html');
});

app.get('/todo', function(req, res) {
    res.sendFile(__dirname + 'frontend/todo.html');
});




// mongoose.set('strictQuery', true);
// mongoose.connect(process.env.MONGO_CONNECTION_STRING, {}, function(err) {
//     if (err) {
//         console.log("hello, world!");
        // console.error(err);
    // } else {
    //     console.log("db connected");
        // userlib.createFirstUser(function(err, res) {
        //     if (err) {
        //        console.error(err);
        //     } else console.log(res);
        // });


        // userlib.updateUser(function(err,result){
        //     if(err){
        //         console.log(err);
        //     }
        //     else{
        //         console.log(result);
        //     }
        // });

        // userlib.deleteUser("Satwik",function(err,result){
        //        if(err){
        //         console.log(err);
        //        }
        //        else{
                    // console.log(res)
        //        }
        // });

        // userlib.getUserByFilter({username : " Satwik"},
        // function(err,res){
        //    if(err){  
        //     console.log(err);
        //    }
        //    else {
        //     console.log(result);
        //    }
        // });












        app.listen(port, function() {
            console.log("Server running on http://localhost:" + port);
            // console.log(`Server running on http://localhost:${port}`);
        });
//     }
// });  