import React from "react";
import { Card,Button } from  'react-bootstrap';
import "./../assets/Css/cards.css";

export default function Cards(props){
    
    return( 
    <>
        <Card className="Card" >
        
        <a className="Card-link" href={`/${"producto/"+ props.id}`}>
            <Card.Img variant="top" className="Card-image" src={props.link} /> 
        </a>    
        
        <Card.Body className="Card-body">
            <a className="Card-link" href={`/${"producto/"+ props.id}`}>
                <Card.Text  className="Card-title">{props.titulo}</Card.Text>
            </a>

            <div className="Card-conteiner-text">

                <Card.Title  className="Card-precio"> {"$" + props.precio}</Card.Title>
                
                <div className="Card-conteiner-bottom">
                    <Button variant="primary">Comprar</Button>

                    <a className="Card-link" href={`/${"producto/"+ props.id}`}>
                        <Button variant="dark"><img src="https://i.imgur.com/7nLbIK4.png" alt="ver" />Ver</Button>
                    </a>
                </div>

            </div>
            
        </Card.Body>
    
        </Card>
      
    </>
          )
   }
