//useEffect like componentDidMount, componentDidUpdate and componentWillUnmount combined in class components but in functional components..  React will remember the function you passed and call it later after performing the DOM updates.

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
import { MapProvider } from 'providers/MapProvider';

import { initStore } from './store';

import AccBtn from './shared/AccBtn';


const store = initStore();

const Providers = ({children}) => {
  return(
    <Provider store={store}>
      <AuthProvider> {/*HOC*/}
        <MapProvider>
        {children}
        </MapProvider>
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
      <Header logout={authService.logout} />
    </Router>
  )
}

const App = () => {
  return (
    <div className="App">
      <a className="skip-main" href="#content">Skip to main content</a>
      <header>
        <div className="top-banner blue-green row">
          <span className="col-md-3">
            <i className='fa fa-map-marker'></i>
            <a href='https://www.google.com/maps/place/Lynan+Farms+Dr,+Dade+City,+FL+33525/@28.3582518,-82.2214969,17z/data=!3m1!4b1!4m5!3m4!1s0x88c2ab55fa4c2133:0x2c2a13ac095b892c!8m2!3d28.3582471!4d-82.2193082' target='_blank' rel="noreferrer"> Lynan Farms Dr. Dade City, Fl </a>
          </span>
          <span className="col-md-2">
            <i className='fa fa-phone'></i>
            <a href="tel:8135551212">813-555-1212</a>
          </span>
          <span className="col-md-3">
            <i className='fa fa-envelope-o'></i>  
            <a href="mailto:accuratesoftwash@gmail.com">
              info@accuratesoftwash.com
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

            <div className='logo  areas col-md-4 col-sm-6 d-none d-lg-block d-md-block'>
              <b>Some of the area's we proudly serve in Florida:</b> <br />
              <a href='pressure-washing-dade-city' >Dade City</a>, 
              <a href='pressure-washing-st-leo'>Saint Leo</a>,
              <a href='pressure-washing-san-antonio'>San Antonio</a>,	
              <a href='pressure-washing-wesley-chapel'>Wesley Chapel</a>, 
              <a href='pressure-washing-trilby'>Trilby</a>,	
              <a href='pressure-washing-zephyrhills'>Zephyrhills</a>, 
              <a href='pressure-washing-lacoochee'>Lacoochee</a>, 
              <a href='pressure-washing-crystal-springs'>Crystal Springs</a>,	
              <a href='pressure-washing-kathleen'>Kathleen</a>,	
              <a href='pressure-washing-land-o-lakes'>Land O Lakes</a>,	
              <a href='pressure-washing-spring-hill'>Spring Hill</a>,	
              <a href='pressure-washing-webster'>Webster</a>,	
              <a href='pressure-washing-tampa'>Tampa</a>, 
              <a href='pressure-washing-thonotosassa'>Thonotosassa</a>,	
              <a href='pressure-washing-brooksville'>Brooksville</a>, 
              <a href='pressure-washing-lutz'>Lutz</a>,	
              <a href='pressure-washing-nobleton'>Nobleton</a>, 
              <a href='pressure-washing-plant-city'>Plant City</a>,	
              <a href='pressure-washing-bushnell'>Bushnell</a>, 
              <a href='pressure-washing-seffner'>Seffner</a>, 
              <a href='pressure-washing-odessa'>Odessa</a>
            </div>

            <div className='logo-right col-md-4 col-sm-6'>
            <a href="tel:8135551212">813-555-1212</a> 
              <AccBtn className='acc-btn contact'
                text='Get Your FREE Quote'
                href='/appointment'
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


