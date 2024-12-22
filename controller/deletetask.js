const deletetaskservice = require("../service/deletetask");
const { TaskById } = require("../service/gettask");



class deleteTaskController {
    // Controller method to create a new task
    async deleteTask(req, res) {
        try {
            let { id: taskId } = req.params;

            taskId = parseInt(taskId, 10); // Convert to a number
            if (isNaN(taskId)) {
                return res.status(400).json({
                    error: "Invalid task ID. It must be a numeric value.",
                });

            }
            
            // Call the service to insert data into the database
            const result = await deletetaskservice.deleteTaskById(taskId)

            // Send success response
            return res.status(201).json({
                message: "Task deleted successfully",
                data: result
            });
        } catch (error) {
            console.error("Error in deleting task:", error);

            // Send error response
            return res.status(500).json({
                error: "Failed to delete task",
                details: error.message
            });
        }
    }
}

module.exports = new deleteTaskController();
