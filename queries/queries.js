

const query={

    insertNewTask: (data) => {
    const fields = Object.keys(data);
    const placeholders = fields.map(() => `?`).join(", ");

    return {
        sql: `INSERT INTO \`tasks\` (${fields.map((field) => `\`${field}\``).join(", ")}) 
              VALUES (${placeholders})`,
        values: fields.map((field) => data[field]),
    };
    },
    getAllTask: ()=>{
        return{
            sql:`SELECT * FROM  tasks`
        };
    },
    updateTask: (id, data) => {
        const updates = Object.keys(data)
            .map((field) => `\`${field}\` = ?`)
            .join(", ");

        return {
            sql: `UPDATE \`tasks\` SET ${updates} WHERE \`id\` = ?`,
            values: [...Object.values(data), id],
        };
    },
    getTaskById: (taskId) => {
        return {
            sql: `SELECT * FROM \`tasks\` WHERE \`id\` = ?`,
            values: [taskId],
        };
    },
    deleteTaskById: (taskId) => {
        return {
            sql: `DELETE FROM \`tasks\` WHERE \`id\` = ?`,
            values: [taskId],
        };
    }




}


module.exports=query

