import './Todoinput.scss';

const Todoinput = ({ addNewTask, setText, text }) => {

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className='todo-input'>
      <input
        type='text'
        value={text}
        onChange={handleChange} />
      <button onClick={() => addNewTask()}>Add Task</button>
    </div>
  )
}

export default Todoinput;