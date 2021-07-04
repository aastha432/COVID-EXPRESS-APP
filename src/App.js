import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/login.component';
import SignUp from './components/register.component';
import Profile from './components/profile.component';
import Orders from './components/orders.component';
import Cart from './components/cart.component';
import Landing from './components/landing.component';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home.component';
import Payment from './components/payment.component';
import * as Constants from './Constants';
import { authenticate } from './services/auth.service';


<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

class App extends Component { 
  constructor(props) {
    super(props);
    this.changeScreen = this.changeScreen.bind(this);
    this.authenticateUser = this.authenticateUser.bind(this);
    
    let screen;
    let isUserLoggedIn = false;
    if(localStorage.user != undefined && localStorage.user.length > 0){
      screen = Constants.ScreenName.MyProfile;
      isUserLoggedIn = true;
    }else
    {
      screen = Constants.ScreenName.Home;
    } 
    this.state = { screen: screen, isUserLoggedIn:isUserLoggedIn };
    
  }


changeScreen(val){
  this.setState({
    screen:val
  })
}

authenticateUser(){
  this.setState({
    isUserLoggedIn:true
  })
}

  renderSwitch(param) {
    switch(param) {
      case Constants.ScreenName.Home:
        return <Home changePage={this.changeScreen}></Home>;
      case Constants.ScreenName.Register:
        return <SignUp changePage={this.changeScreen}></SignUp>;
      case Constants.ScreenName.Login:
        return <SignIn changePage={this.changeScreen} authenticateUser={this.authenticateUser}></SignIn>;
      case Constants.ScreenName.MyProfile:
        return <Profile changePage={this.changeScreen}></Profile>;
      case Constants.ScreenName.MyOrders:
        return <Orders changePage={this.changeScreen}></Orders>;
      case Constants.ScreenName.MyCart:
        return <Cart changePage={this.changeScreen}></Cart>;
      case Constants.ScreenName.Payment:
        return <Payment changePage={this.changeScreen}></Payment>;
      
    }
  }

  render() {
    return (

        <div className= "container" >
          <Landing propsParent={this.props} currentLoggedIn={this.state.isUserLoggedIn} changePage={this.changeScreen}></Landing>
        { 
          this.renderSwitch(this.state.screen)
        }
         </div>
    );
  }
}

//The routes have to be rendored according to the authorization and authentication level..... 

export default App;
