import React, { Component } from 'react';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Login from './../Pages/Login/Login';
import Home from './../Pages/Home/Home';
import Announcement from './../Pages/Announcement/Announcement';
import Events from './../Pages/Events/Events';
import Library from './../Pages/Library/Library';
import ServiceRequest from './../Pages/ServiceRequest/ServiceRequest';
import AmenityBooking from './../Pages/AmenityBooking/AmenityBooking';
import MyAccount from './../Pages/MyAccount/MyAccount';
import Packages from './../Pages/Packages/Packages';
import Store from './../Pages/Store/Store';
import ClassifiedAds from './../Pages/ClassifiedAds/ClassifiedAds';
import Survey from './../Pages/Survey/Survey';
import UserGuide from './../Pages/UserGuide/UserGuide';
import ServiceRequestDetails from './../Pages/ServiceRequest/ServiceRequestDetails';
import AmenityBookingDetails from './../Pages/AmenityBooking/AmenityBookingDetails'
import AllUsers from './../Pages/allUsers/allUsers'
class Router extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Home" component={Home} />
            <Route path="/Announcement" component={Announcement} />
            <Route path="/Events" component={Events} />
            <Route path="/Library" component={Library} />
            <Route path="/ServiceRequest" component={ServiceRequest} />
            <Route path="/AmenityBooking" component={AmenityBooking} />
            <Route path="/MyAccount" component={MyAccount} />
            <Route path="/Packages" component={Packages} />
            <Route path="/Store" component={Store} />
            <Route path="/ClassifiedAds" component={ClassifiedAds} />
            <Route path="/Survey" component={Survey} />
            <Route path="/UserGuide" component={UserGuide} />
            <Route path="/ServiceRequestDetails" component={ServiceRequestDetails} />
            <Route path="/AmenityBookingDetails" component={AmenityBookingDetails} />
            <Route path="/AllUsers" component={AllUsers} />

            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Router;
