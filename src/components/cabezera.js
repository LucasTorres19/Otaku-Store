import React,{Component} from 'react';
import {Form, Dropdown} from  'react-bootstrap';
import {Link} from 'wouter';
import "./../assets/Css/header.css";


export default class cabezera extends Component{

    render(){

        return(

            <React.Fragment>
                <div className="div" id='header'>
                    <Link to="/">
                    <img className="icon" id='icon' src="https://i.imgur.com/y9rAoTS.png" alt="icon"/>
                    </Link>
                    
                    {this.props.input?
                        <>
                        <div className="flex-row">
                        <Form.Control type="text"  placeholder="Buscar..." size='lg' />  
                        <img src="https://i.imgur.com/vH1IoBC.png" className="search" alt="icon"/>
                        </div>
                        <div className="iconos">
                        <img className="iconhd" src="https://i.imgur.com/cZZ3ScX.png" alt="icon"></img>
                        <Dropdown >
                            <Dropdown.Toggle variant="white" style={{boxShadow : 'none'}}>
                                <img className="iconhd" src="https://i.imgur.com/6d5vaTb.png" alt="icon" ></img>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Link to="/login">
                                    <Dropdown.Item eventKey="1">Iniciar Sesión</Dropdown.Item>
                                </Link>
                                <Link to="/register">
                                    <Dropdown.Item eventKey="2">Registrarse</Dropdown.Item>
                                </Link>
                            </Dropdown.Menu>
                        </Dropdown>    
                        </div>
                        </>
                        
                        :
                        <></>
                        }  

                </div>
            </React.Fragment>
        )
    }
}