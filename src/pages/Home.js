import React, { Component } from 'react';

import RentalCard from 'components/rental/RentalCard';
//import store from '../store'; //fake DB

//import connect from '../store/connectOld';
import { connect } from 'react-redux';

import { fetchRentals } from 'actions/';

import Carousel from 'shared/Carousel';


class Home extends Component {

  state = {
    rentals: []
  }

 componentDidMount() {
  this.props.dispatch(fetchRentals()); //from actions..
 }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div className="col-md-4" key={rental._id}>
        <RentalCard rental={rental}/>
      </div>
    );

  render() {
    const { rentals } = this.props;
    document.title = 'Accurate Soft Wash The Top Pressure Washing & Soft Wash Company in Dade City';

    return (
      <div>
        <section>
          <h1 className="page-title">We treat your home as if it were ours.</h1>
          <Carousel />
        </section>
        <section>
          <div className="card-list">
            
            <div className="row">
              { 
                this.renderRentals(rentals)
              }
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rentals: state.rentals
  }
}

export default connect(mapStateToProps)(Home);
