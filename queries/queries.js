const query={
    insertNewTask: (data) => {
    const fields = Object.keys(data);
    const placeholders = fields.map(() => `?`).join(", ");

    return {
        sql: `INSERT INTO \`tasks\` (${fields.map((field) => `\`${field}\``).join(", ")}) 
              VALUES (${placeholders})`,
        values: fields.map((field) => data[field]),
    };
}}

module.exports=query