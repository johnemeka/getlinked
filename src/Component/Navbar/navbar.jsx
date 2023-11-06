import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
    <div class="container ">
      <a class="navbar-brand  text-white fw-bolder">get<span style={{color:"#903AFF"}}>Linked</span> </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse  justify-content-md-end " id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#">Timeline</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Overview</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">FAQs</a>
          </li>
          <Link to="/contact" style={{borderInlineStyle:"nones"}}> 
          <li class="nav-item">
            <a class="nav-link disabled text-white">Contact</a>
          </li>
          </Link>
        </ul>
        <div className="">
      <Link to="/register" style={{listStyle:"none"}}>   <button className='btn text-white nav-btn' >register </button></Link> 
        </div>
      </div>
    </div>
    
  </nav>
  )
}  

export default navbar