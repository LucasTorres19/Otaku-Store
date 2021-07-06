//Componentes 
import React,{Component} from 'react';
import Header from '../components/cabezera.js';
import Footer from "../components/footer.js";
import Nav from "../components/nav.js";
import {Button} from  'react-bootstrap';

//estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/Css/gifbox.css';
import './../assets/Css/producto.css'


export default class home extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            img:"",
            titulo:"",
            desc:"",
            precio:""
        }
        
        this.SearchProduct = this.SearchProduct.bind(this)
    }

    componentDidMount() {
        this.SearchProduct()
    }

    async SearchProduct(){

    const url = "https://otaku-store-api.herokuapp.com/api/productos/60e4debfa70473001520e047"
    
    const proxyurl = "https://gentle-sands-04799.herokuapp.com/";

    const query = await fetch(proxyurl + url)
    
    const data = await query.json()
    
    this.setState({
        img:data.img,
        titulo:data.title,
        desc:data.desc,
        precio:data.precio
    })

}

    render(){
        return(
        <>
            <Header input="True"/>
                <Nav></Nav>
                <div className="conteiner">

                    <div className="conteiner-img">
                        
                        
                        <img src={this.state.img} alt={this.state.titulo} ></img>

                    </div>

                    <div className="conteiner-desc">
                        
                        <h1>{this.state.titulo}</h1>
                        <h2>{"$"+ this.state.precio+".00"}</h2>
                        <h3>{this.state.desc}</h3>

                        <div className="conteiner-bottons">
                        
                        <Button variant="primary">Comprar</Button>
                        
                        </div>

                    </div>
                </div>
            <Footer />   
        </>
        )
    }

}
