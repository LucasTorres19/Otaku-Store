import React ,{ Component } from 'react';
import Dropdown from "./dropdown.js";
import "./../assets/Css/nav.css";

export default class Nav extends Component{

    // Agregar dropdowns

    constructor(props){
        super(props)
        
        this.state = {
            manga:
            {
                Fila1:"Manhua",Fila2:"Ecchi",Fila3:"Josei",Fila4:"Novelas Ligeras",Fila5:"Seinen",
                Fila6:"Shojo",Fila7:"Shonen",Fila8:"Spokon",Fila9:"Yaoi / BL",Fila10:"Yuri",             
            },
            juegos:
            {
                Fila1:"Trok", Fila2:"Yu-Gi-Oh",Fila3:"Pokemon",
                Fila4:"MAGIC THE GATHERING",Fila5:"Juegos de Mesa",Fila6:"Juegos Digitales",                             
            },
            libros:
            {
                Fila1:"Cine",Fila2:"Dibujo",Fila3:"Jovenes Lectores",Fila4:"Artbooks",               
            },
            merchandising:
            {
                Fila1:"Figuras",Fila2:"Peluches",Fila3:"Pins",Fila4:"Ropa"
            },
            hardware:
            {
                Fila1:"Motherboard",Fila2:"Procesadores", Fila3:"Memorias Ram", Fila4:"Almacenamiento",
                Fila5:"Graficas",Fila6:"Fuentes",Fila7:"Gabinetes", Fila8:"Perifericos",Fila9:"Equipos y Notebooks",Fila10:"Cables",
                
            },
            comics:
            {
                Fila1:"DC",Fila2:"Marvel"
            },
        }
        this.crearNav = this.crearNav.bind(this)
    } 

    crearNav(){

            return(
                <>
                <nav>
                    <div className="dropdown-contanier">
                         <Dropdown title="Manga"   items={this.state.manga}/>
                         <Dropdown  title="Comic" items={this.state.comics} /> 
                         <Dropdown  title="Libros" items={this.state.libros}/> 
                         <Dropdown  title="Juegos" items={this.state.juegos}/> 
                         <Dropdown  title="Merchandising" items={this.state.merchandising}/> 
                         <Dropdown  title="Hardware" items={this.state.hardware}/>  
                    </div>
                </nav>
                </>
            )
    }
    
    render(){
        
        return(
            <>         
               {this.crearNav()}   
            </>

        );

    }

    
}


