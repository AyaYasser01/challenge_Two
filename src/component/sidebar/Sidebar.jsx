import React from 'react';
import Feature from './Feature';
import image from '../../photo/image.jpg';
import image2 from '../../photo/image2.jpg';

const Sidebar = () => {
  return (
    <div style={{ marginRight: '30%', border: 'solid 5px red', textAlign: 'center' }}>
      <Feature>
        <button
          style={{
            background: 'red',
            border: 'none',
            color: 'black',
            padding: '10px',
            margin: '3px',
            borderRadius: '20%',
            fontSize: '10px',
          }}
        >
          Tag Button -_-
        </button>
      </Feature>
      <Feature title='الاكثر قراءه ' image={image} />
      <Feature title='Eng' image={image2} />
      <Feature>
        <button 
          style={{
            background: 'red',
            border: 'none',
            color: 'black',
            padding: '10px',
            margin: '3px',
            borderRadius: '20%',
            fontSize: '10px',
          }}>
          hello world 
        </button>
      </Feature>
      <Feature title='Eng' image={image2} />
      <Feature>
        <button 
          style={{
            background: 'red',
            border: 'none',
            color: 'black',
            padding: '10px',
            margin: '3px',
            borderRadius: '20%',
            fontSize: '10px',
          }}>
          hello Mann
        </button>
      </Feature>
    </div>
  );
};

export default Sidebar;
