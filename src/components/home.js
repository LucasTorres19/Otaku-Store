//Componentes
import React,{Component} from 'react'
import Header from './cabezera.js';
import Footer from "./footer.js";
import Nav from "./nav.js";
import Carrusel from "./carrusel.js";
import CarruselCartas from "./card_carrusel.js"
import Gifbox from "./gifbox.js"
//estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/scss/app.scss';
import "./../assets/Css/app.css"

export default class home extends Component{

    render(){
        return(
        <>
            <Header />
            <Nav />
            <Carrusel />
            <CarruselCartas title="Novedades"/>
            <div className="gifbox_conteiner">
                <Gifbox title="Comics" gif="https://i.pinimg.com/originals/c0/2f/af/c02faf5610752ab14459b8ba60136a56.gif" />
                <Gifbox title="Manga" gif="https://i.imgur.com/4QAxr2C.gif" />
                <Gifbox title="Yu-Gi-Oh" gif="https://img.unocero.com/2019/02/yu-gi-oh-nintendo-switch.gif"/>   
            </div>
            <CarruselCartas title="Libros" />
            <Footer />   
        </>
        )
    }

}