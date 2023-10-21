import React from 'react'

const footer = () => {
  return (
    <div style={{background:'#100B20'}}>
      <div className="container">
      <div class="row align-items-center pt-5">
        <div class="col-md-6">
        <h1 className='text-white '  style={{fontSize:'30px', fontWeight:'bold'}}>get<span style={{color:"#D434FE"}}>linked</span></h1>
        <p className='pt-2 text-white' style={{fontSize:'15px', lineHeight:"2"}}>Getlinked Tech Hackathon is a technology innovation program <br />
        established by a group of organization with the aim of showcasing <br />
        young and talented individuals in the field of technology
        </p>
        <p className='pt-4 text-white' style={{fontSize:'15px'}}>Terms of Use  Privacy Policy</p>
        </div>

        <div class="col-md-3">
        <h1   style={{fontSize:'20px', fontWeight:'bold', color:"#D434FE"}}>Useful Links</h1>
        <p className=' text-white' style={{fontSize:'15px'}}>Overview</p>
        <p className=' text-white' style={{fontSize:'15px'}}>Timeline</p>
        <p className=' text-white' style={{fontSize:'15px'}}>FAQs</p>
        <p className=' text-white' style={{fontSize:'15px'}}>Register</p>
        <p style={{color:"#D434FE"}}>Follow us</p>
        </div>

        <div class="col-md-3">
        <h1   style={{fontSize:'20px', fontWeight:'bold', color:"#D434FE"}}>Contact Us</h1>
        <p className=' text-white pt-2 pb-2' style={{fontSize:'15px'}}>+234 6707653444</p>
        <p className=' text-white pt-2 pb-5' style={{fontSize:'15px'}}>27,Alara Street <br /> Yaba 100012 <br /> Lagos State</p>
        </div>
      </div>
      <div className="text-center">
      <p className='pt-5 pb-4 text-white ' style={{fontSize:'15px'}}>All rights reserved. © getlinked Ltd.</p>
      </div>
     
      </div>

    </div>
  )
}

export default footer