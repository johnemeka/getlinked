import React from 'react'
import { Header, Introduction, Rules, Judging, Faq, Prize, Privacy, Partner, Timeline, Footer } from '../Component';

const Home = () => {
  return (
    <div>
        <Header/>
      <Introduction/>
      <Rules/>
      <Judging/>
      <Faq/>
      <Timeline/>
      <Prize />
      <Partner/>
      <Privacy/>
      <Footer/>
    </div>
  )
}

export default Home