import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchPageById } from 'actions';

import Carousel from 'shared/Carousel';


class Home extends Component {
  state = {
    pages: []
  }

  componentDidMount() {
    this.props.dispatch(fetchPageById('home')); //from actions..
  }

  renderPages = (pages) => 
    pages.map(page => 
      <div className={page.className} key={page._id}>
        <a href={page.pageTitle}>
          <div className='imageHover'>{page.sectionTitle}</div>
          <img src={`${page.image}`} className="img-fluid" alt=""/>
        </a>
      </div>
    );

  render() {
    const { data, isFetching } = this.props;

    if(isFetching){return null;}

    document.title = 'Accurate Soft Wash The Top Pressure Washing & Soft Wash Company in Dade City';

    return (
      <div>
        <section>
          <h1 className="page-title">We treat your home as if it were ours.</h1>
          <Carousel />
        </section>
        <section>
          <div className="row">
          {
            this.renderPages(data)
          }
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({page}) => {
  return {
    data: page.item,
    isFetching: page.isFetching
  }
}

export default connect(mapStateToProps)(Home);
