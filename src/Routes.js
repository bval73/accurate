
import React from 'react';

import { 
  Route, 
  Redirect, 
  Switch 
} from "react-router-dom";

import AuthRoute from 'components/auth/AuthRoute';
import GuestRoute from 'components/auth/GuestRoute';

import Home from 'pages/Home';
import Services from 'pages/Services';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Intro from 'blog/Difference';
import SoftWash from 'pages/SoftWash';
import RoofWash from 'pages/RoofWash';
import HouseWash from 'pages/HouseWash';
import Contact from 'pages/Contact';
import CityPage from 'pages/CityPage';
import SurfaceWash from 'pages/SurfaceWash';
import GetPage from 'pages/GetPage';
import SecretPage from 'pages/SecretPage';

import RentalDetail from 'pages/RentalDetail';

const Routes = () => {
  return (
    <main className='container spv-container' id='content'>
      <Switch>
        <Route exact path="/" render={() => <Redirect to='/home' />} />
        <Route exact path="/blog/difference" component={Intro} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/services" component={Services} />
        <GuestRoute path="/login" >
          <Login />
        </GuestRoute>
        
        <GuestRoute path="/register" >
          <Register />
        </GuestRoute>

        <Route exact path="/house-wash" component={HouseWash} />
        <Route exact path="/roof-wash" component={RoofWash} />
        <Route exact path="/soft-wash" component={SoftWash} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/surface-wash" component={SurfaceWash} />

        <AuthRoute path="/secret" >
          <SecretPage />
        </AuthRoute>

        <Route exact path="/pages/:pageName" component={GetPage} />
        <Route path="/pressure-washing*-fl" component={CityPage} />

        <Route path="/rentals/:_id" component={RentalDetail} />
      </Switch>
    </main>
  );
}

export default Routes;
