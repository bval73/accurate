import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AccBtn extends Component {
  isSecondaryText(secondaryText){
    if(secondaryText) {
      return(
        <React.Fragment>
          <br />
          <span>{secondaryText}</span>
        </React.Fragment>
      )
    }else{
      return null
    }
  }
  render(props) {
    const {className, text, secondaryText, href} = this.props;

    return (
      <div className={className}>
        <Link to={href}>
          {text}
          {this.isSecondaryText(secondaryText)}
        </Link>
    </div>
    );
  }
}

export default AccBtn;

