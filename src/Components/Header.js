import React from 'react';
import GirlLogo from './Images/in-love.png';

import {Link} from 'react-router-dom';
function Header (props) {
  return (
    <div>
      <img
        src={props.background}
        alt="background"
        className="HeaderBackImageStyle"
      />
      <div className="OuterContainerHeader">
        <div className="headerContainer">
          <div className="flexBox">
            <Link
              to="/"
              style={{textDecoration: 'none'}}
              onClick={() => {
                window.scrollTo (0, 0);
              }}
            >
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
              <Link
                to="/"
                className="Link"
                onClick={() => {
                  window.scrollTo (0, 0);
                }}
              >
                {' '}WORK
              </Link>
              <Link
                to="/about"
                className="Link"
                onClick={() => {
                  window.scrollTo (0, 0);
                }}
              >
                {' '}ABOUT
              </Link>
              <Link
                to="/blog"
                className="Link"
                onClick={() => {
                  window.scrollTo (0, 0);
                }}
              >
                {' '}BLOG
              </Link>
              <div>
                <Link
                  to="/writingportfolio"
                  className="portoflioButton"
                  onClick={() => {
                    window.scrollTo (0, 0);
                  }}
                >
                  WRITING PORTFOLIO
                </Link>
              </div>
            </div>
          </div>
        </div>
        {props.PortfolioButton
          ? <div
              style={{
                textAlign: 'center',
                marginTop: 15,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{color: '#9c9999', fontSize: '38px', fontWeight: 0}}>
                SANA'S GAME DESIGN PORTFOLIO
              </div>
              <div className="outerWraperHeaderContent">
                A showcase of video
              </div>
              <div className="outerWraperHeaderContent">
                game designed and
              </div>
              <div className="outerWraperHeaderContent">produced.</div>

              <Link to="/writingportfolio" className="portoflioButtonHader">
                VIEW MY WRITING PORTFOLIO
              </Link>

            </div>
          : <div
              style={{
                textAlign: 'center',
                marginTop: 15,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div className="outerWraperHeaderContent">
                {props.headingText}

              </div>
              {props.MidderText &&
                <div className="outerWraperHeaderContent">
                  Design
                </div>}
              <div className="OuterWraperTextAboutScreenISmyPassion">
                {props.innterHeadingText}

              </div>
            </div>}
      </div>
    </div>
  );
}

export default Header;
