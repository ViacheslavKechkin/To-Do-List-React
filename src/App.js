import React, { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import MyContext from './context';
import Todolist from './components/Todolist/Todolist';
import Todoinput from './components/Todoinput/Todoinput';
import Openinput from './components/Openinput/Openinput';
import Mysnackbar from './components/Mysnackbar/Mysnackbar';
import './App.scss';

const App = () => {
  const { setTasks, mySnackBar, setMySnackBar } = useContext(MyContext);
  const { open } = mySnackBar;

  const handleCloseBar = () => {
    setMySnackBar({ open: false });
  };

  useEffect(() => {
    axios.get('http://localhost:8000/allTasks').then(res => {
      setTasks(res.data.data);
    });
  }, [setTasks])

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
            <Todoinput />
            <Todolist />
          </div>
        }>
        </Route>
        <Route path='/update/:id' element={
          <Openinput />} />
      </Routes>
    </div>
  );
}

export default App;