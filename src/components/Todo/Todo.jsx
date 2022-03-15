import React from "react";
import editImg from './img/edit.png';
import deleteImg from './img/delete.png';
import './Todo.scss';

const Todo = ({ item, removeTask, changeCheckbox, updateTask}) => {
  const {isCheck} = item;

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
      {!isCheck && (
        <img src={editImg} alt="edit" onClick={(e) => updateTask(item._id)}/>
      )}
      <img src={deleteImg} alt="delete" onClick={(e) => removeTask(item._id)} />
    </div>
  )
}

export default Todo;