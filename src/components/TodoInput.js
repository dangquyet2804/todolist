import React, { Component } from 'react';

class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, displayEdit} = this.props;
        return (
        <div className="container">
            <div className="card card-body my-3">
                <form onSubmit = {handleSubmit}> 
                    <div className="input-group my-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        <i className="fas fa-tasks text-success" />
                        </div>
                    </div>
                    <input type="text" className="form-control" placeholder="Add A Todo Item"
                    value = {item} onChange = {handleChange}/></div>
                <button type="submit" className = {displayEdit ? "btn btn-success btn-lg btn-block" : "btn btn-primary btn-lg btn-block"}>{displayEdit ? "Edit Item" : "Add Item"}</button>
                </form>
            </div>
        </div> 
        );
    }
}

export default TodoInput;