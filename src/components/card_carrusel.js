import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "./cards.js";
import "./../assets/Css/card.css"

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
export default class card_carousel extends Component{
    
    render(){

        return(
            <React.Fragment>
                <div className="contenedor_title">
                <h1 className="carousel_title">{this.props.title}</h1>
                </div>
                <Carousel 
                centerMode={true}
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} 
                infinite={true}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                    <Cards titulo="The Legend of Zelda: Four Swords (Perfect Edition)" precio="1.255$" link="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/389/629/products/tloz-thefourswordsadventures1-501b101f5f11be9db916180719803016-1024-10241-6780d23e2be293f73616181584961809-320-0.jpg"/>
                    <Cards titulo="Green Lantern: Ocaso Esmeralda" precio="1.350$" link="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/389/629/products/green_lantern_ocaso_esmeralda_cov_arg1-00c3be80324309cba616181592450915-640-0.jpg"/>
                    <Cards titulo="Socks Autobots (Transformers)" precio="350$" link="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/389/629/products/transformers1-2e20d8a068b97bf80f16057983115849-640-0.jpg"/>
                    <Cards titulo="Procesador AMD RYZEN 7 3700X 4.4 GHz AM4 Wraith Prism RGB Led Cooler " precio="42.240$" link="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_14083_Procesador_AMD_RYZEN_7_3700X_4.4_GHz_AM4_Wraith_Prism_RGB_Led_Cooler_4e00eaaf-grn.jpg"/>
                    <Cards titulo="Naruto #20" precio="525$" link="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/389/629/products/d3c0efd3-061a-43d5-b315-2025903ffd2b1-211f2505ecb5f1d83f16181614676578-480-0.jpg"/>
                </Carousel>;
            </React.Fragment>
        )
    }
}