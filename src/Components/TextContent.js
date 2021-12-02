import React from 'react';

function TextContent (props) {
  return (
    <div>
      <div className="outerWraperHeadingTextContent">
        “Can you not hear it? Can’t anyone hear it? They keep whispering to me, like they are trying to tell me a secret that I will never hear.”
      </div>
      <div
        style={{
          marginTop: '12px',
          marginBottom: '12px',
          textAlign: 'center',
          color: '#1f1f1f',
          fontSize: '20px',
        }}
      >
        {' '}- Galen, Last Whispers{' '}
      </div>
      <div className="textContentStyle">
        Last Whispers is the finished product of a semester of work by the members of the Video Game Development Association  at California State University Long Beach.Last Whispers is a Steampunk 2-D Puzzle/Platform game. Play as a Last Whisper to find the mystery behind its identity and the world around it.
      </div>
      <div />
      <div style={{marginTop:"12px"}}>
      <div className="textContentStyle">
        In a world where humans vanished from a mysterious plague, only mechanical beings thrive. Bits of a true human’s voice may only be heard by Last Whispers, mechanical birds that record snippets of voice and tunes. However, a Last Whisper (the Player) wakes to find itself in front of a strange clockwork tower and unable to make a sound. The Last Whisper will search for its sound, along the way encountering other Last Whispers, recordings, and the mystery behind the tower.
      </div>
      </div>
      <div style={{marginTop:"30px",fontSize:"20px"}}>Roles: </div>
      <ol style={{lineHeight:"28px"}}>
        <li>Creative Director</li>
        <li>Producer</li>
        <li>Design Lead </li>
        <li>Writer & Narrative Designer</li>
      </ol>
    </div>
  );
}

export default TextContent;
