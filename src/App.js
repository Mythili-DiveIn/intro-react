import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTaskForm from './components/addTaskForm'
//import Counter from './components/counter'
import { useState } from 'react'
import { useEffect } from 'react'
import { Alert } from 'react-bootstrap';

const App= () => {
  const [showAddTask,setshowAddTask] = useState(false);
  const [tasks, setTasks] = useState ({});

const addTask = (task)=> {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "text":task['text'],
      "duration": task['duration']
    }),
  };
  fetch("http://localhost:3000/tasks", requestOptions)
    .then((response) => response.json())
    .then((data) => {
    });

  setshowAddTask(!showAddTask)
}

const onDeleteTask = (id) => {
  console.log('Trying to delete')
  fetch("http://localhost:3000/tasks/" + id, { method: "DELETE" },)
    .then(() => {});
  }
  
  useEffect(() => {
    fetch('http://localhost:3000/tasks')
    .then(response => response.json())
    .then(data => setTasks(data) );
  }, [tasks]);
  
  return (
    <div className="container">
     <Header showAddTask = {()=>setshowAddTask(!showAddTask)}  showAdd={showAddTask} title='Sample Program for Task Tracker'/> 
     {showAddTask && <AddTaskForm onAdd = {addTask}/>}
     {tasks.length> 0 ? <Tasks tasks= {tasks} onDelete={onDeleteTask}/>: 
     <Alert className='noTaskAlert' variant="danger" >No specific tasks available</Alert>}
    </div>
  );
}

export default App;
