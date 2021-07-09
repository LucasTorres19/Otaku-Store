import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "./cards.js";
import "./../assets/Css/card_carrusel.css"

export default class card_carousel extends Component{
  
  constructor(props){
    super(props);
    
    this.state = {
    
      productos: []
    
    }

    this.CreateCards = this.CreateCards.bind(this)
}
  
  componentDidMount(){   
    this.CreateCards(this.props.type)
  }

  async CreateCards(filter){
  
    const apiURL='https://otaku-store-api.herokuapp.com/api/productos';
    
    const proxyurl = "https://gentle-sands-04799.herokuapp.com/";

    const query = await fetch(proxyurl + apiURL)
    
    const data = await query.json()
    
    let FilterArray = []

    let i = 0
    
    //Filtrando los datos segun el filtro que llegue por parametro desde el home.js.
    
    data.map(objeto =>{
      
        if (objeto.type === filter || objeto.type === filter){
          FilterArray[i] = objeto
          i++
          
        }
        else if (filter === "todos"){
          FilterArray[i] = objeto
          i++
        }

        return undefined //no se pregunta porque esta esto aca ;).
    })                  //lucas es un quejita 
                       //quedaba fea la consola :c
    
    this.setState({
      productos : FilterArray
    })
  
  }
  
  render(){
      
    //Creando las cartas.

      const productos = this.state.productos.map(producto =>{
        return <Cards key={producto._id} id={producto._id} titulo={producto.title} precio={producto.precio} link={producto.img} />       
      })

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
                          min: 1200
                        },
                        items: 5,
                        partialVisibilityGutter: 40
                      },
                      mobile: {
                        breakpoint: {
                          max: 750,
                          min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                      },
                      tablet: {
                        breakpoint: {
                          max: 1200,
                          min: 750
                        },
                        items: 3,
                        partialVisibilityGutter: 30
                      }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
 
                  >
                    {productos} 
                    
                </Carousel>                        
            </React.Fragment>
        )
    }
}


                 
