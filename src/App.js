import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
const uuidv1 = require('uuid/v1');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            item: '',
            id: uuidv1(),
            displayEdit: false         
        }
    }
    
    componentWillMount() {
        var temp = JSON.parse(localStorage.getItem('item'));
        this.setState({
            items: temp
        });
    }
    
    handleChange = (e) => {
        this.setState({
            item: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

    const newItem = {
        id: this.state.id,
        title: this.state.item
    };
    console.log(newItem);
    const updatedItems = [...this.state.items, newItem]
    this.setState({
        items: updatedItems,
        item: '',
        id: uuidv1(),
        displayEdit: false
    });
    localStorage.setItem('item', JSON.stringify(updatedItems));
    }

    clearList = () => {
        this.setState({
            items: []  
        });
    }

    handleDelete = (id) => {
        const filterItem = this.state.items.filter(item => (item.id !==id))
        this.setState({
            items: filterItem
        });
        localStorage.setItem('item', JSON.stringify(filterItem));
    }
    handleEdit = (id) => {
        console.log(id);
        if (!this.state.displayEdit) {
        const filterItem = this.state.items.filter(item => (item.id !== id))
        const selectedItem = this.state.items.find(item => (item.id === id))
        this.setState({
            items: filterItem,
            item: selectedItem.title,
            displayEdit: true,
            id: id
        });
        localStorage.setItem('item', JSON.stringify(filterItem));
        }
    }
  render() {
    return (
        <div>
        {/* Header */}
        <div className="container">
            <div className="row">
            <div className="col-sm-12 text-center">
                <h2>To Do Input</h2>
                <hr />
            </div>
            </div>
        </div>
        {/* Input */}
        <TodoInput item = {this.state.item} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} displayEdit = {this.state.displayEdit}/>
        {/* List */}
        <TodoList items = {this.state.items} clearList = {this.clearList} handleDelete = {this.handleDelete} handleEdit = {this.handleEdit} />
    </div>
    );
  }
}

export default App;
