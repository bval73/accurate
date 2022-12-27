
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import RenderPage from 'components/RenderPage';
import { fetchPageById } from 'actions';

class GetPage extends Component {

  componentDidMount() {
    const { pageName } = this.props.match.params; 
    this.props.dispatch(fetchPageById(pageName));
  }

  render() {
    const { data, isFetching } = this.props;

    if(isFetching){return null;}

    return (
      <section className='row'>
        <h1>{data.length > 0 && data[0].pageTitle}</h1>
        { //data coming from componentDidMount()
          <RenderPage datas={data} />
        }
      </section>
    );
  }
}

//export default GetPage;
const mapStateToProps = ({page}) => {
  return {
    data: page.item,
    isFetching: page.isFetching
  }
}

//export default connect(mapStateToProps)(GetPage);

const GetPageWithRouter = withRouter(GetPage);

export default connect(mapStateToProps)(GetPageWithRouter);
