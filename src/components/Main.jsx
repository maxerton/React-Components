import React from 'react';
import Home from './Home';
import Post from './Post';


const Main = ({currentPage}) => {
  const renderData = () => {
    switch (currentPage) {
      case 'home':
        return <Home></Home>;
      
      case 'post1':
        return <Post id='1'></Post>;

      case 'post2':
        return <Post id='2'></Post>

      case 'post3':
        return <Post id='3'></Post>

      case 'post4':
        return <Post id='4'></Post>

      default:
        return <Home></Home>;
    }
  }

  return (
    <div className='main'>
      <h4 style={{borderBottom: '1px solid #aaa'}}>Main element</h4>
      {renderData()}
    </div>
  );
};

export default Main;