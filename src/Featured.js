import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './stylesheet.css';
import creator from './creator.png';
import one_image from './pic_1.jpg';
import two_image from './pic_2.jpg';
import three_image from './pic_3.jpg';
import four_image from './pic_4.jpg';
import five_image from './pic_5.jpg';
import seven_image from './pic_7.jpg';
import '../node_modules/font-awesome/css/font-awesome.min.css';
class Featured extends Component {
  render() {
    return (
      <div id="products" className="bg-dark">
         <h2 className="text-white text-center">
         Featured Products
         </h2>
         <hr className="container"/>
         <div className="container">
           
                <div className="container  ">
                    <div className="row center margin_f_pic ">
                        <div className="col-sm-4  margin_pic margin_f_pic_border">
                            <img src={creator} className="feature_pic" alt="creator logo" />
    </div>

                        <div className="col-sm-4   margin_f_pic_border">
                            <img src={creator} className="feature_pic" alt="creator logo" />
                        </div>
                        <div className="col-sm-4   feature_pic margin_f_pic_border">
                            <img src={creator} className="feature_pic" alt="creator logo" />
                        </div>

                    </div>
                    <div className="row center margin_f_pic ">
                        <div className="col-sm-4  m-50px margin_f_pic_border">
                            <img src={one_image} className="feature_pic" alt="creator logo" />
                        </div>

                        <div className="col-sm-4   margin_f_pic_border">
                            <img src={two_image} className="feature_pic" alt="creator logo" />
                        </div>
                        <div className="col-sm-4    margin_f_pic_border">
                            <img src={three_image} className="feature_pic" alt="creator logo" />
                        </div>

                    </div>
                    <div className="row center margin_f_pic ">
                        <div className="col-sm-4  margin_f_pic_border">
                            <img src={four_image} className="feature_pic" alt="creator logo" />
                        </div>

                        <div className="col-sm-4   margin_f_pic_border">
                            <img src={five_image} className="feature_pic" alt="creator logo" />
                        </div>
                        <div className="col-sm-4  feature_pic ">
                            <img src={seven_image} className="feature_pic" alt="creator logo" />
                            <br></br><br></br>
                        </div>
                        

                    </div>
                </div>

         </div>
      </div>
    );
  }
}

export default Featured;
