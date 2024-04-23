import React from 'react'
import TestImg from '../Assets/test123.jpg';
import '../components/FinalIntro.css'
const FinalIntro = () => {
  return (
    <div>
    <div className='Final-Section'>
      <h1 id='Blue-Welcome'>Welcome</h1>
      <h2 id='Gray-Intro'>You’re ready for your housewarming party.</h2>
    </div>
    <img id='TestImg' src={TestImg} alt='TestIMG'></img>
    </div>
  )
}

export default FinalIntro