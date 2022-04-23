import React, { useState } from 'react';
import Button from './Button';
import Form from './Form';
import Input from './Input';

export default function Layout() {

     const [inputValue, setInputValue] = useState({ title: "", desc: "" })
     
     const { title, desc } = inputValue;

     const handleSubmit = (event) => {
          event.preventDefault()
          console.log(inputValue)
     }

     return (
          <div>
               <Form handleSubmit={handleSubmit}>
                    <Input
                         type="text"
                         placeholder="Enter Your Title"
                         InputValue={title}
                         setInputValue={setInputValue}
                         inputName="title" 
                    />
                    <Input
                         type="textarea"
                         placeholder="Enter Your Description"
                         InputValue={desc}
                         setInputValue={setInputValue}
                         inputName="desc"
                    />
                    <Button>Add</Button>
               </Form>   
               
          </div>
     )
}
