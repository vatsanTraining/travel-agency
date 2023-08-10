
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Footer extends Component {
  constructor(props) {
    super(props);
   this.state = { 
    clapCount:1
  }
  }
   handleClick=(e) =>{
    this.setState({clapCount:this.state.clapCount+1})
  }
  render() {
    return (
      <div>
        <p>Claps:👏{this.state.clapCount}</p>
        <Button handleClick={this.handleClick}></Button>
      </div>
    );
  }
}

Footer.propTypes = {

};

export default Footer;