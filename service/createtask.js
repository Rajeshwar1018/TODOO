// const db = require('../ToDo'); // Import the database connection
// const query = require('../queries/queries'); // Import your query module

// class CreateTask {
//   async createTask(data) {
//     try {
//       // Execute query with promise-based API
//       const [result] = await db.promise().query(query.insertNewTask(data));
//       console.log('Inserted data:', result);
//       return result;
//     } catch (error) {
//       console.error('Error inserting task:', error.message);
//       throw error;
//     }
//   }
// }

// module.exports = new CreateTask();

const db = require('../ToDo'); // Import the promise-enabled pool

class CreateTask {
  async createTask(data) {
    try {
      const { title, description, status } = data;
      const [result] = await db.query(
        'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)',
        [title, description, status]
      );


      console.log('Inserted data:', result);

      const insertId = result.insertId;

// Use a parameterized query to avoid SQL injection and errors
      const [insertedRow] = await db.query('SELECT * FROM tasks WHERE id = ?', [insertId]);

      return insertedRow;

    } catch (error) {
      console.error('Error inserting task:', error.message);
      throw error;
    }
  }
}

module.exports = new CreateTask();
