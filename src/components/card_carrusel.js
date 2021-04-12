import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "./cards.js";
import "./../assets/Css/card_carrusel.css"


  
export default class card_carousel extends Component{
    
    render(){

        return(
            <React.Fragment>
                <div className="contenedor_title">
                <h1 className="carousel_title">{this.props.title}</h1>
                </div>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable={false}
                    focusOnSelect={false}
                    infinite
                    itemClass="carousel-item-padding-40-px"
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                      desktop: {
                        breakpoint: {
                          max: 3000,
                          min: 1024
                        },
                        items: 5,
                        partialVisibilityGutter: 40
                      },
                      mobile: {
                        breakpoint: {
                          max: 464,
                          min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                      },
                      tablet: {
                        breakpoint: {
                          max: 1024,
                          min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                      }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
 
                  >
                    <Cards titulo="The Legend of Zelda: Four Swords (Perfect Edition)" precio="1.255$" link="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/389/629/products/tloz-thefourswordsadventures1-501b101f5f11be9db916180719803016-1024-10241-6780d23e2be293f73616181584961809-320-0.jpg"/> 
                    <Cards titulo="Green Lantern: Ocaso Esmeralda" precio="1.350$" link="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/389/629/products/green_lantern_ocaso_esmeralda_cov_arg1-00c3be80324309cba616181592450915-640-0.jpg"/>
                    <Cards titulo="Socks Autobots (Transformers)" precio="350$" link="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/389/629/products/transformers1-2e20d8a068b97bf80f16057983115849-640-0.jpg"/>
                    <Cards titulo="Procesador AMD RYZEN 7 3700X 4.4 GHz AM4 Wraith Prism RGB Led Cooler " precio="42.240$" link="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_14083_Procesador_AMD_RYZEN_7_3700X_4.4_GHz_AM4_Wraith_Prism_RGB_Led_Cooler_4e00eaaf-grn.jpg"/>
                    <Cards titulo="Naruto #20" precio="525$" link="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/389/629/products/d3c0efd3-061a-43d5-b315-2025903ffd2b1-211f2505ecb5f1d83f16181614676578-480-0.jpg"/>
                    <Cards titulo="Killing Stalking, Vol. 1" precio="525$" link="https://images.cdn1.buscalibre.com/fit-in/360x360/aa/85/aa85d100d4a727e2faf4980c371c059b.jpg"/>
                    <Cards titulo="Ooshies - Disney Serie 2 Blind bag" precio="200$" link="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/389/629/products/descarga-421-e600ff1bd5fef2de9416047538097073-640-0.jpg"/>
                </Carousel>;
                         
            </React.Fragment>
        )
    }
}


                 