import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';



const Header = ({ title , showAddTask,showAdd }) => {

    
    return (
        <header className = 'header'>
            <h3> {title} </h3>
            <Button className="addNewBtn" variant={ showAdd ? "danger": 'success'} onClick={() =>showAddTask()}> { showAdd ? "Close": 'Add'}</Button>
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



