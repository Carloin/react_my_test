

let list= [
  { id: 1, title: 'TodoList列表1', status: 0 },
  { id: 2, title: 'TodoList列表2', status: 1 },
  { id: 3, title: 'TodoList列表3', status: 2 },
  { id: 4, title: 'TodoList列表4', status: 0 },
  { id: 5, title: 'TodoList列表5', status: 1 },
  { id: 6, title: 'TodoList列表6', status: 2 },
  { id: 7, title: 'TodoList列表7', status: 0 },
]
export default {
  'GET /api/todolists':list,
  'POST /api/todo':(req,res)=>{
   const item={
    id:list.length+1,
    title:req.body.todo,
    status:0
   }
   list.unshift(item)
    // res.end(JSON.stringify(req.body))
    res.send({
      code:0,
      message:'添加待办事项成功！'
    })

  },
  'PUT /api/edit':(req,res)=>{
    // 筛选todo,进行修改
    const {id,status}=req.body
    list.map((item,index)=>{
      if(item.id===id) list[index].status=status
    })
     res.send({
       code:0,
       message:'修改成功'
     })
 
   },
};
