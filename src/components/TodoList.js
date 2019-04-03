import React, { Component } from 'react';
import Todo from './Todo';

export class TodoList extends Component {
  render() {
    const { todos } = this.props;

    return (
      <ul className='todo-list'>
        <Todo todos={todos} />
      </ul>
    );
  }
}

export default TodoList;
