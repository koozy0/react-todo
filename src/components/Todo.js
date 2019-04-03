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

  hasHoverStyles = hover =>
    hover
      ? { background: 'rgba(0, 0, 0, .12)' }
      : { background: 'transparent' };

  toggleHover = hover => this.setState({ hover });

  render() {
    const { todo, toggleTodo, deleteTodo } = this.props;

    const input = (
      <input
        type='checkbox'
        style={styles.input}
        onChange={toggleTodo.bind(this, todo.id)}
      />
    );

    const span = <span style={styles.span}>{todo.task}</span>;

    const button = (
      <button
        type='button'
        style={styles.button}
        onClick={deleteTodo.bind(this, todo.id)}>
        <div className='delete-icon' style={styles.deleteIconLeft} />
        <div className='delete-icon' style={styles.deleteIconRight} />
      </button>
    );

    return (
      <li
        className='todo-item'
        style={{
          ...this.hasLineThrough(todo),
          ...this.hasHoverStyles(this.state.hover),
          ...styles.li
        }}
        onMouseEnter={this.toggleHover.bind(this, true)}
        onMouseOver={this.toggleHover.bind(this, true)}
        onMouseLeave={this.toggleHover.bind(this, false)}>
        <label style={styles.label}>
          {input} {span} {button}
        </label>
      </li>
    );
  }
}

// Styles
const styles = {
  li: {
    lineHeight: '40px',
    padding: '8px 32px',
    cursor: 'pointer',
    listStyle: 'none',
    transition: 'background 250ms'
  },

  label: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'inherit'
  },

  input: {
    margin: '4px',
    cursor: 'inherit'
  },

  span: {
    marginLeft: '8px',
    flex: '1',
    cursor: 'inherit'
  },

  button: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    border: '1px solid gray',
    background: 'transparent',
    cursor: 'inherit',
    outline: 'none',
    color: 'gray',
    position: 'relative',
    margin: '4px'
  },

  deleteIconLeft: {
    height: '8px',
    width: '8px',
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: '1px 1px 0 0',
    position: 'absolute',
    top: '7px',
    left: '2px',
    transform: 'rotate(45deg)'
  },

  deleteIconRight: {
    height: '8px',
    width: '8px',
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: '1px 0 0 1px',
    position: 'absolute',
    top: '7px',
    left: '12px',
    transform: 'rotate(-45deg)'
  }
};

// PropTypes
Todo.propTypes = {
  todo: PropTypes.object.isRequired
};

export default Todo;
