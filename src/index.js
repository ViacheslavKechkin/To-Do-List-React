import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import MyContext from './context';
import App from './App';
import './index.scss';

const Main = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <React.StrictMode>
      <MyContext.Provider value={{ tasks, setTasks }}>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
