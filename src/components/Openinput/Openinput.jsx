import React, { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash'
import backImg from './img/back.png';
import doneImg from './img/done.png';
import './Openinput.scss'

const Openinput = ({ setTasks, setTextUpdate, textUpdate }) => {
  const params = useParams();
  const { id } = params;
  

  useEffect(() => {
    axios.get('http://localhost:8000/allTasks').then(res => {
      const myItem = _.find(res.data.data, ['_id', id]);
      const { text } = myItem;
      setTextUpdate(text)
    });
  }, [id, setTextUpdate])

  const handleChangeNew = (e) => {
    setTextUpdate(e.target.value)
  }

  const updateTask = async (_id) => {
    const text = textUpdate;

    if (textUpdate !== '') {
      await axios.patch('http://localhost:8000/updateTask', {
        _id,
        text
      }).then(res => {
        setTextUpdate('')
        setTasks(res.data.data);
      });
    } else {
      alert('Enter task text, please')
    }
  }

  return (
    <div className='wrapper-update'>
      <h1>Update your task</h1>
      <div className='update-task'>
        <input
          type='text'
          value={textUpdate}
          onChange={handleChangeNew} />
        {textUpdate !== '' && (
          <Link to='/'><img src={doneImg} alt="saveEdit" onClick={(e) => updateTask(id)} /></Link>
        )}
        <Link to='/'><img src={backImg} alt="backImg" /></Link>
      </div>
    </div>
  )
}

export default Openinput;