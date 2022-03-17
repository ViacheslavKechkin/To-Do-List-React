import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Mysnackbar from './components/Mysnackbar/Mysnackbar';
import Todoinput from './components/Todoinput/Todoinput';
import Openinput from './components/Openinput/Openinput';
import Todolist from './components/Todolist/Todolist';
import MyContext from './context';
import './App.scss';

const App = () => {
  const [text, setText] = useState('');
  const [textUpdate, setTextUpdate] = useState('');
  const [mySnackBar, setMySnackBar] = useState({ open: false });
  
  const {tasks, setTasks} = useContext(MyContext);
  
  const { open } = mySnackBar;

  const handleCloseBar = () => {
    setMySnackBar({open: false });
  };

  useEffect(() => {
    axios.get('http://localhost:8000/allTasks').then(res => {
      setTasks(res.data.data);
    });
  })

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
      setMySnackBar({ open: true})
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
      <Mysnackbar
        open={open}
        handleCloseBar={handleCloseBar}
      />
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