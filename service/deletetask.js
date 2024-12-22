const query=require('../queries/queries')
const db = require('../ToDo');

class deleteTask {
    
    async deleteTaskById(taskId) {
        try {
            const { sql, values } = query.deleteTaskById(taskId);
            const [rows] = await db.query(sql, values);
            return rows[0]; // Return the first (and only) row
        } catch (error) {
            console.error('Error in deleting task:', error.message);
            throw error;
        }
    }
  }
  
  module.exports = new deleteTask();
  