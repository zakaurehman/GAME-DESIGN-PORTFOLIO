import React, {useState, useEffect, useRef} from 'react';
import Header from './Header';
import {scroller} from 'react-scroll';
import GameDiscriptionBox from './GameDiscriptionBox';
import {textHeadingBox1, textDetailsBox1} from './ShareData';
import BoxPic1 from './Images/BoxPic1.png';
import HeadingDiscriptionBox from './HeadingDiscriptionBox';
import ImageHeadingDiscriptionBox1 from './Images/LastWhisperImage.jpg';
import TextContent from './TextContent';
import TotrialsDiscriptionBox from './TotrialsDiscriptionBox';
import YouTubeVideo from './YouTubeVideo';
import Footer from './Footer';
import background from './Images/HeaderBackImage.png';
import HeaderStickyPosition from './HeaderStickyPosition';
import {IoIosArrowUp} from 'react-icons/io';
function Home (props) {
  const [Headerpositioin, setHeaderpositioin] = useState (true);
  const [Stick, setSticky] = useState (null);
  const [DiaplayScrollerButton, setDiaplayScrollerButton] = useState (false);

 const scrollToSection = () => {
   console.log("iii")
    scroller.scrollTo ("Up",{
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  useEffect (() => {
    window.scrollTo (0, 0);
    if (window.scrollY >= 700) {
      setSticky ('0');
      setHeaderpositioin (true);
    } else {
      setSticky (null);
      setHeaderpositioin (false);
    }
  }, []);

  const SetStickyPosition = () => {
    if (window.scrollY >= 700) {
      setSticky ('0');
      setHeaderpositioin (true);
      setDiaplayScrollerButton (true);
    } else {
      setSticky (null);
      setHeaderpositioin (false);
      setDiaplayScrollerButton (false);
    }
  };
  window.addEventListener ('scroll', SetStickyPosition);
  return (
    <div className="Container">
      <div
        style={{
          position: 'sticky',
          top: Stick,
          zIndex: '3',
        }}
      >
        {Headerpositioin && <HeaderStickyPosition />}

      </div>
      <Header PortfolioButton={true} background={background} />
      <div style={{textAlign: 'center', fontSize: '40px'}}>
        Hi! I'm Sana, and welcom to my website!
      </div>
      <div style={{textAlign: 'center', fontSize: '20px', marginTop: '20px'}}>
        Game artwork created by the game's respectful artists.
      </div>
      <div
        style={{
          // border: '1px solid red',
          marginTop: '70px',
          display: 'flex',
          gap: '30px',
          paddingLeft: '200px',
          paddingRight: '200px',
        }}
      >
        <div style={{width: '35%'}}>
          <GameDiscriptionBox
            Image={BoxPic1}
            textHeading={textHeadingBox1}
            textDetails={textDetailsBox1}
          />
        </div>
        <div style={{width: '35%'}}>
          <GameDiscriptionBox
            Image={BoxPic1}
            textHeading={textHeadingBox1}
            textDetails={textDetailsBox1}
          />
        </div>
        <div style={{width: '35%'}}>
          <GameDiscriptionBox
            Image={BoxPic1}
            textHeading={textHeadingBox1}
            textDetails={textDetailsBox1}
          />
        </div>
      </div>
      <div style={{marginTop: '100px'}}>
        <HeadingDiscriptionBox
          ImageHeadingDiscription={ImageHeadingDiscriptionBox1}
        />
      </div>
      <div style={{paddingLeft: '15%', paddingRight: '15%'}}>
        <div style={{marginTop: '130px'}}>
          <TextContent />
        </div>
        <div style={{textAlign: 'center', fontSize: '20px', cursor: 'pointer'}}>
          PLAY THE GAME!
        </div>
        <div style={{marginTop: '50px', display: 'flex', gap: '30px'}}>
          <div style={{width: '50%'}}>
            <TotrialsDiscriptionBox />
          </div>
          <div style={{width: '50%'}}>
            <TotrialsDiscriptionBox />
          </div>
        </div>
        <div style={{width: '100%', marginTop: '50px'}}>
          <TotrialsDiscriptionBox />
        </div>
      </div>
      <div style={{marginTop: '100px'}}>
        <HeadingDiscriptionBox
          ImageHeadingDiscription={ImageHeadingDiscriptionBox1}
        />
      </div>
      <div style={{paddingLeft: '15%', paddingRight: '15%'}}>
        <div style={{marginTop: '130px'}}>
          <TextContent />
        </div>
        <div style={{textAlign: 'center', fontSize: '20px', cursor: 'pointer'}}>
          PLAY THE GAME!
        </div>
        <div style={{marginTop: '50px', display: 'flex', gap: '30px'}}>
          <div style={{width: '50%'}}>
            <TotrialsDiscriptionBox />
          </div>
          <div style={{width: '50%'}}>
            <TotrialsDiscriptionBox />
          </div>
        </div>
        <div style={{width: '100%', marginTop: '50px'}}>
          <TotrialsDiscriptionBox />
        </div>
      </div>
      <div style={{marginTop: '100px'}}>
        <HeadingDiscriptionBox
          ImageHeadingDiscription={ImageHeadingDiscriptionBox1}
        />
      </div>
      <div
        style={{
          paddingLeft: '15%',
          paddingRight: '15%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{marginTop: '130px'}}>
          <TextContent />
        </div>
        <YouTubeVideo />
        <div style={{width: '80%', marginTop: '50px'}}>
          <TotrialsDiscriptionBox />
        </div>
      </div>
      <div style={{marginTop: '100px'}}>
        <HeadingDiscriptionBox
          ImageHeadingDiscription={ImageHeadingDiscriptionBox1}
        />
      </div>
      <div style={{paddingLeft: '15%', paddingRight: '15%'}}>
        <div style={{marginTop: '130px'}}>
          <TextContent />
        </div>
        <div
          style={{
            textAlign: 'center',
            fontSize: '20px',
            cursor: 'pointer',
            color: 'rgba(31,31,31,.5)',
            letterSpacing: '5px',
          }}
        >
          PLAY THE GAME!
        </div>
        <div style={{marginTop: '30px'}}>
          <YouTubeVideo />
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '55px',
            justifyContent: 'center',
          }}
        >
          <div style={{width: '45%', marginTop: '50px'}}>
            <TotrialsDiscriptionBox />
          </div>
          <div style={{width: '45%', marginTop: '50px'}}>
            <TotrialsDiscriptionBox />
          </div>
          <div style={{width: '45%', marginTop: '50px'}}>
            <TotrialsDiscriptionBox />
          </div>
          <div style={{width: '45%', marginTop: '50px'}}>
            <TotrialsDiscriptionBox />
          </div>
        </div>
      </div>
      <div style={{marginTop: '30px'}}>
        {DiaplayScrollerButton &&
          <div className="OuterWraperScrollUpButton" onClick={()=>{
            window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
          }}>
            <IoIosArrowUp />
          </div>}
        <Footer />
      </div>
    </div>
  );
}
export default Home;
