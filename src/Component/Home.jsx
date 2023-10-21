import React from 'react'
import { Header, Introduction, Rules, Judging, Faq, Prize, Privacy, Partner, Timeline } from '../Component';

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
    </div>
  )
}

export default Home