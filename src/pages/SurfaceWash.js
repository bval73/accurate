import React, { Component } from 'react';
import { connect } from 'react-redux';

import RenderPage from 'components/RenderPage';
import { fetchSurfaceWash } from 'actions/';

class SurfaceWash extends Component {

  componentDidMount() {
    debugger
    this.props.dispatch(fetchSurfaceWash()); //from actions..
  }

  render() {
    document.title = 'Accurate Softwash for all your flat surface cleaning needs.';
    const { data, isFetching } = this.props;
debugger
    if(isFetching){return null;}

    return (
      <section className='row'>
        <h1 className=''>Flat Surface Cleaning</h1>
        { //data coming from componentDidMount()
          <RenderPage datas={data} />
        }
      </section>
    );
  }
}

const mapStateToProps = ({surfacewash}) => {
  debugger
  return {
    data: surfacewash.item,
    isFetching: surfacewash.isFetching
  }
}

export default connect(mapStateToProps)(SurfaceWash);

