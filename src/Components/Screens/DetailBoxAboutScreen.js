import React from 'react';
import img from '../Images/aboutScreenPics.jpg'
function DetailBoxAboutScreen(props) {
    return (
        <div>
            <img src={img} alt=""/>
            <div style={{marginTop:"10px",marginRight:"400px"}}>Unite LA 2018</div>
        </div>
    );
}

export default DetailBoxAboutScreen;