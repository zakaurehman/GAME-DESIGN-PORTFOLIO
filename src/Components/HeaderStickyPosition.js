import React from 'react';
import {Link} from 'react-router-dom';
import GirlLogo from './Images/in-love.png';

function HeaderStickyPosition(props) {
    return (
        <div className="headerStickyPositionContainer">
          <div className="flexBox">
            <Link to="/" style={{textDecoration: 'none'}}
            onClick={()=>{
                window.scrollTo(0, 0)
           }}>
              <div className="OuterWraperLogo">
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  SANA
                  <img
                    src={GirlLogo}
                    className="outerWraperGirlLogoImage"
                    alt="GirlLogo"
                  />
                </div>
                GAME DESIGN <br /> PORTFOLIO
              </div>
            </Link>
            <div className="OuterWraperHeaderContectButtons">
              <Link to="/" className="Link" onClick={()=>{
                   window.scrollTo(0, 0)
              }}> WORK</Link>
              <Link to="/about" className="Link" onClick={()=>{
                   window.scrollTo(0, 0)
              }}> ABOUT</Link>
              <Link to="/blog" className="Link" onClick={()=>{
                   window.scrollTo(0, 0)
              }}> BLOG</Link>
              <div>
                <Link to="/writingportfolio" className="portoflioButton" onClick={()=>{
                   window.scrollTo(0, 0)
              }}>
                  WRITING PORTFOLIO
                </Link>
              </div>
            </div>
          </div>
        </div>
    );
}

export default HeaderStickyPosition;