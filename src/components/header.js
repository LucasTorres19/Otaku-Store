import React,{useState} from 'react';
import {Form, Dropdown} from  'react-bootstrap';
import { Link, useLocation } from 'wouter';
import "./../assets/Css/header.css";

export default function Header(props) {

    const [keyword,Setkeyword] = useState('')
    const [location, setLocation] = useLocation();

   async function handleKeyDown(e){
    if(e.key === 'Enter'){
    setLocation(`/search/${keyword}`)
        
    }
        
    }
        return(
            
            <React.Fragment>
                <div className="header-conteiner" id='header'>
                    
                    <Link to="/">
                        <img className="mqm-icon" id='icon' src="https://i.imgur.com/y9rAoTS.png" alt="icon"/>
                    </Link>
                    
                    {props.input?
                        
                        <>
                       
                        <div className="Buscador">
                            <Form.Control type="text"  placeholder="Buscar..." size='lg' onChange={(e)=>Setkeyword(e.target.value) } onKeyDown={(e) => handleKeyDown(e)} />  
                            <a className="search" href={`/search/${keyword}`}>
                            <img src="https://i.imgur.com/vH1IoBC.png" alt="icon"/>
                            </a>
                        </div>
                       
                        <div className="container-icons">

                            <img className="icon-style" src="https://i.imgur.com/cZZ3ScX.png" alt="icon"></img>
                            
                            <Dropdown>
                                
                                <Dropdown.Toggle variant="white" style={{boxShadow : 'none'}}>
                                    <img className="icon-style" src="https://i.imgur.com/6d5vaTb.png" alt="icon" ></img>
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