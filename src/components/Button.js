import React from 'react';
import style from '../style/Button.module.css';

export default function Button({children}) {
  return (
       <button className={style.button}>{children}</button>
  )
}
