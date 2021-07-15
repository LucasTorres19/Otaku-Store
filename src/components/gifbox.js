import React,{Component} from "react";


export default class gifbox extends Component{

    render(){
        
        const style={

            h1:{
                fontFamily: "Nunito Sans, sans-serif",
                backgroundImage:`url(${this.props.gif})`,
                height:"200px",
                width:"20rem",
                color:"white",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                borderRadius:"40px",
                marginBotom:"30px",
                marginLeft: "auto",
                marginRight: "auto",
                textDecoration:"none",
                
            },
            a:{
                textDecoration:"none",
                color:"white",
            },
        }

        return(
            <React.Fragment>
                <h1 style={style.h1}><a style={style.a} href={`/productos/${this.props.title}`}>{this.props.title}</a></h1>
            </React.Fragment>
        )
    }

}