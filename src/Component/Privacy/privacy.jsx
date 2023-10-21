import React from 'react'
import './privacy.css';
import Image from '../img/08 1.png'
import Image1 from '../img/Vector.png'

const privacy = () => {
  return (
    <div  className='privacy-bg'>
        <div className="container ">
            <div className="margin-top">
            <div className="privacy-background "  >
            <h1 className='text-white '  style={{fontSize:'30px', fontWeight:'bold'}}>Privacy Policy and <br /> <span style={{color:"#D434FE"}}>Terms</span></h1>
            <p className='pt-2 text-white' style={{fontSize:'small'}}>Last updated on September 12, 2023</p>
            <p className='pt-2 text-white' style={{fontSize:'small'}}>Below are our privacy & policy, which outline a lot of goodies. <br /> it’s our aim to always take of our participant</p>
            </div>

            <div class="row justify-content-center">
              
                    <div class="col-md-6 " >
                        <div className="text-border">
                       <p className=' text-white p-text' style={{fontSize:'15px',lineHeight:"2"}}>At getlinked tech Hackathon 1.0, we value your privacy
                            and are committed to protecting your personal information.
                            This Privacy Policy outlines how we collect, use, disclose, 
                            and safeguard your data when you participate in our tech 
                            hackathon event. By participating in our event, you consent 
                            to the practices described in this policy.
                        </p>
                        <h6 className='pt-2' style={{color:"#D434FE"}}>Licensing Policy</h6>
                        <p className='text-white fw-bold' style={{fontSize:'15px'}}>Here are terms of our Standard License:</p>
                        <ul>
                            <li className=' text-white' style={{fontSize:'15px',lineHeight:"2"}}>The Standard License grants you a non-exclusive right to navigate and register for our event</li>
                            <li className=' text-white pt-3' style={{fontSize:'15px',lineHeight:"2"}}>You are licensed to use the item available at any free source sites, for your project developement</li>
                        </ul>
                        <div className="text-center">
                        <button className='header-btn text-white '>Read More</button>
                        </div>
                        </div>
                    </div>
              
                <div class="col-md-6">
                    <div className="img-margin">
                        <img src={Image1} alt="" className='vector' />   
                        <img src={Image} alt="" className='img'/>
                    </div>
                
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default privacy