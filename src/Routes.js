
import React from 'react';

import { 
  Route, 
  Redirect, 
  Switch 
} from "react-router-dom";

import AuthRoute from './components/auth/AuthRoute';
import GuestRoute from './components/auth/GuestRoute';

import Home from './pages/Home';
import Services from './pages/Services';
import Login from './pages/Login';
import Register from './pages/Register';
import Intro from './blog/Difference';
import Contact from './pages/Contact';
import CityPage from './pages/CityPage';
// import GetPage from './pages/GetPage';
import SecretPage from './pages/SecretPage';
// import PageNew from './pages/PageNew';
import Thankyou from './pages/ThankYou';
import Appointment from './pages/Appointment';
import SurfaceWash from './pages/SurfaceWash';
import RoofWash from './pages/RoofWash';
import HouseWash from './pages/HouseWash';
import SoftWash from './pages/SoftWash';


const Routes = () => {
  return (
    <main className='container' id='content'>
      <Switch>
        <Route exact path="/" render={() => <Redirect to='/home' />} />
        <Route exact path="/blog/difference" component={Intro} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/surfaceWash" component={SurfaceWash} />
        <Route exact path="/roofWash" component={RoofWash} />
        <Route exact path="/houseWash" component={HouseWash} />
        <Route exact path="/softWash" component={SoftWash} />

        <GuestRoute path="/login" >
          <Login />
        </GuestRoute>
        
        <GuestRoute path="/register" >
          <Register />
        </GuestRoute>

        <Route exact path="/contact" component={Contact} />

        <AuthRoute path="/secret" >
          <SecretPage />
        </AuthRoute>

        {/* <AuthRoute path="/page/create" >
          <PageNew />
        </AuthRoute>
        <Route exact path="/page/:pageName" component={GetPage} /> */}

        <Route path="*/pressure-washing*" component={CityPage} />

        <Route exact path="/Thankyou" component={Thankyou} />
        
        <Route exact path="*/appointment" component={Appointment} />

      </Switch>
    </main>
  );
}

export default Routes;
