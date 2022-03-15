import React from "react";
import { Link } from 'react-router-dom';
import editImg from './img/edit.png';
import deleteImg from './img/delete.png';
import './Todo.scss';

const Todo = ({ item, removeTask, changeCheckbox }) => {
  const { isCheck } = item;
  const { _id } = item;
  const { text } = item;

  return (
    <div className="el-todo">
      <input
        type='checkbox'
        checked={item.isCheck}
        onChange={(e) => changeCheckbox(_id, isCheck)}
      />
      <div className="el-text">
        {text}
      </div>
      {!isCheck && (
        <Link to={`update/${_id}`}><img src={editImg} alt="edit" /></Link>
      )}
      <img src={deleteImg} alt="delete" onClick={(e) => removeTask(_id)} />
    </div>
  )
}

export default Todo;