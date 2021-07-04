import { pink } from '@material-ui/core/colors';
import { Link } from '@material-ui/icons';
import React, { Component, PropTypes } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import * as Constants from '../Constants';

class Landing extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#" onClick={()=>this.props.changePage(Constants.ScreenName.Home)}>Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    {/* <li className="nav-item">
        <a className="nav-link" href="/profile">Victim Profile<span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/profile">Warrior Profile<span class="sr-only">(current)</span></a>
      </li> */}
      <li className="nav-item" style={{display:this.props.currentLoggedIn?'':'none'}}>
        <a className="nav-link" href="#" onClick={()=>this.props.changePage(Constants.ScreenName.MyProfile)}>My Profile<span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item" style={{display:this.props.currentLoggedIn?'':'none'}}>
        <a className="nav-link" href="#" onClick={()=>this.props.changePage(Constants.ScreenName.MyOrders)}>My Orders<span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
        <li className="nav-item" style={{display:this.props.currentLoggedIn?'none':''}}>
            <a className="nav-link" href="#" onClick={()=>this.props.changePage(Constants.ScreenName.Register)}>Sign up </a>
        </li>
        <li className="nav-item" style={{display:this.props.currentLoggedIn?'none':''}}>
            <a className="nav-link" href="#" onClick={()=>this.props.changePage(Constants.ScreenName.Login)}>Sign in </a>
        </li>
        <li className="nav-item" style={{display:this.props.currentLoggedIn?'':'none'}}>
            <a className="nav-link" href="#" onClick={()=>this.props.changePage(Constants.ScreenName.Login)}>Sign out </a>
        </li>
        <li className="nav-item" >
            <a className="nav-link" href="#" onClick={()=>this.props.changePage(Constants.ScreenName.MyCart)}>My Cart <AiOutlineShoppingCart/> </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/aboutus">About us</a>
        </li>
    </ul>
  </div>
</nav>
        );
    }
}

//Contional rendering of nav items to be added based on User authentication


export default Landing;