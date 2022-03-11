import Todo from '../Todo/Todo';
import './Todolist.scss';

const Todolist = ({ text, tasks }) => {
console.log(tasks);
  return (
    <div>
      {tasks.map((item, index) => {
        console.log(item);
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