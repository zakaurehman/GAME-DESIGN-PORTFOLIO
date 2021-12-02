import React from 'react';
import ImageTutorialBox1 from './Images/ImageTutorialBox1.png';
function TotrialsDiscriptionBox (props) {
  return (
    <div>
      <img
        style={{width: '100%', height: '100%'}}
        src={ImageTutorialBox1}
        alt="Logo"
      />
      <div style={{marginTop: '20px', fontSize: '20px', fontWeight: '600'}}>
        Tutorial - Last Whispers
      </div>
      <div
        style={{
          letterSpacing: '.5px',
          lineHeight: '1.6em',
          color: '#1f1f1f',
          marginTop:"12px",
          fontSize:"16px",
        }}
      >
        The Player learns the controls of the Beak Harpoon mechanic, where the Player can aim, launch, retract and swing from the harpoon
      </div>
    </div>
  );
}

export default TotrialsDiscriptionBox;
