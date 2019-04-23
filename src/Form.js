import React, { Component } from 'react';
import logo from './4_banner.jpg';
import './Form.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import '../node_modules/font-awesome/css/font-awesome.min.css';
class Form extends Component {

    render() {
        return (
            <div id="contact"  class=" bg-dark text-white">
                <div  className="container">
                    <div class="row">
                        <div class="col-sm margin">
                            <h1 className="text-danger">Social Media</h1>
                            <i className="fa fa-facebook font"></i>

                            <i className="fa fa-skype font"></i>

                            <i className="fa fa-google font"></i><br></br>
                            <i className="fa fa-facebook font"></i>

                            <i className="fa fa-skype font"></i>

                            <i className="fa fa-google font"></i>
                        </div>
                        <div class="col-sm margin">
                            <h1 className="text-danger">Contact Form</h1>
                            
                            
                            
                        </div>

                        <Container>
                            <Row>
                                <Col xs={6} md={4}>
                                    <img src={logo} alt="aff"></img>
                                </Col>
                                <Col xs={6} md={4}>
                                    <img src={logo} alt="aff"></img>
                                </Col>
                                <Col xs={6} md={4}>
                                    <img src={logo} alt="aff"></img>
                                </Col>
                            </Row>
                        </Container>;
                        
                        
                        <div class="col-sm margin">

                            <h1 className="text-danger">Head Office</h1>
                            <p>
                                The Creator Sports <br></br>

                                Pakistan Office:-<br></br>

                                Shatab Garah,<br></br>
                                Fateh Garah Road, Sialkot,<br></br><br></br>
                                PAKISTAN. <br></br>

                                Whatsapp:- <br></br>  +92 331 6648713
                                 E-Mail:-<br></br>y

                                info@creator.com.pk <br></br>
                                URL:-           tayyab.304@hotmail.com<br></br>

                                Australia  Office:-<br></br><br></br>

                                Zain Malik<br></br>
                                11/18 Altandi Street, Sunnybank, Qld 4109<br></br>
                                Australia.<br></br>

                                Contact# +92 331 6648713<br></br>

                                Email: tayyab.304@hotmail.com
                        </p>

                        </div>
                    </div>
                </div>
               
            </div>

        );

    }
}




export default Form;
