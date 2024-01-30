const TodoListItem = (props) =>
{
    return <div>
    { props.todoObject.completed ? 
      <input type='checkbox' onChange={() =>props.checkedChange(props.todoObject)} checked/> :
      <input type='checkbox' onChange={() =>props.checkedChange(props.todoObject)}/> }
    { props.editingFlag !== props.todoObject.id ? 
        <>
          { props.todoObject.completed ? 
            <s>{props.todoObject.text}</s> :
            (props.todoObject.text)
          }
          <button onClick={()=>props.deleteTodo(props.todoObject.id)}>Delete</button>
          <button onClick={()=>props.editingTodo(props.todoObject.id)}>Edit</button>
        </>
       : 
       <>
          <input id="editingTodo" type='text' placeholder='Edit Todo' Value={props.todoObject.text}/> 
          <button onClick={()=>props.deleteTodo(props.todoObject.id)}>Delete</button>
          <button onClick={()=>props.saveTodo(props.todoObject)}>Save Todo</button>
        </>            
    }
  </div>
}

export default TodoListItem