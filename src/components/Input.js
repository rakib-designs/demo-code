import React from 'react';
import style from '../style/Input.module.css';

export default function Input({ type, placeholder, InputValue, setInputValue }) {
  
  return (
    <input
      className={style.input}
      type={type}
      placeholder={placeholder}
      value={InputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />
  )
}
