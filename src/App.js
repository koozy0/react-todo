import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todos: [
      { id: 1, task: 'Lorem ipsum dolor sit amet', completed: false },
      { id: 2, task: 'consectetur adipiscing elit', completed: false },
      { id: 3, task: 'Cras ullamcorper libero vel', completed: false },
      { id: 4, task: 'Maecenas ante elit amet ultricies', completed: false },
      { id: 5, task: 'ornare placerat scelerisque sed', completed: false }
    ]
  };

  toggleHover = () => {
    this.setState({ ...this.state, hover: !this.state.hover });
  };

  toggleTodo = id => {
    const { todos } = this.state;
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ ...this.state, todos: newTodos });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className='react-todo'>
        <Navbar />

        <TodoList
          todos={todos}
          toggleHover={this.toggleHover}
          toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

export default App;
