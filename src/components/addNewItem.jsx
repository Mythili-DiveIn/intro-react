import React, { Component } from 'react';

import { Button, Table, FormControl } from 'react-bootstrap';


class Increment extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    handleChange = (person) => {
        console.log('test sample')

    }

    render() {
        const persons = [{ "id": 1, 'name': 'Mohan', 'lname': 'Rao' }, { "id": 2, 'name': 'Raghu', 'lname': 'Nath' }, { "id": 3, 'name': 'Rama', 'lname': 'Rao' }];
        return <div class="main">
            <h3>Sample Program for adding new Item to a Table</h3>
            <p>Please enter the detailes to be added to the Table</p>
            <FormControl ref={this.textInput} type="text" onChange={() => this.handleChange()} />
            <Table class="table" striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((person) => {
                        return <tr>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.lname}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
            <Button variant="outline-primary"> Add New Item</Button>{' '}


        </div>;
    }
}

export default Increment;



