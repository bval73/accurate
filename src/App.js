import React, {useEffect} from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
//import logo from './accurateSmall.svg';
//import logo from '/images/NEWLOGOSMALL.svg';

import Header from './shared/Header';
import Routes from './Routes';

//import Provider from './store/Provider';
import { Provider } from 'react-redux';
import { AuthProvider, useAuth } from 'providers/AuthProvider';

import { initStore } from './store';

import Footer from './shared/Footer';
import AccBtn from './shared/AccBtn';

const store = initStore();

const Providers = ({children}) => {
  return(
    <Provider store={store}>
      <AuthProvider> {/*HOC*/}
        {children}
      </AuthProvider>
    </Provider>
  )
}

const AccApp = () => {

  const authService = useAuth();
  
  useEffect(() => {
    authService.checkAuthState(); //providers/AuthProvider
  }, [authService])

  return(
    <Router>
      <Header logout={authService.logout} />
      <Routes />
      <Footer />
    </Router>
  )
}

const App = () => {
  return (
    <div className="App">
      <a className="skip-main" href="#content">Skip to main content</a>
      <header>
        <div className="top-banner blue-green row">
          <span className="col-md-2">
            <i className='fa fa-phone'></i>
            <a href="tel:8135551212">813-555-1212</a>
          </span>
          <span className="col-md-3">
            <i className='fa fa-envelope-o'></i>  
            <a href="mailto:someemail@gmail.com">
              info@someemail.com
            </a>
          </span>
          <div className='col-md-4'>
            <span className='float-end'>
              <a href='http://facebook.com' target='_blank' title='Facebook' rel="noreferrer">
                <i className='fa fa-facebook'></i>
              </a>
              <a href='http://youtube.com' target='_blank' title='Youtube' rel="noreferrer">
                <i className='fa fa-youtube'></i>
              </a>
              <a href='http://twitter.com' target='_blank' title='Twitter' rel="noreferrer">
                <i className='fa fa-twitter'></i>
              </a>
            </span>
          </div>
        </div>
        <div className='top-banner row logo-row'>
            <div className='logo col-md-4 col-sm-6'>
              <a className="" href="/home">
                <img src='/images/NEWLOGOSMALL.svg' alt='logo'/>
              </a>
            </div>

            <div className='logo col-md-4 col-sm-6 d-none d-lg-block d-md-block'>
              <b>Some of the area's we proudly serve in Florida:</b> Dade City, Saint Leo, San Antonio,	Wesley Chapel, Trilby,	Zephyrhills, Lacoochee, Crystal Springs,	Kathleen,	Land O Lakes,	Spring Hill,	Webster,	Tampa, Thonotosassa,	Brooksville, Lutz,	Nobleton, Plant City,	Bushnell, Seffner, Odessa
            </div>

            <div className='logo-right col-md-4 col-sm-6'>
            <a href="tel:8135551212">813-555-1212</a> 
              <AccBtn className='acc-btn contact'
                text='Get Your FREE Quote'
                href='/contact'
//                  secondaryText=''
              />
            </div>
        </div>
      </header>
      <Providers>
        <AccApp />
      </Providers>
    </div>
  );
}

export default App;


