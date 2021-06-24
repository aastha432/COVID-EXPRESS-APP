import React, { Component, PropTypes } from 'react';
import TempDB from '../temporaryDB';
 
//Food packets on Home page have to be read from database (presently being fetched from static temporaryDB.js file)
//.... API calls to do................
//This is page is visible to both authenticated and unauthenticated users
/*  Authentication is required to creat order of food packets from cart (will bw handles in cart page)
   No Authentication is required to add food packets to cart
 */


 class Home extends Component {
     constructor(props) {
         super(props);
 
     }
 
     render() {
         return (
            <div class="container mt-5">
                  <div class="row">
                    {TempDB.map((temp) => {
                        return (
                            <div class="col-sm mt-3">
                             <div class="card">
                                <img class="card-img-top" src={temp.avatar_url} alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">{temp.login}</h5>
                                    <p class="card-text">Some quick text</p>
                                    <a href="/" class="btn btn-primary">Add to Cart</a>
                                </div>
                                </div>
                            </div>); 
                    })}
                 </div>
             </div>
            );
     }
 }
 
 
 export default Home;