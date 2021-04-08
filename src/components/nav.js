import React ,{Component} from 'react';
import Dropdown from "./dropdown.js";


export default class Nav extends Component{

    // Agregar dropdowns

    constructor(props){
        super(props)
        this.state = {
            manga:{
                Fila1:"Manhua",Fila2:"ECCHI",Fila3:"JOSEI",Fila4:"NOVELAS LIGERAS",Fila5:"SEINEN",
                Fila6:"SHOJO",Fila7:"SHONEN",Fila8:"SPOKON",Fila9:"YAOI / BL",Fila10:"YURI",             
            },
            Juegos:{
                Fila1:"TROK", Fila2:"YU-GI-OH!",Fila3:"POKEMON",Fila4:"ACCESORIOS",
                Fila5:"MAGIC THE GATHERING",Fila6:"JUEGOS DE MESA",Fila7:"JUEGOS DIGITALES",                             
            },
            Libros:{
                Fila1:"CINE",Fila2:"DIBUJO",Fila3:"JOVENES LECTORES",Fila4:"ARTBOOKS",               
            },
            Figuras:{
                Fila1:"PELUCHES",Fila2:"MCFARLANE",Fila3:"OOSHIES",Fila4:"SPINMASTER",
                Fila5:"ANIME",Fila6:"FUNKOS POP",
            },
            Hardware:{
                Fila1:"MOTHERBOARD",Fila2:"PROCESADORES", Fila3:"MEMORIAS RAM", Fila4:"ALMACENAMIENTO",
                Fila5:"PLACAS DE VIDEO",Fila6:"GABINETES Y FUENTES", Fila7:"PERIFERICOS",Fila8:"EQUIPOS Y NOTEBOOKS",Fila9:"CABLES",
                
            }
   
        }    
    } 
    
    render(){
        
        const style = {
            nav:{
                backgroundColor:"#ff4747",
                fontFamily:"Arial",
                color:"white",
                display:"flex",
                justifyContent:"center",
                flexDirection: "row",
                width: "100%",
                height:"5rem",
                },
            contenedor:{
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


