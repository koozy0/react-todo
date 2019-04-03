import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todo extends Component {
  render() {
    const { todo } = this.props;

    return <li className='todo-item'>{todo.task}</li>;
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired
};

export default Todo;
