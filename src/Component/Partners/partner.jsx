import React from 'react';
import './partner.css'
import images from '../Partners/img/Liberty company logo white colour.png';
import logo1 from './img/Liberty company logo white colour.png'
import logo2 from './img/Liberty company logo white.png'
import logo3 from './img/Winwise logo White colour 1.png'
import logo4 from './img/wisper logo white.png'
import logo5 from './img/Paybox.png'
import logo6 from './img/Vuzual Plus.png'

const partner = () => {
  return (
    <div>
        <div className="partner-header" >
            <div className="pt-5">
            <h2 className='text-center text-white' style={{fontSize:'25px', fontWeight:'bold'}}>Partners and Sponsors</h2>
            <p className='text-center text-white pt-2' style={{fontSize:'small'}}>Getlinked Hackathon 1.0 is honored to have the following major <br /> companies as its partners and sponsors</p>
            </div>

            <div className="container">
              <div className="border-line">
                <div className="column-padding">
                <div className="row justify-content-center column-1">
                    <div className="col-4"><img src={logo1} alt="" className='partner-img'/> 
                    <div className="H-1"></div>
                    <div className="T-1"></div>
                     </div>

                    <div className="col-4"><img src={logo2} alt="" className='partner-img'/>
                    <div className="H-2"></div>
                    <div className="T-2"></div>
                    </div>

                    <div className="col-4"><img src={logo3} alt="" className='partner-img'/>
                    <div className="H-3"></div>
                    </div>

                  </div>

                  <div className="row justify-content-center pt-5 column-2">
                    <div className="col-4"><img src={logo4} alt="" className='partner-img'/> <div className="T-3"></div></div>
                    <div className="col-4"><img src={logo5} alt="" className='partner-img'/> <div className="T-4"></div></div>
                    <div className="col-4"><img src={logo6} alt="" className='partner-img'/></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default partner