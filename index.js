const express= require("express");
const app=express();
app.use(express.json())


let Todolist=[]



app.get("/",(req,res)=>{

   res.json({"data": Todolist})
})

app.post("/",(req,res)=>{
    const data = req.body;
    Todolist = [ ...Todolist,data]
    res.json({"data": Todolist})

})

app.put("/",(req,res)=>{
    const data = req.body;
    Todolist.map((todo, index)=> {
        if(todo.id===data.id) {
            Todolist[index] = data
        }
    })
    // Todolist = [data, ...Todolist]
    res.json({"data": Todolist})
})

app.delete("/",(req,res)=>{
    const id = req.body.id;
    Todolist.map((todo, index)=> {
        if(todo.id===id) {
            Todolist.splice(index,1)
        }
    })
    // Todolist = [data, ...Todolist]
    res.json({"data": Todolist})
})

app.listen(3000)