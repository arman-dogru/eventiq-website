import React from 'react'
import "../components/Manifesto.css";
import testImg from "../Assets/test123.jpg"
const Manifesto = () => {
  return (
    <div className='Manifesto-Conatiner'>
      <h1 className='Manifesto-Head'>OUR MANIFESTO</h1>
      <div className='Manifesto-Content'>
        <section className='Mani-Sec1'>
          <h1  id="Manifesto-Text">We are on a mission to do what?</h1>
        </section>
        <section className='Mani-Sec2'>
          <img src={testImg} alt='test'/>
        </section>
      </div>

    </div>
  )
}

export default Manifesto