
      //import React, { useState } from 'react'
import React from 'react'
import './Container.css'

import img1 from './images/Frame 2.png'
import img2 from './images/Frame3.png'
import img3 from './images/Rectangle 5.png'
import img4 from './images/Rectangle 6.png'
import img5 from './images/Rectangle 7.png'
import img6 from './images/Rectangle 8.png'
import img7 from './images/Ellipse 1.png'
import img8 from './images/Ellipse 2.png'
function Container(props) {
 console.log(props)
 
   return (
  <div>
        <img src={img1} className='image1'/>
        <img src={img2} className='image2'/>
        <img src={img3} className='image3'/>
        <img src={img4} className='image4'/>
        <img src={img5} className='image5'/>
        <img src={img6} className='image6'/>
        <img src={img6} className='image7'/>
        <img src={img6} className='image8'/>
        <img src={img6} className='image9'/>
        <img src={img6} className='image10'/>
        <img src={img6} className='image11'/>
        <img src={img6} className='image12'/>
        <img src={img6} className='image13'/>
        <img src={img6} className='image14'/>
        <img src={img6} className='image15'/>
        <img src={img6} className='image16'/>
        <img src={img7} className='image17'/>
        <img src={img8} className='image18'/>
        <p className='tn'>{props.tn}
        </p>
        <p className='tc'>{props.tc}</p>
 <p className='texm'>{props.texm}</p>
 <p className='texy'>{props.texy}</p>
 <p className='tcv'>{props.tcv}</p>
      
      </div> 
    
    
  )
}

export default Container