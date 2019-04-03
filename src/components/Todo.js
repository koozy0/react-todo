import React, { Component } from 'react';

export class Todo extends Component {
  render() {
    const { todo } = this.props;
    return <li>{todo.task}</li>;
  }
}

export default Todo;
