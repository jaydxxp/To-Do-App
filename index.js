const express=require("express");
const {todo}=require("../backend/db.js")
const app=express();
const{CreateTodo,UpdateTodo}=require("../backend/types")
app.use(express.json());
app.post('/create',async function(req,res,next)
{
  const createpayload=req.body;
  const parsetodo=CreateTodo.safeParse(createpayload);
  if(!parsetodo.success)
  {
    res.status(401).json({
        msg:"You Send Wrong Inputs"
    })
  }
  await todo.create({
    Title:createpayload.Title,
    Description:createpayload.Description,
    Completed:createpayload.Completed
  })
  res.json({
    msg:"To-do Created"
  })

})
app.get('/read',async function(req,res,next)
{
    const response=await todo.find({
    
    });
    res.json({
        response
    })


})
app.put('/update',async function(req,res,next)
{
    const updatepayload=req.body;
    const parsetodo=UpdateTodo.safeParse(updatepayload);
    if(!parsetodo.success)
    {
        res.status(407).json({
            msg:"Task Does Not Exist"
        })
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:'Marked as Completed'
    })
})
app.listen(3000,function(req,res)
{
    console.log("Server is Running on http://localhost:3000");
})