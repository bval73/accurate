
import React, { Component } from 'react';

import { connect } from 'react-redux';

import ApiErrors from 'components/form/ApiErrors';
import CreatePageForm from 'components/form/CreatePageForm';
import { createPage } from 'actions';
import { Redirect } from 'react-router-dom';

class PageNew extends Component {

  state = {
    shouldRedirect: false,
    errors: [],
    pageName: '',
    user: {}
  }

  handleCreatePage = (pageData) => {
    createPage(pageData)
      .then(_ => this.setState({shouldRedirect: true, pageName: pageData.pageName}))
      .catch(err => {
        this.setState({errors: err})
      })
  }

  render() {
    const { shouldRedirect, errors, pageName } = this.state;
    if(shouldRedirect) {
      return <Redirect to={{pathname: `/page/${pageName}`}} /> 
    }

    return (
      <section id="newPage">
        <div className="acc-form">
          <div className="row">
            <div className="col-md-5">
              <h1 className="page-title">Create Page</h1>
              <CreatePageForm onSubmit={this.handleCreatePage}  />
              <ApiErrors errors={errors}/>
            </div>
            <div className="col-md-6 ml-auto">
              <div className="image-container">
                <h2 className="catchphrase">Hundreds of awesome places in reach of few clicks.</h2>
                <img src="/images/create-rental.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section> 
    );
  }
}

//export default PageNew;

const mapStateToProps = (state) => {
  return {
    data: state.PageNew
  }
}

export default connect(mapStateToProps)(PageNew);
