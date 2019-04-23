import React, { Component } from 'react';
import creator from './ac.jpg';
import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import './stylesheet.css';
import Carousel from 'react-bootstrap/Carousel';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import banner_4 from './4_banner.jpg';
import banner_7 from './7_banner.jpg';
class NavigationBar extends Component {
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


        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 size_pic"
              src={creator} alt="creator logo"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 size_pic"
              src={banner_7} alt="creator logo"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 size_pic"
              
              src={banner_4} alt="creator logo"
            />

            <Carousel.Caption>
              <h3 className="text-dark">Third slide label</h3>
              <p className="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>;
        


<div id="about" className=" bg-dark mt-0">
<h2 className="text-white text-center">Welcome to creator sports </h2>

<hr className="bg-white width "></hr>
          <p className="container p-100px text-white">
          <br></br>
  CREATOR SPORTS a name of team quality and a group since 1990.<br></br>
          
            CEO Message<br></br>
          
          The Creator Sports was established in 2015 manufacturing a wide range of Gloves & Sports Wears  <br></br>Our long term commitments have paid us with high honor in our Customer relationships and <br></br>credibility on our production services.<br></br><br></br>
</p>
</div>








      </div>
    );
  }
}

export default NavigationBar;
