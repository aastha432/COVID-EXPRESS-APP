import React, { Component, PropTypes } from 'react';
import { getProducts } from '../services/products.service';

 
//Food packets on Home page have to be read from database (presently being fetched from static temporaryDB.js file)
//.... API calls to do................
//This is page is visible to both authenticated and unauthenticated users
/*  Authentication is required to creat order of food packets from cart (will bw handles in cart page)
   No Authentication is required to add food packets to cart
 */

 

 class Home extends Component {
     constructor(props) {
         super(props);
         this.loadProducts = this.loadProducts.bind(this);
         this.state = {
             products:[]
         }
         this.loadProducts();
     }

     loadProducts(){
        getProducts().then(data => {
            debugger;
            if (data.error) {
              
            } else {
              this.setState({
                  products:data
              });
            }
          });
     }
 
     render() {
         return (
            <div class="container mt-5">
                  <div class="row">
                    {this.state.products.map((temp) => {
                        return (
                            <div class="col-sm mt-3">
                             <div class="card">
                                <img class="card-img-top" src={temp.product_url} alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">{temp.name}</h5>
                                    <p class="card-text">{temp.description}</p>
                                    <p class="card-text">{temp.price}</p>
                                    <a href="#" class="btn btn-primary">Add to Cart</a>
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