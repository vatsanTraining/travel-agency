import React from 'react'
import PropTypes from 'prop-types';

const Button = ({handleClick}) => {
  return (
    <button onClick={handleClick}>Clap</button>

  )
}
Button.propTypes={
    handleClick:PropTypes.func
}
export default Button