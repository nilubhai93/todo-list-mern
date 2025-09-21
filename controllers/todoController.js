const todoModel = require("../models/todoModel");

// create todo
const createTodoController = async (req, res) => {
    try {
        const { title, description, createdBy } = req.body
        if (!title || !description) {
            return res.status(500).send({
                success: false,
                message: "please provide title and description"
            })
        }
        const todo = new todoModel({ title, description, createdBy })
        const result = await todo.save()
        res.status(201).send({
            success:true,
            message:"your task has been created",
            result
        })





    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in create todo API",
            error
        })
    }
}





// get todo
const getTodoController = async(req, res)=>{
    try {
        // get user id
        const {userId} = req.params
        // validate
        if(!userId){
            return res.status(404).send({
                success:false,
                message:"no User found with this id"
            })
        }

        // find task
        const todos = await todoModel.find({createBy:userId})
        if(!todos){
            return res.status(404).send({
                success:true,
                message:"you have no todos"
            })
        }
        res.status(200).send({ 
            success:true,
            message:"you have no todos"
        })
        


    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Get todo API"
        })
    }
}





module.exports = { createTodoController, getTodoController }
