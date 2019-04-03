import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

export class TodoList extends Component {
  render() {
    const { todos } = this.props;
    const todoItems = todos.map(todo => <Todo key={todo.id} todo={todo} />);
    return <ul className='todo-list'>{todoItems}</ul>;
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
