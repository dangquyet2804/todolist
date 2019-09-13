import React, { Component } from 'react';

export class TodoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props;
        return (
        <li className="list-group-item d-flex justify-content-between">
            <h6>{title}</h6>
            <div className="icon">
                <i className="fas fa-pen text-success" onClick = {handleEdit}/>&nbsp;&nbsp;
                <i className="fas fa-trash text-danger" onClick = {handleDelete} />
            </div>
        </li>
        );
    }
}

export default TodoItem;
