import React, { Component } from 'react';
import TodoItem from './TodoItem';
export class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props;
        return (
        <div className="container">
            <div className="col-sm-12 text-center">
            <h2>To Do List</h2>
            <hr />
            </div>
            <ul className="list-group my-3">
                {
                    items.map((item) => {
                        return <TodoItem key = {item.id} title = {item.title} handleDelete = {() => handleDelete(item.id)} handleEdit = {() => handleEdit(item.id)}/>
                    })
                }
            </ul>
            <button type="button" className="btn btn-danger btn-lg btn-block" onClick = {clearList}>Clear List </button>
        </div>
        );
    }
}

export default TodoList;
