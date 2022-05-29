import React from 'react';
import Todo from './Todo';

export default function Todos({todos, removeTodo}) {
  return (
       <>{
          
            todos.map((todo) => {
                 return <Todo todo={todo} key={todo.id} removeTodo={removeTodo }/>
          })
       
       }</>
  )
}
