import {React,useEffect} from 'react'
import ClassicsContent from '../components/ClassicsContent';
const Classicpage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
      <ClassicsContent/>
    </div>
  )
}

export default Classicpage