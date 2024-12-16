const query=require("../queries/queries")
const db=require("../ToDo")
class createtask{
    async createtask(data){
        const insertdata=await db.db(query.insertNewTask(data))
        console.log("inserted data", insertdata)
        return insertdata
    }

}
module.exports = new createtask()