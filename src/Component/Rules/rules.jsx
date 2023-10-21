import React from 'react'
import RULE1 from '../img/7450159 1.png'
import RULE2 from "../img/Purple-Lens-Flare-PNG (1).png"
import "./rules.css"

const rules = () => {
  return (
    <div className='rule-header'>
      <div className="container">
       <div class="row  gx-5  flex-column-reverse flex-lg-row">
        <div class="col-md-6 ">
         <div className="rule-text">
            <img src={RULE2} alt="" className='purple-light-1'/>
            <div className="float-center rule-text">
              <h1 className='text-white '  style={{fontSize:'larger', fontWeight:'bold'}}>Rules and <br /> <span style={{color:"#D434FE"}}>Guidelines </span></h1>
                <p className='text-white ' style={{fontSize:'small'}}>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you're a coding genius, a 
                        design maverick, or a concept wizard, you'll have the chance to transform 
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that's what we're all about!</p>
            </div>
         </div>
        </div>
        <div class="col-md-6 ">
          <div className="images">
            <img src={RULE1} alt="" className=' img-fluid'/>
            <img src={RULE2} alt="" className='purple-light-2'/>
          </div>
        </div>
      </div>
      </div>

      <hr style={{color:"white", marginTop:"3rem", }} />
    </div>
  )
}

export default rules