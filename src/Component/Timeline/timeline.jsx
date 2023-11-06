import React from 'react'
import './timeline.css'

const timeline = () => {
  return (
    <section className='time-header'>
        <div className=" text-center text-white">
          <h1>Timeline</h1>
          <p>Here is the breakdown of the time we anticipate <br /> using for the upcoming event.</p>
        </div>

      <div className="medium-screen container ">
            <div class="row align-items-center margin">
                <div class="col-md-5 text-end ">
                <h4 style={{color:"#D434FE",fontSize:"20px"}}>Hackathon Announcement</h4>
                <p className='text-white' style={{fontSize:"12px"}}>The getlinked tech hackathon 1.0 is formally announced <br /> to the general public and teams begin to get ready to register</p>
                </div>
                <div class="col-md-2  ">
                  <div className="hr"></div>
                  <div className="num text-white d-flex align-items-center justify-content-center">1</div>
                </div>
                <div class="col-md-5 text-start ">
                  <h4 style={{color:"#D434FE",fontSize:"20px"}}>November 18,2023</h4>
                </div>
            </div>

            <div class="row align-items-center mt-5">
                <div class="col-md-5 text-end ">
                <h4 style={{color:"#D434FE",fontSize:"20px"}}>November 18,2023</h4>
                </div>
                <div class="col-md-2  text-center ">
                <div className="hr-1"></div>
                  <div className="num text-white d-flex align-items-center justify-content-center">2</div>
                </div>
                <div class="col-md-5 text-start ">
                <h4 style={{color:"#D434FE",fontSize:"20px"}}>Teams Registration begins</h4>
                <p className='text-white' style={{fontSize:"12px"}}>Interested teams can now show their interest in the <br /> getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                
                </div>
            </div>

            <div class="row align-items-center mt-5">
              <div class="col-md-5 text-end ">
              <h4 style={{color:"#D434FE",fontSize:"20px"}}>Teams Registration ends</h4>
              <p className='text-white' style={{fontSize:"12px"}}>Interested Participants are no longer Allowed to <br /> register</p>
              </div>
              <div class="col-md-2 text-center ">
              <div className="hr-2"></div>
                  <div className="num text-white d-flex align-items-center justify-content-center">3</div>
              </div>
              <div class="col-md-5 text-start ">
                <h4 style={{color:"#D434FE",fontSize:"20px"}}>November 18,2023</h4>
              </div>
            </div>

            <div class="row align-items-center mt-5">
                <div class="col-md-5 text-end ">
                <h4 style={{color:"#D434FE",fontSize:"20px"}}>November 18,2023</h4>
                </div>
                <div class="col-md-2  text-center ">
                <div className="hr-3"></div>
                  <div className="num text-white d-flex align-items-center justify-content-center">4</div>
                </div>
                <div class="col-md-5 text-start ">
                <h4 style={{color:"#D434FE",fontSize:"20px"}}>Announcement of the accepted teams and ideas</h4>
                <p className='text-white' style={{fontSize:"12px"}}>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                
                </div>
            </div>

            <div class="row align-items-center mt-5">
                <div class="col-md-5 text-end ">
                <h4 style={{color:"#D434FE",fontSize:"20px"}}>Getlinked Hackathon 1.0 Offically Begins</h4>
                <p className='text-white' style={{fontSize:"12px"}}>Accepted teams can now proceed to build their <br /> ground breaking skill driven solutions</p>
                </div>
                <div class="col-md-2 text-center ">
                <div className="hr-4"></div>
                  <div className="num text-white d-flex align-items-center justify-content-center">5</div>
                </div>
                <div class="col-md-5 text-start ">
                  <h4 style={{color:"#D434FE",fontSize:"20px"}}>November 18,2023</h4>
                </div>
            </div>

            <div class="row align-items-center mt-5">
                <div class="col-md-5 text-end ">
                <h4 style={{color:"#D434FE",fontSize:"20px"}}>November 18,2023</h4>
                </div>
                <div class="col-md-2  text-center ">
                <div className="hr-5"></div>
                  <div className="num text-white d-flex align-items-center justify-content-center">6</div>
                </div>
                <div class="col-md-5 text-start ">
                <h4 style={{color:"#D434FE",fontSize:"20px"}}>Demo Day</h4>
                <p className='text-white' style={{fontSize:"12px"}}>Teams get the opportunity to pitch their projects to judges. <br /> The winner of the hackathon will also be announced on <br /> this day</p>
                
                </div>
            </div>


      </div>

      <div className="small-screen container mt-5">
      <div class="row justify-content-center mt-5">
        <div class="col-2">
          <div className="d-flex flex-column align-items-end ">
          <div className="small hr1"></div>
          <div className="small-num num-1 text-white d-flex align-items-center justify-content-center">1</div>
          </div>
        </div>
        <div class="col-9">
          <h4 style={{color:"#D434FE",fontSize:"15px"}}>Hackathon Announcement</h4>
          <p className='text-white' style={{fontSize:"14px"}}>The getlinked tech hackathon 1.0 is formally <br/> announced to the general public and teams <br /> begin to get ready to register</p>
          <h4 style={{color:"#D434FE",fontSize:"15px"}}>Novembar 18,2023</h4>
        </div>
      </div>

      <div class="row justify-content-center mt-4">
        <div class="col-2">
          <div className="d-flex flex-column align-items-end">
          <div className="small hr2"></div>
           <div className="small-num num-2 text-white d-flex align-items-center justify-content-center">2</div>
          </div>
        </div>
        <div class="col-9">
          <h4 style={{color:"#D434FE",fontSize:"15px"}}>Hackathon Announcement</h4>
          <p className='text-white' style={{fontSize:"14px"}}>The getlinked tech hackathon 1.0 is formally <br/> announced to the general public and teams <br /> begin to get ready to register</p>
          <h4 style={{color:"#D434FE",fontSize:"15px"}}>Novembar 18,2023</h4>
        </div>
      </div>

      <div class="row justify-content-center mt-4">
        <div class="col-2">
          <div className="d-flex flex-column align-items-end">
          <div className="small hr3"></div>
          <div className="small-num num-3 text-white d-flex align-items-center justify-content-center">3</div>
          </div>
        </div>
        <div class="col-9">
          <h4 style={{color:"#D434FE",fontSize:"15px"}}>Hackathon Announcement</h4>
          <p className='text-white' style={{fontSize:"14px"}}>The getlinked tech hackathon 1.0 is formally <br/> announced to the general public and teams <br /> begin to get ready to register</p>
          <h4 style={{color:"#D434FE",fontSize:"15px"}}>Novembar 18,2023</h4>
        </div>
      </div>

      <div class="row justify-content-center mt-4">
        <div class="col-2">
          <div className="d-flex flex-column align-items-end">
          <div className="small hr4"></div>
           <div className="small-num num-4 text-white d-flex align-items-center justify-content-center">4</div>
          </div>
        </div>
        <div class="col-9">
          <h4 style={{color:"#D434FE",fontSize:"15px"}}>Hackathon Announcement</h4>
          <p className='text-white' style={{fontSize:"14px"}}>The getlinked tech hackathon 1.0 is formally <br/> announced to the general public and teams <br /> begin to get ready to register</p>
          <h4 style={{color:"#D434FE",fontSize:"15px"}}>Novembar 18,2023</h4>
        </div>
      </div>

      <div class="row justify-content-center mt-4">
        <div class="col-2">
          <div className="d-flex flex-column align-items-end">
          <div className="small hr5"></div>
          <div className="small-num num-5 text-white d-flex align-items-center justify-content-center">5</div>
          </div>
        </div>
        <div class="col-9">
          <h4 style={{color:"#D434FE",fontSize:"15px"}}>Hackathon Announcement</h4>
          <p className='text-white' style={{fontSize:"14px"}}>The getlinked tech hackathon 1.0 is formally <br/> announced to the general public and teams <br /> begin to get ready to register</p>
          <h4 style={{color:"#D434FE",fontSize:"15px"}}>Novembar 18,2023</h4>
        </div>
      </div>

      <div class="row justify-content-center mt-4">
        <div class="col-2">
          <div className="d-flex flex-column align-items-end">
          <div className="small hr6"></div>
          <div className="small-num num-6 text-white d-flex align-items-center justify-content-center">6</div>
          </div>
        </div>
        <div class="col-9">
          <h4 style={{color:"#D434FE",fontSize:"15px"}}>Hackathon Announcement</h4>
          <p className='text-white' style={{fontSize:"14px"}}>The getlinked tech hackathon 1.0 is formally <br/> announced to the general public and teams <br /> begin to get ready to register</p>
          <h4 style={{color:"#D434FE",fontSize:"15px"}}>Novembar 18,2023</h4>
        </div>
      </div>


      </div>

    <hr className='d-none d-md-block' style={{color:"white", marginTop:"4rem"}} />
    </section>
  )
}

export default timeline