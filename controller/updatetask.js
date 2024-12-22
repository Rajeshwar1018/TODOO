
const updatetaskservice = require("../service/updatetask")
const gettaskservice=require("../service/gettask")



class updateTaskController {
    // Controller method to create a new task
    async updateTask(req, res) {
        try {
            let { id: taskId } = req.params;

            taskId = parseInt(taskId, 10); // Convert to a number
            if (isNaN(taskId)) {
                return res.status(400).json({
                    error: "Invalid task ID. It must be a numeric value.",
                });

            }
            const taskData=req.body;
            // Call the service to insert data into the database
            const result = await updatetaskservice.updateTask(taskId, taskData)
            const fetchedData=await gettaskservice.getTaskById(taskId)

            // Send success response
            return res.status(201).json({
                message: "Task updated successfully",
                data: fetchedData
            });
        } catch (error) {
            console.error("Error updated task:", error);

            // Send error response
            return res.status(500).json({
                error: "Failed to update task",
                details: error.message
            });
        }
    }
}

module.exports = new updateTaskController ();


