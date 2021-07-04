 import React, { Component, PropTypes } from 'react';
 import {  FaTrashAlt } from 'react-icons/fa';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { createOrderFinal } from '../services/order.service';



 
 class Cart extends Component {
     constructor(props) {
         super(props);
         this.placeOrder = this.placeOrder.bind(this);
 
     } 
 
     placeOrder(){
         let createOrder = this.props.cartItems;
         createOrderFinal({createOrder}).then(data => {debugger;
            if (data.error || data.err) {
             
            } else {
              
            }
          })
          .catch(
      console.log("error in sign up")
            );  
     }
 
     render() {
         return (
         <div class="container">
             <p class="text-center text-info mt-3">
                <h1 class="display-4">My Cart</h1>
             </p>
             {this.props.cartItems.map((temp) => {
            return ( <nav aria-label="breadcrumb" class=" d-flex justify-content-between">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">{temp.name}</a></li>
                    <li class="breadcrumb-item"><a href="#">Total - {temp.price * temp.count} INR</a></li>

                </ol>  
                <Link href="#"><FaTrashAlt/> </Link> 
            </nav>)
             })}
          
            <a href="#" onClick={this.placeOrder}><button type="button" class="btn btn-success mt-5">Place Order</button></a>
        </div>
                       )
     }
 }
 
 Cart.propTypes = {
 
 };
 
 export default Cart;