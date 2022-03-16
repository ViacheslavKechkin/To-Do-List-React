import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Todoinput from './components/Todoinput/Todoinput';
import Openinput from './components/Openinput/Openinput';
import Todolist from './components/Todolist/Todolist';
import './App.scss';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [textUpdate, setTextUpdate] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/allTasks').then(res => {
      setTasks(res.data.data);
    });
  }, [])

  const addNewTask = async () => {
    if (text !== '') {
      await axios.post('http://localhost:8000/createTask', {
        text,
        isCheck: false
      }).then(res => {
        setText('');
        setTasks(res.data.data);
      });
    } else {
      alert('Enter task text, please')
    }
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

      <Routes>
        <Route path='/' element={
          <div>
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
        }>
        </Route>
        <Route path='/update/:id' element={
          <Openinput
            setTasks={setTasks}
            setTextUpdate={setTextUpdate}
            textUpdate={textUpdate}
          />} />
      </Routes>
    </div>
  );
}

export default App;