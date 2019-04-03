import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

export class TodoList extends Component {
  render() {
    const { todos, toggleTodo, deleteTodo } = this.props;

    const todoItems = todos.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    ));

    return (
      <ul className='todo-list' style={styles.ul}>
        {todoItems}
      </ul>
    );
  }
}

const styles = {
  ul: {
    padding: '16px 0'
  }
};

// PropTypes
TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
