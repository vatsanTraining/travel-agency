import React from 'react'
import  '../App.css'
const Navigation = ({links}) => {

  const createAnchor = (ele,idx) =>{
    return  <a key={idx} href={ele.link} className="navItem">{ele.linkText}</a>
  }

  return (
    <div>
        <ul>
            {
              // links.map((ele, index) => {
              //   return <a key={index} href={ele.link} className="navItem">{ele.linkText}</a>
              // })
              links.map(createAnchor)
            }
        </ul>

    </div>
  )
}

export default Navigation