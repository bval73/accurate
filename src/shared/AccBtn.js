import React, { Component } from 'react';

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
        <a href={href}>
          {text}
          {this.isSecondaryText(secondaryText)}
          </a>
    </div>
    );
  }
}

export default AccBtn;

