import React, { Component } from 'react';

export class AddTodo extends Component {
  state = {
    task: ''
  };

  onChange = e =>
    this.setState({ [e.target.name]: this.refs[e.target.name].value });

  onSubmit = e => {
    e.preventDefault();
    const { addTodo } = this.props;
    const { task } = this.state;
    addTodo(task);
    this.setState({ task: '' });
  };

  render() {
    return (
      <div>
        <form style={styles.form} onSubmit={this.onSubmit}>
          <input
            type='text'
            style={styles.inputText}
            placeholder='Add Todo...'
            name='task'
            ref='task'
            value={this.state.task}
            onChange={this.onChange}
          />
          <input type='submit' value='Add' style={styles.inputSubmit} />
        </form>
      </div>
    );
  }
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'row'
  },

  inputText: {
    flex: '9',
    height: '24px',
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0',
    borderBottom: '1px solid rgba(0, 0, 0, .27)',
    outline: 'none',
    padding: '0 32px'
  },

  inputSubmit: {
    flex: '1',
    lineHeight: '24px',
    padding: '0 16px',
    display: 'block',
    border: '0',
    background: 'rgba(0, 0, 0, .54)',
    color: 'white',
    fontWeight: '500',
    outline: 'none'
  }
};

export default AddTodo;
