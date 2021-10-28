/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { TaskItem } from "./component";

function App() {
  const [taskList, setTaskList] = useState([
    {
      "text": "Taste JavaScript",
      "done": true
    },
    {
      "text": "Code furiously",
      "done": true
    },
    {
      "text": "Promote Mavo",
      "done": false
    },
    {
      "text": "Give talks",
      "done": false
    },
    {
      "text": "Write tutorials",
      "done": true
    },
    {
      "text": "Have a life!",
      "done": false
    }
  ]);

  const addTaskHandler = (e) => {
      if(e.key === 'Enter'){
        let keyword = e.target.value;
        setTaskList([...taskList, {text: keyword, done: false}]);
      }
  }
  const newTodos = [...taskList];

  const allClearTodos = () => {
      taskList.map((list, index) => {
        if(list.done === true){
          delete newTodos[index];
          setTaskList(newTodos)
        }
      })
  }

  const filterTodos = (e,status) => {
    e.preventDefault();
    const filter = taskList.filter(list => {
      if(status === 'active'){
        return list.done === false;
      }
      if(status === 'completed'){
        return list.done === true;
      }
      if(status === 'all'){
        return list;
      }
    })
    console.log(filter)
    setTaskList(filter)
    
  }
 
  return (
    <section mv-app="todoapp" className="todoapp" mv-bar="none" mv-storage="local" mv-autosave="3" mv-mode="edit" mv-init="#data">
    <header className="header">
      
      <h1>todos</h1>
      <input tabIndex="0" type="text" onKeyPress={(e) => addTaskHandler(e)} className="new-todo" name="todo" placeholder="What needs to be done?" />
 
    </header>
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all"> Mark all as complete </label>
      <ul className="todo-list">

          {taskList.map((list, index) => (
            <TaskItem key={index} status={list.done ? 'completed' : 'view'} text={list.text} setTaskList={setTaskList} taskList={taskList} index={index} />
          ))}
      
      </ul>
    </section>
    <footer className="footer">
        <span className="todo-count">
          <strong>2</strong> items left </span>
        <ul className="filters">
          <li>
            <a onClick={(e) => filterTodos(e,'all')} className="selected">All</a>
          </li>
          <li>
            <a onClick={(e) => filterTodos(e,'active')} href="">Active</a>
          </li>
          <li>
            <a onClick={(e) => filterTodos(e,'completed')} href="">Completed</a>
          </li>
        </ul>
        <button onClick={allClearTodos} className="clear-completed"> Clear completed </button>
    </footer>
  </section>
  );
}

export default App;