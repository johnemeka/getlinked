import React from 'react'
import './contact.css'
import image1 from '../Contacts/img/mdi_instagram.png'
import image2 from '../Contacts/img/Vector (1).png'
import image3 from '../Contacts/img/Vector (3).png'
import image4 from '../Contacts/img/ri_linkedin-fill.png'

const contact = () => {
  return (
    <div className='contact-bg'>
      <div className="container ">
        <div class="row justify-content-center">
          <div class="col-md-5 mt-md-5">
          <h1 className='text '  style={{fontSize:'25px', fontWeight:' 600', color:"#D434FE"}}>Get in touch </h1>
          <p className='text-white' style={{fontSize:"13px" , fontWeight:"400"}}>Contact <br /> Information</p>
          <p className='text-white' style={{fontSize:"13px" , fontWeight:"400"}}> 27,Alara Street <br /> Yaba 100012 <br /> Lagos State</p>
          <p className='text-white' style={{fontSize:"13px" , fontWeight:"400"}}>Call Us : 07067981819</p>
          <p className='text-white' style={{fontSize:"13px" , fontWeight:"400"}}>we are open from Monday-Friday <br /> 08:00am - 05:00pm</p>
          <p className='pt-2' style={{color:"#D434FE", fontSize:"12px"}}>Share on</p>
          <div class="d-flex flex-row bd-highlight ">
            <div class="bd-highlight"><img src={image1} alt="" style={{paddingLeft:""}} className='img-fluid'/></div>
            <div class="bd-highlight"><img src={image2} alt="" style={{paddingLeft:"10px"}} className='img-fluid'/></div>
            <div class="bd-highlight"><img src={image3} alt="" style={{paddingLeft:"10px"}} className='img-fluid'/></div>
            <div class="bd-highlight"><img src={image4} alt="" style={{paddingLeft:"10px"}} className='img-fluid'/></div>
          </div>
          </div>
          <div class="col-md-7">
           <div className="border-bg">
            <h1 className='text '  style={{fontSize:'20px', fontWeight:' 600', color:"#D434FE"}}>Questions or need assistance?</h1>
            <h1 className='text '  style={{fontSize:'20px', fontWeight:' 600', color:"#D434FE"}}>Let us know  about it!</h1>
            

            <input type="text" class="text-white input-text" placeholder="First Name"  aria-label="readonly input example" readonly/>
            <input type="text" class="text-white input-text" placeholder="Mail"  aria-label="readonly input example" readonly/>
            <div class="form-floating">
              <textarea class="input-text mt-4 text-white" placeholder="Message" id="floatingTextarea2" style={{height:'100px'}}></textarea>
           
              <button className='btn text-white nav-btn2 mt-3 d-flex justify-content-center' > Submit </button>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact