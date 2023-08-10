import React from 'react'
import Image from './Image'
import  mahabs from '../images/mahabs.jpeg'
import pondy from '../images/pondy.jpeg'

import  '../App.css'
const MainContent = () => {
  return (
    <div className='cards'>
      <div>      <Image img={mahabs} altText={"mahabalipuram"}></Image>
</div>
      <div>
      <Image img={pondy} altText={"Pondichery"}></Image>

      </div>

    </div>
  )
}

export default MainContent