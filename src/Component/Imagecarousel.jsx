import React, { useState } from 'react'
import 'react-slideshow-image/dist/styles.css';
import '../Style/imagecarousel.scss';
import { Fade } from 'react-slideshow-image';
const Imagecarousel = (data) => {
    const [imgcount,setImgcount] = useState(false);
    // const slideImages = [
    //     {url:"https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
    //     {url:"https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"},
    //     {url:"https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
    // ];
    
    const slideImages = data.imgarr;
    if(slideImages.length <= 0){
      setImgcount(true);
    }
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '28vh'
      }
    
    // const spanStyle = {
    // padding: '20px',
    // background: '#efefef',
    // color: '#000000'
    // }
  return (
    <div className="slide-container">
        <Fade>
            {slideImages.map((slideImage, index) => (
            <div key={index} className=''>
               <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage})`}}>
                </div>
            </div>
            ))}
        </Fade>
       
    </div>
  )
}

export default Imagecarousel