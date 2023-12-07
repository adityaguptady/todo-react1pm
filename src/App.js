//Development branch
import { useState } from 'react';
import './App.css';

var count=1;
function App() 
{

  const [todoArray,setTodoArray]=useState([])
 
  const addTodo=()=>
  {
    var todotext=document.getElementById("todoText").value
    var obj=
    {
      id:count,
      name:todotext
    }
    count++;
    todoArray.push(obj)
    setTodoArray([...todoArray])
    console.log(todoArray)
    todoArray.map((todoTemp)=>
    {
      console.log(todoTemp)
      return todoTemp
    })

  }
  const deleteTodo=(id)=>
  {

  }

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" id="todoText" />
      <button onClick={addTodo}>Add Todo</button>
      {
        todoArray.map((todoTemp)=>
        {
        
          return  <div>
            {todoTemp.name}
            <button onClick={()=>deleteTodo(todoTemp.id)}>Delete</button>

            
            </div>
        })
      }
    </div>

  
  );
}

export default App;
