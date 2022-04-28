import React, { useContext } from "react";
import MyContext from '../../context';
import './Todoinput.scss';

const Todoinput = () => {
  const { text, setText, addNewTask } = useContext(MyContext);

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className='todo-input'>
      <input
        type='text'
        value={text}
        onChange={handleChange} />
      <button onClick={() => addNewTask()}>Add Task</button>
    </div>
  )
}

export default Todoinput;