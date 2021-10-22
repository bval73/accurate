
import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import RenderPage from 'components/RenderPage';

import { fetchPageById } from 'actions/';

class GetPage extends Component {

  componentDidMount() {
debugger
    let pageName = this.props.match.path; 
    const split1 = pageName.split('/');
    pageName = split1.join(' ').split('-').join('');
    
    console.log(pageName);
    this.props.dispatch(fetchPageById(pageName));
  }

  render() {
    const { data, isFetching } = this.props;
debugger;

    if(isFetching){return null;}

    return (
      <div>
        <h1>Need to write code to pull page by page name....</h1>
        { //data coming from componentDidMount()
          <RenderPage datas={data} />
        }
      </div>
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
