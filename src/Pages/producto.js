import React,{ Component  } from 'react';
import Header from '../components/cabezera.js';
import Footer from "../components/footer.js";
import Nav from "../components/nav.js";
import {Button} from  'react-bootstrap';
import CarruselCartas from "../components/card_carrusel.js"

//estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/Css/gifbox.css';
import './../assets/Css/producto.css';

export default class producto extends Component{

constructor(props){
        super(props);
        
        this.state = {
            img:"",
            titulo:"",
            desc:"",
            precio:"",
            type:"",
            cat: "",
            car: false
        }
        
        this.SearchProduct = this.SearchProduct.bind(this)
        
    }

    componentDidMount() {
        this.SearchProduct()
        
    }
    
    async SearchProduct(){
    
    const id = this.props.id

    const url = "https://otaku-store-api.herokuapp.com/api/productos/" + id
    
    const proxyurl = "https://gentle-sands-04799.herokuapp.com/";

    const query = await fetch(proxyurl + url)
    
    const data = await query.json()
    
    this.setState({
        img:data.img,
        titulo:data.title,
        desc:data.desc,
        precio:data.precio,
        type:data.type,
        cat:data.cat,
        car:true
    })
    
}

    render(){

        return(
        <>
            <Header input="True"/>
                <Nav/>
                
                <div className="conteiner">

                    <div className="conteiner-img">
                           
                        <img src={this.state.img} alt={this.state.titulo} ></img>

                    </div>

                    <div className="conteiner-desc">
                        <p className="ruta">{"Inicio>"+ this.state.type+">"+this.state.cat+">"+this.state.titulo}</p>
                        <h1>{this.state.titulo}</h1>
                        <h2><b>{"$"+ this.state.precio+".00"}</b></h2>
                        <p className="cuotas"><b>18</b> Cuotas de <b>$51,64</b> </p>
                        <p className="letraspequeñas">Ver mas detalles</p>
                        <h3>{this.state.desc}</h3>

                        <div className="conteiner-bottons">
                        
                        <Button variant="primary">Agregar al Carrito</Button>
                        
                        </div>

                    </div>
                </div>
                
                {this.state.car?
                <CarruselCartas title="Otros Mangas" type={this.state.type} cat={this.state.cat} />
                :
                <></>
                }

            <Footer />   
        </>
        )
    }

}
