import React from "react";

export default function Gifbox (props){
        const style={

            h1:{
                fontFamily: "Nunito Sans, sans-serif",
                backgroundImage:`url(${props.gif})`,
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
            <>
                <h1 style={style.h1}><a style={style.a} href={`/productos/${props.title}`}>{props.title}</a></h1>
            </>
        )
    }
