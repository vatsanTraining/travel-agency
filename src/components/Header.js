import React from 'react'
import Navigation from './Navigation'
import Image from './Image'
import logo from '../images/logo.jpeg'
const Header = ({title,city,phonenumber}) => {
    const links=[{
        link:"/europe",
        linkText:"Europe"
    
      },
      {
        link:"/australia",
        linkText:"Australia"
    
      },
      {
        link:"/asia",
        linkText:"Asia"
    
      }
    ]
      const style1 ={width:"50px", height:"50px",border:'1px solid red'}

    return (
    <div>
      <Image img={logo} altText={"company logo"} style={style1} ></Image>
  <h1>{title}</h1>
  <h3>{city}</h3>
  <h3>{phonenumber}</h3>
        <Navigation links={links}></Navigation>

    </div>
  )
}

export default Header