import React from 'react'
import './register.css'
import RegImage from '../../Component/img/3d-graphic-designer-showing-thumbs-up-png 1.png'
import PurpleImage from '../../Component/img/Purple-Lens-Flare-PNG (1).png'

const register = () => {
  return (
  <section className='register-bg position-relative'>
    <div className="container">
    <div class="row justify-content-center">
        <div class="col-md-5">
         <img src={PurpleImage} alt="" className='img-fluid position-absolute top-0 start-0 w-50'style={{opacity:"0.5"}}/>
         <img src={RegImage} alt="" className='img-fluid'/>
        </div>
        <div class="col-md-7">
        <div className="registerBorder-bg">
          <h1 style={{fontSize:'25px', fontWeight:' 600', color:"#D434FE"}}>Register</h1> <br /> 
          <p className='text-white'>Be part of this movement! <span>.................</span> </p>
          <h5 className='text-white fw-500'>CREATE YOUR ACCOUNT</h5>
          <div class="row ">
            <div class="col-md-6 mt-3">
            <label for="inputEmail4" class="form-label text-white">Team’s Name</label>
              <input type="text"  class="form-control bg-transparent" placeholder="Enter the name of your group" aria-label="First name" />
            </div>
            <div class="col-md-6 mt-3">
            <label for="inputEmail4" class="form-label text-white">Phone</label>
              <input type="text" class="form-control bg-transparent" placeholder="Enter your phone number" aria-label="Last name"/>
            </div>
          </div>

          <div class="row ">
            <div class="col-md-6 mt-3">
            <label for="inputEmail4" class="form-label text-white">Email</label>
              <input type="text"  class="form-control bg-transparent" placeholder="Enter your email address" aria-label="First name" />
            </div>
            <div class="col-md-6 mt-3">
            <label for="inputEmail4" class="form-label text-white">Project Topic</label>
              <input type="text" class="form-control bg-transparent" placeholder="What is your group project topic" aria-label="Last name"/>
            </div>
          </div>

          <div class="row ">
            <div class="col-md-6 col-7 mt-3">
            <label for="inputEmail4" class="form-label text-white">Category</label>
              <select class="form-select bg-transparent text-white" aria-label="Default select example">
                <option selected>Select your category</option>
                <option value="1">One</option>
              </select>
            </div>
            <div class="col-md-6 col-5 mt-3">
            <label for="inputEmail4" class="form-label text-white">Group Size</label>
              <select class="form-select bg-transparent text-white" aria-label="Default select example">
                <option selected>Select</option>
                <option value="1">One</option>
              </select>
            </div>
          </div>


          <p className='pt-3' style={{color:"#D434FE"}}>Please review your registration details before submitting</p>
          <div class="form-check text-white">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
            I agreed with the event terms and conditions  and privacy policy
            </label>
          </div>

          <button className='btn text-white nav-btn2 mt-3 d-flex justify-content-center w-100'  type="button">Button</button>

          <img src={PurpleImage} alt="" className=' position-absolute top-50 start-100 translate-middle w-50'style={{opacity:"0.5"}}/>
        </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default register