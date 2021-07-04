import React, { Component, PropTypes } from 'react';
import { getProducts } from '../services/products.service';
import { Icon } from '@fluentui/react/lib/Icon';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
initializeIcons();
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
         this.addItemToCart = this.addItemToCart.bind(this);
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
 
     addItemToCart(id,value){
        let temp = this.state.products;
        let currentcount;
        temp.forEach((val,index)=>{
            if(val.id === id){
                 currentcount = value;
                 if(value === undefined || value === null){
                    currentcount = (val.count === undefined?0:val.count);
                    currentcount = Number(currentcount) + 1;
                    
                 }
                temp[index]["count"] = currentcount;
            }
        });
        this.setState({
            products:temp
        })
        this.props.setCartItems(temp);
     }
     removeItemFromCart(id){
        let temp = this.state.products;
        temp.forEach((val,index)=>{
            if(val.id === id){
                temp[index]["count"] = Number(val.count) - 1
            }
        });
        this.setState({
            products:temp
        })
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
                                    <h5 class="card-title" style={{textAlign:'center'}}>{temp.name}</h5>
                                    <p class="card-text">{temp.description}</p>
                                    <p class="card-text">Price - {temp.price}</p>
                                    <p class="card-text" style={{display:temp.count > 0?'':'none'}}><TextField  value={temp.count} onChange={(e,val)=>this.addItemToCart(temp.id,Number(val))} styles={{root:{width:'20%',float:'left'}}} label={"count"} type="number"></TextField></p>
                                    <a style={{display:temp.count === undefined||temp.count === 0?'':'none'}} href="#" class="btn btn-primary" onClick={()=>this.addItemToCart(temp.id)}>Add to Cart</a>
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