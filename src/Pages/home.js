import React from 'react'
import Header from '../components/header.js';
import Footer from "../components/footer.js";
import Nav from "../components/nav.js";
import Carrusel from "../components/carrusel.js";
import CarruselCartas from "../components/card_carrusel.js";
import Gifbox from "../components/gifbox.js";
import './../assets/scss/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/Css/home.css'

export default function Home (){

    
        return(
        <>
            <Header input="True"/>
            <Nav />
            <Carrusel />
            <CarruselCartas title="Mangas" type="Manga" cat="null"/>
            
            <div className="gifbox_conteiner">
                <Gifbox title="Comics" gif="https://i.pinimg.com/originals/c0/2f/af/c02faf5610752ab14459b8ba60136a56.gif" />
                <Gifbox title="Manga" gif="https://i.imgur.com/4QAxr2C.gif" />
                <Gifbox title="Juegos" gif="https://img.unocero.com/2019/02/yu-gi-oh-nintendo-switch.gif"/>   
            </div>
            
            <CarruselCartas title="Comics"  type="Comic" cat="null"/>
            <CarruselCartas title="Libros"  type="Libros" cat="null"/>
            <Footer />   
        </>
        )
    }

