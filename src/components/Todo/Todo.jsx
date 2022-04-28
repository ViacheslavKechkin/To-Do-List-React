import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import MyContext from '../../context';
import editImg from './img/edit.png';
import deleteImg from './img/delete.png';
import './Todo.scss';

const Todo = ({ item }) => {
  const {removeTask, changeCheckbox} = useContext(MyContext)
  const { isCheck, _id, text } = item;

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