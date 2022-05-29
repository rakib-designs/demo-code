import React from "react";
import style from "../style/Todo.module.css";

export default function Todo({ todo, removeTodo }) {
     const handleClick = (id) => {
          removeTodo(id);
     };

     return (
          <article className={style.todo}>
               <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.desc}</p>
               </div>
               <div onClick={() => handleClick(todo.id)}>
                    <p>delete</p>
               </div>
          </article>
     );
}
