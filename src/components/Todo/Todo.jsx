import React from "react";
import editImg from './img/edit.png';
import deleteImg from './img/delete.png';
import './Todo.scss';

const Todo = ({text, item}) => {

  return (
    <div className="el-todo">
      <input
        type='checkbox'
        value=''
      // onClick={(e) => hendleToggle()}
      />
      <div className="el-text">
        {item.text}
      </div>
      <img src={editImg} alt="edit"/>
      <img src={deleteImg} alt="delete"/>
    </div>
  )
}

export default Todo;