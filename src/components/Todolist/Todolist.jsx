import Todo from '../Todo/Todo';
import './Todolist.scss';

const Todolist = ({ text, tasks }) => {

  return (
    <div>
      {tasks.map((item, index) => {
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