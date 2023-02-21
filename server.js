require('dotenv').config();
const userlib = require("./backend/lib/userlib");
const todolib = require("./backend/lib/todolib");
const express = require('express');
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;
const options = {
    extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
    index: ['index.html'],  
}

app.use(express.static("frontend"));
app.use(express.json())

app.get("/api/todos", function(req, res) {
    todolib.getAllTodos(function(err,todos){
          if(err){
               res.json({status:"error",message:err,data:null});
          }
          else{
             res.json({status:"success",data:todos})
          }
    });
});
app.post("/api/todos",function(req,res){
    const todo = req.body;
    todolib.createTodo(todo,function(err,dbtodo){
        if(err){
            res.json({status:"error",message:err,data:null});
       }
       else{
          res.json({status:"success",data:dbtodo});
       }
    })
})

    // res.json([
    //     { name: "todo1", iscompleted: true }, { name: "todo1", iscompleted: true }, { name: "todo1", iscompleted: true }
    // ]);

app.get("/", function(req, res){
	// res.send("I am satwik");
    res.sendFile(__dirname + '/frontend/html/index.html');
});

app.get('/resume', function(req, res) {
    res.sendFile(__dirname + '/frontend/html/resume.html');
});

app.get('/card', function(req, res) {
    res.sendFile(__dirname + '/frontend/html/.html');
});

app.get('/weather', function(req, res) {
    res.sendFile(__dirname + '/frontend/html/weather.html');
});

app.get('/todo', function(req, res) {
    res.sendFile(__dirname + '/frontend/html/todo.html');
});

app.put("/api/todos/:todoid",function(req,res){
    const todo =req.body;
    const todoid=req.params.todoid;
    todolib.updateTodoById(todoid,todo,function(err,dbtodo){
        if(err){
            res.json({status:"error",message:err,data:null});
       }
       else{
          res.json({status:"success",data:dbtodo});
       }

    });
});

app.delete('/api/todos/:todoid',function(req,res){ 
         const todoid= req.params.todoid;
         todolib.deleteTodoById(todoid,function(err,dbtodo){
            if(err){
                res.json({status:"error",message:err,data:null});
           }
           else{
              res.json({status:"success",data:dbtodo});
           }
         });
});




mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {}, function(err) {
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




