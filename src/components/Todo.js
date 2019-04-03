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

  toggleHover = () => this.setState({ hover: !this.state.hover });

  render() {
    const { todo, toggleTodo } = this.props;

    const input = (
      <input
        type='checkbox'
        style={styles.input}
        onChange={toggleTodo.bind(this, todo.id)}
      />
    );

    const span = <span style={styles.span}>{todo.task}</span>;

    return (
      <li
        className='todo-item'
        style={{
          ...this.hasLineThrough(todo),
          ...this.hasHoverStyles(this.state.hover),
          ...styles.li
        }}
        onMouseEnter={this.toggleHover.bind(this)}
        onMouseLeave={this.toggleHover.bind(this)}>
        <label style={styles.label}>
          {input} {span}
        </label>
      </li>
    );
  }
}

// Styles
const styles = {
  li: {
    lineHeight: '40px',
    padding: '8px 16px',
    cursor: 'pointer'
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
  }
};

// PropTypes
Todo.propTypes = {
  todo: PropTypes.object.isRequired
};

export default Todo;
