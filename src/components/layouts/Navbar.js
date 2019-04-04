import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => (
  <nav style={styles.nav}>
    <ul style={styles.ul}>
      <li style={styles.li}>
        <Link to='/' style={styles.link}>
          TodoList
        </Link>
      </li>
      <li style={styles.li}>
        <Link to='/' style={styles.link}>
          Home
        </Link>
      </li>
      <li style={styles.li}>
        <Link to='/about' style={styles.link}>
          About
        </Link>
      </li>
    </ul>
  </nav>
);

const styles = {
  nav: {
    background: 'rgba(0, 0, 0, .12)'
  },

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
  },

  link: {
    color: 'rgba(0, 0, 0, .87)',
    textDecoration: 'none'
  }
};

export default Navbar;
