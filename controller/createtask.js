const createtaskservice = require("../service/createtask")

class TaskController {
    // Controller method to create a new task
    async createTask(req, res) {
        try {
            const taskData = req.body;

            // Input validation: Check if the request body has data
            if (!taskData || Object.keys(taskData).length === 0) {
                return res.status(400).json({ error: "Task data is required" });
            }

            // Call the service to insert data into the database
            const result = await  createtaskservice.createtask(taskData)

            // Send success response
            return res.status(201).json({
                message: "Task created successfully",
                data: result
            });
        } catch (error) {
            console.error("Error creating task:", error);

            // Send error response
            return res.status(500).json({
                error: "Failed to create task",
                details: error.message
            });
        }
    }
}

module.exports = new TaskController();
