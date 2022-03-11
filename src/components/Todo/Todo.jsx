import React from "react";
import './Todo.scss';
import deleteImg from './img/delete.png';
import editImg from './img/edit.png';

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

      <img src={editImg} alt="edit"></img>

      <img src={deleteImg} alt="delete"></img>

    </div>
  )
}

export default Todo;