import './TodoListItem.css'
const TodoListItem = (props) =>
{
    return <div id="listItemStyle">
    { props.todoObject.completed ? 
      <input type='checkbox' onChange={() =>props.checkedChange(props.todoObject)} checked/> :
      <input type='checkbox' onChange={() =>props.checkedChange(props.todoObject)}/> }
    { props.editingFlag !== props.todoObject.id ? 
        <>
          { props.todoObject.completed ? 
            <label><s>{props.todoObject.text}</s></label> :
            <label>{props.todoObject.text}</label>
          }
          <button onClick={()=>props.deleteTodo(props.todoObject.id)}>Delete</button>
          <button onClick={()=>props.editingTodo(props.todoObject.id)}>Edit</button>
        </>
       : 
       <div>
          <input id="editingTodo" type='text' placeholder='Edit Todo' Value={props.todoObject.text}/> 
          <button onClick={()=>props.deleteTodo(props.todoObject.id)}>Delete</button>
          <button onClick={()=>props.saveTodo(props.todoObject)}>Save Todo</button>
        </div>            
    }
  </div>
}

export default TodoListItem