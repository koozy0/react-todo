import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul style={styles.ul}>
          <li style={styles.li}> Todo List </li>
          <li style={styles.li}> nav-item </li>
          <li style={styles.li}> nav-item </li>
        </ul>
      </nav>
    );
  }
}

const styles = {
  ul: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    listStyle: 'none',
    lineHeight: '40px',
    padding: '8px 16px'
  },

  li: {
    lineHeight: '32px',
    padding: '4px 16px',
    cursor: 'pointer'
  }
};

export default Navbar;
