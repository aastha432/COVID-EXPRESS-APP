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


<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

class App extends Component {
  /*constructor(props) {
    super(props);
    this.changeScreen = this.changeScreen.bind(this);
    this.state = { screen: 0 };
  }


  componentDidMount() {
    fetch('/api/message')
      .then(response => response.json())
      .then(json => this.setState({ message: json }));
  }
changeScreen(val){
  this.setState({
    screen:val
  })
}

  renderSwitch(param) {
    switch(param) {
      case 0:
        return <SignUp loginPage={this.changeScreen}></SignUp>;
      case 1:
        return <SignIn registerPage={this.changeScreen}></SignIn>;
    }
  }*/

  render() {
    return (
        /*<div className= "container" >
        { 
       this.renderSwitch(this.state.screen)
         }
         </div>*/ 


        <BrowserRouter>
          
            <Route  path='/' component={Landing} /> 
            <Route path='/signup' component={SignUp}/>  
            <Route path='/signin' component={SignIn}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/orders' component={Orders}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/home' component={Home}/>
             
        </BrowserRouter>
    );
  }
}

//The routes have to be rendored according to the authorization and authentication level..... 

export default App;
