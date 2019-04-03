import React, { Component } from 'react';
import Todo from './Todo';

export class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return todos.map(todo => <Todo todo={todo} />);
  }
}

export default TodoList;
