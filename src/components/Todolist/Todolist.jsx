import Todo from '../Todo/Todo';
import './Todolist.scss';

const Todolist = ({ tasks, removeTask, changeCheckbox }) => {

  return (
    <div>
      {tasks.map((item, index) => {
        return (
          <Todo
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