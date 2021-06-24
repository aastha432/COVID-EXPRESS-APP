import React, { Component, PropTypes } from 'react';
import TempDB from '../temporaryDB';
import {  FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';



class Payment extends Component {
    constructor(props) {
        super(props);

    } 

    render() {
        return (
            <div class="container">
            <div class="jumbotron mt-3">
                <h1 class="display-4">Congratulations!</h1>
                <p class="lead">Your Order has been created successfully.</p>
                <hr class="my-4"/>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="/orders" role="button">View Orders</a>
                </p>
            </div>
            <a href="#"><button type="button" class="btn btn-success mt-5">Proceed for payment</button></a>
            </div>

                      )
    }
}


export default Payment;