
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

import './App.css';

import Header from './shared/Header';
import Routes from './Routes';

import { Provider } from 'react-redux';
import { AuthProvider, useAuth } from './providers/AuthProvider';
import { MapProvider } from './providers/MapProvider';

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
    // <Router>
    <div>
      <Header logout={authService.logout} />
        <Routes />
      <Header logout={authService.logout} />
      </div>
    // </Router>
  )
}

const App = () => {
  return (
    <Router>
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
              <Link className="" to="/home">
                <img src='/images/NEWLOGOSMALL.svg' alt='logo'/>
              </Link>
            </div>

            <div className='logo  areas col-md-4 col-sm-6 d-none d-lg-block d-md-block'>
              <div className='w-100'><b>Some of the area's we proudly clean in Florida:</b></div> 
{/*TODO change anchors to Links with to={{path="some path here"}} */}
              <Link className="nav-item" aria-current="page" to="/pressure-washing-dade-city">Dade City</Link>, 
              {/* <a href='pressure-washing-dade-city'>Dade City</a>, */}
              <Link className="nav-item" aria-current="page" to="/pressure-washing-st-leo">Saint Leo</Link>,
              <Link className="nav-item" aria-current="page" to="/pressure-washing-san-antonio">Saint Antonio</Link>, 

              <Link className="nav-item" aria-current="page" to='/pressure-washing-wesley-chapel'>Wesley Chapel</Link>, 
              <Link className="nav-item" aria-current="page" to='/pressure-washing-trilby'>Trilby</Link>,	
              <Link className="nav-item" aria-current="page" to='/pressure-washing-zephyrhills'>Zephyrhills</Link>, 
              <Link className="nav-item" aria-current="page" to='/pressure-washing-lacoochee'>Lacoochee</Link>, 
              <Link className="nav-item" aria-current="page" to='/pressure-washing-crystal-springs'>Crystal Springs</Link>,	
              <Link className="nav-item" aria-current="page" to='/pressure-washing-kathleen'>Kathleen</Link>,	
              <Link className="nav-item" aria-current="page" to='/pressure-washing-land-o-lakes'>Land O Lakes</Link>,	
              <Link className="nav-item" aria-current="page" to='/pressure-washing-spring-hill'>Spring Hill</Link>,	
              <Link className="nav-item" aria-current="page" to='/pressure-washing-webster'>Webster</Link>,	
              <Link className="nav-item" aria-current="page" to='/pressure-washing-tampa'>Tampa</Link>, 
              <Link className="nav-item" aria-current="page" to='/pressure-washing-thonotosassa'>Thonotosassa</Link>,	
              <Link className="nav-item" aria-current="page" to='/pressure-washing-brooksville'>Brooksville</Link>, 
              <Link className="nav-item" aria-current="page" to='/pressure-washing-lutz'>Lutz</Link>,	
              <Link className="nav-item" aria-current="page" to='/pressure-washing-nobleton'>Nobleton</Link>, 
              <Link className="nav-item" aria-current="page" to='/pressure-washing-plant-city'>Plant City</Link>,	
              <Link className="nav-item" aria-current="page" to='/pressure-washing-bushnell'>Bushnell</Link>, 
              <Link className="nav-item" aria-current="page" to='/pressure-washing-seffner'>Seffner</Link>, 
              <Link className="nav-item" aria-current="page" to='/pressure-washing-odessa'>Odessa</Link>
            </div>

            <div className='logo-right col-md-4 col-sm-6'>
            <a href="tel:8135551212">813-555-1212</a> 
              <AccBtn className='acc-btn contact'
                text='Get Your FREE Quote'
                href='/appointment'
              />
            </div>
        </div>
      </header>
      <Providers>
        <AccApp />
      </Providers>
    </div>
    </Router>
  );
}

export default App;

