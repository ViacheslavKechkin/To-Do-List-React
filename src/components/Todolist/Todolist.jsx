import React, { useContext } from "react";
import _ from 'lodash'
import Todo from '../Todo/Todo';
import MyContext from '../../context';
import './Todolist.scss';

const Todolist = () => {
  const {tasks} = useContext(MyContext);

  return (
    <div className='list-wrapper'>
      {_.sortBy(tasks, 'isCheck').map((item, index) => {

        return (
          <Todo
            item={item}
            key={`index-${index}`}
          />
        )
      })}
    </div>
  )
}

export default Todolist;