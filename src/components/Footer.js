import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='footer'>
          <a href='mailto:bburke0@gmail.com' target='#_blank'>
            <i className='fas fa-envelope-square'></i>
          </a>
          <a
            href='https://www.instagram.com/migdaliasconfections/?hl=en'
            target='#_blank'
          >
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
