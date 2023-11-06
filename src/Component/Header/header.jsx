import React from 'react';
import './header.css';
import IMAGE1 from '../img/Vector 4.png';
import IMAGE2 from '../img/man-wearing-smart-glasses-touching-virtual-screen 1.png';
import IMAGE3 from '../img/Image 1.png';
import IMAGE4 from '../img/chain-9365116-7621444.png'
import IMAGE5 from '../img/1f4a5.png'
import IMAGE6 from '../img/Purple-Lens-Flare-PNG (1).png'

const header = () => {
  return (
    <div className='header'>
       <div className=" text-md-end text-sm-center container pt-3">
        
          <h2 className='font-md-bold text-white fst-italic '>Igniting a Revolution in HR Innovation</h2>
          <img src={IMAGE1} alt="" className='text-center header-img-1 g-0' />
       
        </div>


      <div className="pt-1 container">
        <div class="row">
            <div class="col-md-6 ">
              <div className="header-col-1">
                <div className="">
                  <img src={IMAGE6} alt=""  className='header-img-2'/>
                  <h1 className='text-title align-bottom'>getlinked Tech <br /> Hackathon <span style={{color:'#D434FE'}}>1.0</span> <img src={IMAGE4} alt="" className='header-img1' /> <img src={IMAGE5} alt="" className='header-img1' /> </h1>
                  <p className=' text-white text-p'>Participate in getlinked tech Hackathon 2023 stand <br /> a chance to win a Big prize</p>
                </div>
                <button className='header-btn text-white'>Register</button>
                <div className='text-white time'> 00<span className='min-text'>H</span> 00<span className='min-text'>M</span> 00<span className='min-text'>S</span>
                </div>
              </div>
              
            </div>
            <div class="col-md-6">
              <img src={IMAGE2} alt=""  className='image-1 img-fluid'/>
              <img src={IMAGE3} alt="" className='image-2 img-fluid'/>
            </div>
           
          </div>
    </div>

    <hr className='d-none d-md-block' style={{color:"white", marginTop:"6.5rem"}} />
    </div>
  )
}

export default header