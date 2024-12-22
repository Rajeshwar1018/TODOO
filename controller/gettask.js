
const gettaskservice = require("../service/gettask")



class getTaskController {
    // Controller method to create a new task
    async getAllTask(req, res) {
        try {
            
            // Call the service to insert data into the database
            const result = await gettaskservice.getAllTasks()

            // Send success response
            return res.status(201).json({
                message: "Task fetched successfully",
                data: result
            });
        } catch (error) {
            console.error("Error fetching task:", error);

            // Send error response
            return res.status(500).json({
                error: "Failed to fetching task",
                details: error.message
            });
        }
    }
    async getTaskByFilters(req, res){
        let filters={

        }
        if(req.query.status){
            filters.status=req.query.status.trim()
        }
        if(req.query.priority){
            filters.priority=req.query.priority.trim()
        }
        if(req.query.category){
            filters.category=req.query.category.trim()
            
            }
        
        try {
            
            // Call the service to insert data into the database
            const result = await gettaskservice.getTaskByFilter(filters)

            // Send success response
            return res.status(201).json({
                message: "Task fetched successfully",
                data: result
            });
        } catch (error) {
            console.error("Error fetching task:", error);

            // Send error response
            return res.status(500).json({
                error: "Failed to fetching task",
                details: error.message
            });
        }

    }
}

module.exports = new getTaskController();
