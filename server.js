// require('dotenv').config();
// import dotenv from "dotenv";
// dotenv.config();

import {config} from "dotenv";
config();
// const userlib = require("./backend/lib/userlib");
import * as userlib from "./backend/lib/userlib.js"
// const todolib = require("./backend/lib/todolib");
import * as todoLib from "./backend/lib/todolib.js";
import express,{request} from "express";
// const express = require('express');
// const mongoose = require("mongoose");
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3000;
const options = {
    extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
    index: ['index.html'],  
}

app.use(express.static("frontend"));
app.use(express.json())



    // res.json([
    //     { name: "todo1", iscompleted: true }, { name: "todo1", iscompleted: true }, { name: "todo1", iscompleted: true }
    // ]);

app.get("/", function(req, res){
	// res.send("I am satwik");
    res.sendFile(process.cwd() + '/frontend/html/index.html');
});

app.get('/resume', function(req, res) {
    res.sendFile(process.cwd() + '/frontend/html/resume.html');
});

app.get('/card', function(req, res) {
    res.sendFile(process.cwd() + '/frontend/html/card.html');
});

app.get('/weather', function(req, res) {
    res.sendFile(process.cwd()+ '/frontend/html/weather.html');
});

app.get('/todo', function(req, res) {
    res.sendFile(process.cwd() + '/frontend/html/todo.html');
});


app.get("/api/todos", function(req, res) {
    todoLib.getAllTodos(function(err,todos){
          if(err){
               res.json({status:"error",message:err,
               data:null});
          }
          else{
             res.json({status:"success",
             message:"Done",
             data:todos})
          }
    });
});

app.post("/api/todos",function(req,res){
    const todo = req.body;
    todoLib.createTodo(todo,function(err,dbtodo){
        if(err){
            res.json({status:"error",message:err,data:null});
       }
       else{
          res.json({status:"success",
          message:"Todo Created",
          data:dbtodo});
       }
    })
})

app.put("/api/todos/:todoid",function(req,res){
    const todoid=req.params.todoid;
    const todo =req.body;
    todoLib.updateTodoById(todoid,todo,function(err,dbtodo){
        if(err){
            res.json({
                status:"error",
                message:err,
                 data:null});
       }
       else{
          res.json({status:"success",
          message:"Updated",
          data:dbtodo});
       }

    });
});

app.delete('/api/todos/:todoid',function(req,res){ 
         const todoid= req.params.todoid;
         todoLib.deleteTodoById(todoid,function(err,dbtodo){
            if(err){
                res.json({status:"error",message:err,data:null});
           }
           else{
              res.json({status:"success",data:dbtodo});
           }
         });
});

// app.get("/api/todos/done",function(req,res){
//        todoLib.getAlldonetodos(function(err,todos){
//            if(err){
//             res.json({
//                 status:"error",
//                 message:"err",
//                 data:null
//             });
//            }
//            else {
//             res.json({
//                 status:"success",
//                 message:"Deleted",
//                 data:todos
//             });
//            }

//        });
// });

// app.get("/api/todos/delete",function(req,res){
//         todoLib.getAlldeleteTodos(function(err,todos){
//              if(err){
//                 res.json({
//                        status:"message",
//                        messgae:err,
//                        data:null
//                 });
//              }
//              else {
//                 res.json({
//                     status:"success",
//                     message:"cool",
//                     data:todos
//                 });
//                }
//         });
// });




mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {}, function(err) {
    if (err) {
        console.log("hello, world!");
        console.error(err);
    } else {
        console.log("db connected");
    }
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
        });
    
});  























// const express = require('express');
// const app = express();

// const port = process.env.PORT || 9030;

// app.use(express.static("frontend"));


// app.get("/api/todos", function(req, res) {
//     res.json([
//         { name: "todo1", iscompleted: true }, { name: "todo1", iscompleted: true }, { name: "todo1", iscompleted: true }
//     ]);
// });

// app.use("/", function(req, res) {
//     res.sendFile(__dirname + "/frontend/index.html");
// });




