//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

var count = 1

function App() 
{
  //var todo = []
  const [todo, setTodo] = useState([])

  const inssertDefaultValue = () =>
  {
    var tempArray = []
    for(let countTemp = 0; countTemp<10; countTemp++ )
    {
      tempArray.push(
        {
          id: countTemp + 1,
          text: "Todo "+(countTemp + 1)
        })
      count = countTemp + 1
    }
    //console.log(tempArray)
    setTodo([...tempArray])
  }
  if(todo.length == 0)
    inssertDefaultValue()

  //function to add todo to the array
  const addTodo = () =>
  {
    console.log("addTodo")
    var todoInput = document.getElementById("todoInput").value
    console.log("Todo text: "+todoInput)
    console.log("Todo Array: "+todo)

    const todoTempObject = {
      id: count,
      text: todoInput
    }
    count += 1
    todo.push(todoTempObject)
    setTodo([...todo]) // => setTodo(["Todo 1", "Todo 2"])
    console.log(todo)
    document.getElementById("todoInput").value = ""


    //mocking todo array for map loop
    // console.log("----------------------")
    // const myUpdatedArray = todo.map((todoTemp)=>
    // {
    //   console.log(todoTemp)
    //   return todoTemp
    // })
    // console.log("----------------------")
  }

  const deleteTodo = (tempId) =>
  {
    console.log("deleteTodo")
    console.log("tempId: "+tempId)
    var todoUpdate = todo.filter((todoTemp)=>
    {
      if(todoTemp.id == tempId)
      {
        return false
      }
      else 
        return true
    })
    setTodo([...todoUpdate])
  }

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          id='todoInput'
          type='text'
          placeholder='Enter todo here'
        />
        <button onClick={addTodo}>Add todo</button>
      </div>
      {todo.map((todoTemp)=>
      {
        return <div>
          <input type='checkbox'/>
          {todoTemp.text}
          <button onClick={()=>deleteTodo(todoTemp.id)}>Delete</button>
          </div>
      })}
    </div>
  );
}

export default App;
