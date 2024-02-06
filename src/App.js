//Development branch
import './App.css';
import React, { useEffect, useMemo, useState } from 'react';
import TodoListItem from './TodoListItem';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { Button } from '@mui/base';
import { blue } from '@mui/material/colors';

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
var todoCount = 0
function App() 
{
  //var todo = []
  const [open, setOpen] = useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const INCOMPLETE = "incomplete"
  const COMPLETED = "completed"
  const ALL = "all"

  const [filter, setFilter] = useState(INCOMPLETE)

  const [todo, setTodo] = useState([])
  //   {
  //     id: count++,
  //     text: "ABC",
  //     completed: false},
  //   {
  //     id: count++,
  //     text: "DEF",
  //     completed: false},
  //   {
  //     id: count++,
  //     text: "wert",
  //     completed: false},
  //   {
  //     id: count++,
  //     text: "jhgf",
  //     completed: true}
  // ])
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
  const openDialog = () =>
  {
    console.log("addTodo")
    handleClickOpen();
  }

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
    handleClose();

    // mocking todo array for map loop
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

  const handleFilter = (filter) =>
  {
    console.log("handleFilter")
    switch(filter)
    {
      case INCOMPLETE:
        console.log("incomplete")
        console.log("todoCount", todoCount)
        todoCount= 0
        todo.map(todoTemp => 
          {
            if(!todoTemp.completed)
            {
              todoCount+=1
            }
          })
        console.log("todoCount", todoCount)
        setFilter(INCOMPLETE)
        break;
      case COMPLETED:
        console.log("completed")
        todoCount= 0
        todo.map(todoTemp => 
          {
            if(todoTemp.completed)
            {
              todoCount+=1
            }
          })
        setFilter(COMPLETED)
        break;
      case ALL:
        console.log("all")
        todoCount = todo.length
        setFilter(ALL)
        break;
      default:
        console.log("default")
    }
  }
  
  useMemo(()=>
  {
    // console.log("todoCount in useeffect", todoCount)
    // todoCount = 0
    // todo.map(todoTemp => 
    //   {
    //     if(!todoTemp.completed)
    //     {
    //       todoCount+=1
    //     }
    //   })
    // console.log("todoCount in useeffect", todoCount)
    handleFilter("incomplete")
  }, [])

  const getTodoCount = () =>
  {
    return todoCount
  }

  //console.log(todo)
  return (
    <div >
      <h1 style={{textAlign: "center"}}>Todo App</h1>
      {
            todo.length > 0 ? 
            <>
              <div style={{textAlign: "center"}}>
                <div style={{margin: "12px", display: "inline-block"}}>
                  Total To-do Count: {getTodoCount()}
                </div>
                <div style={{width: "80%",textAlign: "center", margin: "12px", display: "inline-block"}}>
                  {filter === INCOMPLETE ? 
                    <label style={{backgroundColor: "#BCBCBD", margin: "15px"}} onClick={()=> handleFilter("incomplete")}><b>Incomplete</b>   </label> :
                    <label style={{margin: "50px"}}onClick={()=> handleFilter("incomplete")}>Incomplete   </label>
                  }
                  {filter === COMPLETED ? 
                    <label style={{backgroundColor: "#BCBCBD", margin: "50px"}} onClick={()=> handleFilter("completed")}><b>Completed</b>     </label> :
                    <label style={{margin: "50px"}} onClick={()=> handleFilter("completed")}>Completed    </label>
                  }
                  {filter === ALL ? 
                    <label style={{backgroundColor: "#BCBCBD", margin: "50px"}} onClick={()=> handleFilter("all")}><b>All</b>    </label> :
                    <label style={{margin: "50px"}} onClick={()=> handleFilter("all")}>All    </label>
                  }
                </div>
                <div style={{margin: "12px", display: "inline-block"}}>
                  <button onClick={openDialog}>Add todo</button>
                </div>
              </div>
            </> :
            <div></div>
          }
      <div style={{textAlign: "center", height: "100vh",verticalAlign: "middle"}}>
        {/* vertical-align: middle */}
        <div style={{textAlign: "center", height: "100vh", backgroundColor: "#008877", verticalAlign: "middle" }}>
          {
            todo.length === 0 ? 
            <div style={{textAlign: "center", backgroundColor: "#228877", verticalAlign: "middle" }}>
              <label style={{textAlign: "center"}}>No To-dos added yet<br/></label> 
              <button onClick={openDialog}>Add todo</button>
            </div> :
            <div></div>
          }
        </div>
        
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              component: 'form',
              // onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              //   event.preventDefault();
              //   const formData = new FormData(event.currentTarget);
              //   const formJson = Object.fromEntries((formData as any).entries());
              //   const email = formJson.email;
              //   console.log(email);
              //   handleClose();
              // },
            }}
          >
            <DialogTitle>Add new To-do</DialogTitle>
            <DialogContent>
              {/* <DialogContentText>
                To subscribe to this website, please enter your email address here. We
                will send updates occasionally.
              </DialogContentText> */}
              <TextField
                autoFocus
                required
                margin="dense"
                id="todoInput"
                name="todo"
                label="To-do"
                type="text"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              
              <Button style={{backgroundColor:blue}} onClick={addTodo}>Add todo</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </div>
        {/* <input
          id='todoInput'
          type='text'
          placeholder='Enter todo here'
        /> */}
        {/* <button onClick={openDialog}>Add todo</button> */}
      </div>
      {/* {todoCount = 0} */}
      {todo.map((todoTemp)=>
      {
        let returnComponent
        
        switch(filter)
        {
          case INCOMPLETE:
            if(!todoTemp.completed)
            {
              returnComponent = <TodoListItem
                key={todoTemp.id}
                todoObject={todoTemp} 
                checkedChange={checkedChange}
                deleteTodo={deleteTodo}
                saveTodo={saveTodo}
                editingTodo={editingTodo}
                editingFlag={editingFlag}
              />
            }            
            break;
          case COMPLETED:
            if(todoTemp.completed)
            {
              returnComponent = <TodoListItem
                key={todoTemp.id}
                todoObject={todoTemp} 
                checkedChange={checkedChange}
                deleteTodo={deleteTodo}
                saveTodo={saveTodo}
                editingTodo={editingTodo}
                editingFlag={editingFlag}
              />
            }     
            break;
          case ALL:
            returnComponent = <TodoListItem
                key={todoTemp.id}
                todoObject={todoTemp} 
                checkedChange={checkedChange}
                deleteTodo={deleteTodo}
                saveTodo={saveTodo}
                editingTodo={editingTodo}
                editingFlag={editingFlag}
              />
            break;
          default:
        }
        return returnComponent
      })}
    </div>
  );
}

export default App;
