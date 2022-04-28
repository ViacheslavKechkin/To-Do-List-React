import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import App from './App';
import MyContext from './context';
import './index.scss';

const Main = () => {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [textUpdate, setTextUpdate] = useState('');
  const [mySnackBar, setMySnackBar] = useState({ open: false });

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

  return (
    <React.StrictMode>
      <MyContext.Provider value={{
        tasks, 
        setTasks, 
        text, 
        setText,  
        removeTask, 
        changeCheckbox, 
        textUpdate, 
        setTextUpdate,
        mySnackBar,
        setMySnackBar,
        addNewTask
        }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MyContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

reportWebVitals();
