import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import style from "../style/Layout.module.css";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";
// import Todos from "./Todos";
import MyTodo from "./MyTodo";

import useTodos from "./useTodos";

export default function Layout() {
     const myData = useTodos();

     const [title, setTitle] = useState("");
     const [body, setBody] = useState("");
     const [data, setData] = useState([...myData]);

     // Add todo

     // const handleSubmit = (event) => {
     //      event.preventDefault();
     //      setTodos((prevTodo) => {
     //           return [...prevTodo, { id: uuidv4(), title, desc }];
     //      });
     //      if (title === "") return;
     //      if (desc === "") return;
     //      setTitle("");
     //      setDesc("");
     // };

     // Remove Todo

     // const handleRemove = (id) => {
     //      setTodos((prevTodo) => {
     //           const filteredTodo = prevTodo.filter((todo) => todo.id !== id);
     //           return filteredTodo;
     //      });
     // };

     // Loading fetch data

     // add Todo

     const handleSubmit = (event) => {
          event.preventDefault();

          const newData = {
               title,
               body,
          };

          fetch("http://localhost:3000/todos", {
               method: "POST",
               headers: { "content-type": "application/json" },
               body: JSON.stringify(newData),
          })
               .then((res) => {
                    return res.json();
               })
               .then((data) => {
                    return setData([...myData, data]);
               });
     };

     const newFunc = (id) => {
          console.log(id);
     };

     return (
          <div className={style.todoContainer}>
               <Form handleSubmit={handleSubmit}>
                    <Input
                         type="text"
                         placeholder="Enter Your Title"
                         InputValue={title}
                         setInputValue={setTitle}
                    />
                    <Input
                         type="textarea"
                         placeholder="Enter Your Description"
                         InputValue={body}
                         setInputValue={setBody}
                    />
                    <Button>Add</Button>
               </Form>

               {data.map((data) => {
                    return <MyTodo key={data.id} myTodos={data} id={newFunc} />;
               })}
          </div>
     );
}
