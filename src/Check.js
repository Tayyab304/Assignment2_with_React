import React, { Component } from 'react';
import creator from './ac.jpg';
import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import './stylesheet.css';
import Carousel from 'react-bootstrap/Carousel';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import banner_4 from './4_banner.jpg';
import banner_7 from './7_banner.jpg';
class Check extends Component {
  render() {
    return (
      <div id="home" className=" text-white">

        <nav className="navbar navbar-expand-lg   text-white  navbar-danger bg-danger">
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav_pl text-white  " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active font_nav">
                <a className="nav-link " href="#home"><span className="text">Home</span> <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active font_nav">
                <a className="nav-link " href="#about"><span className="text">About us</span> <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active font_nav">
                <a className="nav-link " href="#products"><span className="text">Our Products</span> <span class="sr-only">(current)</span></a>
              </li>
              
              <li className="nav-item font_nav">
                <a className="nav-link" href="#contact"><span className="text">Contact us</span></a>
              </li>
             
            </ul>
          </div>
        </nav> 


        
        









      </div>
    );
  }
}

export default Check;
