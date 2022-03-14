import Todo from '../Todo/Todo';
import './Todolist.scss';

const Todolist = ({ text, tasks, removeTask }) => {

  return (
    <div>
      {tasks.map((item, index) => {
        return (
          <Todo
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