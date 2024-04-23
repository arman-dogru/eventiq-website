import React from 'react'
import '../components/ClassicsAbout.css'
import aboutimg from '../Assets/left-image.jpg';
const ClassicsAbout = () => {
  return (
    <div className='Classics-About-Container'>
      <h1 className='Aboutus-Heading'>About us</h1>
      <div className='Aboutus-Text'>
        <section>
          <img src={aboutimg} className='Aboutus-img' alt='About-click' />
        </section>

        <section className='Aboutus-Questions'>
          <h2>Who is our target audience?</h2>
          <h2>What do we do?</h2>
          <h2>Who are we for?</h2>
        </section>

      </div>
    </div>
  )
}

export default ClassicsAbout