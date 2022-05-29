import { useEffect, useState } from "react";

export default function useTodos() {
     const [todos, setTodos] = useState([]);

     useEffect(() => {
          fetch("http://localhost:3000/todos")
               .then((res) => {
                    if (!res.ok) {
                         throw Error("Data Not fetch!");
                    }
                    return res.json();
               })
               .then((data) => {
                    setTodos(data);
               })
               .catch((err) => {
                    console.log(err.message);
               });
     }, []);

     return todos;
}
