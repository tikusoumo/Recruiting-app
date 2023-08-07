import { useReducer, useState } from "react";
import Todo from "./Todo";
const ACTIONS = {
    ADD_TODO: 'add_todo',
    TOGGLE_TODO: 'toggle-todo'
}
function reducer(todos,action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
          return  [...todos,newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
          return todos.map(todo => { 
            if (todo.id === action.payload.id) 
            { return {...todo, complete: !todo.complete} }
            return todo

    })
    
}
}
function newTodo(name){
 return {id: Date.now(),name: name ,complete: false}
}

export default function Test(){
  const [todo, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");


  function handleSubmit(e){
    e.preventDefault()
    dispatch({type: ACTIONS.ADD_TODO,payload: {name: name}})
    setName("")
  }


  return (
    <>
      <div style={{height: "100vh", color: "red"}} className="d-flex">
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value); 
        }}
      />
      </form>
      {todo.map(todo => {
        return <Todo key = {todo.id} todo = {todo} dispatch = {dispatch}/>
      })}
      </div>
    </>
  );
  
    }

