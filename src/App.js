import React, { useState } from "react";
import "./App.css";

const App = () => {
  const[todo,settodo]=useState("");
  const[todos,settodos]=useState([]);
  const[editId,seteditId]=useState();

  const handleSubmit=(e)=>{
    e.preventDefault();

     if(editId){
      const edittodo=todos.find((i)=>i.id===editId);
      const updatedatodos=todos.map((t)=>t.id===editId.id?(
        t={id:t.id,todo}):{id:t.id,todo:t.todo}
      )
     }


    if(todo!==''){
      settodos([{id:`${todo}-${Date.now()}`,todo}, ...todos]);
      settodo("");

    }

  };

  const handleDelete=(id)=>{
    const delTodo=todos.filter((to)=>to.id !==id);
    settodos([...delTodo]);

  };
   const handleEdit=(id)=>{
    const edittodo=todos.find((i)=>i.id===id);
    settodo(edittodo.todo);
    seteditId(id);
    
   }
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo List App</h1>
        <form className="todoform" onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={(e)=>settodo(e.target.value)}/>
          <button type="submit">{editId ? "Edit":"Go"} </button>
        </form>
        <ul className="allTodos">
        {
         todos.map((t)=>(
          <li className="singleToDo">
            <span className="texttodo" key={t.id}>{t.todo}</span>
            <button onClick={()=>handleEdit(t.id)}>Edit</button>
            <button onClick={()=>handleDelete(t.id)}>Delete</button>
          </li>

         ))}
         

          
        </ul>
      </div>
    </div>
  );
};

export default App;
