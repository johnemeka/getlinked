import React from 'react';
import './prize.css'
import prize1 from "../img/9486889 1.png";
import prize2 from "../img/Rewards.png";
import Purple from '../img/Purple-Lens-Flare-PNG (1).png'

const prize = () => {
  return (
    <div className=""  style={{ backgroundColor:'#150E28', position:"relative",width: "100%", height:"100vh", padding:"4rem 4rem" }}>
        <div className='container '>
            <div className="d-flex justify-content-end">
                <div className="prize-text pb-5">
                <h1 className='text-white'  style={{fontSize:'30px', fontWeight:'bold'}}>Prizes and <br /> <span style={{color:"#D434FE"}}>Rewards</span></h1>
                <p  className='text-white' style={{fontSize:'small'}}>Highligtes of the prizes or rewards for winners and  for participants</p>
                </div>
            </div>

            <div class="row gy-5">
                <div class="col-md-6">
                <div class=" ">
                    <img src={prize1} alt="" className='prize-img img-fluid' />
                    <img src={Purple} alt="" className='Purple-img-1'/>
                </div>
                </div>
                <div class="col-md-6">
                <div class="">
                    <img src={prize2} alt="" className='img-fluid' />
                    <img src={Purple} alt="" className='Purple-img-2'/>
                </div>
                </div>
            </div>

        </div>
    </div>
    
  )
}

export default prize