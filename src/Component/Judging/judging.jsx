import React from 'react'
import "./judging.css"
import image from '../img/8046554 1 (1).png'
import image2 from '../img/Purple-Lens-Flare-PNG (1).png'

const judging = () => {
  return (
    <div style={{ backgroundColor:'#150E28', position:"relative",width: "100%", height:"110vh" }}>
        <div class="container  ">
        <div class="row gx-5 main-content justify-content-center">
            <div class="col-md-6">
            <div class="">
                <img src={image} alt="" className='img-fluid'/>
                <img src={image2} alt="" className='judge-img'/>
            </div>
            </div>
            <div class="col-md-6">
            <div class="judge-text">
                <div className="">
                    <h1 className='text-white ' style={{fontSize:'larger', fontWeight:'bold'}}>Judging Criteria<br /> <span style={{color:"#D434FE"}}>Key attributes </span></h1>
                    <p className='text-white' style={{fontSize:'small'}}> <span className='fw-bold' style={{color:"#D434FE"}}>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                            solution. Consider whether it addresses a real-world problem in a novel 
                            way or introduces innovative features.</p>
                    <p className='text-white' style={{fontSize:'small'}}> <span className='fw-bold' style={{color:"#D434FE"}}>Functionality:</span> Assess how well the solution works. Does it perform its 
                            intended functions effectively and without major issues? Judges would
                            consider the completeness and robustness of the solution. </p>
                    <p className='text-white' style={{fontSize:'small'}}> <span className='fw-bold' style={{color:"#D434FE"}}>Impact and Relevance:</span>  Determine the potential impact of the solution 
                            in the real world. Does it address a significant problem, and is it relevant 
                            to the target audience? Judges would assess the potential social, 
                            economic, or environmental benefits.</p>
                    <p className='text-white' style={{fontSize:'small'}}> <span className='fw-bold' style={{color:"#D434FE"}}>Technical Complexity:</span> Evaluate the technical sophistication of the solution. 
                            Judges would consider the complexity of the code, the use of advanced 
                            technologies or algorithms, and the scalability of the solution. </p>
                    <p className='text-white' style={{fontSize:'small'}}> <span className='fw-bold' style={{color:"#D434FE"}}>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered 
                            to the rules and guidelines of the hackathon, including deadlines, use of 
                            specific technologies or APIs, and any other competition-specific requirements. </p>
                    </div>
                    <div className="btn">
                        <button className='header-btn text-white'>Read More</button>
                    </div>
            </div>
            </div>
        </div>
        </div>
        <hr className='d-none d-md-block' style={{color:"white", marginTop:"4rem", }} />
    </div>
  )
}

export default judging