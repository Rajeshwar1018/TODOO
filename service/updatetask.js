const db = require('../ToDo'); // Import the database connection
const query = require('../queries/queries'); // Import your query module

class updateTasks {
  async updateTask(taskId, data) {
    try {
        console.log(taskId)
      // Generate the SQL and values from the query module
      const { sql, values } = query.updateTask(taskId, data);

      // Execute the query using the promise-based API
      const [result] = await db.query(sql, values);

      console.log('updated data:', result);

      // Get the inserted row using its insertId
      //const insertId = result.insertId;

      // Use a parameterized query to fetch the newly inserted row
      //const [insertedRow] = await db.query('SELECT * FROM tasks WHERE id = ?', [insertId]);

      return result;

    } catch (error) {
      console.error('Error updating task:', error.message);
      throw error;
    }
  }
}

module.exports = new updateTasks();
