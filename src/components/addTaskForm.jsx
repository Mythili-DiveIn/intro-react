import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddTaskForm = ({ onAdd }) => {

    const [task, setTask] = useState('');
    const [duration, setDuration] = useState('');

    const onSubmit = (e) => {
     e.preventDefault();
     if(!task){
         alert('Please enter the task details')
         return
     }
     onAdd({ text:task ,duration })
     setTask('')
     setDuration('')
    }
    
    return (
        <div>
            <Form className="addTaskForm" onSubmit = {onSubmit} >
                <Form.Group >
                    <Form.Label>Task</Form.Label>
                    <Form.Control type="text" defaultValue={task} onChange={(e) => setTask(e.target.value)} placeholder="Add task" />
                </Form.Group>
                <Form.Group>
                    <Form.Label> Duration</Form.Label>
                    <Form.Control type="text" defaultValue = { duration } onChange={(e) => setDuration(e.target.value)} placeholder="Add duration of the task" />
                </Form.Group>
                <Form.Group>
                    <Button variant="primary"   type="submit" size="sm">Save </Button>
                </Form.Group>
                </Form>
        </div> 
    ) 
}
    
export default AddTaskForm 