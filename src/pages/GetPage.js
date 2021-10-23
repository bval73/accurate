
import React, { Component } from 'react';
import { connect } from 'react-redux';

import RenderPage from 'components/RenderPage';
import { fetchPageById } from 'actions/';
//import { withRouter } from 'react-router-dom';

class GetPage extends Component {
  

  componentDidMount() {
debugger
    
    const pageName = this.props.match.path; 
    console.log('did mount ', pageName);
    this.props.dispatch(fetchPageById(pageName)); //from actions..
  }

  render() {
    const { data, isFetching } = this.props;
debugger;

    if(isFetching){return null;}

    return (
      <section className='row'>
        <h1>Need to write code to pull page by page name....</h1>
        { //data coming from componentDidMount()
          <RenderPage datas={data} />
        }
      </section>
    );
  }
}

//export default GetPage;

const mapStateToProps = ({page}) => {
  debugger;
  return {
    data: page.item,
    isFetching: page.isFetching
  }
}

export default connect(mapStateToProps)(GetPage);

// const GetPageWithRouter = withRouter(GetPage);

// export default connect(mapStateToProps)(GetPageWithRouter);
