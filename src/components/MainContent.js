import React,{useState} from 'react'
import Image from './Image'
import  mahabs from '../images/mahabs.jpeg'
import pondy from '../images/pondy.jpeg'

import  '../App.css'
const MainContent = () => {

const [starCount,setStarCount] =useState(0)

const handleClick = () =>{
  // setStarCount((prevStarCount) =>prevStarCount+1)
  // setStarCount((prevStarCount) =>prevStarCount+1)
  // setStarCount((prevStarCount) =>prevStarCount+1)


  setStarCount(starCount+1)

}
let count=0
const incrementValue =()=>{

  console.log('increment called')
  console.log(count)
}

  return (
    <div className='cards'>
      <div>      <Image img={mahabs} altText={"mahabalipuram"}></Image>
</div>
<p>Count ={count}</p>
      <div>

      <Image img={pondy} altText={"Pondichery"}></Image>
      <button onClick={incrementValue}>&#9733;</button><span>{starCount}</span>
      </div>

    </div>
  )
}

export default MainContent