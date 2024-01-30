//Development branch
import './App.css';
import { useState } from 'react';
import TodoListItem from './TodoListItem';

var count = 1

// function App() 
// {
//   //var todo = []
//   const [todo, setTodo] = useState([])
//   const [editingFlag, setEditingFlag] = useState(-1)

//   const inssertDefaultValue = () =>
//   {
//     var tempArray = []
//     for(let countTemp = 0; countTemp<10; countTemp++ )
//     {
//       tempArray.push(
//         {
//           id: countTemp + 1,
//           text: "Todo "+(countTemp + 1),
//           completed: false
//         })
//       count = countTemp + 1
//     }
//     //console.log(tempArray)
//     setTodo([...tempArray])
//   }
//   if(todo.length === 0)
//     inssertDefaultValue()

//   //function to add todo to the array
//   const addTodo = () =>
//   {
//     console.log("addTodo")
//     var todoInput = document.getElementById("todoInput").value
//     console.log("Todo text: "+todoInput)
//     console.log("Todo Array: "+todo)

//     const todoTempObject = {
//       id: count,
//       text: todoInput,
//       completed: true
//     }
//     count += 1
//     todo.push(todoTempObject)
//     setTodo([...todo]) // => setTodo(["Todo 1", "Todo 2"])
//     console.log(todo)
//     document.getElementById("todoInput").value = ""


//     //mocking todo array for map loop
//     // console.log("----------------------")
//     // const myUpdatedArray = todo.map((todoTemp)=>
//     // {
//     //   console.log(todoTemp)
//     //   return todoTemp
//     // })
//     // console.log("----------------------")
//   }

//   const deleteTodo = (tempId) =>
//   {
//     console.log("deleteTodo")
//     console.log("tempId: "+tempId)
//     var todoUpdate = todo.filter((todoTemp)=>
//     {
//       if(todoTemp.id === tempId)
//       {
//         return false
//       }
//       else 
//         return true
//     })
//     setTodo([...todoUpdate])
//   }

//   const checkedChange = (todoTemp) =>
//   {
//     console.log(todoTemp)
//     todo.map((element) => 
//     {
//       if(todoTemp.id === element.id)
//       {
//         element.completed = !element.completed
//       }
//       return element
//     })
//     setTodo([...todo])
//   }

//   const editingTodo = (id) =>
//   {
//     setEditingFlag(id)
//   }

//   const saveTodo = (obj) =>
//   {
//     // 1. text to take out form input box
//     // 2. update todo object with updated text
//     // 3. Set Todo state
//     // 4. Editing flag should be reset
//     todo.map((element) =>
//     {
//       if(obj.id === element.id)
//       {
//         element.text = document.getElementById("editingTodo").value
//       }
//       return element
//     })
//     setTodo([...todo])
//     setEditingFlag(-1)
//   }

//   console.log(todo)
//   return (
//     <div>
//       <h1>Todo App</h1>
//       <div>
//         <input
//           id='todoInput'
//           type='text'
//           placeholder='Enter todo here'
//         />
//         <button onClick={addTodo}>Add todo</button>
//       </div>
//       {todo.map((todoTemp)=>
//       {
//         return <div>
//           { todoTemp.completed ? 
//             <input type='checkbox' onChange={() =>checkedChange(todoTemp)} checked/> : 
//             <input type='checkbox' onChange={() =>checkedChange(todoTemp)}/> }
//           { editingFlag !== todoTemp.id ? 
//               <>
//                 {todoTemp.text}
//                 <button onClick={()=>deleteTodo(todoTemp.id)}>Delete</button>
//                 <button onClick={()=>editingTodo(todoTemp.id)}>Edit</button>
//                 {/* 
//                 1. Edit button to be added after delete button
//                 2. Function to edit todo
//                 3. Define editingFlag in state with default value of -1
//                 4. in editing funciton set value of editing flag to the editing todo's id
//                 5. Dynamically frontend should show the input inplace of text for which we are editing the todo
//                     use ternary operator to define conditions and views 
//                 6. Add save button to add the save functionality 
//                 */}
//               </>
//              : 
//              <>
//                 <input id="editingTodo" type='text' placeholder='Edit Todo' Value={todoTemp.text}/> 
//                 <button onClick={()=>deleteTodo(todoTemp.id)}>Delete</button>
//                 <button onClick={()=>saveTodo(todoTemp)}>Save Todo</button>
//               </>            
//           }
//         </div>
//       })}
//     </div>
//   );
// }

function App() 
{
  //var todo = []
  const [todo, setTodo] = useState([
    {
      id: count++,
      text: "ABC",
      completed: false},
    {
      id: count++,
      text: "DEF",
      completed: false},
    {
      id: count++,
      text: "wert",
      completed: false},
    {
      id: count++,
      text: "jhgf",
      completed: true}
  ])
  const [editingFlag, setEditingFlag] = useState(-1)

  const inssertDefaultValue = () =>
  {
    var tempArray = []
    for(let countTemp = 0; countTemp<10; countTemp++ )
    {
      tempArray.push(
        {
          id: countTemp + 1,
          text: "Todo "+(countTemp + 1),
          completed: false
        })
      count = countTemp + 1
    }
    //console.log(tempArray)
    setTodo([...tempArray])
  }
  // if(todo.length === 0)
  //   inssertDefaultValue()

  //function to add todo to the array
  const addTodo = () =>
  {
    console.log("addTodo")
    var todoInput = document.getElementById("todoInput").value
    console.log("Todo text: "+todoInput)
    console.log("Todo Array: "+todo)

    const todoTempObject = {
      id: count,
      text: todoInput,
      completed: false
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
      if(todoTemp.id === tempId)
      {
        return false
      }
      else 
        return true
    })
    setTodo([...todoUpdate])
  }

  const checkedChange = (todoTemp) =>
  {
    console.log(todoTemp)
    todo.map((element) => 
    {
      if(todoTemp.id === element.id)
      {
        element.completed = !element.completed
      }
      return element
    })
    setTodo([...todo])
  }

  const editingTodo = (id) =>
  {
    setEditingFlag(id)
  }

  const saveTodo = (obj) =>
  {
    // 1. text to take out form input box
    // 2. update todo object with updated text
    // 3. Set Todo state
    // 4. Editing flag should be reset
    todo.map((element) =>
    {
      if(obj.id === element.id)
      {
        element.text = document.getElementById("editingTodo").value
      }
      return element
    })
    setTodo([...todo])
    setEditingFlag(-1)
  }

  console.log(todo)
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
        return <TodoListItem 
            todoObject={todoTemp} 
            checkedChange={checkedChange}
            deleteTodo={deleteTodo}
            saveTodo={saveTodo}
            editingTodo={editingTodo}
            editingFlag={editingFlag}
          />
      })}
    </div>
  );
}

export default App;
