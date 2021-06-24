 import React, { Component, PropTypes } from 'react';
 import TempDB from '../temporaryDB';
 import {  FaTrashAlt } from 'react-icons/fa';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';


 
 class Cart extends Component {
     constructor(props) {
         super(props);
 
     } 
 
     render() {
         return (
         <div class="container">
             <p class="text-center text-info mt-3">
                <h1 class="display-4">My Cart</h1>
             </p>
             <nav aria-label="breadcrumb" class=" d-flex justify-content-between">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Price - {10} INR</a></li>

                </ol>  
                <Link href="#"><FaTrashAlt/> </Link> 
            </nav>
            <nav aria-label="breadcrumb" class=" d-flex justify-content-between">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Price - {10} INR</a></li>

                </ol>  
                <Link href="#"><FaTrashAlt/> </Link> 
            </nav>
            <nav aria-label="breadcrumb" class=" d-flex justify-content-between">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Price - {10} INR</a></li>

                </ol>  
                <Link href="#"><FaTrashAlt/> </Link> 
            </nav>
            <a href="/payment"><button type="button" class="btn btn-success mt-5">Place Order</button></a>
        </div>
                       )
     }
 }
 
 Cart.propTypes = {
 
 };
 
 export default Cart;