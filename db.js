const mongoose=require("mongoose")
const Mongo_URL='mongodb+srv://jaydeepw:Jaydeep%402005@cluster0.hnqsqir.mongodb.net/To-Do-App';
mongoose.connect(Mongo_URL);
const CreateTodo=mongoose.Schema({
    Title:String,
    Description:String,
    Completed:Boolean
})
const todo=mongoose.model('todos',CreateTodo);
module.exports={
    todo
}