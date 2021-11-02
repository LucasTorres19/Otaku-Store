import React,{Component} from "react";
import Cards from "./card";
import "../assets/Css/list.css"
import Api_get from  "./../services/Api_Get.js"

export default class list extends Component{
    
    constructor(props){
        super(props);
        
        this.state = {
        
          productos: []
        
        }

    this.createCards = this.createCards.bind(this)
    
  }
    componentDidUpdate(){
      this.createCards(this.props.type,this.props.cat,this.props.title)
    }
    componentDidMount(){
        this.createCards(this.props.type,this.props.cat,this.props.title)
    }

    async createCards(filter,filtercat,title){
  
        const DATA = await Api_get("https://otakuapi.herokuapp.com/api/productos");
        
        let filterArray = []
    
        let i = 0
  
        //Filtrando los datos segun el filtro que llegue por parametro desde el home.js.
        
        DATA.map(productos =>{
          if(filtercat ==="null"){
              
              if ( ( productos.type === filter)  || (productos.type === filter.toLowerCase()) ){
              
                filterArray[i] = productos
                i++
                
            }
              else if ( filter === "all" && filtercat==="null"){
                filterArray[i] = productos
                i++
            }}
            else{
              if(( productos.cat === filtercat) || ( productos.cat === filtercat.toLowerCase())){
                filterArray[i] = productos
                i++
    
              }
    
            }
            if(filtercat==="null" && filter==="null"){

              if(productos.title.toLowerCase().includes(title.toLowerCase())){
                filterArray[i] = productos
                i++
              }


            }
    
            return undefined
        })                  
                           
        
        this.setState({
          productos : filterArray
        })
      
      }

    render(){        
        
        const PRODUCTOS = this.state.productos.map(producto =>{
            return(
            <div className='Cards' key={Math.random(0,100)}>
                <Cards  
                key={producto._id} 
                id={producto._id} 
                titulo={producto.title} 
                precio={producto.precio} 
                link={producto.img} 
                />       
            </div>
            )  
        })
        if (PRODUCTOS.length !== 0){
        return(
        <>
         
            <div className="List-Conteiner">
              
                
                {PRODUCTOS}
            </div>
        </>
        )}else {
          return(
                <div className="notfound-container">
                  <h1 className="notfound-container__h1">0 productos encontrados D:</h1>
                </div>
          )}
    }
    
}
