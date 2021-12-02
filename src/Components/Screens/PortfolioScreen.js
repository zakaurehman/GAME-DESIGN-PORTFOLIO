import React,{useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import workPic from '../Images/Work.png';
import Pdf from '../files/Doc1.pdf';
import {Link} from 'react-router-dom';
import background from '../Images/BackGroundPicPortfolioScreen.png';
function PortfolioScreen (props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
  return (
    <div>
      <Header  
       background={background}
        />
      <div
        style={{
          // border: '1px solid',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '60px',
        }}
      >
        <div className="headingPortfolioScreen">Check out some of my work!</div>
        <div style={{width: '60%', height: '290px'}}>
          <img src={workPic} width="100%" height="100%" />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            // border: '1px solid',
            marginTop: '20px',
            width: '60%',
            marginTop: '30px',
          }}
        >
          <div className="DocumentGroup1PortfolioScreen">
            <div className="InerHeadingDocumentsPortfolioScreen">
              LAST WHISPERS
            </div>
            <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                  Final Last Whispers Script -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>
                </div>
            <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                  Final Last Whispers Script -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>
                </div>
           
            <div
              className="InerHeadingDocumentsPortfolioScreen"
              style={{marginTop: '30px'}}
            >
              BANISH
            </div>
            <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                  Final Last Whispers Script -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>
                </div>
                <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                  Final Last Whispers Script -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>
                </div>
                <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                  Final Last Whispers Script -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>
                </div>
          </div>

          <div className="DocumentGroup2PortfolioScreen">
            <div className="InerHeadingDocumentsPortfolioScreen">
              SHORT STORIES & NARRATIVES INSPIRED BY VIDEO GAMES
            </div>
            <div className="innerInnerdiscriptionPortfolioScreen">
              League of Legends Fan Short Story
            </div>

            <ul>
              <li className="innerInnerdiscriptionPortfolioScreen">
                The Greater Bounty -
                <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                  Final Last Whispers Script -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>

                </div>
              </li>
            </ul>
            <div className="innerdiscriptionPortfolioScreen">
              The Saxxy Games | A Team Fortress 2 Fan Fiction{' '}
            </div>
            <ul>
              <li>
                <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                    Chapter 1 -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>

                </div>
              </li>
              <li>
                <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                    Chapter 2 -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>

                </div>
              </li>

              <li>
                <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                    Chapter 3 -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>

                </div>
              </li>

              <li>
                <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                    Chapter 4 -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>

                </div>
              </li>

              <li>
                <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                    Chapter 5 -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>

                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{marginTop: '150px', width: '60%',marginBottom:"100px"}}
        >
          <div style={{height: '290px'}}>
            <img src={workPic} width="100%" height="100%" />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              // border: '1px solid',
              marginTop: '20px',
              marginTop: '30px',
              marginBottom: '50px',
            }}
          >
            <div className="DocumentGroup1PortfolioScreen">
              <div className="InerHeadingDocumentsPortfolioScreen">
                OTHER WORKS
              </div>
              <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                  Twine Story - “Zo”
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>
                </div>
              <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                  Short Story -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>
                </div>
              <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                  Short Story -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>
                </div>
              <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                  Poetry -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>
                </div>

              <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                  Original Script -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>
                </div>
            </div>

            <div className="DocumentGroup2PortfolioScreen">
              <div className="InerHeadingDocumentsPortfolioScreen">
                GAME DESIGN DOCS
              </div>
              <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                  Kiwi -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>
                </div>
              <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                  Global Games Jam 2018 -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>
                </div>
              <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                  Last Whispers -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>
                </div>
              <div style={{display: 'flex'}}>
                  <div className="innerInnerdiscriptionPortfolioScreen">
                  Raising Spirits -
                  </div>

                  <Link
                    className="outerWraperDocumentPDFPortfolioScreen"
                    to={Pdf}
                    target="_blank"
                  >
                    Download Pdf
                  </Link>
                </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default PortfolioScreen;
