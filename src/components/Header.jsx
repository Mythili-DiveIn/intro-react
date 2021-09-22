import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';



const Header = ({ title , showAddTask }) => {

    
    return (
        <header className = 'header'>
            <h3> {title} </h3>
            <Button  variant="success" onClick={() =>showAddTask()}> Add new Task</Button>
        </header>
    )
} 

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.protoTypes = {

    title: PropTypes.string
}
export default Header



