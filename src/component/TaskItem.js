export default function TaskItem(props) {
    const {status, text, setTaskList, taskList, index} = props;

    const newTodos = [...taskList];
    const handlerOnChange = (e) => {
        const checkStatus = e.target.checked;
        newTodos[index] = {text,done: checkStatus};
        setTaskList(newTodos);
    }

    const destroyTodo = () => {
        newTodos.splice(index, index);
        if(index === 0){
            newTodos.splice(index, 1);
        }
        setTaskList(newTodos)
    }
    return (
        <li className={status}> {/* view */}
          <div className="view">
            <input onChange={handlerOnChange} className="toggle" type="checkbox" defaultChecked={status === 'completed' ? true : false} />
            <label>{text}</label>
            <button onClick={destroyTodo} className="destroy"></button>
          </div>
        </li>
    )
}
