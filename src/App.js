import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import './stylesheet.css';
import creator from './creator.png';
import '../node_modules/font-awesome/css/font-awesome.min.css';
class App extends Component {
  tt(){
    alert('This is for Test by tayyab');
  }
  render() {
    return (
      <div className="background_color">

        <div className="container text-white ">
          <div className="row center ">
            <div className="col-sm-6 padding">
              <i class="fa fa-mobile-phone font"></i> +333-2589742 <br></br>
              <i class="fa fa-envelope font"></i> info@creatorSport.gmail.com
    </div>

            <div className="col-sm-6 padding font">
             <a href="https://www.facebook.com"> <i  class="fa fa-facebook-official font text" ></i></a>
                <a href="https://www.github.com"> <i class="fa fa-git font text"></i></a>
             <a href="https://www.google.com"> <i  class="fa fa-google-plus font text"></i></a>
            <a href="https://www.skype.com">  <i  class="fa fa-skype font text"></i></a>
            </div>

          </div>
        </div>



        <div className="container background text-white ">
          <div className="row center  ">
            <div className="col-sm-4  padding">
              <img onClick={this.tt} src={creator} alt="creator logo" />
            </div>

            <div className="col-sm-4 padding font pl">
              <i  class="fa fa-shopping-cart font pl "></i>

            </div>
            <div  className="col-sm-4 padding-form center ">

              <form>
                <input type="text" className="width" placeholder="what are you looking for..." />
              </form>
            </div>

          </div>
        </div>

        <br></br>



      </div>

    );

  }
}




export default App;
