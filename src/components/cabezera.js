import React,{Component} from 'react'
import {Form} from  'react-bootstrap';
import "./../assets/Css/header.css";

export default class cabezera extends Component{


    render(){

        return(

            <React.Fragment>
                <div className="div" id='header'>
                    <img className="icon" id='icon' src="./icons/logo_mqm.png" alt="icon"/>
                    <div className="flex-row">
                        <Form.Control type="text"  placeholder="Buscar..." size='lg' />  
                        <img src="./icons/search_black_24dp.svg" className="search" alt="icon"/>
                    </div>
                    <div className="iconos">
                        <img className="iconhd" src="./icons/cart-plus-solid.svg" alt="icon"></img>
                        <img className="iconhd" src="./icons/user-solid.svg" alt="icon" ></img>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}