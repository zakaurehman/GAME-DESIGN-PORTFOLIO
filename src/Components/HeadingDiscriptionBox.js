import React from 'react';

function HeadingDiscriptionBox (props) {
  return (
    <div style={{position: 'relative'}}>
      <div style={{height: '285px'}}>
        <img
          style={{ height:"100%", width:"100%", resizeMode: 'contain'}}
          src={props.ImageHeadingDiscription}
          alt="Logo"
        />
      </div>
      <div className="TextHeadingDiscriptionBox">
        <div style={{}}>
          <div
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: '100px',
              letterSpacing: '5px',
            }}
          >
            {' '}Last Whispers
          </div>
          <div
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: '300',
              fontStyle: 'normal',
              fontSize: '28px',
              letterSpacing: '10px',
              lineHeight: '1.3em',
              color: '#9c9999',
              marginTop:"12px"
            }}
          >
            {' '}VIDEO GAME DEVELOPMENT ASSOCIATION
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadingDiscriptionBox;
