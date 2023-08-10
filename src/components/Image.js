import React from 'react'

const Image = ({img, altText,style}) => {

    return (
    <img src={img} alt={altText} style={style} />
  )
}

export default Image