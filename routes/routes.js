const express = require('express');
const router = express.Router();
const creattaskcontroller=require("../controller/createtask")
const getTaskController=require("../controller/gettask")
const updateTaskController=require("../controller/updatetask")
const deleteTaskController=require("../controller/deletetask")


router.post('/inserttask', creattaskcontroller.createTask)
router.get('/getAlltask', getTaskController.getAllTask)
router.put('/updatetask/:id',updateTaskController.updateTask )
router.delete('/deletetask/:id' ,deleteTaskController.deleteTask)
router.get('/getTaskByFilters', getTaskController.getTaskByFilters)

module.exports = router
