import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './stylesheet.css';
import creator from './creator.png';
import '../node_modules/font-awesome/css/font-awesome.min.css';
class Footer extends Component {
  render() {
    return (
      <div className="bg-dark first">
      <div>
            <div className="container text-white ">
                <div className="row center ">
                    <div className="col-sm-4 padding">
                       <h2 className="text-center">Navigation</h2>
                       <p>Home</p>
                        <p>About us</p>
                        <p>Products</p>
                        <p>Contact us</p>
    </div>
                    <div className="col-sm-4 padding">
                        <h2 className="text-center">Categories</h2>
                        <p>Safty Gloves</p>
                        <p>Boxing Gear</p>
                        <p>Sport Wear</p>
    </div>

                    <div className="col-sm-4 padding ">
                        <h2 className="text-center">Contact us</h2>
                        <i class="fa fa-map-marker font"></i><p>The Creator Sports

Shatab Garah, 
Shatab Garah, Sialkot, Pakista</p>

                        <i class="fas fa-envelope"></i><p>tayyab.304@hotmail.com</p>

                        <i class="fa fa-phone" aria-hidden="true"></i><p>+92 3316648713</p>
                    </div>

                </div>
            </div>  
        </div>
      </div>
      
    );
  }
}

export default Footer;
