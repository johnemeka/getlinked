import React from 'react'
import './faq.css'
import FAQ from '../img/cwok_casual_21 1 (1).png'

const faq = () => {
    const divStyle = {
        borderBottom: '2px solid #D434FE',
        backgroundColor:'#150E28'
      };
  return (
    <div className='faq-header'  >
        <div class="container overflow-hidden">
            <div class="row gx-5 mt-5">
                <div class="col-md-6">
                <div class="p-3 faq-text ">
                <h1 className='text-white '  style={{fontSize:'30px', fontWeight:'bold'}}>Frequently Ask<br /> <span style={{color:"#D434FE"}}>Question</span></h1>
                <p className='pt-2 text-white' style={{fontSize:'small'}}>We got answers to the questions that you might <br /> want to ask about getlinked Hackathon 1.0</p>
                <div className="mt-5">
                <div class="accordion" id="accordionPanelsStayOpenExample " >
                    <div class="accordion-item border-0" style={divStyle} >
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button style={divStyle} class="accordion-button text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Can I work on a project I started before the hackathon?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show border-0" aria-labelledby="panelsStayOpen-headingOne">
                        
                        </div>
                    </div>
                    <div class="accordion-item border-0 " style={{ backgroundColor:'#150E28'}}>
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                        <button style={divStyle} class="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        What happens if I need help during the hackathon?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item border-0" style={{ backgroundColor:'#150E28'}}>
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button style={divStyle} class="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        What happens if I don't have an idea for a project?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item border-0" style={{ backgroundColor:'#150E28'}}>
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button style={divStyle} class="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Can I join a team or do I have to come with one?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item border-0" style={{ backgroundColor:'#150E28'}}>
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button style={divStyle} class="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        What happens after the hackathon ends
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item border-0" style={{ backgroundColor:'#150E28'}}>
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button style={divStyle} class="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Can I work on a project I started before the hackathon?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6">
                <div class="p-3 ">
                    <img src={FAQ} alt="" className='img-fluid'/>
                </div>
                </div>
            </div>
            </div>
            <hr style={{color:"white", marginTop:"4rem", }} />
    </div>
  )
}

export default faq