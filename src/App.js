import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTaskForm from './components/addTaskForm'
//import Counter from './components/counter'
import { useState } from 'react'
import { Alert } from 'react-bootstrap';

const App= () => {
  const [showAddTask,setshowAddTask] = useState(false);
  const [tasks, setTasks] = useState (
    [

        {
            id:1,
            text: 'Requirements',
            duration: '1hr 45m'
        },
        {
            id:2,
            text: 'Define',
            duration: '1hr'
        },
        {
            id:3,
            text: 'Design',
            duration: '1hr 30m'
        },
        {
          id:4,
          text: 'Develop',
          duration: '1hr 30m'
      },
      {
        id:5,
        text: 'Deploy',
        duration: '1hr 30m'
    }
    ]
)
const addTask = (task)=> {
  const id = Math.floor(Math.random()*10000) + 1;
  console.log(id);
  const newTask = {id,...task}
  setTasks([...tasks,newTask])
  setshowAddTask(!showAddTask)


}

const onDeleteTask = (id) => {
  console.log('Trying to delete')
  setTasks(tasks.filter((task)=> task.id !== id)
  )
  }
  
  return (
    <div className="container">
     <Header showAddTask = {()=>setshowAddTask(!showAddTask)} title='Sample Program for Task Tracker'/> 
     {showAddTask && <AddTaskForm onAdd = {addTask}/>}
     {tasks.length>0 ? <Tasks tasks= {tasks} onDelete={onDeleteTask}/>: 
     <Alert className='noTaskAlert' variant="danger" >No specific tasks available</Alert>}
    </div>
  );
}

export default App;
