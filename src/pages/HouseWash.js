import React, { Component } from 'react';

//import PageSection from 'components/PageSection';
import RenderPage from 'components/RenderPage';

import { connect } from 'react-redux';
//import connect from '../store/connectOld';

import { fetchHouseWash } from 'actions/';


class HouseWash extends Component {

  componentDidMount() {
    this.props.dispatch(fetchHouseWash()); //from actions..
  }

  render() {
    document.title = 'Accurate Softwash for all your exterior house cleaning needs.';
    const { data, isFetching } = this.props;
    if(isFetching){return null;}
    return (
      <div className='row'>
        <h1 className='text-center'>House Wash</h1>
        { //data coming from componentDidMount()
          <RenderPage datas={data} />
        }
      </div>
     
    );
  }
}

const mapStateToProps = ({housewash}) => {
//  console.log('state is ', state);
  return {
    data: housewash.item,
    isFetching: housewash.isFetching
  }
}

export default connect(mapStateToProps)(HouseWash);
