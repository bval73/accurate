import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchRentalById } from 'actions'
//capitalize first letter in each word

import RentalInfo from 'components/rental/RentalInfo';

class RentalDetail extends Component {

  componentDidMount() {
    //from id in routes /rentals/:id
    //debugger
    const { _id } = this.props.match.params; 
    this.props.dispatch(fetchRentalById(_id));
  }

  render() {
    const { rental, isFetching } = this.props;
    if(isFetching){return null;}
    return (
      <div>
        <section id="rentalDetails">
          <div className="upper-section">
            <div className="row">
              <div className="col-md-6">
                <img src={rental.image} alt={rental.title} />
              </div>
              <div className="col-md-6">
                <img src={rental.image} alt={rental.title} />
              </div>
            </div>
          </div>

          <div className="details-section">
            <div className="row">
              <div className="col-md-8">
                <RentalInfo rental={rental} />
              </div>
              <div className="col-md-4"> BOOKING</div>
            </div>
          </div>
        </section> 
      </div>
    );
  }
}


const mapStateToProps = ({rental}) => { 
  return{
    rental: rental.item,
    isFetching: rental.isFetching
  }
}

const RentalDetailWithRouter = withRouter(RentalDetail);

export default connect(mapStateToProps)(RentalDetailWithRouter);

