import React from "react";
import editImg from './img/edit.png';
import deleteImg from './img/delete.png';
import './Todo.scss';

const Todo = ({ item, removeTask, changeCheckbox }) => {
  if (item.isCheck === true) {
    return (
      <div className="el-todo">
        <input
          type='checkbox'
          checked={item.isCheck}
          onChange={(e) => changeCheckbox(item._id, item.isCheck)}
        />
        <div className="el-text">
          {item.text}
        </div>
        <img className="imgOverflow" src={editImg} alt="edit" />
        <img src={deleteImg} alt="delete" onClick={(e) => removeTask(item._id)} />
      </div>
    )
  } else {
    return (
      <div className="el-todo">
        <input
          type='checkbox'
          checked={item.isCheck}
          onChange={(e) => changeCheckbox(item._id, item.isCheck)}
        />
        <div className="el-text">
          {item.text}
        </div>
        <img src={editImg} alt="edit" />
        <img src={deleteImg} alt="delete" onClick={(e) => removeTask(item._id)} />
      </div>
    )
  }
}

export default Todo;