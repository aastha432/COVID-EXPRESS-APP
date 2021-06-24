import React, { Component, PropTypes } from 'react';
import TempDB from '../temporaryDB';
 
//Orders on orders page have to be read from database (presently being fetched from static temporaryDB.js file)
//.... API calls to do................
//This is page is visible to authenticated users only
/*  Authentication is required to create order of food packets from cart (will bw handles in cart page)
   No Authentication is required to add food packets to cart
 */


 class Orders extends Component {
     constructor(props) {
         super(props);
 
     }
 
     render() {
         return (
            <div class="container mt-5 d-flex align-items-center flex-column">
                    {TempDB.map((temp) => {
                        return (
<div class="card mb-3 " >
  <div class="card-body">
    <h5 class="card-title">{temp.login}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Order created at 20:34:28 IST, 20/06/2021 </h6>
    <p class="card-text">Order id - {temp.node_id}</p>
    <a href="#" class="card-link"><button type="button" class="btn btn-danger">Delete Order</button></a>
    <a href="#" class="card-link"><button type="button" class="btn btn-info">Details</button></a>
  </div>
</div>
                        )
                    })}
             </div>
            );
     }
 }
 
 
 export default Orders;

 //Note- Orders page should only be visible to authenticated users. Conditional rendering on navbar and car page is required.