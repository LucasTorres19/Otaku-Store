import React,{Component} from "react";
import {Card,Button} from  'react-bootstrap';

export default class card extends Component{

render(){
     
    const style={
        precio:{
            textAlign:"center",
            fontSize:"20px",
            color: "#333333",
            fontWeight: "700",
            marginTop:"15px"
        },
        titulo:{
            textAlign:"center",
            fontSize: "14px",
            lineHeight: "16px",
            textOverflow: "ellipsis",
            color: "#3f3f3b",
            zIndex:"1",
            position:"absolute",
            
        },
        botones:{
                
                display:"flex",justifyContent:"space-evenly",
                position:"relative",
        },
        image:{
            height:"100%",
            maxHeight: "312px",
            objectFit: "cover",
            
        },
        body:{
            height:"162px",
            marginTop:"3rem"
        }

        }
    
    return(
    <React.Fragment>

        <Card style={{ width: '14rem',display:"inline-block",height:"312px"}} >
        <Card.Img variant="top" style={style.image} src={this.props.link} />     
        <Card.Body style={{height:"162px",minHeight:"162px"}}>
            <Card.Text  style={style.titulo}>{this.props.titulo}</Card.Text>
            <div style={style.body}>
            <Card.Title  style={style.precio}>{this.props.precio}</Card.Title>
            <div style={style.botones}>
                <Button variant="primary">Comprar</Button>
                <Button variant="dark"><img src="./icons/visibility_white_24dp.svg" alt="ver"/>Ver</Button>
            </div>
            </div>
        </Card.Body>
    
      </Card>

    </React.Fragment>
          )


        }

}