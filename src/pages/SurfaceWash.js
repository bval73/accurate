

import React, { Component } from 'react';

class SurfaceWash extends Component {

  render() {
    document.title = 'Accurate Softwash for all your Surface Cleaning needs.';
    // const { data, isFetching } = this.props;

    // if(isFetching){return null;}

    return (
      <section className="row">
        <h1>Surface Wash</h1>
        <div className="col-md-6">
          <img src="/images/slide1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-md-6">
          <div>
            <p>
              Accurate Softwash cleans more than just siding, wood and roofs. We can clean most of the dirty surfaces around your property. Hard surfaces such as concrete, brick, tile, stone, or pavers can be cleaned using what is called a softwash system. We also use a surface cleaner for those harder to clean stains when needed. Surfaces we clean include driveways, sidewalks, patios, brick steps, pavers, and pool areas
            </p>
            <p>
              As with other cleaning areas pricing for surface cleaning is different from job to job and is determined by many factors. That is why we prefer you give us a call or email us to set up a time we can come out and give you a FREE Quote and the best possible price we can. We also offer bundle pricing when surface cleaning is combine with a roof or house wash.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default SurfaceWash;

