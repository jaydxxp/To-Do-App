const z=require("zod");
const CreateTodo=z.object({
    Title:z.string(),
    Description:z.string()
})
const UpdateTodo=z.object({
    id:z.string(),
})
module.exports={
    CreateTodo:CreateTodo,
    UpdateTodo:UpdateTodo
}