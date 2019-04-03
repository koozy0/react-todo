import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todo extends Component {
  state = {
    hover: false
  };

  hasLineThrough = todo =>
    todo.completed
      ? { textDecoration: 'line-through' }
      : { textDecoration: 'none' };

  hasHoverStyles = hover => (hover ? { color: 'red' } : { color: 'black' });

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const { todo, toggleTodo } = this.props;

    return (
      <li
        className='todo-item'
        style={{
          ...this.hasLineThrough(todo),
          ...this.hasHoverStyles(this.state.hover),
          ...todoItemStyle
        }}
        onMouseEnter={this.toggleHover.bind(this)}
        onMouseLeave={this.toggleHover.bind(this)}>
        <label style={labelStyle}>
          <input
            type='checkbox'
            style={inputStyle}
            onChange={toggleTodo.bind(this, todo.id)}
          />
          <span style={spanStyle}>{todo.task}</span>
        </label>
      </li>
    );
  }
}

// Styles
const todoItemStyle = { lineHeight: '40px', padding: '8px 16px' };
const labelStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
};
const inputStyle = { margin: '4px' };
const spanStyle = { marginLeft: '8px', flex: '1' };

// PropTypes
Todo.propTypes = {
  todo: PropTypes.object.isRequired
};

export default Todo;
