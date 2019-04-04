import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import uuid from 'uuid';

import Navbar from './components/layouts/Navbar';
import About from './components/pages/About';
import AddTodo from './components/todos/AddTodo';
import TodoList from './components/todos/TodoList';

const TODOS = [
  { id: uuid.v4(), task: 'Lorem ipsum dolor sit amet', ompleted: false },
  { id: uuid.v4(), task: 'consectetur adipiscing elit', completed: false },
  { id: uuid.v4(), task: 'Cras ullamcorper libero vel', completed: false },
  { id: uuid.v4(), task: 'Maecenas ante elit amet', completed: false },
  { id: uuid.v4(), task: 'ornare placerat scelerisque', completed: false }
];

class App extends Component {
  state = {
    todos: TODOS
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

  deleteTodo = id => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);
    this.setState({ ...this.state, todos: newTodos });
  };

  addTodo = task => {
    const { todos } = this.state;
    const newTodo = { id: uuid.v4(), task, completed: false };
    this.setState({ ...this.state, todos: [...todos, newTodo] });
  };

  render() {
    const { todos } = this.state;

    return (
      <Router>
        <div className='container'>
          <Navbar />

          <Route
            exact
            path='/'
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <TodoList
                  todos={todos}
                  toggleTodo={this.toggleTodo}
                  deleteTodo={this.deleteTodo}
                />
              </React.Fragment>
            )}
          />

          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
