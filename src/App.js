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

  render() {
    return (
      <div className='react-todo'>
        <Navbar />

        <ul>
          <TodoList todos={this.state.todos} />
        </ul>
      </div>
    );
  }
}

export default App;
