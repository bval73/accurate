import React, { Component } from 'react';

//import PageSection from 'components/PageSection';
import RenderPage from 'components/RenderPage';

import { connect } from 'react-redux';
//import connect from '../store/connectOld';

import { fetchSoftWash } from 'actions/';


class SoftWash extends Component {

  componentDidMount() {
    this.props.dispatch(fetchSoftWash()); //from actions..
  }

  render() {
    document.title = 'Accurate Softwash for all your exterior house cleaning needs.';
    const { data, isFetching } = this.props;
    if(isFetching){return null;}
    return (
      <div className='row'>
        <h1 className='text-center'>Soft Wash</h1>
        { //data coming from componentDidMount()
          <RenderPage datas={data} />
        }
      </div>
     
    );
  }
}

const mapStateToProps = ({softwash}) => {
  return {
    data: softwash.item,
    isFetching: softwash.isFetching
  }
}

export default connect(mapStateToProps)(SoftWash);
