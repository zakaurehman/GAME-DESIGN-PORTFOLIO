import React,{useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import background from '../Images/HeaderBackImage.png';
function BlogScreen (props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
  return (
    <div>
      <Header PortfolioButton={false} background={background}
      MidderText={false}
       headingText={"Design Blog"}
       innterHeadingText={"THOUGHTS & MUSINGS"}
      />
      <div style={{display:"flex",justifyContent:"center"}}>
      <div className="outerContainerBlogScreen">
      <div className="HeadingBlogScreen">Pause, Save, Exit. Come back an Hour Later</div>
      <div className="DateHeadingBlogScreen">
        Chau Ho  December 12, 2019
      </div>
      <div className="innerContentBlogScreen">
        Hello friends! I haven’t wrote a blog entry in a while, but this one will be short and quick to the point. It is more of a self-reflection on myself and my path to a gaming career. The pressure is real and the stress level is far beyond 9000… I essentially had design block. So I stopped for a while. And in that short “while,” I did something else.
      </div>
      <div className="innerHeadingReadMoreBlogScreen">Read More </div>
      <div  className="HeadingBlogScreen">
        Recap of GDC & SGDA Summit 2019
      </div>
      <div className="innerContentBlogScreen" style={{marginTop:"30px",marginBottom:"30px"}}>
        AH!
      </div>
      <div className="innerContentBlogScreen">
        It’s already summer, and graduation was so surreal. I’m still unsure what to do without any deadlines on my mind.
      </div>
      <div className="innerContentBlogScreen"style={{marginTop:"20px",marginBottom:"10px"}} >
        But despite that, I am excited to start focusing even more on game development. But first, let’s talk about GDC.
      </div>
      <div className="innerHeadingReadMoreBlogScreen">Read More </div>
      <div  className="HeadingBlogScreen">Only a Couple Days before my First GDC!</div>
      <div  className="DateHeadingBlogScreen" >
        Chau Ho  December 12, 2019
      </div>
      <div className="innerContentBlogScreen">
        GDC, or Game Developers Conference, is only a few days away! And to be honest, I’m equally excited as I am nervous to attend, and here’s the one main reason: networking.
      </div>
      <div  className="innerContentBlogScreen" style={{marginTop:"20px"}}>
        It’s easy to get discouraged by others with such charisma when it comes to networking. It’s like a second language to them. One of my close friends who never networked before and attended a weekly game developer’s meet-up with me. By the end of the night, she gained the title “The Golden Tongue of Networking.”
      </div>
      <div className="innerHeadingReadMoreBlogScreen" style={{marginBottom:"70px"}}>Read More </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogScreen;
