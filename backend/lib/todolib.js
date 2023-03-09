// const todomodel = require("../models/todomodel");
import mongoose from "mongoose"

// import {todomodel} from "../models/todomodel.js";
import todomodel from "../models/todoModel.js";
/*
1. createTodo
2. getAllTodos
3. getSingleTodoById
4. getTodosByQuery
5. updateTodoById
6. DeleteTodoById
*/

export const createTodo = async function(todo,callback){
    try{
        
        var newTodo = new todomodel(todo);
        var result = await newTodo.save();
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}
export const getAllTodos = async function(callback){
    try{
        var todos = await todomodel.find({isCompleted: false,isDeleted: false});
        callback(null,todos);
    }
    catch(err){
        callback(err,null);
    }
}

export const getTodosByQuery = async function(query,callback){
    try{
        var todos = await todomodel.find(query);
        callback(null,todos);
    }
    catch(err){
        callback(err,null);
    }
}

export const getSingleTodoById = async function(id,callback){
    try{
        var todo = await todomodel.findOne(id);
        callback(null,todo);
    }
    catch(err){
        callback(err,null);
    }
}

export const updateTodoById = async function(id,data,callback){
    try{
        var todo = {
            _id: id,
        };
        var result = await todomodel.updateOne(todo,data);
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}

export const deleteTodoById = async function(id,callback){
    try{
        var todo = {
            _id: id,
        };
        var result = await todomodel.updateOne(todo,{isDeleted: true});
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}