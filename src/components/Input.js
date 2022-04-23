import React from 'react';

export default function Input({ type, placeholder, InputValue, setInputValue, inputName }) {
  
  const handleChange = (event) => {
    const name = event.target.name;
    setInputValue((oldInput) => {
      return {...oldInput, [name]: event.target.value}
    })
  }
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={inputName}
      value={InputValue}
      onChange={() => setInputValue(handleChange)}
    />
  )
}
