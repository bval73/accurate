import React, { Component } from 'react';
import { connect } from 'react-redux';

import RenderPage from 'components/RenderPage';
import { fetchRoofWash } from 'actions/';

class RoofWash extends Component {

  componentDidMount() {
    this.props.dispatch(fetchRoofWash()); //from actions..
  }

  render() {
    document.title = 'Accurate Softwash for all your roof cleaning needs.';
    const { data, isFetching } = this.props;
    if(isFetching){return null;}

    return (
      <div className='row'>
        <h1 className='text-center'>Wash your roof don't replace it.</h1>
        { //data coming from componentDidMount()
          <RenderPage datas={data} />
        }
      </div>
    );
  }
}

const mapStateToProps = ({roofwash}) => {
//  console.log('state is ', state);
  return {
    data: roofwash.item,
    isFetching: roofwash.isFetching
  }
}

export default connect(mapStateToProps)(RoofWash);

