import React from 'react'
import { ListGroup,CloseButton } from 'react-bootstrap';


const Tasks = ({ tasks,onDelete }) => {
    return (
        <div>
            {tasks.map((task) => (
                <ListGroup className='taskList'>
                    <ListGroup.Item variant="secondary" key={task.id}> 
                    <h6>{task.text}</h6> 
                    <p>{task.duration}</p>
                    <CloseButton onClick={() => onDelete(task.id)}></CloseButton>
                    </ListGroup.Item>
                    
                </ListGroup>
            )
            )}

        </div>
    )
}

export default Tasks

