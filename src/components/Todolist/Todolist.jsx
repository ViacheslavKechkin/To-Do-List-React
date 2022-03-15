import Todo from '../Todo/Todo';
import lodash from 'lodash'
import './Todolist.scss';

const _ = lodash;

const Todolist = ({ tasks, removeTask, changeCheckbox, updateTask }) => {

  return (
    <div className='list-wrapper'>
      {_.sortBy(tasks, 'isCheck').map((item, index) => {
        return (
          <Todo
            updateTask={updateTask}
            changeCheckbox={changeCheckbox}
            removeTask={removeTask}
            item={item}
            key={`index-${index}`}
          />
        )
      })}
    </div>
  )
}

export default Todolist;