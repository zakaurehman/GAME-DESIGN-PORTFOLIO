import React from 'react';

function GameDiscriptionBox (props) {

  return (
    <div>
      <img style={{width: '100%',height:"100%"}} src={props.Image} alt="Logo" />
      <div style={{paddingRight: '16px', paddingLeft: '16px'}}>
        <div
          style={{
            marginTop: '12px',
            fontSize: '22px',
            textAlign: 'center',
            color: 'black',
            fontWeight: '500',
          }}
        >
          {props.textHeading}
        </div>
        <div
          style={{
            marginTop: '12px',
            color: '#7c7979',
            fontWeight: '300',
            fontStyle: 'normal',
            letterSpacing: '.01em',
            textAlign: 'center',
            fontSize: '15px',
          }}
        >
          {props.textDetails}
        </div>
      </div>
    </div>
  );
}

export default GameDiscriptionBox;
