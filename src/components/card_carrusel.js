import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import Cards from "./card.js";
import "./../assets/Css/card_carrusel.css"
import "react-multi-carousel/lib/styles.css";

export default class card_carousel extends Component{
  
  constructor(props){
    super(props);
    
    this.state = {
    
      productos: []
    
    }

    this.createCards = this.createCards.bind(this)
    this.shuffle = this.shuffle.bind(this)
}
  
  componentDidMount(){   
    this.createCards(this.props.type,this.props.cat)
  }

  shuffle(array) {
    
    let currentIndex = array.length,randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  async createCards(filter,filtercat){
  
    const APIURL='https://otaku-store-api.herokuapp.com/api/productos';
    
    const PROXYURL = "https://gentle-sands-04799.herokuapp.com/";

    const QUERY = await fetch(PROXYURL + APIURL)
    
    const DATA = await QUERY.json()
    
    let filterArray = []

    let i = 0
    const LIMITE = 15
    
    
    //Filtrando los datos segun el filtro que llegue por parametro desde el home.js.
    
    this.shuffle(DATA).map(producto =>{
      
      if(filtercat ==="null"){
          
          if ( (i <= LIMITE  && producto.type === filter)  || (i <= LIMITE && producto.type === filter.toLowerCase()) ){
          
            filterArray[i] = producto
            i++
            
        }
          else if ( i <= LIMITE  && filter === "all" && filtercat==="null"){
            filterArray[i] = producto
            i++
        }}
        else{
          if((i <= LIMITE  && producto.cat === filtercat) || (i <= LIMITE && producto.cat === filtercat.toLowerCase())){
            filterArray[i] = producto
            i++

          }

        }

        return undefined //no se pregunta porque esta esto aca ;).
    })                  //lucas es un quejita 
                       //quedaba fea la consola :c
    
    this.setState({
      productos : filterArray
    })
  
  }
  
  render(){
      
    //Creando las cartas.

      const PRODUCTOS = this.state.productos.map(producto =>{
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
                    {PRODUCTOS} 
                    
                </Carousel>                        
            </React.Fragment>
        )
    }
}


                 
