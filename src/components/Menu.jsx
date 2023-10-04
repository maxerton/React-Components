import React from 'react';

const Menu = ({switchPage}) => {


  return (
    <div className='menu-wrapper'>
      <ul className='menu'>
        <li onClick={() => switchPage('home')}>Home</li>
        <li  onClick={() => switchPage('post1')}>Post 1</li>
        <li onClick={() => switchPage('post2')}>Post 2</li>
        <li onClick={() => switchPage('post3')}>Post 3</li>
        <li onClick={() => switchPage('post4')}>Post 4</li>
      </ul>
    </div>
  );
};

export default Menu;