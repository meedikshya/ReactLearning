
import './App.css';
import { useState } from "react";

//importing task components
import { Task } from "./TaskC";


//TO DO APP

function App() {

  const[listTask, setListTask] = useState([]);
  const[newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {

     id : listTask.length === 0 ? 1 : listTask[listTask.length-1].id + 1,
     taskName : newTask,
     completed : false,
    };
    setListTask(task.taskName !== "" ? [...listTask, task] : listTask);
    
  };

  const deleteTask = (id) => {
    const newToDoList = listTask.filter((task) => {
      return task.id !== id
    });
    setListTask(newToDoList)
  }

  const completeTask = (id) => {
      setListTask((listTask) =>
        listTask.map((task) => {
           if(task.id === id) {
            return { ...task, completed: true };
           } else {
            return task;
           }
        })
      );
  };

  return (
    <div className='App'>

    <div className='addTask'>
    <input onChange={handleChange} />
    <button onClick={addTask}>Add Task</button>

    </div>

    <div className='ListTask'>
    {listTask.map((task) => {
      return (
       <Task
        taskName= {task.taskName}
        id = {task.id} 
        deleteTask = {deleteTask} 
        completed = {task.completed}
        completeTask = {completeTask}
         />
      );
    })}

    </div>
  </div>
  );
}


export default App;
