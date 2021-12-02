import React,{useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import DetailBoxAboutScreen from './DetailBoxAboutScreen';
import background from '../Images/BackGoundPicAboutScreen.png';

function AboutScreen (props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
  return (
    <div>
      <div className="outerWraperHeaderAboutScreen">
        <Header
          MidderText={true}
          headingText={'Narrative and Gameplay'}
          innterHeadingText={'IS MY PASSION'}
          PortfolioButton={false}
          background={background}
        />
      </div>
      <div className="outerContainerAboutScreen">
        <div className="HeadingtextAboutScreen">
          "Hello! I’m Chau, and I’m a Narrative and Game Designer"
        </div>
        <div className="OuterContainerContentAboutScreen">
          <div className="ContenttextAboutScreen">
            Based in Southern, California, I recently graduated from California State University Long Beach with a Bachelor’s in Creative Writing. While my primary focus is Creative Writing, I'm well versed in Microsoft Office as well as Script-writing, Narrative and Game Design, managing small and large-scale teams, time management and organization. I designed gameplay and narrative on over 15 game projects (student projects, game jams, and personal projects) during my studies at CSULB.
          </div>
          <div style={{marginTop: '30px'}}>
            I love learning about design, especially in story-telling! I have a huge love for gaming and it's community, especially with game development at Video Game Development Association, where I often led and designed for countless projects along with other talented and amazing developers across all disciplines. There, I have achieved as an experienced President, Creative Director, Producer, Lead Narrative Designer, Developer and Writer as well as exploring and gaining skills and expertise in art, sound and programming
          </div>
          <div style={{marginTop: '30px'}}>
            {' '}
            was a Camp Coordinator for Girls Make Games over the summer to help young girls meet like-minded friends who are equally as passionate and interested in game development. I was also selected as one of the top two Star Coordinator for GMG for 2018.
          </div>
          <div style={{marginTop: '30px'}}>
            When I'm not writing or game designing, I love to do art, make silly videos and play all sorts of video games with my friends as well as play-test their card games. I'm a Twitch Streamer, Tik Toker and bird enthusiast with a passion for learning and performing card tricks and hoarding books that I'll probably read later (but mostly likely forget to since I'll be too immersed in gaming!)
          </div>
          <div
            style={{marginTop: '30px', textAlign: 'center', fontWeight: 'bold'}}
          >
            Here are some games that I’m playing right now:
          </div>
          <div style={{marginTop: '30px', textAlign: 'center'}}>VALORANT</div>
          <div style={{marginTop: '30px', textAlign: 'center'}}>
            League of Legends
          </div>
          <div style={{marginTop: '30px', textAlign: 'center'}}>
            Bayonetta 2
          </div>
          <div style={{marginTop: '30px', textAlign: 'center'}}>
            Inscryption
          </div>
          <div style={{marginTop: '30px', textAlign: 'center'}}>
            Legends of Runeterra
          </div>
          <div style={{marginTop: '30px', textAlign: 'center'}}>
            Guilty Gear Strive
          </div>
          <div style={{marginTop: '70px', textAlign: 'center'}}>
            email: chauhogamedesigner@gmail.com
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            marginTop: '140px',
            justifyContent: 'center',
            marginBottom: '100px',
          }}
        >
          <div style={{width: '30%'}}>
            <DetailBoxAboutScreen />
          </div>
          <div style={{width: '30%'}}>
            <DetailBoxAboutScreen />
          </div>
          <div style={{width: '30%'}}>
            <DetailBoxAboutScreen />
          </div>
          <div style={{width: '30%'}}>
            <DetailBoxAboutScreen />
          </div>
          <div style={{width: '30%'}}>
            <DetailBoxAboutScreen />
          </div>
          <div style={{width: '30%'}}>
            <DetailBoxAboutScreen />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutScreen;
