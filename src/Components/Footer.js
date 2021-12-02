import React from 'react';
import twetter from './Images/twitter.png';
import LinkedIn from './Images/linkedin.png';
import envlop from './Images/envelope.png';
function Footer (props) {
  return (
    <div>
      <div style={{background: '#f0f0f0',display:"flex",justifyContent:"center",gap:"20px",padding:"30px"}}>
        <div style={{height: '25px', width: '25px'}}>
          <img
            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
            src={LinkedIn}
            alt="Logo"
          />
        </div>
        <div style={{height: '25px', width: '25px'}}>
          <img
            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
            src={envlop}
            alt="Logo"
          />
        </div>
        <div style={{height: '25px', width: '25px'}}>
          <img
            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
            src={twetter}
            alt="Logo"
          />
        </div>
      </div>
      <div style={{background:"#201a16",padding:"100px",textAlign:"center",fontSize:"20px",color:"rgba(255,255,255,.4)"}}>
      Powered by  Squarespace
      </div>
    </div>
  );
}

export default Footer;
