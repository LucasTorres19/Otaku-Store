import React,{Component} from "react";
import {Carousel} from  'react-bootstrap';

export default class carrusel extends Component{

    
    render(){
    
    const style = {

        carousel:{
            marginTop:"1%",
            marginLeft:"10%",
            marginRight:"10%",
            width:"80%"
        },

    }
        return(
         <React.Fragment>
             <div style={style.carousel}>
    <Carousel>
        <Carousel.Item interval={3000}>
        <img
        className="d-block w-100"
        src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/389/629/themes/amazonas/slide-1615830762079-5751164996-99b5c5ad863acf9ef30ee32a41577f271615830763-1920-1920.jpg?379928881"
        alt="First slide"
        height="382px"
        />
        <Carousel.Caption>
        <h3>Ya disponible:Mandalorian</h3>
        
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
        <img
        className="d-block w-100"
        src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/389/629/themes/amazonas/slide-1616333361504-7058419962-d7d121bce80bcfbdc7a6b35337b7f2851616333364-1920-1920.jpg?379928881"
        height="382px"
        />
        <Carousel.Caption>
        <h3>Ya disponible:Productos Harry Potter</h3>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
        <img
        className="d-block w-100"
        src="https://compragamer.net/bannersPrincipal/b550.jpg"
        alt="Third slide"
        height="382px"
        />
        <Carousel.Caption>
        <h3>Ya disponible</h3>
        
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>

    </div>
        </React.Fragment>

        )

    }





}