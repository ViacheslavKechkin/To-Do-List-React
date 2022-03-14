import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todolist from './components/Todolist/Todolist';
import Todoinput from './components/Todoinput/Todoinput';
import './App.scss';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/allTasks').then(res => {
      setTasks(res.data.data);
    });
  }, [])

  const addNewTask = async () => {
    await axios.post('http://localhost:8000/createTask', {
      text,
      isCheck: false
    }).then(res => {
      setText('');
      setTasks(res.data.data);
    });
  }

  const removeTask = async (id) => {
    await axios.delete(`http://localhost:8000/deleteTask?id=${id}`).then(res => {
      setTasks(res.data.data);
    });
  }

  const changeCheckbox = async (_id, isCheck) => {

    await axios.patch('http://localhost:8000/updateTask', {
      _id,
      isCheck: !isCheck
    }).then(res => {
      setTasks(res.data.data);
    });
  }

  return (
    <div className='App'>
      <h1 className='header'>My ToDo</h1>
      <Todoinput
        addNewTask={addNewTask}
        setText={setText}
        text={text}
      />
      <Todolist
        changeCheckbox={changeCheckbox}
        removeTask={removeTask}
        tasks={tasks}
      />
    </div>
  );
}

export default App;