import React ,{Component} from 'react';
import Dropdown from "./dropdown.js";


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
            Juegos:
            {
                Fila1:"Trok", Fila2:"YU-GI-OH!",Fila3:"Pokemon",Fila4:"Accesorios",
                Fila5:"MAGIC THE GATHERING",Fila6:"Juegos de Mesa",Fila7:"Juegos Digitales",                             
            },
            Libros:
            {
                Fila1:"Cine",Fila2:"Dibujo",Fila3:"Jovenes Lectores",Fila4:"Artbooks",               
            },
            Figuras:
            {
                Fila1:"Peluches",Fila2:"Mcfarlane",Fila3:"Ooshies",Fila4:"Spinmaster",
                Fila5:"Anime",Fila6:"FUNKOS POP",
            },
            Hardware:
            {
                Fila1:"Motherboard",Fila2:"Procesadores", Fila3:"Memorias Ram", Fila4:"Almacenamiento",
                Fila5:"Placas de Video",Fila6:"Gabinentes y Fuentes", Fila7:"Perifericos",Fila8:"Equipos y Notebooks",Fila9:"Cables",
                
            }
   
        }    
    } 
    
    render(){
        
        const style = {
            nav:{
                backgroundColor:"#e51b22",
                fontFamily:"Arial",
                color:"white",
                display:"flex",
                justifyContent:"center",
                flexDirection: "row",
                height:"5rem",

                },
            contenedor: {
                marginTop:"11px",
                display:"flex",
                flexDirection: "row",
                
            
                        },
            
                    }
        
        return(
            <React.Fragment>
                <nav style={style.nav}>
                    <div style={style.contenedor}>
                        <Dropdown  style={style.drop} title="Manga" items={this.state.manga}/>
                        <Dropdown style={style.drop} title="Juegos" items={this.state.Juegos}/>
                        <Dropdown style={style.drop} title="Libros" items={this.state.Libros}/>
                        <Dropdown style={style.drop} title="Figuras" items={this.state.Figuras}/>
                       <Dropdown style={style.drop} title="Hardware" items={this.state.Hardware}/>
                    </div>
                </nav>
            </React.Fragment>

        );

    }

    
}


