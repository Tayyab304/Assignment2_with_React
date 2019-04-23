import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Featured from './Featured';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';
import NavigationBar from './NavigationBar';
import Form from './Form';
ReactDOM.render(<div>
    <App />  <NavigationBar /> <Featured />  <Form /> <Footer /> 
 </div>, document.getElementById('root'));
//ReactDOM.render(<NavigationBar />, document.getElementById('navigation'));

// ReactDOM.render(<Featured />, document.getElementById('features'));
// ReactDOM.render(<Footer />, document.getElementById('footer'));
// ReactDOM.render(<Form />, document.getElementById('form'));
serviceWorker.unregister();
