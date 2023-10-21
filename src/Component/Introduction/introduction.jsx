import React from 'react'
import './intoduction.css';
import IMG1 from '../img/the big idea 1.png';
import IMG2 from '../img/star.png';
import IMG3 from '../img/arrow.png'

const introduction = () => {
  return (
    <section style={{ backgroundColor:'#150E28', position:"relative",width: "100%", height:"120vh",}}>
       <div className='' style={{ padding:"4rem 4rem" }}>
      <div className="container">
      <div class="row gx-5">
        <div class="col-md-6">
          <img src={IMG2} alt="" className='intro-img-1 img-fluid'/>
          <img src={IMG1} alt="" className='img-fluid'/>
          <img src={IMG3} alt="" className='intro-img-3 img-fluid'/>
        </div>
        <div class="col-md-6">
         <div className="intro-text" >
          <h1 className='text-white'  style={{fontSize:'larger', fontWeight:'bold'}}>Introduction to getlinked <br /> <span style={{color:"#D434FE"}}>tech Hackathon 1.0</span></h1>
          <p className='text-white' style={{fontSize:'normal'}}>Our tech hackathon is a melting pot of visionaries, and its purpose is as
              clear as day: to shape the future. Whether you're a coding genius, a 
              design maverick, or a concept wizard, you'll have the chance to transform 
              your ideas into reality. Solving real-world problems, pushing the boundaries
              of technology, and creating solutions that can change the world,
              that's what we're all about!</p>
         </div>
        </div>
      </div>
      </div>

   
    </div>
    <hr style={{color:"white", marginTop:"4rem", padding:"0"}} />
    </section>
   
  )
}

export default introduction