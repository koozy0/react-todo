import React, { Component } from 'react';

export class Todo extends Component {
  render() {
    const { todos } = this.props;

    return todos.map(todo => (
      <li className='todo-item' key={todo.id}>
        {todo.task}
      </li>
    ));
  }
}

export default Todo;
