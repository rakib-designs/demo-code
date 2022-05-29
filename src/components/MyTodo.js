import React from "react";
import style from "../style/MyTodo.module.css";

export default function MyTodo({ myTodos, id }) {
     const handleClick = (id) => {};

     return (
          <div className={style.myTodos}>
               <div>
                    <p className={style.paragraph}>{myTodos.title}</p>
                    <h2 className={style.body}>{myTodos.body}</h2>
               </div>
               <div>
                    <button
                         className={style.button}
                         onClick={() => handleClick(myTodos.id)}
                    >
                         Delete
                    </button>
               </div>
          </div>
     );
}
