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
                    <img className="icon" id='icon' src="./icons/logo_mqm.png" alt="icon"/>
                    </Link>
                    {this.props.input?
                        <>
                        <div className="flex-row">
                        <Form.Control type="text"  placeholder="Buscar..." size='lg' />  
                        <img src="./icons/search_black_24dp.svg" className="search" alt="icon"/>
                        </div>
                        <div className="iconos">
                        <img className="iconhd" src="./icons/cart-plus-solid.svg" alt="icon"></img>
                        <Dropdown >
                            <Dropdown.Toggle variant="white" style={{boxShadow : 'none'}}>
                                <img className="iconhd" src="./icons/user-solid.svg" alt="icon" ></img>
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