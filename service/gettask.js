const query=require('../queries/queries')
const db = require('../ToDo');

class getTask {
    async getAllTasks() {
      try {
        // Generate the SQL and values from the query module
        const { sql } = await query.getAllTask();
  
        // Execute the query using the promise-based API
        const [result] = await db.query(sql);
  
        console.log('fetched data:', result);
  
        // Get the inserted row using its insertId
        //const insertId = result.insertId;
  
        // Use a parameterized query to fetch the newly inserted row
        //const [insertedRow] = await db.query('SELECT * FROM tasks WHERE id = ?', [insertId]);
  
        return result;
  
      } catch (error) {
        console.error('Error fetching task:', error.message);
        throw error;
      }
    }
    
    async getTaskById(taskId) {
        try {
            const { sql, values } = query.getTaskById(taskId);
            const [rows] = await db.query(sql, values);
            return rows[0]; // Return the first (and only) row
        } catch (error) {
            console.error('Error fetching task:', error.message);
            throw error;
        }
    }

    async getTaskByFilter(filters){
      try{ 
        let sql =`SELECT *FROM TASKS WHERE 1=1`
        let queryParams = [];
        if(filters.status){
          sql += ` AND status = ?`;
          queryParams.push(filters.status);
      }
      if(filters.priority){
        sql += ` AND priority = ?`;
        queryParams.push(filters.priority);
        
      }
      if(filters.category){
        sql += ` AND category = ?`;
        queryParams.push(filters.category);
        
      }
      const [rows] = await db.query(sql, queryParams);
      return rows[0];
    }
      catch (error) {
        console.error('Error fetching task:', error.message);
        throw error;
    }

    }

  }
  
  module.exports = new getTask();
  